"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignUpData {
    nama?: string;
    nuptk?: string;
    sekolah?: string;
    kota?: string;
    kecamatan?: string;
    provinsi?: string;
    tempat_lahir?: string;
    tanggal_lahir?: string;
    jabatan?: string;
    jenis_kelamin?: string;
    user_uid?: string;
    email?: string;
}
export function SignUpForm({
}: React.ComponentPropsWithoutRef<"div">) {
  const datauser: SignUpData = {
    nama: "",
    nuptk: "",
    email: "",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SignUpData>(datauser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(formData)
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };


  const router = useRouter();


  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) throw error;  
      updateDataUser()

      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {

      setIsLoading(false);
    }
  };

  const updateDataUser = async () => {

    const supabase = createClient();
    
    try {
      const { error } = await supabase
        .from('userdata')
        .insert(formData);

      if (error) console.log(error);

    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <div className="grid grid-cols-1 gap-6">

        {/* Full width fields (col-span-2) */}
        <div className="grid gap-2 col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleChange(e);
            }}
          />
        </div>

        <div className="grid gap-2 col-span-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="grid gap-2 col-span-2">
          <Label htmlFor="repeat-password">Repeat Password</Label>
          <Input
            id="repeat-password"
            type="password"
            required
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>

        {/* 2 columns for additional fields */}
        <div className="grid gap-2 col-span-2">
          <Label htmlFor="nama">Nama Beserta Gelar</Label>
          <Input
            id="nama"
            type="text"
            required
            value={formData.nama}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="nuptk">NUPTK</Label>
          <Input
            id="nuptk"
            type="number"
            value={formData.nuptk}
            onChange={handleChange}
          />
        </div>

        {/* Error message and Button - full width */}
        {error && (
          <p className="text-sm text-red-500 col-span-2">{error}</p>
        )}

        <Button
          type="submit"
          className="w-full col-span-2 bg-orange-400 font-bold  "
          disabled={isLoading}
        >
          {isLoading ? "Mendaftarkan akun..." : "Daftar Akun"}
        </Button>

        <div className="mt-4 text-center text-sm col-span-2">
          Sudah memiliki akun?{" "}
          <Link href="/auth/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>

      </div>
    </form>

  );
}
