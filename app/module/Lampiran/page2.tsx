"use client";
import React from "react";

const ContohSoalEvaluasi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section with Green Background */}
      <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 pt-16 pb-24 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-4 left-16 w-20 h-20 bg-yellow-400 transform -rotate-12 origin-top-left opacity-60"></div>
        <div className="absolute top-12 right-20 w-32 h-32 bg-yellow-700 transform rotate-45 opacity-40"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-white transform rotate-45 opacity-30"></div>

        {/* Geometric accent */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-yellow-700 transform -skew-y-1 origin-bottom-left"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-white text-sm font-semibold tracking-wider uppercase">
                Lampiran
              </span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              CONTOH SOAL EVALUASI
            </h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-green-500">
          {/* Petunjuk Section */}
          <div className="mb-12">
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500 mb-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                Petunjuk Pemberian Soal Kepada Anak Dengan Hambatan Penglihatan:
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-700 font-bold text-sm">1</span>
                  </div>
                  <p>
                    Soal diberikan dengan cara mendiktekan kepada peserta didik.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-700 font-bold text-sm">2</span>
                  </div>
                  <p>Peserta didik menulis soal menggunakan tulisan braille.</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-700 font-bold text-sm">3</span>
                  </div>
                  <p>
                    Bentuk soal diberikan kepada peserta didik dengan hambatan
                    penglihatan berupa <em>essay</em> agar memudah peserta didik
                    untuk menjawabnya.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-700 font-bold text-sm">4</span>
                  </div>
                  <p>Jumlah soal minimal 5.</p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-700 font-bold text-sm">5</span>
                  </div>
                  <p>
                    Setelah peserta didik mengumpulkan jawabannya, guru mengajak
                    kembali peserta didik berdiskusi berdasarkan hasil jawaban
                    dari peserta didik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soal Evaluasi Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">📝</span>
                </div>
                Soal Evaluasi
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">Topik 3</h3>
                  <p className="text-gray-600">
                    : Ayo Jaga Kesehatan Reproduksi!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Alokasi Waktu
                  </h3>
                  <p className="text-gray-600">: 30 Menit</p>
                </div>
              </div>

              <h3 className="font-semibold text-blue-700 mb-4">Soal:</h3>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-3 border-blue-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold">1</span>
                    </span>
                    <p className="text-gray-700">
                      Tuliskan tata cara dalam membersihkan alat kelamin!
                      (laki-laki bagi laki-laki & perempuan bagi perempuan)
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border-l-3 border-blue-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold">2</span>
                    </span>
                    <p className="text-gray-700">
                      Apa fungsi Penis bagi laki-laki dan Vagina bagi perempuan?
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border-l-3 border-blue-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold">3</span>
                    </span>
                    <p className="text-gray-700">
                      Apa fungsi Testis bagi laki-laki dan Serviks bagi
                      perempuan?
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border-l-3 border-blue-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold">4</span>
                    </span>
                    <p className="text-gray-700">
                      Bagaimana gejala dari penyakit Sifilis?
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border-l-3 border-blue-300">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-blue-600 font-bold">5</span>
                    </span>
                    <p className="text-gray-700">
                      Apa kepanjangan dari HIV dan HPV?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Criteria Section */}
          <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">⭐</span>
              </div>
              Kriteria Penilaian
            </h3>
            <p className="text-amber-700 font-medium">Jawaban benar x 20.</p>
          </div>
          {/* Unjuk Kerja Section */}
          <div className="mb-12 mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">🎯</span>
                </div>
                UNJUK KERJA
              </h2>

              <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h3 className="font-semibold text-purple-700 mb-4">
                  Form penilaian unjuk kerja:
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-40">
                      Materi
                    </span>
                    <span className="text-gray-600">
                      : Tata cara mengganti pembalut
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-40">
                      Nama Peserta Didik
                    </span>
                    <span className="text-gray-600">:</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-40">
                      Kelas/Semester
                    </span>
                    <span className="text-gray-600">:</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-40">
                      Aspek Penilaian
                    </span>
                    <span className="text-gray-600">:</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-purple-700 mb-3">
                    I. Kriteria Penilaian
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Berikan tanda centang (✓) pada kolom sesuai pencapaian
                    peserta didik.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-purple-100">
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            No
                          </th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Aspek
                          </th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Kriteria
                          </th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Skor (1-4)
                          </th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Keterangan
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">1</td>
                          <td className="border border-gray-300 p-3">
                            Persiapan alat dan kebersihan
                          </td>
                          <td className="border border-gray-300 p-3">
                            Menyiapkan pembalut bersih, tisu, dan mencuci tangan
                            sebelum/sesudah.
                          </td>
                          <td className="border border-gray-300 p-3"></td>
                          <td className="border border-gray-300 p-3"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">2</td>
                          <td className="border border-gray-300 p-3">
                            Langkah-langkah mengganti pembalut
                          </td>
                          <td className="border border-gray-300 p-3">
                            Membuka pembalut lama dengan benar, membersihkan
                            area intim dengan tepat.
                          </td>
                          <td className="border border-gray-300 p-3"></td>
                          <td className="border border-gray-300 p-3"></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">3</td>
                          <td className="border border-gray-300 p-3">
                            Pemasangan pembalut baru
                          </td>
                          <td className="border border-gray-300 p-3">
                            Memasang pembalut baru dengan posisi yang tepat dan
                            nyaman.
                          </td>
                          <td className="border border-gray-300 p-3"></td>
                          <td className="border border-gray-300 p-3"></td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-3">4</td>
                          <td className="border border-gray-300 p-3">
                            Pembuangan limbah
                          </td>
                          <td className="border border-gray-300 p-3">
                            Membungkus pembalut bekas dengan rapi dan membuang
                            ke tempat sampah khusus.
                          </td>
                          <td className="border border-gray-300 p-3"></td>
                          <td className="border border-gray-300 p-3"></td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">5</td>
                          <td className="border border-gray-300 p-3">
                            Kesadaran kebersihan
                          </td>
                          <td className="border border-gray-300 p-3">
                            Menjelaskan pentingnya mengganti pembalut setiap 4-6
                            jam.
                          </td>
                          <td className="border border-gray-300 p-3"></td>
                          <td className="border border-gray-300 p-3"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-700 mb-3">
                      II. Skala Penilaian
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold">4 = Sangat Baik</span> :
                        Langkah dilakukan secara lengkap, mandiri, dan higienis.
                      </div>
                      <div>
                        <span className="font-semibold">3 = Baik</span> :
                        Langkah benar tetapi perlu sedikit bimbingan.
                      </div>
                      <div>
                        <span className="font-semibold">2 = Cukup</span> : Ada
                        kesalahan atau kurang rapi.
                      </div>
                      <div>
                        <span className="font-semibold">
                          1 = Perlu Bimbingan
                        </span>{" "}
                        : Masih keliru dalam beberapa langkah.
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-3">
                      III. Catatan:
                    </h4>
                    <div className="bg-white rounded border-2 border-dashed border-green-300 h-24 p-3">
                      <p className="text-gray-500 text-sm italic">
                        Ruang untuk catatan evaluasi...
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
      <div className="flex justify-center items-center py-8 text-green-600">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">📋</span>
          </div>
          <span className="text-lg font-semibold">Lampiran Evaluasi</span>
          <span className="text-2xl">⚥</span>
        </div>
      </div>
    </div>
  );
};

export default ContohSoalEvaluasi;
