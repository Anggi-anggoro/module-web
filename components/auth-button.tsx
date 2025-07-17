import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from('userdata') // Replace with your actual table name, e.g., 'profiles'
    .select('nama')
    .eq('email', user?.email)
    .single(); // Use .single() if you expect exactly 1 result


  return user && data ? (
    <div className="flex items-center gap-4">
      Hey, {data.nama}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link className="text-orange-600 font-bold" href="/auth/login">Login</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Daftar</Link>
      </Button>
    </div>
  );
}
