import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function HeaderLinks() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
        .from('userdata') // Replace with your actual table name, e.g., 'profiles'
        .select('nama')
        .eq('email', user?.email)
        .single(); // Use .single() if you expect exactly 1 result


    return  user && data && (
        <div className="hidden md:flex text-lg justify-between gap-x-5 ml-10">
            <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href="/module">
                Modul
            </Link>
            <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href="/pretest">
                Pre-test
            </Link>
            {user.email === 'admin@modis.com' &&
                <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href="/backoffice">
                    Backoffice
                </Link>
            }
        </div>
    )
}
