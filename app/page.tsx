"use client";
import CoverImage from "@/app/assets/cover-module.jpeg";
import Hero from "@/app/assets/hero-kid.jpg";
import Image from "next/image";
import Link from "next/link";
import Bulp from "@/app/assets/bulb.png";
import OpenedBook from "@/app/assets/opened-book.png";
import Notes from "@/app/assets/notes.png";
import Target from "@/app/assets/target.png";
import { ScrollToId } from "@/components/utils";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

import type { User } from "@supabase/supabase-js";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const supabase = await createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <div className="w-full">
        <main className="">
          {/* Hero Section with Yellow Gradient */}
          <section className="px-6 py-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 relative overflow-hidden min-h-screen flex justify-center items-center">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-300 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 left-5 w-16 h-16 bg-yellow-200 rounded-full opacity-25"></div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl relative z-10">
              <div className="lg:w-1/2 flex justify-center items-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/20 rounded-2xl blur-xl"></div>
                  <Image
                    src={CoverImage}
                    alt="cover"
                    width={800}
                    height={800}
                    className="relative object-contain rounded-2xl shadow-2xl border-4 border-white/30"
                    priority
                  />
                </div>
              </div>
              <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-8xl font-black text-white drop-shadow-lg">
                    MODIS
                  </h1>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <h2 className="text-2xl lg:text-3xl text-gray-800 font-bold mb-4">
                      Modul Pendidikan Seksual Anak dengan Hambatan Penglihatan
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Sebuah modul guru pendidikan seksual untuk anak dengan
                      hambatan penglihatan yang dirancang untuk membantu mereka
                      memahami konsep dasar pendidikan seksual, kesehatan dan
                      fungsi reproduksi, pergaulan sehat, serta perilaku
                      seksual.
                    </p>
                  </div>
                </div>
                <Link
                  onClick={(e) => ScrollToId("selengkapnya", e)}
                  href="#selengkapnya"
                  className="inline-block bg-white text-yellow-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-yellow-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Selengkapnya →
                </Link>
              </div>
            </div>
          </section>

          {/* Module Goals Section */}
          <section className="py-20 px-5 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white">
            <div className="max-w-6xl w-full">
              <div className="text-center mb-16">
                <div className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  TUJUAN PEMBELAJARAN
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-gray-800 mb-6">
                  TUJUAN MODUL
                </h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 relative">
                  <div className="absolute -inset-4 bg-yellow-200 rounded-3xl opacity-30"></div>
                  <Image
                    src={Hero}
                    alt="hero"
                    className="relative w-full h-auto object-cover rounded-2xl shadow-xl"
                  />
                </div>

                <div className="lg:w-1/2 space-y-4">
                  <ul className="space-y-4">
                    {[
                      "Modul Tentang Pembelajaran Pendidikan Seksual",
                      "Meningkatkan Pemahaman Guru",
                      "Menyediakan Informasi yang Akurat",
                      "Meningkatkan Keterampilan Praktis Guru",
                      "Menciptakan Lingkungan Belajar yang Aman dan Mendukung",
                      "Menyusun Kurikulum Pendidikan Seksual yang Inklusif",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-lg font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Module Content Section */}
          <section className="min-h-screen bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-40 right-10 w-60 h-60 bg-white/5 rounded-full"></div>
              <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-yellow-300/20 rounded-full"></div>
            </div>

            <div className="relative z-10 py-20 px-4 md:px-8">
              <div className="text-center mb-16">
                <div className="inline-block bg-white text-yellow-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  KONTEN PEMBELAJARAN
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  Isi Modul
                </h2>
                <div className="w-24 h-1 bg-white mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="flex-shrink-0 p-4 bg-yellow-100 rounded-2xl group-hover:bg-yellow-200 transition-colors">
                        <Image
                          alt=""
                          src={Bulp}
                          sizes="64"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                          Konsep dasar tentang anak dengan hambatan penglihatan
                        </h3>
                        <div className="w-full h-1 bg-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="flex-shrink-0 p-4 bg-yellow-100 rounded-2xl group-hover:bg-yellow-200 transition-colors">
                        <Image
                          alt=""
                          src={OpenedBook}
                          sizes="64"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                          Pendidikan seksual bagi anak dengan hambatan
                          penglihatan
                        </h3>
                        <div className="w-full h-1 bg-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:mt-16 space-y-8">
                  <div className="group">
                    <div className="flex items-start bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="flex-shrink-0 p-4 bg-yellow-100 rounded-2xl group-hover:bg-yellow-200 transition-colors">
                        <Image
                          alt=""
                          src={Notes}
                          sizes="64"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                          Prosedur pembelajaran pendidikan seksual bagi anak
                          dengan hambatan penglihatan
                        </h3>
                        <div className="w-full h-1 bg-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="flex-shrink-0 p-4 bg-yellow-100 rounded-2xl group-hover:bg-yellow-200 transition-colors">
                        <Image
                          alt=""
                          src={Target}
                          sizes="64"
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
                          Tujuan, metode, media, dan evaluasi pembelajaran
                          pendidikan seksual
                        </h3>
                        <div className="w-full h-1 bg-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
              <div className="absolute top-40 right-20 w-16 h-16 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-20 left-1/4 w-12 h-12 border-4 border-white rounded-full"></div>
              <div className="absolute bottom-40 right-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
            </div>

            <div className="flex flex-col max-w-4xl items-center gap-y-8 text-center relative z-10">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">
                  Siap Memulai Perjalanan Pembelajaran?
                </h2>
                <p
                  id="selengkapnya"
                  className="text-white/90 text-lg lg:text-xl leading-relaxed"
                >
                  Daftarkan akun Anda untuk mendapatkan akses ke modul
                  pendidikan seksual ini. Dengan mendaftar, Anda akan
                  mendapatkan pembaruan terbaru dan akses ke materi tambahan
                  yang akan membantu Anda dalam mengajar pendidikan seksual
                  kepada anak-anak.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <Link
                    href="/module"
                    className="bg-white text-yellow-600 font-bold py-4 px-8 rounded-full shadow-xl hover:bg-yellow-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Akses Modul</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                ) : (
                  <Link
                    href="/auth/sign-up"
                    className="bg-white text-yellow-600 font-bold py-4 px-8 rounded-full shadow-xl hover:bg-yellow-50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Daftar Sekarang</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
}
