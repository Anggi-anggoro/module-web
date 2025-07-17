'use client'
import CoverImage from "@/app/assets/cover-module.jpeg";
import Hero from "@/app/assets/hero-kid.jpg"
import Image from "next/image";
import Link from "next/link";
import Bulp from "@/app/assets/bulb.png";
import OpenedBook from "@/app/assets/opened-book.png";
import Notes from "@/app/assets/notes.png";
import Target from "@/app/assets/target.png";
import { ScrollToId } from "@/components/utils";

export default function Home() {  
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <div className="w-full ">
        <main className="">
          <section className="px-6 py-8 bg-[#f6dbbf] relative overflow-hidden min-h-svh flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl">
              <div className="md:w-1/2 flex justify-center items-center">
                <Image
                  src={CoverImage}
                  alt="cover"
                  width={800}
                  height={800}
                  className="object-contain rounded-md"
                  priority
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
                  MODIS
                </h1>
                <h2 className="text-3xl md:text-3xl text-gray-700 font-bold pb-8">
                  Modul Pendidikan Seksual
                </h2>
                <p className="pb-3">
                  Sebuah modul pendidikan seksual untuk anak yang dirancang untuk membantu mereka memahami konsep dasar pendidikan seksual, kesehatan dan fungsi reproduksi, pergaulan sehat, serta perilaku seksual.
                </p>
                <Link onClick={(e)=>ScrollToId("selengkapnya",e)} href="#selengkapnya" className="bg-white border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition duration-300">
                  Selengkapnya
                </Link>
              </div>
            </div>
          </section>
          <section className="p-5 sm:p-20 min-h-svh flex flex-col items-center justify-center">
            <h1 className="text-3xl max-sm:text-2xl md:text-4xl mb-10 md:mb-20 font-extrabold">TUJUAN MODUL</h1>
            <div className="flex flex-col-reverse md:flex-row max-w-5xl items-start">
              <div className="w-full md:w-1/2">                
                <ul className="text-gray-700 text-base md:text-xl">
                  <li className="mb-2 flex items-start gap-x-2">
                    <svg className="w-6 h-6 flex-shrink-0 fill-green-500 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>Meningkatkan Pemahaman Guru</li>
                  <li className="mb-2 flex items-start gap-x-2">
                    <svg className="w-6 h-6 flex-shrink-0 fill-green-500 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>Menyediakan Informasi yang Akurat</li>
                  <li className="mb-2 flex items-start gap-x-2">
                    <svg className="w-6 h-6 flex-shrink-0 fill-green-500 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>Meningkatkan Keterampilan Praktis Guru</li>
                  <li className="mb-2 flex items-start gap-x-2">
                    <svg className="w-6 h-6 flex-shrink-0 fill-green-500 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>Menciptakan Lingkungan Belajar yang Aman dan Mendukung</li>
                  <li className="mb-2 flex items-start gap-x-2">
                    <svg className="w-6 h-6 flex-shrink-0 fill-green-500 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>Menyusun Kurikulum Pendidikan Seksual yang Inklusif</li>                    
                </ul>
              </div>
              <Image src={Hero} alt="hero" className="w-3/4 mb-10 mx-auto h-auto object-cover rounded-md" />
            </div>
          </section>
          <section className="min-h-svh bg-gray-50 ">
            <div className="py-10 px-4 md:px-8">
              <h2 className="text-3xl font-bold text-center mb-10">Isi Modul</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
                <div className="flex flex-col gap-5 sm:gap-10">
                  <div className="flex items-start bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="flex-shrink-0">
                      <Image alt="" src={Bulp} sizes="64" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base md:text-xl font-bold text-blue-600 mb-2">Konsep dasar tentang anak dengan hambatan penglihatan</h3>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="flex-shrink-0">
                      <Image alt="" src={OpenedBook} sizes="64" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base md:text-xl font-bold text-blue-600 mb-2">Pendidikan seksual bagi anak dengan hambatan penglihatan</h3>
                    </div>
                  </div>
                </div>
                <div className="md:mt-16 flex flex-col gap-5 sm:gap-10">
                  <div className="flex items-start bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="flex-shrink-0">
                      <Image alt="" src={Notes} sizes="64" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base md:text-xl font-bold text-blue-600 mb-2">Prosedur pembelajaran pendidikan seksual bagi anak dengan hambatan penglihatan</h3>
                    </div>
                  </div>
                  <div className="flex items-start bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition">
                    <div className="flex-shrink-0">
                      <Image alt="" src={Target} sizes="64" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base md:text-xl font-bold text-blue-600 mb-2">Tujuan, metode, media, dan evaluasi pembelajaran pendidikan seksual </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-20 bg-[#f6dbbf] flex flex-col items-center justify-center">            
            <div className="flex flex-col max-w-5xl items-center gap-y-6">
              <p id="selengkapnya">
                Daftarkan akun Anda untuk mendapatkan akses ke modul pendidikan seksual ini. Dengan mendaftar, Anda akan mendapatkan pembaruan terbaru dan akses ke materi tambahan yang akan membantu Anda dalam mengajar pendidikan seksual kepada anak-anak.
              </p>              
              <Link href="/auth/sign-up" className="bg-orange-100 border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded shadow-lg hover:bg-gray-100 transition duration-300 ml-4">
                Daftar Sekarang
              </Link>
            </div>
          </section>

        </main>

      </div>
    </main>
  );
}
