"use client";
import React from "react";

const ModulAjar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Yellow Background */}
      <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 pt-16 pb-32">
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-700 transform -rotate-12 origin-top-left opacity-60"></div>
        <div className="absolute top-16 left-16 w-32 h-32 bg-yellow-400 transform rotate-45 opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-56 h-28 bg-yellow-500 transform rotate-6"></div>

        {/* Main Title */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white bg-opacity-20 rounded-lg px-6 py-2 mb-4">
              <span className="text-white text-lg font-semibold">LAMPIRAN</span>
            </div>
            <h1 className="text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
              CONTOH MODUL AJAR / RPP TERINTEGRASI DENGAN PENDIDIKAN SEKSUAL
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* School Information Card */}
          <div className="bg-gradient-to-r from-yello-50 to-indigo-50 p-8 border-b-4 border-yellow-200">
            <h2 className="text-2xl font-bold text-yellow-800 mb-6 text-center">
              INFORMASI UMUM PERANGKAT AJAR
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700 w-32">
                    Nama Sekolah
                  </span>
                  <span className="text-gray-600">: SLB WATI PURNAMA</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700 w-32">
                    Satuan Pendidikan
                  </span>
                  <span className="text-gray-600">: SMPLB</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700 w-32">
                    Penyusun
                  </span>
                  <span className="text-gray-600">
                    : IRVAN DWI NOVALDI, S.Pd
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700 w-32">FASE</span>
                  <span className="text-gray-600">: D</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-amber-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700 w-32">
                    Kelas/Semester
                  </span>
                  <span className="text-gray-600">: VII / I (Satu)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-amber-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700 w-32">
                    Alokasi Waktu
                  </span>
                  <span className="text-gray-600">
                    : 2 x 40 menit (1x pertemuan)
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-amber-500 rounded-full mr-3"></span>
                  <span className="font-semibold text-gray-700 w-32">
                    Hari/Tanggal
                  </span>
                  <span className="text-gray-600">:</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="p-8 border-b-2 border-gray-100">
            <h3 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
              <span className="w-6 h-6 bg-yellow-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-sm">🎯</span>
              </span>
              TUJUAN KEGIATAN PEMBELAJARAN
            </h3>
            <div className="bg-yellow-50 rounded-lg p-6">
              <p className="font-semibold text-yellow-800 mb-3">
                Capaian Pembelajaran:
              </p>
              <p className="text-gray-700 mb-4">
                Murid mampu mengidentifikasi ciri fisik laki-laki dan perempuan
                pada masa pubertas.
              </p>

              <p className="font-semibold text-yellow-800 mb-3">
                Elemen: Pemahaman Ilmu Pengetahuan Alam
              </p>

              <p className="font-semibold text-yellow-800 mb-3">
                Tujuan Pembelajaran:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-4">
                <li>Murid mampu mengetahui definisi dari pubertas</li>
                <li>
                  Murid mampu mengidentifikasi ciri fisik laki-laki pada masa
                  pubertas
                </li>
                <li>
                  Murid mampu mengidentifikasi ciri fisik perempuan pada masa
                  pubertas
                </li>
              </ol>
            </div>
          </div>

          {/* Student Profile */}
          <div className="p-8 border-b-2 border-gray-100">
            <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
              <span className="w-6 h-6 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-sm">👥</span>
              </span>
              DIMENSI PROFIL LULUSAN
            </h3>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-gray-700">
                Penalaran Kritis, Bergotong royong, dan Mandiri.
              </p>
            </div>
          </div>

          {/* Learning Model and Target */}
          <div className="grid md:grid-cols-2 gap-8 p-8 border-b-2 border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-amber-700 mb-4 flex items-center">
                <span className="w-6 h-6 bg-amber-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">📚</span>
                </span>
                MODEL PEMBELAJARAN
              </h3>
              <div className="bg-amber-50 rounded-lg p-6">
                <p className="text-gray-700 text-center font-medium">
                  Tatap muka
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                <span className="w-6 h-6 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">🎯</span>
                </span>
                TARGET MURID
              </h3>
              <div className="bg-orange-50 rounded-lg p-6">
                <p className="text-gray-700 text-center font-medium">
                  Murid Tunanetra
                </p>
              </div>
            </div>
          </div>

          {/* Student Count and Assessment */}
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
                <span className="w-6 h-6 bg-yellow-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">👨‍🎓</span>
                </span>
                JUMLAH SISWA
              </h3>
              <div className="bg-yellow-50 rounded-lg p-6">
                <p className="text-gray-700 text-center font-medium text-2xl">
                  4 orang
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">📝</span>
                </span>
                ASESMEN
              </h3>
              <div className="bg-red-50 rounded-lg p-6 space-y-3">
                <div className="mb-4">
                  <p className="font-semibold text-red-800 mb-2">
                    a. Asesmen Individu:
                  </p>
                  <p className="text-gray-700 pl-4">1) Asesmen individu</p>
                </div>
                <div>
                  <p className="font-semibold text-red-800">
                    b. Jenis Asesmen: Formatif
                  </p>
                </div>
              </div>
            </div>
            {/* Main Learning Activities */}
            <div className="p-8 border-b-2 border-gray-100">
              <h3 className="text-xl font-bold text-indigo-700 mb-6 flex items-center bg-indigo-100 p-4 rounded-lg">
                <span className="w-6 h-6 bg-indigo-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">🎓</span>
                </span>
                KEGIATAN PEMBELAJARAN UTAMA
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-gray-800">
                      Pengaturan Murid:
                    </span>
                    <span className="text-gray-700"> Mandiri</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></span>
                  <div>
                    <span className="font-semibold text-gray-800">Metode:</span>
                    <span className="text-gray-700"> Ceramah dan Diskusi</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Materials and Tools */}
            <div className="p-8 border-b-2 border-gray-100">
              <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center bg-green-100 p-4 rounded-lg">
                <span className="w-6 h-6 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">📖</span>
                </span>
                MATERI AJAR, ALAT, DAN BAHAN
              </h3>
              <div className="bg-green-50 rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold text-green-800 mb-2">
                    a. Materi atau sumber pembelajaran yang utama:
                  </p>
                  <div className="pl-4 space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">Sumber:</span> Buku Siswa
                      dan Buku Guru.
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Materi:</span> Konsep
                      Pubertas
                    </p>
                    <p className="text-gray-700 font-medium">
                      Media, Alat dan Bahan yang diperlukan:
                    </p>
                    <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700">
                      <li>Media: Diri Murid</li>
                      <li>Alat tulis: Reglet, Pen, Kertas Braille</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Learning Preparation */}
          <div className="p-8 border-b-2 border-gray-100">
            <h3 className="text-xl font-bold text-purple-700 mb-6 flex items-center bg-purple-100 p-4 rounded-lg">
              <span className="w-6 h-6 bg-purple-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-sm">🚀</span>
              </span>
              PERSIAPAN PEMBELAJARAN
            </h3>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700">
                Langkah-langkah yang perlu dipersiapkan oleh guru sebelum
                mengajar:
              </p>
              <p className="text-gray-700 mt-2 pl-4">1. Menyiapkan materi</p>
            </div>
          </div>
          {/* Learning Activities Sequence */}
          <div className="p-8 border-b-2 border-gray-100">
            <h3 className="text-xl font-bold text-orange-700 mb-6 flex items-center bg-orange-100 p-4 rounded-lg">
              <span className="w-6 h-6 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-sm">📋</span>
              </span>
              URUTAN KEGIATAN PEMBELAJARAN
            </h3>

            {/* Opening Activity */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-orange-600 mb-4 bg-orange-50 p-3 rounded-lg">
                PEMBUKAAN (10 Menit)
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Kelas dimulai dengan salam, menanyakan kabar dan memeriksa
                    kehadiran murid
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    murid dingatkan untuk selalu mengutamakan sikap disiplin
                    setiap absen dan pengiriman tugas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Guru memberi motivasi kepada murid agar semangat dalam
                    mengikuti pembelajaran yang akan dilaksanakan
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Guru menyampaikan tujuan pembelajaran yang akan dicapai
                  </span>
                </li>
              </ul>
            </div>
            {/* Core Activity */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-blue-600 mb-4 bg-blue-50 p-3 rounded-lg">
                KEGIATAN INTI (60 Menit)
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Guru menjelaskan apa itu pubertas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Guru menjelaskan tentang Gambaran singkat pertumbuhan remaja
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    murid diminta untuk memutuskan tulisan braille yang
                    menggunakan perbedaan fisik yang mereka rasakan sesuai jenis
                    kelamin masing-masing
                  </span>
                </li>
              </ul>
            </div>

            {/* Closing Activities */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-green-600 mb-4 bg-green-50 p-3 rounded-lg">
                  PENUTUP (10 Menit)
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Guru mengajak murid untuk menyimpulkan definisi pubertas
                      sebagai masa peralihan dari anak-anak menuju dewasa dengan
                      ditandai dengan perubahan fisik dan kematangan organ
                      reproduksi
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Murid didik dibagi dua kelompok sesuai dengan jenis
                      kelaminnya masing-masing
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Murid diberikan waktu untuk berdiskusi menganalisa
                      perubahan yang terjadi selama pubertas
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Masing-masing kelompok mempresentasikan hasil diskusinya
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-teal-600 mb-4 bg-teal-50 p-3 rounded-lg">
                  REFLEKSI GURU
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                  <li>Apakah tujuan pembelajaran tercapai?</li>
                  <li>Kesulitan apa yang dialami?</li>
                  <li>
                    Apa langkah yang perlu dilakukan untuk memperbaiki proses
                    belajar?
                  </li>
                </ol>

                <h4 className="text-lg font-bold text-pink-600 mb-4 bg-pink-50 p-3 rounded-lg mt-6">
                  REFLEKSI SISWA
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                  <li>
                    Bagian mana yang menurutmu paling sulit dari pelajaran ini?
                  </li>
                  <li>
                    Apa yang kamu lakukan untuk memperbaiki hasil belajarmu?
                  </li>
                  <li>
                    Jika kamu diminta untuk memberikan tanda bintang 1 sampai 5,
                    berapa bintang akan kamu berikan untuk suatu yang sudah kamu
                    lakukan?
                  </li>
                </ol>
              </div>
            </div>
            {/* Student Assignment */}
            <div className="p-8 border-b-2 border-gray-100">
              <h3 className="text-xl font-bold text-cyan-700 mb-6 flex items-center bg-cyan-100 p-4 rounded-lg">
                <span className="w-6 h-6 bg-cyan-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-white text-sm">📝</span>
                </span>
                LEMBAR TUGAS SISWA
              </h3>
              <div className="bg-cyan-50 rounded-lg p-6">
                <p className="text-gray-700 text-center font-medium">
                  Tulisan braille tentang pubertas
                </p>
              </div>
            </div>
            {/* Assessment Attachment */}
            <div className="p-8">
              <h3 className="text-xl text-center  font-bold p-4 rounded-lg bg-lime-100 text-lime-700 mb-6">
                Lampiran Asesmen
              </h3>
              <div className="bg-lime-50 rounded-lg p-6">
                <p className="font-semibold text-lime-800 mb-4">
                  A. Rubric pemahaman konsep dan penyelesaian masalah
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Observasi untuk kerja selama proses pembelajaran melalui
                  lembar kegiatan murid
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-lime-300 text-sm">
                    <thead>
                      <tr className="bg-lime-200 text-lime-800">
                        <th className="border border-gray-300 p-2 text-center">
                          Kegiatan
                        </th>
                        <th className="border border-gray-300 p-2 text-center">
                          1
                        </th>
                        <th className="border border-gray-300 p-2 text-center">
                          2
                        </th>
                        <th className="border border-gray-300 p-2 text-center">
                          3
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">
                          Dapat mengidentifikasi perbedaan fisik selama pubertas
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          Dapat mengidentifikasi perbedaan fisik selama pubertas
                          dengan pemik
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          Dapat mengidentifikasi perbedaan fisik selama pubertas
                          dengan bantuan
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          Dapat mengidentifikasi perbedaan fisik selama pubertas
                          secara
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg mt-6 p-8">
                <p className="font-semibold text-amber-800 mb-4">B. Tertulis</p>
                <p className="text-sm text-gray-700 mb-2">
                  Tes tertulis di akhir pembelajaran melalui lembar tes formatif
                  pedoman pensikoran tes formatif:
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  Nilai ={" "}
                  <span className="underline">skor yang diperoleh x 100</span>
                  <br />
                  <span className="ml-28">20</span>
                </p>
                <p className="text-sm text-gray-700 mb-6">
                  Nilai ≥ 70 menunjukkan murid mencapai tujuan pembelajaran
                </p>
              </div>
              <div className="mt-6 p-8 bg-yellow-50">
                <p className="font-semibold text-yellow-800 mb-4">
                  C. Lembar pengamatan ketercapaian Dimensi Profil Lulusan
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-yellow-200">
                        <th className="border border-gray-300 p-2 text-center font-semibold text-yellow-800 w-1/2">
                          KARAKTER
                        </th>
                        <th className="border border-gray-300 p-2 text-center font-semibold text-yellow-800 w-1/4">
                          Terlihat
                        </th>
                        <th className="border border-gray-300 p-2 text-center font-semibold text-yellow-800 w-1/4">
                          Belum Terlihat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Kemandirian */}
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          <b>Kemandirian</b> - Murid <u>dapat menerima</u>{" "}
                          pendapat
                          <u> (jawaban/sanggahan)</u> dari teman
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          Murid <u>mampu menjawab</u> dengan <u>lugas</u> dan{" "}
                          <u>sistematis</u>
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          Murid <u>dapat mengapresiasi</u> masukan teman
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>

                      {/* Penalaran Kritis */}
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          <b>Penalaran Kritis</b> - Murid <u>aktif</u> dalam
                          mencari informasi,
                          <u> lebih baik bertanya</u> kepada guru <u>maupun</u>{" "}
                          teman
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          Murid <u>dapat mengaplikasikan</u> materi{" "}
                          <u>dengan kehidupan sehari-hari</u>
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          Murid <u>dapat menyimpulkan</u> kegiatan yang
                          dilakukan
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>

                      {/* Kolaborasi */}
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          <b>Kolaborasi</b> - Murid <u>menerima peran</u> yang
                          diberikan kelompok
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          Murid <u>memahami informasi</u> dan{" "}
                          <u>menyampaikan kepada teman lain</u>
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-xs">
                          Murid{" "}
                          <u>
                            melakukan aktivitas kelompok sesuai dengan
                            kesepakatan bersama
                          </u>
                        </td>
                        <td className="border border-gray-300 p-2"></td>
                        <td className="border border-gray-300 p-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-12 text-center">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="mb-2">Mengetahui,</p>
                      <p className="mb-16">Kepala SLB WATI PURNAMA</p>
                      <p className="font-bold underline">
                        IRVAN DWI NOVALDI, S.Pd
                      </p>
                    </div>
                    <div>
                      <p className="mb-2">Dumai, Juli 2025</p>
                      <p className="mb-16">Guru Kelas</p>
                      <p className="font-bold underline">
                        IRVAN DWI NOVALDI, S.Pd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center py-8 text-yellow-600">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-lg font-semibold">Modul Ajar</span>
          <span className="text-2xl">⚥</span>
        </div>
      </div>
    </div>
  );
};

export default ModulAjar;
