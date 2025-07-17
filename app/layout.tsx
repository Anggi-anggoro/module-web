import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import Logo from "@/app/assets/logo-modified.png";
import Image from "next/image";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Modul Pendidikan Seksual",
  description: "Sebuah modul pendidikan seksual untuk guru dan orang tua dengan keterbatasan penglihatan.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <nav className="w-full flex justify-center h-16 bg-[#F99452] rounded-b-lg shadow-md ">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm text-white">

            <div className="flex gap-5 items-center font-semibold text-white">
              <Link className="bg-white px-6 py-1.5 rounded-sm" href={"/"}>
                 <Image src={Logo} alt="Logo" width={100} height={100} className="w-28" />
                </Link>
              <div className="flex text-lg justify-between gap-x-5 ml-10">
                <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href={"/module"}>
                Modul
                </Link>
                <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href={"/"}>
                Profil
                </Link>
              </div>
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>
      
        {children}
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Superhuman
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
