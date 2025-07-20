import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { AuthButton } from "@/components/auth-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import Logo from "@/app/assets/logo-modified.png";
import Image from "next/image";
import WhatsAppButton from "@/components/whatsapp";
import Header from "@/components/navhead";

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
    <div>
       <nav className="w-full bg-[#F99452] rounded-b-lg shadow-md border-b-2 border-white max-sm:fixed top-0 z-40">
      {/* Desktop and Mobile Header */}
      <div className="w-full max-w-5xl mx-auto flex justify-between items-center p-3 px-5 text-sm text-white">
        
        <div className="flex gap-5 items-center font-semibold text-white">
          <Link className="bg-white px-6 py-1.5 rounded-sm" href={"/"}>
            <Image src={Logo} alt="Logo" width={100} height={100} className="w-20 md:w-28 "/>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex text-lg justify-between gap-x-5 ml-10">
            <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href={"/module"}>
              Modul
            </Link>
            <Link className="hover:bg-[#ef8d4b] p-3.5 rounded-md" href={"/pretest"}>
              Pre-test
            </Link>
          </div>
        </div>

        {/* Desktop Auth Button */}
        <div className="hidden md:block">
          {!hasEnvVars ? <EnvVarWarning /> : 
            <div>
              <AuthButton />
            </div>
          }
        </div>

        {/* Mobile Hamburger - Pure CSS Toggle */}
        <label className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer">
          <input name="toggle" type="checkbox" className="hidden peer" />
          
          {/* Hamburger Lines */}
          <span className="block w-6 h-0.5 bg-white transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-2"></span>
          <span className="block w-6 h-0.5 bg-white mt-1 transition-all duration-300 peer-checked:opacity-0"></span>
          <span className="block w-6 h-0.5 bg-white mt-1 transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
          
          {/* Mobile Menu - Shows when checkbox is checked */}
          <div className="fixed inset-0 w-screen h-screen bg-black/50 invisible z-40 transition-all duration-300 peer-checked:opacity-100 peer-checked:visible">
        <div className="absolute top-0 right-0 w-1/2 p-3 z-50 bg-[#e4e0de] h-svh duration-300 peer-checked:translate-x-0">
            <div className="px-5 py-3 space-y-3 text-sm text-right">
              <Link 
                href={"/module"}
                className="block text-white hover:bg-[#e6834a] p-3 rounded-md font-semibold border-b-2 border-white"
              >
                Modul
              </Link>
              <Link 
                href={"/pretest"}
                className="block text-white hover:bg-[#e6834a] p-3 rounded-md font-semibold border-b-2 border-white"
              >
                Pre-test
              </Link>
              

              <div className="pt-3 border-t border-[#e6834a] pl-3 w-full">
                {!hasEnvVars ? <EnvVarWarning /> : 
                  <div>
                    <AuthButton />
                  </div>
                }
              </div>
       
            </div>
          </div>
                  </div>
        </label>
      </div>
    </nav>
    </div>    
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
