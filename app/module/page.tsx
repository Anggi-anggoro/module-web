"use client";
import React, { Suspense, useEffect, useState } from "react";
import ModulGuruCover from "./cover"; // rename component if needed
import CoverBab1 from "../../components/module-page/1/cover-bab1";
import Bab1 from "../../components/module-page/1/page";
import Bab2 from "../../components/module-page/2/page";
import Bab3 from "../../components/module-page/3/page";
import Bab4 from "../../components/module-page/4/page";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Lampiran from "../../components/module-page/Lampiran/page";
import Bab4Cover from "../../components/module-page/4/cover-bab4";
import Bab2Cover from "../../components/module-page/2/cover-bab2";
import ModulAjar from "../../components/module-page/Lampiran/page1";
import ContohSoalEvaluasi from "../../components/module-page/Lampiran/page2";
import Bab3Cover from "../../components/module-page/3/cover";

export default function ModulGabungan() {
  const router = useRouter();
  const [isPostTest, setIsPostTest] = useState<boolean | null>(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user || !data.user.email) {
      } else {
        supabase
          .from("userdata")
          .select("posttest_score")
          .eq("email", data.user.email)
          .single()
          .then(({ data: userData, error: userError }) => {
            if (userError || !userData.posttest_score) {
              setIsPostTest(false);
            } else {
              setIsPostTest(true);
            }
          });
      }
    });
  }, [router]);
  return (
    <div className="bg-white text-black scroll-smooth">
      {/* Cover Section */}
      <section id="cover">
        <ModulGuruCover />
      </section>

      {/* Spacer antar cover dan bab */}
      <div className="h-10 md:h-20" />

      {/* Bab 1 */}
      <section id="cover-bab1" className="px-4 md:px-10 py-8 md:py-16 bg-white">
        <CoverBab1 />
      </section>

      <div className="h-10 md:h-20" />
      <section id="bab1" className="px-4 md:px-10 py-8 md:py-16 bg-white">
        <Bab1 />
      </section>

      {/* Bab 2 */}
      <Suspense fallback={<div>Loading...</div>}>
        <section
          id="cover-bab2"
          className="px-4 md:px-10 py-8 md:py-16 bg-white"
        >
          <Bab2Cover />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="bab2" className="px-4 md:px-10 py-8 md:py-16 bg-white">
          <Bab2 />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section
          id="cover-bab3"
          className="px-4 md:px-10 py-8 md:py-16 bg-white"
        >
          <Bab3Cover />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="bab3" className="px-4 md:px-10 py-8 md:py-16 bg-white">
          <Bab3 />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section
          id="cover-bab4"
          className="px-4 md:px-10 py-8 md:py-16 bg-white"
        >
          <Bab4Cover />
        </section>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <section id="bab4" className="px-4 md:px-10 py-8 md:py-16 bg-white">
          <Bab4 />
        </section>
      </Suspense>            
          <Suspense fallback={<div>Loading...</div>}>
            <section
              id="lampiran"
              className="px-4 md:px-10 py-8 md:py-16 bg-white"
            >
              <Lampiran />
            </section>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <section
              id="modulajar"
              className="px-4 md:px-10 py-8 md:py-16 bg-white"
            >
              <ModulAjar />
            </section>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <section
              id="contohsoalevaluasi"
              className="px-4 md:px-10 py-8 md:py-16 bg-white"
            >
              <ContohSoalEvaluasi />
            </section>
          </Suspense>              
    </div>
  );
}
