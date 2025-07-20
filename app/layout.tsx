import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { hasEnvVars } from "@/lib/utils";
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import Logo from "@/app/assets/logo-modified.png";
import WhatsAppButton from "@/components/whatsapp";
import Header from "@/components/header";

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
const authContent = !hasEnvVars ? <EnvVarWarning /> : (
  <div>
    <AuthButton />
  </div>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <Header
          logo={Logo}
          authContent={authContent}
        />
        <WhatsAppButton />
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
