"use client";
import React from "react";

const Lampiran = () => {
  return (
    <div
      id="lampiran"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Header Section with Different Yellow Pattern */}
      <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 pt-12 pb-24">
        {/* Different geometric shapes for variation */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-500 transform -rotate-45 origin-top-left opacity-30"></div>
        <div className="absolute top-16 left-16 w-32 h-32 bg-yellow-300 transform rotate-45 opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-56 h-28 bg-yellow-700 transform -rotate-12 origin-bottom-right opacity-20"></div>

        {/* Title Section */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">LAMPIRAN</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold text-yellow-900 leading-tight">
              PERENCANAAN PEMBELAJARAN PENDIDIKAN SEKSUAL
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-10 mb-8 border-t-4 border-yellow-500">
          <main className="text-gray-900 leading-relaxed">
            {/* School Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-semibold text-yellow-800 w-32">
                    Nama Sekolah
                  </span>
                  <span className="text-gray-700">: SLB WATI PURNAMA</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-yellow-800 w-32">
                    Kelas/Semester
                  </span>
                  <span className="text-gray-700">: III SDLB/1</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-semibold text-yellow-800 w-32">
                    Pembelajaran ke
                  </span>
                  <span className="text-gray-700">: 1</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-yellow-800 w-32">
                    Alokasi Waktu
                  </span>
                  <span className="text-gray-700">: 30 Menit</span>
                </div>
              </div>
            </div>

            {/* Kompetensi Section */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  A
                </span>
                Kompetensi
              </h3>
              <div className="ml-8 space-y-2">
                <div className="flex items-start">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-1">
                    1
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Mengetahui bagian tubuh dari masing-masing jenis kelamin
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-1">
                    2
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Memahami istilah &quot;ADA RAHASIA DIBALIK BAJU MU&quot;
                  </p>
                </div>
              </div>
            </section>

            {/* Indikator Section */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  B
                </span>
                Indikator
              </h3>
              <div className="ml-8 space-y-3">
                <div className="flex items-start">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-1">
                    1
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Mampu menunjuk secara sederhana bagian-bagian tubuh diri
                    sendiri.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-1">
                    2
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Mampu merubah kata sehari-sehari menggunakan kata biologis
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-1">
                    3
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Mampu mengetahui bagian tubuh mana saja yang menjadi rahasia
                    dan tidak dapat disentuh oleh orang lain
                  </p>
                </div>
              </div>
            </section>

            {/* Tujuan Pembelajaran */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  C
                </span>
                Tujuan Pembelajaran
              </h3>
              <div className="ml-8 space-y-3">
                <div className="flex items-start">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-1">
                    1
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Melalui pengalaman langsung murid dapat menunjukkan
                    bagian-bagian tubuh mereka sesuai dengan jenis kelaminnya
                    masing-masing.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-1">
                    2
                  </span>
                  <p className="text-gray-700 leading-relaxed">
                    Melalui nyanyian dan gerakan murid mampu menjaga rahasia
                    dibalik bajunya sendiri.
                  </p>
                </div>
              </div>
            </section>

            {/* Remaining Sections */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  D
                </span>
                Metode Pembelajaran
              </h3>
              <div className="ml-8">
                <p className="text-gray-700 leading-relaxed">
                  Ceramah dan Praktik
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  E
                </span>
                Materi Pembelajaran
              </h3>
              <div className="ml-8">
                <p className="text-gray-700 leading-relaxed">
                  Topik 2: Bagaimana bentuk tubuhku?
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  F
                </span>
                Media Pembelajaran
              </h3>
              <div className="ml-8">
                <p className="text-gray-700 leading-relaxed">
                  Aplikasi youtube dengan audio video berjudul &quot;Sentuhan
                  Boleh &amp; Tidak Boleh&quot;
                </p>
              </div>
            </section>
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  G
                </span>
                Sumber Rujukan
              </h3>
              <div className="ml-8">
                <p className="text-gray-700 leading-relaxed italic">
                  E-Modul guru pendidikan seksual bagi anak dengan hambatan
                  penglihatan
                </p>
              </div>
            </section>

            {/* Langkah-langkah Pembelajaran */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  H
                </span>
                Langkah-langkah Pembelajaran
              </h3>
              <div className="ml-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-400 text-sm">
                    <thead>
                      <tr className="bg-yellow-50">
                        <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-yellow-800">
                          Kegiatan
                        </th>
                        <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-yellow-800">
                          Deskripsi Kegiatan
                        </th>
                        <th className="border border-gray-400 px-4 py-3 text-left font-semibold text-yellow-800">
                          Alokasi Waktu
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3 align-top font-medium text-gray-800">
                          Pendahuluan
                        </td>
                        <td className="border border-gray-400 px-4 py-3 align-top">
                          <div className="space-y-3 text-gray-700 leading-relaxed">
                            <div>
                              <span className="font-medium">1.</span> Murid
                              menyiapkan diri dan memberikan salam kepada guru
                              lalu berdoa.
                            </div>
                            <div>
                              <span className="font-medium">2.</span> Guru
                              menjawab salam murid dan menyapa murid.
                            </div>
                            <div>
                              <span className="font-medium">3.</span> Guru
                              mengabsen murid.
                            </div>
                            <div>
                              <span className="font-medium">4.</span> Guru
                              menjelaskan tujuan pembelajaran hari ini tentang
                              anggota tubuh.
                            </div>
                            <div>
                              <span className="font-medium">5.</span> Guru
                              memberikan ice breaking melalui kegiatan gerakan
                              &quot;Kepala, Pundak, Lutut, kaki&quot;
                            </div>
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-3 align-top text-center font-medium">
                          5 Menit
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3 align-top font-medium text-gray-800">
                          Inti
                        </td>
                        <td className="border border-gray-400 px-4 py-3 align-top">
                          <div className="space-y-3 text-gray-700 leading-relaxed">
                            <div>
                              <span className="font-medium">1.</span> Guru
                              mengajak murid untuk meraba dan menunjukkan
                              bagian-bagian anggota tubuh dengan petunjuk guru.
                            </div>
                            <div>
                              <span className="font-medium">2.</span> Guru
                              menjelaskan ada beberapa anggota tubuh yang harus
                            </div>
                            <div className="ml-6">
                              menyebutkannya dengan menggunakan bahasa biologis.
                              Cth: &quot;burung&quot; menjadi &quot;Penis&quot;,
                              dll.
                            </div>
                            <div>
                              <span className="font-medium">3.</span> Guru
                              kembali menanyakan kepada murid untuk menunjuk
                              anggota tubuh yang disebutoleh guru.
                            </div>
                            <div>
                              <span className="font-medium">4.</span> Guru
                              menjelaskan tentang istilah &quot;ADA RAHASIA
                              DIBALIK BAJUMU&quot;
                            </div>
                            <div>
                              <span className="font-medium">5.</span> Guru
                              menghidupkan lagu &quot;sentuhan boleh &amp; tidak
                              boleh&quot; lalu mengajak murid untuk
                              mempraktikkan gerakannya sesuai dengan lagu yang
                              didengar oleh murid.
                            </div>
                            <div>
                              <span className="font-medium">6.</span> Guru
                              meminta murid untuk mengulang kembali tentang
                              istilah &quot;ADA RAHASIA DIBALIK BAJUMU&quot;
                            </div>
                          </div>
                        </td>
                        <td className="border border-gray-400 px-4 py-3 align-top text-center font-medium">
                          20 Menit
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3 align-top font-medium text-gray-800">
                          Penutup
                        </td>
                        <td className="border border-gray-400 px-4 py-3 align-top">
                          <div className="space-y-3 text-gray-700 leading-relaxed">
                            <div>
                              <span className="font-medium">1.</span> Peserta
                              didik diminta untuk berbagi pengalaman mereka
                              tentang materi yang telah dipelajari
                            </div>
                            <div>
                              <span className="font-medium">2.</span>
                              Memberikan kesempatan kepada murid untuk bertanya
                              pada materi yang belum dipahami
                            </div>
                            <div>
                              <span className="font-medium">3.</span> Kelas
                              ditutup dengan salam dan doa
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-yellow-700 flex items-center">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm mr-3">
                  I
                </span>
                Evaluasi Pembelajaran
              </h3>
              <div className="ml-8">
                <p className="text-gray-700 leading-relaxed italic">
                  Soal Evaluasi/Tes
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center py-6 text-yellow-600">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">Lampiran</span>
          <span className="text-2xl">⚥</span>
        </div>
      </div>
    </div>
  );
};

export default Lampiran;
