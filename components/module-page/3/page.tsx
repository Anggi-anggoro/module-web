"use client";
import React from "react";
import Image from "next/image";
import boy from "@/app/assets/BOY3.png";
import girl from "@/app/assets/GIRL.png";
import both from "@/app/assets/both2.png";
import vagina from "@/app/assets/vagina.jpg";
import penis from "@/app/assets/penis.jpg";

const Bab3 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Yellow Background */}
      <div className="relative bg-yellow-500 pt-16 pb-32">
        {/* Geometric shapes */}
        <div className="absolute top-0 right-0 w-64 h-32 bg-yellow-600 transform rotate-12 origin-top-right"></div>
        <div className="absolute top-8 right-8 w-48 h-24 bg-yellow-400 transform -rotate-6"></div>

        {/* BAB 3 Title */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-right mb-8">
            <h1 className="text-6xl font-bold text-white mb-2">BAB 3</h1>
          </div>

          {/* Main Title */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-yellow-900 leading-tight">
              Materi Pendidikan Seksual
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <main className="text-gray-900 leading-relaxed">
            <section id="bab3">
              {/* Tujuan Pembelajaran */}
              <section id="tujuan-pembelajaran-bab3" className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  Tujuan Pembelajaran
                </h3>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li className="text-gray-700 leading-relaxed">
                    Menjelaskan Topik 1 (Bagaimana Bentuk Tubuhku?)
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Menjelaskan Topik 2 (Ayo jaga Kesehatan Reproduksi!)
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Menjelaskan Topik 3 (Perilaku Seksual)
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Menjelaskan Topik 4 (Pergaulanku, Pergaulan Sehat!)
                  </li>
                </ol>
              </section>

              {/* Topik 1 */}
              <section id="bagaimana-bentuk-tubuhku" className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  Topik 1. Bagaimana Bentuk Tubuhku?
                </h3>
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Pada topik ini murid dengan hambatan penglihatan diajarkan
                  mengenal bentuk tubuhnya baik laki-laki ataupun perempuan.
                  Topik ini dapat diajarkan pada anak jenjang{" "}
                  <strong>DASAR</strong>. Ditopik ini anak diajarkan
                  bagian-bagian tubuh mereka dan perbedaan antara bagian tubuh
                  laki-laki dan perempuan.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Topik 1.1: Mengenal Bagian Tubuh
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Dimulai dengan bentuk tubuh, dikarenakan anak dengan
                    hambatan penglihatan biasanya tidak memiliki hambatan pada
                    intelektualnya, maka sejak dini kita sudah harus membiasakan
                    dengan bahasa-biologis dalam pengucapan dari bentuk tubuh
                    tersebut. Misalnya, penggunaan kata &ldquo;burung&rdquo;
                    sudah mulai kita ajarkan dengan pembiasaan nama
                    &ldquo;penis&rdquo;. Penggunaan kata &ldquo;susu&rdquo;
                    sudah mulai kita ajarkan pembiasaan nama
                    &ldquo;payudara&rdquo;. Pada topik ini juga untuk peserta
                    didik pada tingkat dasar juga harus diajarkan mana saja
                    bagian tubuh yang boleh disentuh dan tidak boleh disentuh
                    oleh orang lain.
                  </p>
                </div>

                {/* Ilustrasi Tubuh */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <h4 className="font-bold text-yellow-800 mb-4 text-center">
                    Ilustrasi Bagian Tubuh Laki-laki dan Perempuan
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-center border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-yellow-100 font-semibold">
                          <th className="border border-gray-400 px-4 py-3 text-yellow-800 w-1/2">
                            Laki-laki
                          </th>
                          <th className="border border-gray-400 px-4 py-3 text-yellow-800 w-1/2">
                            Perempuan
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-400 border-b-0 border-r-0 px-4 py-6">
                            <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                              <Image
                                src={boy}
                                alt="Tubuh Laki-Laki"
                                width={600}
                                height={800}
                                className="mx-auto w-[300px] md:w-[360px] lg:w-[800px] h-auto"
                              />
                            </div>
                          </td>
                          <td className="border border-gray-400 border-b-0 border-l-0 px-4 py-6">
                            <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                              <p className="text-gray-600 italic">
                                Ilustrasi Tubuh Perempuan
                              </p>
                              <Image
                                src={girl}
                                alt="Tubuh Perempuan"
                                width={600}
                                height={800}
                                className="mx-auto w-[300px] md:w-[360px] lg:w-[800px] h-auto"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50 font-semibold">
                          <td
                            className="border border-gray-400 border-t-0 px-4 py-2 text-yellow-800 col-span-2"
                            colSpan={2}
                          >
                            Gambar 1. Ilustrasi bagian tubuh laki-laki dan
                            perempuan
                          </td>
                        </tr>
                        <tr className="bg-yellow-100 font-semibold">
                          <td
                            className="border border-gray-400 px-4 py-2 text-yellow-800"
                            colSpan={2}
                          >
                            Keterangan Bagian Tubuh
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-4 text-left align-top">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                              <li>Mulut</li>
                              <li>Dada</li>
                              <li>Tangan</li>
                              <li>Perut</li>
                              <li>Penis</li>
                              <li>Kaki</li>
                              <li>Pantat (Bokong)</li>
                            </ol>
                          </td>
                          <td className="border border-gray-400 px-4 py-4 text-left align-top">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                              <li>Mulut</li>
                              <li>Payudara</li>
                              <li>Tangan</li>
                              <li>Perut</li>
                              <li>Vagina</li>
                              <li>Kaki</li>
                              <li>Pantat (Bokong)</li>
                            </ol>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400 mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">
                    Kredit Gambar:
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Gambar laki-laki diambil dari:{" "}
                    <a
                      href="https://www.freepik.com/free-vector/opposite-words-with-front-back-young-man_15952045.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Freepik - Front/Back Man
                    </a>{" "}
                    dan gambar perempuan dari:{" "}
                    <a
                      href="https://www.freepik.com/free-vector/opposite-words-with-front-back-young-woman_12364779.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Freepik - Front/Back Woman
                    </a>
                    . Gambar telah diedit dan ditambahkan nomor penanda sesuai
                    tabel keterangan.
                  </p>
                </div>

                {/* Metode dan Media */}
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">
                        Metode:
                      </h4>
                      <p className="text-gray-700">
                        Ceramah, Tanya Jawab, dan Praktik
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">Media:</h4>
                      <p className="text-gray-700">
                        Manekin Tubuh Manusia Laki-Laki dan Perempuan & tubuh
                        anak itu sendiri
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contoh Pembelajaran */}
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Contoh Pembelajaran:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Anak diajak untuk menyebutkan organ tubuh yang diketahuinya,
                    lalu guru membuka sesi tanya jawab dengan para peserta
                    didik. Pada sesi akhir murid diajak untuk menyebutkan dan
                    menyentuh organ tubuh yang dimaksud melalui manekin ataupun
                    pengalaman langsung dengan tubuhnya.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Topik 1.2: Ada Rahasia di Balik Bajumu!
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Materi selanjutnya pada topik ini adalah “ADA RAHASIA
                    DIBALIK BAJUMU!” istilah ini dapat diberikan kepada para
                    murid tingkat dasar dalam mengajarkan bagian tubuh mana saja
                    yang tidak boleh disentuh oleh orang lain. Area rahasia
                    tersebut yaitu:
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Daftar Area Rahasia */}
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-4">
                        Area Rahasia Tubuh:
                      </h4>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Mulut</li>
                        <li>Dada / Payudara</li>
                        <li>Penis / Vagina</li>
                        <li>Pantat (Bokong)</li>
                      </ol>
                    </div>

                    {/* Ilustrasi */}
                    <div className="flex justify-center">
                      <div className="bg-white p-6 rounded-lg border-2 border-yellow-200 shadow-sm">
                        <p className="text-gray-600 italic text-center">
                          Ilustrasi Area Rahasia
                        </p>
                        <Image
                          src={both}
                          alt="Area Rahasia"
                          width={600}
                          height={800}
                          className="mx-auto w-[300px] md:w-[360px] lg:w-[800px] h-auto"
                        />
                        <p className="text-gray-700 text-sm text-center mt-4 font-medium">
                          Gambar 2. Ilustrasi area tubuh rahasia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400 mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">
                    Kredit Gambar:
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Gambar laki-laki diambil dari:{" "}
                    <a
                      href="https://www.freepik.com/free-vector/opposite-words-with-front-back-young-man_15952045.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Freepik - Front/Back Man
                    </a>{" "}
                    dan gambar perempuan dari:{" "}
                    <a
                      href="https://www.freepik.com/free-vector/opposite-words-with-front-back-young-woman_12364779.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Freepik - Front/Back Woman
                    </a>
                    . Gambar telah diedit dan ditambahkan nomor penanda sesuai
                    tabel keterangan.
                  </p>
                </div>

                {/* Metode dan Media untuk Topik 1.2 */}
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">
                          Metode:
                        </h4>
                        <p className="text-gray-700">Ceramah dan Praktik</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">
                          Media:
                        </h4>
                        <p className="text-gray-700">
                          Nyanyian dari <em>YouTube</em> berjudul &ldquo;kujaga
                          diriku&rdquo; (
                          <a
                            href="https://www.youtube.com/watch?v=878HzqGwWp8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            https://www.youtube.com/watch?v=878HzgGwWp8
                          </a>
                          )
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-bold text-yellow-800 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Awalnya anak diberikan pemahaman tentang istilah “ADA
                      RAHASIA DIBALIK BAJUMU”, dalam istilah ini anak diajarkan
                      untuk merahasiakan bagian tubuh yang sensitif sehingga
                      bagian tersebut tidak boleh disentuh oleh orang lain.
                      Selanjutnya guru mengajak para murid untuk bernyanyi
                      tentang lagu “kujaga diriku”.
                    </p>
                  </div>
                </div>
              </section>

              {/* Topik 2 */}
              <section id="ayo-jaga-kesehatan-reproduksi" className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  Topik 2. Ayo Jaga Kesehatan Reproduksi!
                </h3>
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Pada topik ini, murid dengan hambatan penglihatan harus
                  diajarkan bagaimana cara menjaga kesehatan repoduksi nya.
                  Kesehatan reproduksi ini dimulai dengan cara membersihkan dan
                  menjaga organ reproduksi dengan baik. Selain menjaga kesehatan
                  reproduksi tersebut, murid juga harus diajarkan bagian-bagian
                  reproduksi setiap jenis kelamin. Meskipun membersihkan alat
                  reproduksi ini hal yang biasa, akan tetapi murid tetap harus
                  diajarkan tata cara membersihkannya dengan baik.
                </p>

                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Pada penjelasannya nanti anak dengan hambatan penglihatan
                  diajarkan mulai dari uretra sampai dengan penis pada laki-laki
                  dan mulai dari ovarium sampai dengan vagina. Selain dari
                  bagian-bagian tersebut, fungsi dari setiap bagiannya juga
                  tidak luput dari pengajaran terhadap anak dengan hambatan
                  penglihatan. Pada materi ini guru diberikan kebebasan untuk
                  memberikannya kepada jenjang yang sesuai dengan kesiapan
                  mental murid baik menengah ataupun lanjutan. Materi ini
                  disesuaikan masing-masing jenis kelamin, guru laki-laki
                  mengajarkan kepada anak laki-laki dan guru perempuan
                  mengajarkan kepada anak perempuan.
                </p>

                {/* Topik 2.1 */}
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <h4 className="font-bold text-yellow-800 mb-4">
                    Topik 2.1: Jenjang DASAR & MENENGAH. Tata cara dalam
                    membersihkan organ reproduksi baik laki-laki atau perempuan
                    sebagai berikut:
                  </h4>

                  {/* Tabel organ reproduksi */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-yellow-100 font-semibold">
                          <th className="border border-gray-400 px-4 py-3 text-yellow-800 w-1/2">
                            Laki-laki
                          </th>
                          <th className="border border-gray-400 px-4 py-3 text-yellow-800 w-1/2">
                            Perempuan
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-400 px-4 py-4 text-left align-top">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                              <li>Penis dibersihkan secara rutin dan runtut</li>
                              <li>
                                Cuci penis ketika mandi menggunakan sabun dan
                                air mengalir
                              </li>
                              <li>
                                Penis dicuci mulai dari awal batang sampai
                                dengan kepala penis
                              </li>
                              <li>
                                Setelah dicuci, penis dikeringkan menggunakan
                                handuk lembut, kering, bersih dan tidak berbau
                                atau menggunakan tisu baru. Patikkan penis
                                benar-benar kering pada area kulup (bagi penis
                                yang belum disunat) agar mencegah pertumbuhan
                                bakteri atau jamur.
                              </li>
                              <li>
                                Jangan gunakan sabun cuci tangan, parfum, atau
                                deodoran pada area penis karena dapat
                                menyebabkan infeksi atau iritasi.
                              </li>
                              <li>
                                Ganti celana dalam secara rutin minimal dua kali
                                sehari dan gunakan celana dalam yang menyerap
                                keringat.
                              </li>
                              <li>
                                Jika muncul gejala gatal, kemerahan, dan bau
                                tidak sedap segera konsultasikan ke dokter.
                              </li>
                            </ol>
                          </td>
                          <td className="border border-gray-400 px-4 py-4 text-left align-top">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                              <li>
                                Vagina dibersihkan secara rutin dan runtut
                              </li>
                              <li>
                                Bersihkan vagina dari arah yang benar, yaitu
                                dari depan ke belakang (dari vagina ke arah
                                anus) agar mencegah bakteri dari anus masuk ke
                                vagina
                              </li>
                              <li>Gunakan air yang bersih dan mengalir</li>
                              <li>
                                Gunakan sabun khusus kewanitaan atau sabun
                                khusus vagina, serta hindari sabun wangi, sabun
                                sirih, deodoran, dan bedak karena dapat
                                menyebabkan kulit kelamin rentan iritasi
                              </li>
                              <li>
                                Hindari membersihkan vagina dari dalam untuk
                                menghindari terjadinya infeksi
                              </li>
                              <li>
                                Keringkan dengan benar. Area vagina dikeringkan
                                menggunakan handuk bersih dan tisu dengan cara
                                ditepuk-tepuk ringan dan bukan digosok.
                              </li>
                              <li>
                                Gunakan pakaian dalam yang menyerap keringat dan
                                hindari pakaian dalam yang terlalu ketat, lalu
                                ganti pakaian dalam minimal satu kali dalam
                                sehari.
                              </li>
                              <li>
                                Bagi yang sudah menstruasi, ganti pembalut
                                secara rutin saat menstruasi terjadi (4-6 jam
                                sekali).
                              </li>
                            </ol>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Metode dan Media */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">
                        Metode:
                      </h4>
                      <p className="text-gray-700">Simulasi & Praktik</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">Media:</h4>
                      <p className="text-gray-700">
                        Handuk, Tisu, Air Mengalir, dan Alat Peraga / Manekin
                      </p>
                    </div>
                  </div>

                  {/* Gambar alat peraga */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Alat Peraga 1 */}
                    <div className="bg-white p-6 rounded-lg border-2 border-yellow-200 shadow-sm">
                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={vagina}
                          alt="Alat Peraga Anatomi Perempuan"
                          width={600}
                          height={800}
                          className="w-full h-auto object-contain"
                          priority
                        />
                      </div>
                      <h3 className="text-center mt-4 font-medium text-gray-700">
                        Anatomi Perempuan
                      </h3>
                    </div>

                    {/* Alat Peraga 2 */}
                    <div className="bg-white p-6 rounded-lg border-2 border-yellow-200 shadow-sm">
                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={penis}
                          alt="Alat Peraga Anatomi Laki-Laki"
                          width={600}
                          height={800}
                          className="w-full h-auto object-contain"
                          priority
                        />
                      </div>
                      <h3 className="text-center mt-4 font-medium text-gray-700">
                        Anatomi Laki-Laki
                      </h3>
                    </div>
                  </div>
                  {/* Caption untuk kedua gambar */}
                  <div className="text-center mb-6">
                    <p className="text-gray-700 text-sm font-medium">
                      Gambar 3. Contoh alat peraga anatomi organ reproduksi
                      laki-laki dan perempuan
                    </p>
                  </div>

                  {/* Contoh Pembelajaran */}
                  <div className="bg-yellow-100 border border-yellow-400 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Murid sesuai diajarkan oleh guru sesuai jenis kelamin
                      masing-masing. Murid diajak untuk menyentuh organ
                      reproduksi yang ada di manekin atau alat peraga lalu
                      dijelaskan langkah-langkahnya sambil murid
                      melaksanakannya. Guru menuntut dengan melihat
                      langkah-langkah yang telah dilaksanakan oleh murid.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Cara membersihkan organ reproduksi diatas bersifat
                      fleksibel, maksudnya tidak hanya diajarkan pada murid
                      tingkat menengah dan lanjutan, pada tingkat dasar juga
                      bisa diajarkan sesuai dengan kesiapan mental dari murid
                      tersebut.
                    </p>
                  </div>
                </div>

                {/* Topik 2.2 */}
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <h4 className="font-bold text-yellow-800 mb-4">
                    Topik 2.2: Jenjang DASAR & MENENGAH. Pada perempuan ada
                    dikenal dengan istilah menstruasi.
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Menstruasi adalah proses alami yang terjadi pada wanita,
                    berupa keluarnya darah dari vagina secara teratur setiap
                    bulan. Proses ini merupakan bagian dari siklus reproduksi
                    wanita yang dipengaruhi oleh hormon dan bertujuan untuk
                    mempersiapkan rahim untuk kehamilan. Pada saat menstruasi,
                    biasanya perempuan menggunakan pembalut.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pembalut berfungsi untuk menyerap dan menahan darah
                    menstruasi agar tidak mengotori pakaian dan menjaga area
                    vagina tetap kering dan higienis. Pembalut juga membantu
                    mencegah infeksi dan iritasi pada area tersebut jika diganti
                    secara rutin. Dalam menggunakan dan mengganti pembalut, anak
                    perempuan harus diajarkan dengan cara yang benar.
                  </p>

                  {/* Tabel Cara Menggunakan Pembalut */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-yellow-100 font-semibold">
                          <th className="border border-gray-400 px-4 py-3 text-yellow-800 text-center">
                            Cara Menggunakan Pembalut
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Menyiapkan pembalut bersih
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Tisu basah non alkohol atau air bersih
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Kantong plastik kecil (untuk pembalut bekas)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Bersihkan tangan dengan sabun dan air mengalir
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Lepas pembalut bekas
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Buka sisi perekat pembalut bekas dengan hati-hati
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Gulung pembalut dari depan ke belakang (bagian
                            bersih di luar)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Bersihkan area kewanitaan dari depan ke belakang
                            (vagina ke anus) menggunakan tisu basah atau air
                            bersih dan mengalir
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Keringkan dengan tisu atau handuk bersih dengan cara
                            ditepuk-tepuk
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Pasang pembalut baru (buka pembalut baru dan
                            tempelkan pada celana dalam)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Posisi sayap dilipat ke bawah celana dalam (jika
                            pembalutnya memiliki sayap)
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Bagian tengah pembalut menutupi lubang vagina dengan
                            sempurna
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Pembalut bekas yang sudah terbungkus plastik, buang
                            ke tempat sampah yang tertutup
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Cuci tangan dengan sabun dan air mengalir agar
                            memastikan tidak bakteri yang tertinggal
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h5 className="font-bold text-yellow-800">
                      Cara menjaga kebersihan saat menstruasi:
                    </h5>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 pl-4">
                      <li>
                        Pilihlah pembalut yang bebas dari berbagai jenis bahan
                        berbahaya dan nyaman saat dipakai
                      </li>
                      <li>
                        Ganti pembalut secara berkala, antara 3 hingga 5 kali
                        dalam sehari
                      </li>
                      <li>
                        Bersihkan vagina terlebih dahulu sebelum mengganti
                        pembalut. (Membersihkan vagina sebaiknya dilakukan
                        dengan air mengalir dan sebaiknya hindari penggunaan
                        sabun)
                      </li>
                      <li>
                        Cuci tangan sampai bersih setelah membuang pembalut
                        serta sebelum mengganti pembalut
                      </li>
                      <li>
                        Rutin mengganti celana dalam (CD) untuk menghindari
                        resiko tidak nyaman di sekitar vagina
                      </li>
                    </ol>
                  </div>

                  {/* Metode dan Media */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">
                        Metode:
                      </h4>
                      <p className="text-gray-700">Simulasi</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">Media:</h4>
                      <p className="text-gray-700">Pembalut</p>
                    </div>
                  </div>

                  {/* Contoh Pembelajaran */}
                  <div className="bg-amber-100 border border-amber-400 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-700 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Sehari sebelum pembelajaran mengganti pembalut
                      disimulasikan, guru menginstruksikan murid untuk membawa
                      pembalut dan rumah dengan berkoordinasi bersama orang tua
                      untuk menjelaskan materi yang berkaitan dengan fungsi
                      murid membawa pembalut. Guru perempuan menuntut peserta
                      didik perempuan untuk mengikuti langkah-langkah mengganti
                      pembalut. Lalu bagi murid perempuan yang menstruasi
                      diminta untuk memberikan umpan baliknya setelah
                      mempraktikkannya langsung.
                    </p>
                  </div>
                </div>
                {/* Topik 2.3 */}
                <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-500 mb-6">
                  <h4 className="font-bold text-amber-900 mb-4">
                    Topik 2.3: Pada jenjang LANJUTAN, bagian organ reproduksi
                    diajarkan kepada murid dengan hambatan penglihatan. Dengan
                    mengajarkan organ reproduksi tersebut, anak diajarkan tahu
                    akan bagian-bagian reproduksi yang dimilikinya.
                  </h4>

                  {/* Tabel Organ Reproduksi */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-yellow-50 font-semibold">
                          <th className="border border-gray-400 px-4 py-3 text-amber-900 w-1/3">
                            Organ Reproduksi
                          </th>
                          <th className="border border-gray-400 px-4 py-3 text-amber-900 w-2/3">
                            Fungsi Organ Reproduksi
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-orange-50 font-semibold">
                          <td
                            className="border border-gray-400 px-4 py-3 text-yellow-800 text-center"
                            colSpan={2}
                          >
                            Laki-Laki
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Penis
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Saluran yang menyalurkan sperma kepada vagina
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Skrotum
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Kantong kulit khusus yang melindungi testis dan
                            epididimis dari cedera fisik dan mengatur suhu
                            testis
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Testis
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Memproduksi sperma dan hormon testosteron
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Epididimis (saluran berkelok di belakang testis)
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Menyimpan dan mematangkan sperma dari testis
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Vas Deferens (saluran panjang)
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Mengangkut sperma dari epididimis ke uretra saat
                            ejakulasi
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Vesikula Seminalis
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Kelenjar penghasil cairan kaya fruktosa yang
                            membentuk 60% air mani
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Duktus Ejakulatorius
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Membawa spermatozoa dari vas deferens menuju ke
                            basis prostat
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Glandula Prostatica
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Mengeluarkan cairan basa yang menetralkan vagina
                            yang asam, dan menjaga sperma tetap berada dalam
                            vagina pada saat penis dikeluarkan
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Glandula Bulbourethralis
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Mengeluarkan mucus untuk pelumasan
                          </td>
                        </tr>
                        <tr className="bg-orange-50 font-semibold">
                          <td
                            className="border border-gray-400 px-4 py-3 text-yellow-800 text-center"
                            colSpan={2}
                          >
                            Perempuan
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Glandula Vestibularis Mayor
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Melubrikasi bagian distal vagina
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Glandula Vestibularis Minor
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Mengeluarkan lendir untuk melembabkan vestibulum
                            vagina dan labium pudendi
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Vagina
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Organ kopulasi, jalan lahir dan menjadi rutkus
                            ekskretorius darah menstruasi
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Tuba Uterine
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Membawa ovum dari ovarium ke kavum uteri dan
                            mengalirkan spermatozoa dalam arah berlawanan dan
                            tempat terjadinya fertilisasi
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Uterus
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Tempat ovum yang telah dibuahi secara normal
                            tertanam dan tempat normal dimana organ selanjutnya
                            tumbuh dan mendapat makanan sampai bayi lahir
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Ovarium
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700">
                            Organ eksokrin dan endokrin
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Metode dan Media */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="font-semibold text-yellow-800 mb-2">
                        Metode:
                      </p>
                      <p className="text-gray-700">
                        Ceramah, Diskusi dan Tanya Jawab
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-yellow-800 mb-2">
                        Media:
                      </p>
                      <p className="text-gray-700">
                        Alat Peraga Organ Reproduksi
                      </p>
                    </div>
                  </div>

                  {/* Gambar Alat Peraga */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="text-center">
                      <div className="bg-white p-6 rounded-lg border-2 border-pink-200 shadow-lg">
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg mb-4 min-h-[300px] flex items-center justify-center">
                          <div className="max-w-full max-h-full">
                            <Image
                              src={vagina}
                              alt="Alat Peraga Organ Reproduksi Perempuan"
                              width={280}
                              height={320}
                              className="object-contain rounded-lg shadow-md"
                              priority
                            />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-pink-700 mb-2">
                          Organ Reproduksi Perempuan
                        </h3>
                        <p className="text-sm text-gray-600">
                          Alat peraga untuk pembelajaran anatomi organ
                          reproduksi perempuan
                        </p>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="bg-white p-6 rounded-lg border-2 border-blue-200 shadow-lg">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg mb-4 min-h-[300px] flex items-center justify-center">
                          <div className="max-w-full max-h-full">
                            <Image
                              src={penis}
                              alt="Alat Peraga Organ Reproduksi Laki-laki"
                              width={280}
                              height={320}
                              className="object-contain rounded-lg shadow-md"
                              priority
                            />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">
                          Organ Reproduksi Laki-laki
                        </h3>
                        <p className="text-sm text-gray-600">
                          Alat peraga untuk pembelajaran anatomi organ
                          reproduksi laki-laki
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Caption untuk kedua gambar */}
                  <div className="text-center mb-6">
                    <p className="text-gray-700 text-sm font-medium">
                      Gambar 4. Contoh alat peraga anatomi organ reproduksi
                      laki-laki dan perempuan
                    </p>
                  </div>

                  {/* Contoh Pembelajaran */}
                  <div className="bg-amber-50 border border-amber-500 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Guru menjelaskan masing-masing organ reproduksi, lalu
                      membantu murid dengan menyentuh organ reproduksi yang
                      disebutkan kepada alat peraga organ reproduksi yang ada.
                    </p>
                  </div>
                </div>
                {/* Topik 2.4 */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
                  <h4 className="font-bold text-orange-800 mb-4">
                    Topik 2.4: jenjang LANJUTAN. Dalam menjaga kesehatan
                    reproduksi, anak juga harus dikenalkan berbagai macam
                    masalah kesehatan yang akan muncul pada reproduksi manusia.
                    Masalah kesehatan ini merupakan konsekuensi terhadap apa
                    yang dilakukan anak ketika tidak menjaga kesehatan
                    reproduksi dengan baik dan benar. Ada beberapa jenis masalah
                    kesehatan reproduksi pada laki-laki dan perempuan serta
                    dampak saat tidak menjaga kesehatan organ reproduksi,
                    diantaranya:
                  </h4>

                  {/* Tabel Masalah Kesehatan Reproduksi */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-amber-50 font-semibold">
                          <th className="border border-gray-400 px-4 py-3 text-orange-900 w-1/2">
                            Masalah Kesehatan Reproduksi Laki-Laki
                          </th>
                          <th className="border border-gray-400 px-4 py-3 text-orange-900 w-1/2">
                            Masalah Kesehatan Reproduksi Perempuan
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Masalah Kesuburan:</strong> Masalah ini
                            terjadi karena jumlah sperma yang tidak memadai.
                            Kondisi ini biasanya disebabkan oleh gangguan
                            hormon, masalah pada testis, efek samping
                            obat-obatan, dan genetik.
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Gangguan menstruasi:</strong> terbagi atas
                            dua (tidak terjadinya menstruasi sampai umur 17
                            tahun dan tidak terjadinya menstruasi selama 3-6
                            bulan)
                          </td>
                        </tr>

                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Disfungsi Seksual:</strong> Gangguan ini
                            biasanya berbentuk disfungsi ereksi, ejakulasi dini,
                            dan libido rendah
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Kanker serviks:</strong> keadaan dimana
                            sel-sel abnormal tumbuh disekitar lapisan epitel
                            serviks.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Kanker Prostat dan Kanker testis:</strong>{" "}
                            biasanya Kanker ovarium: memiliki gejala berupa rasa
                            berat pada panggul, perubahan fungsi saluran
                            pencernaan atau mengalami pendarahan vagina
                            abnormal.
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Kanker ovarium:</strong> memiliki gejala
                            berupa rasa berat pada panggul, perubahan fungsi
                            saluran pencernaan atau mengalami pendarahan vagina
                            abnormal.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Gangguan Prostat:</strong> biasanya
                            menyerang orang yang telah lanjut usia
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Endometriosis:</strong> kondisi medis pada
                            wanita yang ditandai dengan tumbuhnya sel-sel
                            endometrium yang melapisi rongga uterus dan memiliki
                            gejala seperti nyeri perut, pinggung terasa sakit
                            dan nyeri pada masa menstruasi
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Gangguan testis:</strong> testis tidak turun
                            ke skrotum
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Keputihan:</strong> merupakan kondisi normal
                            dan sering terjadi. Keputihan terbagi atas dua,
                            yaitu pertama keputihan fisiologis yang merupakan
                            keluarnya cairan vagina selain darah haid yang
                            disebabkan oleh infeksi dan tindakan perawatan
                            daerah kewanitaan yang tidak benar, berwarna kuning
                            atau kehijauan, berbau amis atau busuk serta gatal
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Varikokel:</strong> kondisi saat pembuluh
                            vena disekitar testis mengalami pelebaran
                          </td>
                          <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                            <strong>Hidrokel:</strong> kondisi terjadinya
                            penumpukan cairan disekitar testis yang berbahaya
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Metode dan Media */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">
                        Metode:
                      </h4>
                      <p className="text-gray-700">
                        Ceramah, Diskusi dan Tanya Jawab
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">Media:</h4>
                      <p className="text-gray-700">-</p>
                    </div>
                  </div>

                  {/* Contoh Pembelajaran */}
                  <div className="bg-orange-100 border border-orange-400 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-700 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Murid diberikan penjelasan seputar masalah pada organ
                      reproduksi, lalu guru membuka sesi tanya jawab dengan cara
                      mendiskusikannya bersama-sama di dalam kelas.
                    </p>
                  </div>
                </div>
                {/* Topik 2.5 */}
                <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-400 mb-6">
                  <h4 className="font-bold text-orange-700 mb-4">
                    Topik 2.5: jenjang LANJUTAN. Selain masalah kesehatan organ
                    reproduksi yang disebutkan pada topik 2.4 sebelumnya. Organ
                    reproduksi juga bisa terserang beberapa Penyakit Menular
                    Seksual (PMS) yang berbahaya dikarenakan tidak menjaga
                    kebersihan organ reproduksi dan memiliki pergaulan yang
                    kurang sehat dalam kehidupan. Berikut beberapa PMS yang
                    dapat menyerang organ reproduksi manusia:
                  </h4>

                  {/* Tabel Penyakit Reproduksi */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-yellow-50 font-semibold">
                          <th className="border border-gray-400 px-4 py-3 text-orange-800 w-1/3">
                            Nama Penyakit
                          </th>
                          <th className="border border-gray-400 px-4 py-3 text-orange-800 w-1/3">
                            Penyebab
                          </th>
                          <th className="border border-gray-400 px-4 py-3 text-orange-800 w-2/3">
                            Gejala
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-800">
                        <tr>
                          <td className="border border-gray-400 px-4 py-2">
                            <strong>Gonorhe (Kencing Nanah)</strong>
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Disebabkan oleh bakteri{" "}
                            <em>Neisseria Gonorrhoeae</em> dan ditularkan
                            melalui hubungan seksual. Timbulnya radang organ
                            reproduksi, dapat menimbulkan radang pada saluran
                            kemih, mata, persendian, dan selaput otak, bernanah
                            pada ujung saluran kencing, rasa terbakar saat buang
                            air kecil sehingga sulit membuang air kecil.
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Timbulnya radang organ reproduksi, dan dapat
                            menimbulkan radang pada saluran kemih, mata,
                            persendian, dan selaput otak, bernanah pada ujung
                            saluran kencing, rasa terbakar saat buang air kecil
                            sehingga sulit membuang air kecil.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2">
                            <strong>Sifilis</strong>
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Disebabkan oleh bakteri Treponema Pallidum dan
                            ditularkan terutama melalui hubungan seksual. Luka
                            tidak nyeri pada area reproduksi (primer), ruam
                            kulit dan pembengkakan kelenjar getah bening
                            (Sekunder), Kerusakan Organ (Tersier)
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Luka tidak nyeri pada area reproduksi (primer), ruam
                            kulit dan pembengkakan kelenjar getah bening
                            (Sekunder), Kerusakan Organ (Tersier).
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2">
                            <strong>Herpes Genital</strong>
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Disebabkan oleh virus herpes simpleks serotipe 2 dan
                            ditularkan melalui hubungan seksual. Luka melepuh di
                            area reproduksi, serta terasa gatal dan nyeri
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Luka melepuh di area reproduksi, serta terasa gatal
                            dan nyeri
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2">
                            <strong>
                              HIV/AIDS (<em>Human Immunodeficiency Virus</em>) /
                              (<em>Acquired Immttne Deficiency Syondrome</em>)
                            </strong>
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Penyakit ini sampai sekarang masih belum ada obatnya
                            dan menyerang kekebalan tubuh bagi penderitanya.
                            Penyakit ini menular melalui cairan kelamin, air
                            susu, dan darah.
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Penurunan berat badan drastis tanpa penyebab yang
                            jelas. Berkeringat banyak di malam hari. Bercak
                            putih di lidah, mulut, organ kelamin, atau anus
                            (infeksi jamur Candidiasis). Bintik-bintik keunguan
                            pada kulit yang tidak hilang (Kaposi&apos;s
                            sarcoma). Demam berkepanjangan (lebih dari 10 hari)
                            atau berulang. Diare kronis (berlangsung lebih dari
                            sebulan). Infeksi jamur berulang di mulut,
                            tenggorokan, atau vagina.
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 px-4 py-2">
                            <strong>
                              HPV (<em>Human Papillomavirus</em>)
                            </strong>
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Kutil kelamin, beberapa jenis menyebabkan kanker
                            serviks / anus.
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            Memunculkan seperti kutil pada kelamin.
                          </td>
                        </tr>
                        {/* Baris lainnya... */}
                      </tbody>
                    </table>
                  </div>
                  {/* Mencegah PMS */}
                  <div className="bg-yellow-50 border border-orange-300 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-orange-700 mb-2">
                      Berikut cara mencegah Penyakit Menular Seksual (PMS):
                    </h4>
                    <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
                      <li>Selalu menjaga kebersihan organ reproduksi</li>
                      <li>Jangan menggunakan jarum suntik bekas</li>
                      <li>
                        Setia pada satu pasangan (tidak berganti-ganti pasangan)
                      </li>
                      <li>Tidak melakukan hubungan seks sebelum menikah</li>
                      <li>
                        Mencegah PMS menggunakan kondom ketika melakukan
                        hubungan seksual
                      </li>
                      <li>Tidak menggunakan narkoba</li>
                      <li>
                        Selalu mencari informasi dan edukasi tentang PMS, mulai
                        dari gejala, pencegahan, dan pengobatan
                      </li>
                    </ul>
                  </div>

                  {/* Metode dan Media */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-orange-700 mb-2">
                        Metode:
                      </h4>
                      <p className="text-gray-800">
                        Ceramah, Tanya Jawab, dan Diskusi
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-orange-700 mb-2">Media:</h4>
                      <p className="text-gray-800">-</p>
                    </div>
                  </div>
                  {/* Contoh Pembelajaran */}
                  <div className="bg-yellow-50 border border-orange-300 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-700 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Murid diberikan penjelasan seputar masalah pada organ
                      reproduksi, lalu guru membuka sesi tanya jawab dengan cara
                      mendiskusikannya bersama-sama di dalam kelas.
                    </p>
                  </div>
                </div>
              </section>
              {/* Topik 3 */}
              <section id="perilaku-seksual" className="mb-10">
                {/* Judul Utama */}
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  Topik 3. Perilaku Seksual
                </h3>

                {/* Paragraf Penjelasan */}
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Topik yang sesuai untuk jenjang <strong>LANJUTAN</strong> ini
                  merupakan topik yang sekarang sangat marak terjadi dikehidupan
                  murid yang menginjak masa remaja. Sama dengan topik
                  sebelumnya, dalam mengajarkan topik ini sebaiknya diajarkan
                  oleh guru yang seusai dengan jenis kelamin masing-masing
                  murid. Perilaku seksual remaja merupakan fenomena yang
                  kompleks dan dipengaruhi oleh berbagai faktor. remaja mulai
                  mengalami perubahan fisik dan emosional yang signifikan, yang
                  sering kali memicu rasa ingin tahu mengenai seksualitas.
                  Ketika memasuki masa pubertas, mereka cenderung mencari
                  informasi tentang hubungan dan seks, baik dari teman sebaya
                  maupun media.
                </p>

                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Interaksi sosial menjadi sangat penting. Murid yang sudah
                  menginjak masa remaja sering kali terpengaruh oleh norma-norma
                  kelompok dan budaya di sekitar mereka. Pengaruh teman sebaya
                  dapat mendorong perilaku seksual yang lebih berani, termasuk
                  hubungan intim dan eksplorasi seksual. Namun, di sisi lain,
                  pendidikan seksual yang memadai juga dapat membantu mereka
                  membuat keputusan yang lebih baik dan bertanggung jawab.
                </p>

                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Seiring berjalannya waktu, pengalaman pertama dalam hubungan
                  romantis yang disebut “pacaran” sering kali menjadi titik
                  balik bagi remaja. Mereka belajar tentang emosi, komitmen, dan
                  konsekuensi dari tindakan mereka. Penting bagi orang tua dan
                  pendidik untuk memberikan dukungan dan informasi yang tepat
                  agar remaja dapat memahami dan menghadapi tantangan berpacaran
                  yang menimbulkan perilaku seksual. Dengan pendekatan yang
                  tepat, remaja dapat mengembangkan sikap yang sehat terhadap
                  seksualitas dan hubungan interpersonal. Ada beberapa contoh
                  perilaku seksual yang timbul pada kehidupan murid yang
                  menginjak masa remaja, diantaranya berpegangan tangan,
                  bericuman, berpelukan, berfantasi/berimajinasi, masturbasi,
                  petting, bersenggama sebelum menikah. Beberapa perilaku
                  tersebut akan dijelaskan pada tabel dibawah ini.
                </p>

                {/* Tabel Bentuk Perilaku Seksual */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-gray-400">
                    <thead>
                      <tr className="bg-amber-50 font-semibold">
                        <th className="border border-gray-400 px-4 py-3 text-amber-800 w-1/4">
                          Bentuk Perilaku
                        </th>
                        <th className="border border-gray-400 px-4 py-3 text-amber-800 w-1/3">
                          Definisi
                        </th>
                        <th className="border border-gray-400 px-4 py-3 text-amber-800 w-2/5">
                          Dampak Negatif
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          Berfantasi / Berimajinasi
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          Penciptaan sebuah imajinasi yang melibatkan aktivitas
                          seksual dalam pikiran seseorang. Proses ini terjadi
                          secara spontan dan dapat mempengaruhi keinginan
                          perilaku seksual individu.
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          <ol className="list-decimal pl-4">
                            <li>
                              Dapat memicu ekspektasi yang tidak realistis
                              terhadap hubungan
                            </li>
                            <li>Menimbulkan kecemasan dan tekanan sosial</li>
                            <li>
                              Mengganggu fokus pendidikan dan pengembangan diri.
                            </li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          Masturbasi
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          Suatu aktivitas yang mengarah pada pemusatan nafsu
                          birahi melalui rangsangan alat kelamin dan alat vital
                          lainnya, baik dilakukan sendiri atau orang lain hingga
                          mencapai orgasme bagi laki-laki dan ejakulasi bagi
                          wanita dengan berkontraksinya otot-otot secara
                          otomatis terutama otot vagina yang kadar kontraksinya
                          paling besar.
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          <ol className="list-decimal pl-4">
                            <li>
                              Dapat menyebabkan kecanduan dan mengganggu
                              konsentrasi dalam belajar dan aktivitas
                              sehari-hari.
                            </li>
                            <li>
                              Sering menimbulkan rasa bersalah dan kecemasan.
                            </li>
                            <li>
                              Mempengaruhi minat terhadap hubungan intim yang
                              sehat.
                            </li>
                          </ol>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          <em>Petting</em>
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          Perilaku saling menggosokkan alat kelamin.
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          <ol className="list-decimal pl-4">
                            <li>Menyebabkan kecanduan yang berlebihan</li>
                            <li>
                              Menjadi awal untuk melakukan hubungan seksual
                              secara langsung
                            </li>
                            <li>Menggangu Motivasi Belajar</li>
                          </ol>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Faktor Internal dan Eksternal */}
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Ada beberapa faktor yang mendorong munculnya perilaku seksual
                  pada anak dengan hambatan penglihatan yang notabene nya sulit
                  menerima informasi secara visual. Faktor tersebut terbagi atas
                  dua, yaitu faktor internal dan faktor eksternal. Berikut
                  faktor yang mendorong munculnya perilaku seksual pada anak
                  dengan hambatan penglihatan.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-gray-400">
                    <thead>
                      <tr className="bg-orange-100 font-semibold">
                        <th className="border border-gray-400 px-4 py-3 text-orange-800 w-1/2">
                          Faktor Internal
                        </th>
                        <th className="border border-gray-400 px-4 py-3 text-orange-800 w-1/2">
                          Faktor Eksternal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Seorang anak yang menjalin hubungan pacaran, memiliki
                          rasa kesepian, cinta, serta rasa ingin tahu muncul
                          didalam dirinya. Tapi, minimnya pengetahuan dan
                          pemahaman mengenai moralitas dalam menjalin kasih yang
                          dapat menimbulkan perilaku yang beresiko.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Kemajuan teknologi yang pesat, sehingga anak dapat
                          mengakses apapun di dunia ini. Orang tua yang minim
                          perhatian, dan komunikasi dalam keluarga yang rendah.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Metode dan Media */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">Metode:</h4>
                    <p className="text-gray-700">
                      Ceramah, Tanya Jawab, dan Diskusi
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">Media:</h4>
                    <p className="text-gray-700">-</p>
                  </div>
                </div>

                {/* Contoh Pembelajaran */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-bold text-orange-800 mb-2">
                    Contoh Pembelajaran:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Guru mengajarkan sesuai dengan jenis kelamin masing-msaing
                    murid. Guru menjelaskan secara perlahan masing masing poin
                    materi agar anak dapat mencernanya dengan baik. Guru membuka
                    sesi tanaya jawab yang menimbulkan pola diskusi didalam nya
                    agar anak dengan hambatan penglihatan benar-benar paham dan
                    dapat menjauhi perilaku-perilaku seksual yang telah
                    dipelajari.
                  </p>
                </div>
              </section>
              {/* Topik 4 (Pergaulanku, Pergaulan Sehat) */}
              <section id="pergaulanku-pergaulan-sehat" className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-amber-700 border-b-2 border-amber-500 pb-2">
                  Topik 4. Pergaulanku, Pergaulan Sehat
                </h3>
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Topik yang sesuai pada jenjang <strong>MENENGAH</strong>.
                  Dalam menjaga pergaulan, anak dengan hambatan penglihatan sama
                  dengan anak pada umumnya. Biasanya anak memiliki ketertarikan
                  kepada lawan jenis dimulai pada masa pubertas. Pubertas adalah
                  masa peralihan dari anak-anak menuju dewasa, ditandai dengan
                  perubahan fisik, emosional, dan hormonal yang mempersiapkan
                  tubuh untuk kematangan seksual dan reproduksi. Pubertas antara
                  laki-laki dan perempuan memiliki beberapa perbedaan. Berikut
                  perbedaan pubertas antara anak laki-laki dan anak perempuan.
                </p>

                {/* Tabel Perbedaan Pubertas */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse border border-gray-400">
                    <thead>
                      <tr className="bg-amber-100 font-semibold">
                        <th className="border border-gray-400 px-4 py-3 text-amber-800 w-1/4">
                          Indikator
                        </th>
                        <th className="border border-gray-400 px-4 py-3 text-amber-800 w-1/4">
                          Laki-Laki
                        </th>
                        <th className="border border-gray-400 px-4 py-3 text-amber-800 w-1/4">
                          Perempuan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Usia
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          9–14 Tahun
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          8–13 Tahun
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Hormon
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Testosteron (dihasilkan testis)
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Estrogen dan Progesteron (dihasilkan ovarium)
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Fisik
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Rambut di wajah mulai tumbuh seperti kumis dan
                          janggut. Tumbuhnya rambut di ketiak dan kemaluan.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Tumbuhnya rambut di ketiak dan kemaluan.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Suara
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Suara membesar karena pembesaran laring.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Suara tetap tinggi dan tidak berubah signifikan.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Bentuk Tubuh
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Bahu melebar, otot berkembang, tinggi badan meningkat.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Pinggul melebar, payudara membesar, lemak di paha dan
                          bokong bertambah.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Organ Reproduksi
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Penis dan testis berkembang, sperma mulai diproduksi.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Vagina dan rahim berkembang, mulai menstruasi.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Pertumbuhan Tinggi
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Dimulai lebih lambat tetapi berlangsung lama.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Dimulai lebih cepat tetapi berhenti lebih awal.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Emosional
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Lebih agresif, energi meningkat, lebih berisiko
                          mengambil tindakan impulsif.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Lebih sensitif, lebih banyak berpikir soal penampilan.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-4 py-3">
                          Kematangan Reproduksi
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Produksi sperma dimulai, biasanya ditandai mimpi
                          basah.
                        </td>
                        <td className="border border-gray-400 px-4 py-3">
                          Menstruasi pertama menandakan awal siklus reproduksi.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Ketika anak pubertas, anak akan cenderung mencari jati dirinya
                  sendiri. Pada masa ini, pergaulan anak harus benar-benar
                  diawasi tanpa mengekang anak itu sendiri. Fase pubertas
                  sendiri adalah fase penting dalam kehidupan anak dengan
                  hambatan penglihatan. Dalam pergaulannya sendiri anak dengan
                  hambatan penglihatan sudah mulai merasa mandiri. Menjaga
                  pergaulan bagi anak dengan hambatan penglihatan sangat perlu
                  diperhatikan, pada saat anak mulai memiliki ketertarikan
                  dengan lawan jenis, maka peran guru dan orang tua harus turut
                  andil di dalamnya. Anak dengan hambatan penglihatan perlu
                  belajar tentang batasan dalam pergaulan. Berikut beberapa poin
                  dalam menjaga batasan anak dengan hambatan penglihatan dalam
                  pergaulan:
                </p>
                {/* Tips Pergaulan - styled box */}
                <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6 mt-6">
                  <h4 className="font-bold text-yellow-800 mb-4">
                    Tips Menjaga Pergaulan Anak dengan Hambatan Penglihatan
                  </h4>
                  <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
                    <li>
                      <span className="font-bold text-yellow-700">
                        Pendidikan seksual yang sesuai dengan usia dan kesiapan
                        mental anak
                      </span>
                      <br />
                      Pada tahap pubertas anak mengalami berbagai perubahan
                      fisik dan emosional yang dapat mempengaruhi perilaku
                      mereka. Oleh karena itu, memberikan pemahaman yang jelas
                      mengenai seksualitas, hubungan yang sehat, dan konsekuensi
                      dari tindakan seksual sangatlah krusial. Pendidikan
                      seksual yang komprehensif dapat membantu remaja untuk
                      memahami nilai-nilai dan norma-norma yang berkaitan dengan
                      hubungan interpersonal. Dengan pengetahuan yang cukup,
                      mereka dapat membuat keputusan yang lebih baik dan
                      bertanggung jawab mengenai tubuh dan kesehatan mereka.
                      Selain itu, pendidikan seksual juga dapat mengurangi
                      stigma dan kesalahpahaman yang sering kali mengelilingi
                      topik seksualitas.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Ajarkan anak-anak nilai moral yang kuat
                      </span>
                      <br />
                      Anak-anak perlu diajarkan nilai-nilai moral yang kuat agar
                      terhindar dari pergaulan bebas. Proses ini sebaiknya
                      dimulai sejak usia dini apalagi pad, ketika mereka masih
                      dalam tahap perkembangan karakter. Dalam lingkungan
                      keluarga, orang tua memiliki peran penting untuk
                      menanamkan prinsip-prinsip moral seperti kejujuran,
                      tanggung jawab, dan rasa hormat terhadap orang lain.
                      Melalui komunikasi yang terbuka, orang tua dapat
                      menjelaskan konsekuensi dari tindakan yang tidak sesuai
                      norma.
                      <br />
                      Sekolah juga berkontribusi dalam pembentukan karakter
                      anak. Kurikulum yang mengintegrasikan pendidikan moral
                      dapat membantu siswa memahami pentingnya nilai-nilai
                      tersebut. Selain itu, kegiatan ekstrakurikuler yang
                      positif dapat menjadi wadah bagi anak-anak untuk
                      berinteraksi dan belajar bekerja sama dengan baik.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Mendorong anak berpartisipasi dalam kegiatan yang
                        positif
                      </span>
                      <br />
                      Anak-anak harus didorong untuk berpartisipasi dalam
                      kegiatan positif. Pertama, orang tua dan pendidik perlu
                      mengenalkan berbagai aktivitas yang mendukung pengembangan
                      keterampilan sosial dan emosional. Misalnya, mendorong
                      anak untuk bergabung dalam kelompok bermain atau klub
                      olahraga dapat membantu mereka belajar bekerja sama dan
                      berkomunikasi dengan baik. Selanjutnya, partisipasi dalam
                      kegiatan seni juga dapat meningkatkan kreativitas dan
                      ekspresi diri anak.
                      <br />
                      Seiring berjalannya waktu, anak-anak yang terlibat dalam
                      kegiatan positif akan lebih percaya diri dan memiliki rasa
                      tanggung jawab yang tinggi. Keterlibatan ini juga dapat
                      mengurangi risiko perilaku negatif, seperti kenakalan
                      remaja dan pergaulan bebas. Oleh karena itu, penting bagi
                      orang tua, guru, dan masyarakat untuk menciptakan
                      lingkungan yang mendukung dan memberikan kesempatan bagi
                      anak-anak untuk berpartisipasi dalam kegiatan yang
                      bermanfaat.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Pergaulan yang baik untuk mencegah perilaku menyimpang
                      </span>
                      <br />
                      Pergaulan yang baik memiliki peranan penting dalam
                      membentuk karakter dan perilaku individu, terutama di
                      kalangan anak dan remaja. Ketika seseorang berinteraksi
                      dengan lingkungan sosial yang positif, mereka cenderung
                      mendapatkan pengaruh yang konstruktif. Hal ini dimulai
                      dari pembentukan hubungan yang sehat dengan teman sebaya,
                      di mana nilai-nilai baik dan norma sosial dapat saling
                      dipertukarkan. Dalam proses ini, anak belajar untuk
                      menghargai perbedaan, berkomunikasi dengan efektif, dan
                      mengembangkan empati. Seiring berjalannya waktu, pergaulan
                      yang baik ini dapat berfungsi sebagai penghalang terhadap
                      perilaku menyimpang. Ketika anak dengan hambatan
                      penglihatan dikelilingi oleh teman-teman yang mendukung
                      dan memiliki tujuan yang sama, mereka lebih termotivasi
                      untuk menghindari tindakan yang merugikan diri sendiri
                      atau orang lain.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Diskusi tentang hubungan romantis dengan anak perlu
                        dilakukan dengan bijak
                      </span>
                      <br />
                      Diskusi tentang hubungan romantis dengan anak perlu
                      dilakukan dengan bijak. Pertama-tama, penting untuk
                      menciptakan suasana yang aman dan terbuka, sehingga anak
                      merasa nyaman untuk berbagi perasaannya. Pada tahap ini,
                      orang tua dan guru dapat memulai dengan menanyakan
                      pandangan anak tentang cinta dan hubungan, serta
                      mendengarkan dengan seksama tanpa menghakimi.
                    </li>
                  </ol>
                </div>

                {/* Penutup */}
                <p className="mb-6 text-justify text-gray-700 leading-relaxed">
                  Setelah itu, orang tua dan guru harus memberikan informasi
                  yang tepat tentang hubungan yang sehat, termasuk nilai-nilai
                  seperti saling menghormati dan komunikasi yang baik. Dalam
                  proses ini, orang tua dan guru juga perlu menjelaskan tentang
                  risiko yang mungkin dihadapi dalam hubungan romantis, seperti
                  tekanan dari teman sebaya atau masalah emosional.
                </p>

                {/* Metode & Media */}
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 shadow-sm mt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-bold text-amber-800 mb-2">Metode:</h4>
                      <p className="text-gray-700">
                        Ceramah, Tanya jawab, dan Simulasi
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-800 mb-2">Media:</h4>
                      <p className="text-gray-700">-</p>
                    </div>
                  </div>
                </div>
                {/* Contoh Pembelajaran */}
                <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-amber-700 mb-6 mt-6">
                  <h4 className="font-bold text-amber-900 mb-3">
                    Contoh Pembelajaran:
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Murid diajak bercerita bersama lalu mendiskusikan tentang
                    ciri-ciri pubertas yang muncul terhadap dirinya. Simulasi
                    dapat dilakukan dengan cara membuat sebuah drama percakapan
                    antar murid dalam rangka mensimulasikan poin-poin dalam
                    menjaga batasan anak.
                  </p>
                </div>
              </section>
              <section id="rangkuman-bab3" className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  RANGKUMAN
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-justify text-gray-700 leading-relaxed">
                    Anak dengan hambatan penglihatan harus mengetahui
                    bagian-bagian tubuh mereka dengan penyebutan yang tepat.
                    Dalam pelaksanaannya juga anak diajarkan defenisi “ADA
                    RAHASIA DIBALIK BAJUMU”. Dimana defenisi tersebut meliputi 4
                    bagian terlarang yang disentuh oleh orang lain. Dalam
                    menjaga kesehatan reproduksi anak dikenalkan tentang tata
                    cara menjaga kebersihan organ reproduksi dengan runtutan
                    yang baik dan benar. Bagi anak perempuan dijelaskan juga
                    bagaimana cara menggunakan pembalut dengan baik dan benar
                    dalam menjaga kebersihan organ reproduksi ketika menstruasi.
                    Nama-nama organ reproduksi serta fungsinya merupakan hal
                    yang termasuk kedalam pengetahuan menjaga kesehatan
                    reproduksi sehingga anak dengan hambatan penglihatan dapat
                    menjauhi segala resiko penyakit menular seksual baik karena
                    tidak menjaga kebersihan organ reproduksi maupun tidak
                    menjaga perilaku seksualnya. Sebagai guru, kita harus
                    memberikan beberapa tips kepada anak dengan hambatan
                    penglihatan dalam menjaga pergaulannya sehingga menjadi
                    pergaulan yang sehat.
                  </p>
                </div>
              </section>

              <section id="latihan-mandiri-bab3" className="mb-10">
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  LATIHAN MANDIRI
                </h3>
                <div className="space-y-4 text-gray-700 text-justify leading-relaxed">
                  <ol className="list-decimal list-inside space-y-4 text-gray-700">
                    <li className="leading-relaxed">
                      Sebutkan area apa saja yang masuk kedalam defenisi “ADA
                      RAHASIA DIBALIK BAJUMU”
                    </li>
                    <li className="leading-relaxed">
                      Apa fungsi organ Testis pada laki-laki?
                    </li>
                    <li className="leading-relaxed">
                      Apa itu Hidrokel yang menjadi masalah kesehatan reproduksi
                      perempuan?
                    </li>
                    <li className="leading-relaxed">
                      Kenapa tindakan petting harus dihindari?
                    </li>
                    <li className="leading-relaxed">
                      Umur berapa idealnya anak laki-laki mengalami masa
                      pubertas?
                    </li>
                  </ol>
                </div>
              </section>

              {/* Referensi */}
              <section id="referensi" className="mt-8">
                <h3 className="text-lg font-bold text-amber-700 border-b-2 border-amber-500 pb-2 mb-4">
                  Referensi
                </h3>
                <ul className="list-inside space-y-2 text-gray-700 leading-relaxed">
                  <li>
                    Al-Karimah, N. F. (2018).{" "}
                    <em>
                      Sosialisasi makna “masa puber” bagi remaja desa Tegalrejo,
                      Kelurahan Ngesrep, Kecamatan Ngemplak, Kabupaten Boyolali,
                      Jawa Tengah
                    </em>
                    . Jurnal Abdi MOESTOPO, 01 (01), 7–13.
                  </li>
                  <li>
                    Azizah, N., Riana, E. N., Megasari, A. L. M., Arhesa, S.,
                    Syafriana, I. N. S. V., Perestroika, G. D., Aswan, M. Y.,
                    Alfiranne, & Ariescha, P. A. Y. (2023).
                    <em>Fisiologi sistem reproduksi</em>. Yayasan Kita Menulis.
                  </li>
                  <li>
                    Beddu, M. J., Farizi, K., Noor, H., & Marlianis. (2024).
                    <em>
                      Homosexual, lesbian, dan masturbasi perspektif islam
                    </em>
                    . Jurnal Addayan, 19 (1), 35–44.
                  </li>
                  <li>
                    Bria, M., D. (2022).
                    <em>
                      Stop HIV/AIDS : kenali penyakitnya, hindari penularannya
                      dengan ABCDE.
                    </em>
                    Rotendaokab.go.id.
                    <a
                      href="https://rotendaokab.go.id/stop-hiv-aids-kenali-penyakitnya-hindari-penularannya-dengan-abcde.php"
                      className="text-blue-600 underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (https://rotendaokab.go.id/stop-hiv-aids-kenali-penyakitnya-hindari-penularannya-dengan-abcde.php)
                    </a>
                  </li>
                  <li>
                    Hidayat, D., FINSIDV., FAADV., Wedayani, A. A., A., N.,
                    Putri, N. A., & Sari, D. S. (2024).
                    <em>
                      Edukasi Mengenai Kebersihan Genitalia Pada Remaja Awal di
                      SMPK Kusuma Mataram
                    </em>
                    . Jurnal Pengabdian Magister Pendidikan IPA, 7 (1), 358–361.
                  </li>
                  <li>
                    Kausar, H. (2014).{" "}
                    <em>Good Touch, Bad Touch, and Secret Touch</em>. Pemerintah
                    Aceh.
                    <a
                      href="https://acehprov.go.id/berita/kategori/serba-serbi/62-good-touch-bad-touch-and-secret-touch"
                      className="text-blue-600 underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (https://acehprov.go.id/berita/kategori/serba-serbi/62-good-touch-bad-touch-and-secret-touch)
                    </a>
                  </li>
                  <li>
                    Rahmi, D., & Rikayoni. (2023).
                    <em>
                      Edukasi kesehatan terhadap pengetahuan anak usia sekolah
                      melalui video pembelajaran menjaga diri/kuatir tentang
                      bagian tubuh penting yang tidak boleh disentuh oleh orang
                      lain di SDIT Cendekia Andalas
                    </em>
                    . Jurnal Abdimas Saintika, 5 (2), 99–106.
                  </li>
                  <li>
                    Wahyuni, H., Amelia, L., Putri, B. S., Nurhasana, E.,
                    Garini, N. A., DR, S. S., & Sinaga, I. E. (2023).
                    <em>
                      Mencegah dampak negatif gaya berpacaran yang berisiko
                      dengan layanan penguasaan konten di SMP N 9 Kota Jambi
                    </em>
                    . Journal of Community Service (JCOS), 1 (3), 95–101.
                  </li>
                  <li>
                    Wardiyah, A., Aryanti, L., Marliyana, Oktaliana, Khoirudin,
                    P., & Dea, M. A. (2022).
                    <em>
                      Penyuluhan kesehatan tentang pentingnya menjaga kesehatan
                      alat reproduksi
                    </em>
                    . Journal Of Public Health Concerns, 2 (1), 41–53.
                  </li>
                </ul>
              </section>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center py-6 text-yellow-600">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">3</span>
          <span className="text-2xl">⚥</span>
        </div>
      </div>
    </div>
  );
};

export default Bab3;
