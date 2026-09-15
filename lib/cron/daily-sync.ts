import { createAdminClient } from "@/lib/supabase/admin";

const SNAPSHOT_TABLE = "daily_data_snapshot";
const LOG_TABLE = "cron_runs";

interface UserSnapshotRow {
  email: string;
  nama: string | null;
  nuptk: string | null;
  pretest_score: number;
  posttest_score: number;
  generated_at: string;
  run_date: string;
}

export async function runDailySync() {
  const supabase = createAdminClient();
  const startedAt = new Date();
  const timezone = "Asia/Jakarta";
  const runDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(startedAt);

  try {
    const { data: users, error: fetchError } = await supabase
      .from("userdata")
      .select("email, nama, nuptk, pretest_score, posttest_score");

    if (fetchError) {
      throw new Error(`Failed to fetch userdata: ${fetchError.message}`);
    }

    const existingSnapshots = await getExistingSnapshotRows(supabase);
    if (existingSnapshots.length > 0) {
      const ids = existingSnapshots
        .map((row) => row.id)
        .filter((id): id is string => typeof id === "string" && id.length > 0);

      if (ids.length > 0) {
        const { error: deleteError } = await supabase
          .from(SNAPSHOT_TABLE)
          .delete()
          .in("id", ids);

        if (deleteError) {
          throw new Error(`Failed to delete previous snapshot: ${deleteError.message}`);
        }
      }
    }

    const rows: UserSnapshotRow[] = (users ?? []).map((user) => ({
      email: user.email ?? "",
      nama: user.nama ?? null,
      nuptk: user.nuptk ?? null,
      pretest_score: Number(user.pretest_score ?? 0),
      posttest_score: Number(user.posttest_score ?? 0),
      generated_at: startedAt.toISOString(),
      run_date: runDate,
    }));

    const validRows = rows.filter((row) => row.email.trim().length > 0);

    if (validRows.length > 0) {
      const { error: insertError } = await supabase
        .from(SNAPSHOT_TABLE)
        .insert(validRows);

      if (insertError) {
        throw new Error(`Failed to insert new snapshot: ${insertError.message}`);
      }
    }

    const summary = {
      total_users: validRows.length,
      generated_at: startedAt.toISOString(),
      timezone,
      run_date: runDate,
    };

    const { error: logError } = await supabase.from(LOG_TABLE).upsert(
      {
        job_name: "daily-sync",
        run_date: runDate,
        status: "success",
        started_at: startedAt.toISOString(),
        finished_at: new Date().toISOString(),
        records_processed: validRows.length,
        metadata: summary,
        error_message: null,
      },
      {
        onConflict: "job_name,run_date",
      },
    );

    if (logError) {
      throw new Error(`Failed to save cron log: ${logError.message}`);
    }

    console.info("[cron:daily-sync] success", summary);

    return {
      ok: true,
      runDate,
      timezone,
      recordsProcessed: validRows.length,
      summary,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error while running daily sync";

    try {
      const { error: logError } = await supabase.from(LOG_TABLE).upsert(
        {
          job_name: "daily-sync",
          run_date: runDate,
          status: "failed",
          started_at: startedAt.toISOString(),
          finished_at: new Date().toISOString(),
          records_processed: 0,
          metadata: {
            timezone,
            run_date: runDate,
            generated_at: startedAt.toISOString(),
            error: message,
          },
          error_message: message,
        },
        {
          onConflict: "job_name,run_date",
        },
      );

      if (logError) {
        console.error("[cron:daily-sync] failed to persist error log", logError.message);
      }
    } catch (logWriteError) {
      console.error(
        "[cron:daily-sync] unable to persist failure log",
        logWriteError instanceof Error ? logWriteError.message : logWriteError,
      );
    }

    console.error("[cron:daily-sync] failed", message);
    throw error;
  }
}

async function getExistingSnapshotRows(supabase: ReturnType<typeof createAdminClient>) {
  const { data, error } = await supabase
    .from(SNAPSHOT_TABLE)
    .select("id")
    .limit(1000);

  if (error) {
    throw new Error(`Failed to read existing snapshot rows: ${error.message}`);
  }

  return data ?? [];
}
