import { SignUpForm } from "@/components/sign-up-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full justify-center p-6 md:p-10">
      <div className="w-full max-w-2xl">
        <div className="pb-6 text-center">        
          <h1 className="text-4xl font-bold">Pendaftaran Akun</h1>
          <p className="text-sm text-muted-foreground">
            Silakan isi formulir di bawah ini untuk mendaftar akun baru.
            </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}
