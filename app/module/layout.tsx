"use client";

import React, { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import SidebarLeft from "@/components/navbar";
import SidebarRight from "@/components/sidebar";
import { createClient } from "@/lib/supabase/client"; // client-side
import PopupText from "@/components/popup-text";

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user) {
        return redirect("/auth/login");
      } else {
        supabase
          .from("userdata")
          .select("pretest_score")
          .eq("email", data.user.email)
          .single()
          .then(({ data: userData, error: userError }) => {
            if (userError || !userData.pretest_score) {
              setIsAuthenticated(false);
            } else {
              setIsAuthenticated(true);
            }
          });
      }
    });
  }, [router]);

  // Tombol close sidebar (custom event)
  useEffect(() => {
    const closeSidebarHandler = () => setShowSidebar(false);
    window.addEventListener("closeSidebar", closeSidebarHandler);
    return () =>
      window.removeEventListener("closeSidebar", closeSidebarHandler);
  }, []);

  if (isAuthenticated === null) {
    return <div className=" min-h-svh p-10">Loading...</div>;
  } else if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh]">
        <PopupText
          url="/pretest"
          message="Kerjakan Pre-test terlebih dahulu untuk mengakses modul"
          buttonText="Kerjakan Sekarang"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="md:hidden p-4 bg-orange-100 sticky top-0 left-0 w-full z-30">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-lg font-semibold text-orange-600"
        >
          ☰ Navigasi Modul
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">
        <div
          className={`
            fixed md:static top-0 left-0 min-h-full z-40 bg-white pt-4 pl-4
            transform transition-transform duration-300 ease-in-out
            ${showSidebar ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 md:basis-1/5 shrink-0
          `}
        >
          <SidebarLeft />
        </div>

        {showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}

        <main className="w-full md:basis-3/5 p-4 overflow-y-auto scroll-smooth">
          {children}
        </main>

        <div className="max-md:hidden md:basis-1/5 p-4  border-l shrink-0">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}
