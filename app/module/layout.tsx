"use client";

import React, { useEffect, useState } from "react";
import PopupText from "@/components/popup-text";

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showPopUp] = useState(false);



  // Tombol close sidebar (custom event)
  useEffect(() => {
    const closeSidebarHandler = () => setShowSidebar(false);
    window.addEventListener("closeSidebar", closeSidebarHandler);
    return () =>
      window.removeEventListener("closeSidebar", closeSidebarHandler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`min-h-[60vh] absolute ${showPopUp ? '' : 'hidden'}`}>
        <PopupText
          url="/post-test"
          message="Kerjakan Post-test terlebih dahulu untuk akses lampiran"
          buttonText="Kerjakan Sekarang"
        />
      </div>
      <div className="md:hidden p-4 bg-orange-100 sticky top-0 left-0 w-full z-30">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-lg font-semibold text-orange-600"
        >
          ☰ Navigasi Modul
        </button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row relative">

        <main className="w-full md:basis-3/5 p-4 overflow-y-auto scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
}
