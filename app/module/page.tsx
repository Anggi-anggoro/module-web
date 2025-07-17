// app/module/page.tsx
import React from "react";
import ModulGuruCover from "./cover"; // rename component if needed
import Bab1 from "./1/page";
import Bab2 from "./2/page";
import Bab3 from "./3/page";

export default function ModulGabungan() {
  return (
    <div className="bg-white text-black scroll-smooth">
      {/* Cover Section */}
      <section id="cover">
        <ModulGuruCover />
      </section>

      {/* Spacer antar cover dan bab */}
      <div className="h-10 md:h-20" />

      {/* Bab 1 */}
      <section id="bab1" className="px-4 md:px-10 py-8 md:py-16 bg-white">
        <Bab1 />
      </section>

      {/* Bab 2 */}
      <section id="bab2" className="px-4 md:px-10 py-8 md:py-16 bg-white">
        <Bab2 />
      </section>

      {/* Bab 3 */}
      <section id="bab3" className="px-4 md:px-10 py-8 md:py-16 bg-white">
        <Bab3 />
      </section>
    </div>
  );
}
