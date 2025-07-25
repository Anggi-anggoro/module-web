import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { hasEnvVars } from "@/lib/utils";
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import Logo from "@/app/assets/logo-modified.png";
import WhatsAppButton from "@/components/whatsapp";
import Header from "@/components/header";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Modul Pendidikan Seksual",
  description:
    "Sebuah modul pendidikan seksual untuk guru dan orang tua dengan keterbatasan penglihatan.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});
const authContent = !hasEnvVars ? (
  <EnvVarWarning />
) : (
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
        <Header logo={Logo} authContent={authContent} />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
