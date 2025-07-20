"use client";
import React, { Suspense, useEffect, useState } from "react";
import ModulGuruCover from "./cover"; // rename component if needed
import CoverBab1 from "./1/cover-bab1";
import Bab1 from "./1/page";
import Bab2 from "./2/page";
import Bab3 from "./3/page";
import Bab4 from "./4/page";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Lampiran from "./Lampiran/page";
import Bab4Cover from "./4/cover-bab4";
import Bab2Cover from "./2/cover-bab2";
import ModulAjar from "./Lampiran/page1";
import ContohSoalEvaluasi from "./Lampiran/page2";

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
        <section id="bab3" className="px-4 md:px-10 py-8 md:py-16 bg-white">
          <Bab3 />
        </section>
      </Suspense>
      {isPostTest ? (
        <>
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
        </>
      ) : (
        <section className="px-4 md:px-10 py-8 md:py-16 bg-white">
          <h1 className="max-w-2xl mx-auto text-center">
            Anda telah menyelesaikan modul ini. Silakan kerjakan post-test untuk
            mendapatkan akses ke Bab Selanjutnya.
          </h1>
          <Link
            href={"/post-test"}
            className="block max-w-md mx-auto mt-6 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded text-center"
          >
            Kerjakan Post-test
          </Link>
        </section>
      )}
    </div>
  );
}
