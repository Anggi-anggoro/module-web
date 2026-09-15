import { NextResponse } from "next/server";
import { runDailySync } from "@/lib/cron/daily-sync";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const expectedSecret = process.env.CRON_SECRET;

  if (!expectedSecret) {
    console.error("[cron:daily-sync] CRON_SECRET is not configured");
    return NextResponse.json(
      {
        ok: false,
        error: "Cron secret is not configured.",
      },
      { status: 500 },
    );
  }

  if (!authHeader || authHeader !== `Bearer ${expectedSecret}`) {
    return NextResponse.json(
      {
        ok: false,
        error: "Unauthorized",
      },
      { status: 401 },
    );
  }

  try {
    const result = await runDailySync();

    return NextResponse.json(
      {
        message: "Daily sync completed successfully.",
        ok: result.ok,
        runDate: result.runDate,
        timezone: result.timezone,
        recordsProcessed: result.recordsProcessed,
        summary: result.summary,
      },
      { status: 200 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown cron processing error";

    console.error("[cron:daily-sync] route error", message);

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      ok: false,
      error: "This endpoint only accepts POST requests.",
    },
    { status: 405 },
  );
}
