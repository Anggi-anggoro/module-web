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
    phone?: string;
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
    phone: "",
    sekolah: "",
    kota: "",
    kecamatan: "",
    provinsi: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jabatan: "",
    jenis_kelamin: "",
    user_uid: "",
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
    console.log(id, value)
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

        <div className="grid gap-2 col-span-2 md:col-span-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="grid gap-2 col-span-2 md:col-span-1">
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
        <div className="grid gap-2">
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
          <Label htmlFor="phone">Nomor Telepon</Label>
          <Input
            id="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="sekolah">Sekolah</Label>
          <Input
            id="sekolah"
            type="text"
            value={formData.sekolah}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="kota">Kota</Label>
          <Input
            id="kota"
            type="text"
            value={formData.kota}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="kecamatan">Kecamatan</Label>
          <Input
            id="kecamatan"
            type="text"
            value={formData.kecamatan}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="provinsi">Provinsi</Label>
          <Input
            id="provinsi"
            type="text"
            value={formData.provinsi}
            onChange={handleChange}
          />
        </div>


        <div className="grid gap-2">
          <Label htmlFor="tempat_lahir">Tempat Lahir</Label>
          <Input
            id="tempat_lahir"
            type="text"
            value={formData.tempat_lahir}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tanggal_lahir">Tanggal Lahir</Label>
          <Input
            id="tanggal_lahir"
            type="date"
            value={formData.tanggal_lahir}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="jabatan">Jabatan</Label>
          <Input
            id="jabatan"
            type="text"
            value={formData.jabatan}
            onChange={handleChange}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="jenis_kelamin">Jenis Kelamin</Label>
            <select
            className="border p-1.5 rounded-md"
            id="jenis_kelamin"
            value={formData.jenis_kelamin}
            onChange={(e) =>
              setFormData((prev) => ({
              ...prev,
              jenis_kelamin: e.target.value,
              }))
            }
            >
            <option value="" disabled hidden>
              Pilih Jenis Kelamin
            </option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
            </select>
        </div>

        {/* Error message and Button - full width */}
        {error && (
          <p className="text-sm text-red-500 col-span-2">{error}</p>
        )}

        <Button
          type="submit"
          className="w-full col-span-2"
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
