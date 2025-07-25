import { createClient } from '@/lib/supabase/client';
import { redirect } from "next/navigation";

const BackofficePage: React.FC = async () => {    
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

    return (
        <main style={{ padding: '2rem' }}>
            <h1>Backoffice Dashboard</h1>
            <p>This is a dummy backoffice page.</p>
        </main>
    );
};

export default BackofficePage;