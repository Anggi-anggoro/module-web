"use client";
import React from "react";

const Bab4 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Yellow Background */}
      <div className="relative bg-yellow-500 pt-16 pb-32">
        {/* Geometric shapes */}
        <div className="absolute top-0 right-0 w-64 h-32 bg-yellow-600 transform rotate-12 origin-top-right"></div>
        <div className="absolute top-8 right-8 w-48 h-24 bg-yellow-400 transform -rotate-6"></div>

        {/* BAB 4 Title */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-right mb-8">
            <h1 className="text-6xl font-bold text-white mb-2">BAB 4</h1>
          </div>

          {/* Main Title */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-yellow-900 leading-tight">
              Evaluasi Pembelajaran
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <main className="text-gray-900 leading-relaxed">
            <section id="bab4">
              <section id="tujuan-pembelajaran" className="mb-10">
                <h3
                  id="tpbab4"
                  className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2"
                >
                  Tujuan Pembelajaran:
                </h3>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li className="text-gray-700 leading-relaxed">
                    Mengevaluasi tingkat pemahaman anak dengan hambatan
                    penglihatan tentang pendidikan seksual melalui soal-soal
                    latihan seputar pendidikan seksual yang telah diajarkan
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Mengevaluasi pemahaman anak dengan hambatan penglihatan
                    tentang pendidikan seksual melalui unjuk kerja.
                  </li>
                </ol>
              </section>

              <section id="fungsi-evaluasi" className="mb-10">
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Dalam proses pembelajaran pendidikan seksual, fungsi dari
                  soal-soal Latihan pada materi pendidikan seksual yang telah
                  diajarkan sangatlah penting. Soal latihan berfungsi sebagai
                  alat evaluasi untuk mengukur pemahaman siswa terhadap materi
                  pendidikan seksual yang telah diajarkan. Dengan memberikan
                  soal, guru dapat mengetahui sejauh mana siswa memahami
                  konsep-konsep pendidikan seksual yang telah dibahas dalam
                  kelas.
                </p>
              </section>

              <section id="metode-evaluasi" className="mb-10">
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Selain dari soal yang telah ada, beberapa topik dapat dinilai
                  melalui unjuk kerja atau praktik langsung. Melalui kegiatan
                  unjuk kerja ini diharapkan guru dapat mengevaluasi dan
                  mendapat umpan balik dari apa yang telah dikerjakan para
                  peserta didik.
                </p>
              </section>

              <section id="contoh-soal" className="mb-10">
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Contoh soal dan unjuk kerja yang dapat diberikan kepada
                  peserta didik dapat dilihat pada lampiran.
                </p>
              </section>
            </section>
            <section id="rangkuman-bab4" className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                RANGKUMAN
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-justify text-gray-700 leading-relaxed">
                  Dalam mengevaluasi pembelajaran pendidikan seksual, guru dapat
                  memberikan soal-soal latihan seputar materi yang telah
                  dipelajari oleh murid. Soal ini juga dapat menjadi alat ukur
                  tingkat pemahaman peserta didik.
                </p>
              </div>
            </section>

            <section id="latihan-mandiri-bab4" className="mb-10">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                LATIHAN MANDIRI
              </h3>
              <div className="space-y-4 text-gray-700 text-justify leading-relaxed">
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li className="leading-relaxed">
                    Buatlah soal tentang pendidikan seksual melalui materi yang
                    telah ada pada modul ini!
                  </li>
                </ol>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center py-6 text-yellow-600">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">4</span>
          <span className="text-2xl">⚥</span>
        </div>
      </div>
    </div>
  );
};

export default Bab4;
