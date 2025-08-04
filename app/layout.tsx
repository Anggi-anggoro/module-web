import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ModulGabungan from "./module/page";

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

export default function RootLayout(){
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>        
        <ModulGabungan/>
      </body>
    </html>
  );
}
