"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  
  const router = useRouter();
  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return <button className="bg-orange-500 hover:bg-orange-600 border max-sm:text-base border-white rounded-lg px-3 py-1.5 shadow-md" onClick={logout}>Logout</button>;
}
