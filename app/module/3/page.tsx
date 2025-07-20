"use client";
import React from "react";
import Image from "next/image";
import boy from "@/app/assets/BOY3.png";
import girl from "@/app/assets/GIRL.png";
import both from "@/app/assets/both2.png";

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
                  Pada topik ini peserta didik dengan hambatan penglihatan
                  diajarkan mengenal bentuk tubuhnya baik laki-laki ataupun
                  perempuan. Topik ini dapat diajarkan pada anak jenjang{" "}
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
                          <td className="border border-gray-400 px-4 py-6">
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
                          <td className="border border-gray-400 px-4 py-6">
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
                    didik. Pada sesi akhir peserta didik diajak untuk
                    menyebutkan dan menyentuh organ tubuh yang dimaksud melalui
                    manekin ataupun pengalaman langsung dengan tubuhnya.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <h4 className="font-bold text-yellow-800 mb-2">
                    Topik 1.2: Ada Rahasia di Balik Bajumu!
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Materi selanjutnya pada topik ini adalah “ADA RAHASIA
                    DIBALIK BAJUMU!” istilah ini dapat diberikan kepada para
                    peserta didik tingkat dasar dalam mengajarkan bagian tubuh
                    mana saja yang tidak boleh disentuh oleh orang lain. Area
                    rahasia tersebut yaitu:
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
                          Nyanyian dari <em>YouTube</em> berjudul
                          &ldquo;Sentuhan Boleh&rdquo;
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
                      Selanjutnya guru mengajak para peserta didik untuk
                      bernyanyi tentang lagu “sentuhan boleh”.
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
                  Pada topik ini, peserta didik dengan hambatan penglihatan
                  harus diajarkan bagaimana cara menjaga kesehatan reproduksi
                  nya. Kesehatan reproduksi ini dimulai dengan cara membersihkan
                  dan menjaga organ reproduksi dengan baik. Kita harus menjaga
                  kesehatan reproduksi tersebut, peserta didik juga harus
                  diajarkan bagian-bagian reproduksi setiap jenis kelamin.
                  Meskipun memberikan alat reproduksi ini hal yang biasa, akan
                  tetapi peserta didik tetap harus diajarkan tata cara
                  membersihkannya dengan baik.
                </p>

                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Pada penjelasannya nanti anak dengan hambatan penglihatan
                  diajarkan mulai dari ureta sampai dengan penis pada laki-laki
                  dan mulai dari ovarium sampai dengan vagina. Selain dari
                  bagian-bagian tersebut, fungsi dari setiap bagiannya juga
                  tidak luput dari pengajaran terhadap anak dengan hambatan
                  penglihatan. Pada materi ini guru diberikan kebebasan untuk
                  memberikannya kepada jenjang yang sesuai dengan kesiapan
                  mental peserta didik baik menengah ataupun lanjutan. Materi
                  ini didasarkan masing-masing jenis kelamin, guru laki-laki
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
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-yellow-200 text-center">
                      <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-gray-500">
                          contoh alat peraga organ reproduksi perempuan
                        </span>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-yellow-200 text-center">
                      <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-gray-500">
                          contoh alat peraga organ reproduksi laki-laki
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Contoh Pembelajaran */}
                  <div className="bg-yellow-100 border border-yellow-400 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Peserta didik sesuai diajarkan oleh guru sesuai jenis
                      kelamin masing-masing. Peserta didik diajak untuk
                      menyentuh organ reproduksi yang ada di manekin dan alat
                      lain sesuai daftar langkah-langkahnya sampai peserta didik
                      melakukannya. Guru memulai dengan melihat langkah-langkah
                      yang telah dilaksanakan oleh peserta didik.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Cara memberikan organ reproduksi diatas bersifat
                      fleksibel, maksudnya tidak hanya diajarkan di peserta
                      didik tingkat menengah dan lanjutan, pada tingkat dasar
                      juga bisa diajarkan sesuai dengan kesiapan mental dari
                      peserta didik tersebut.
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
                      disimulasikan, guru menginstruksikan peserta didik untuk
                      membawa pembalut dan rumah dengan berkoordinasi bersama
                      orang tua untuk menjelaskan materi yang berkaitan dengan
                      fungsi peserta didik membawa pembalut. Guru perempuan
                      menuntut peserta didik perempuan untuk mengikuti
                      langkah-langkah mengganti pembalut. Lalu bagi peserta
                      didik perempuan yang menstruasi diminta untuk memberikan
                      umpan baliknya setelah mempraktikkannya langsung.
                    </p>
                  </div>
                </div>
                {/* Topik 2.3 */}
                <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-500 mb-6">
                  <h4 className="font-bold text-amber-900 mb-4">
                    Topik 2.3: Pada jenjang LANJUTAN, bagian organ reproduksi
                    diajarkan kepada peserta didik dengan hambatan penglihatan.
                    Dengan mengajarkan organ reproduksi tersebut, anak diajarkan
                    tahu akan bagian-bagian reproduksi yang dimilikinya.
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
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <div className="bg-pink-200 h-40 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-red-300"></div>
                          <div className="relative z-10 bg-white bg-opacity-80 rounded-full p-4">
                            <span className="text-gray-700 text-xs font-medium">
                              Model 3D
                              <br />
                              Organ Reproduksi
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          contoh alat peraga organ reproduksi perempuan
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
                        <div className="bg-blue-200 h-40 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-300"></div>
                          <div className="relative z-10 bg-white bg-opacity-80 rounded-full p-4">
                            <span className="text-gray-700 text-xs font-medium">
                              Model 3D
                              <br />
                              Organ Reproduksi
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          contoh alat peraga organ reproduksi laki-laki
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contoh Pembelajaran */}
                  <div className="bg-amber-50 border border-amber-500 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-800 mb-2">
                      Contoh Pembelajaran:
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Guru menjelaskan masing-masing organ reproduksi, lalu
                      membantu peserta didik dengan menyentuh organ reproduksi
                      yang disebutkan kepada alat peraga organ reproduksi yang
                      ada.
                    </p>
                  </div>
                </div>
                {/* Topik 2.4 */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
                  <h4 className="font-bold text-orange-800 mb-4">
                    Topik 2.4: jenjang LANJUTAN. Dalam menjaga kesehatan
                    reproduksi, anak juga harus dikenalkan berbagai masalah
                    kesehatan yang akan muncul jika tidak menjaga kesehatan
                    reproduksi manusia. Masalah kesehatan ini merupakan
                    konsekuensi terhadap apa yang dilakukan anak ketika tidak
                    menjaga kesehatan reproduksi dengan baik dan benar. Ada
                    beberapa jenis masalah kesehatan reproduksi pada laki-laki
                    dan perempuan serta dampak saat tidak menjaga kesehatan
                    organ reproduksi, diantaranya:
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
                      Peserta didik diberikan penjelasan seputar masalah pada
                      organ reproduksi, lalu guru membuka sesi tanya jawab
                      dengan cara mendiskusikannya bersama-sama di dalam kelas.
                    </p>
                  </div>
                </div>
                {/* Topik 2.5 */}
                <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-400 mb-6">
                  <h4 className="font-bold text-orange-700 mb-4">
                    Topik 2.5: jenjang LANJUTAN. Selain masalah kesehatan organ
                    reproduksi yang disebutkan pada topik 2.4 sebelumnya. Organ
                    reproduksi juga bisa terserang beberapa penyakit yang
                    berbahaya dikarenakan tidak menjaga kebersihan organ
                    reproduksi dan memiliki pergaulan yang kurang sehat dalam
                    kehidupan. Berikut beberapa penyakit yang dapat menyerang
                    organ reproduksi manusia:
                  </h4>

                  {/* Tabel Penyakit Reproduksi */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-yellow-50 font-semibold">
                          <th className="border border-gray-400 px-4 py-3 text-orange-800 w-1/3">
                            Nama Penyakit
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
                        </tr>
                        {/* Baris lainnya... */}
                      </tbody>
                    </table>
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
                      Peserta didik diberikan penjelasan seputar masalah pada
                      organ reproduksi, lalu guru membuka sesi tanya jawab
                      dengan cara mendiskusikannya bersama-sama di dalam kelas.
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
                  peserta didik yang menginjak masa remaja. Sama dengan topik
                  sebelumnya, dalam mengajarkan topik ini sebaiknya diajarkan
                  oleh guru yang sesuai dengan jenis kelamin masing-masing
                  peserta didik. Perilaku seksual remaja merupakan fenomena yang
                  kompleks dan dipengaruhi oleh berbagai faktor. Remaja mulai
                  mengalami perubahan fisik dan emosional yang signifikan, yang
                  sering kali memicu rasa ingin tahu mengenai seksualitas.
                  Ketika memasuki masa pubertas, mereka cenderung mencari
                  informasi tentang hubungan dan seks, baik dari teman sebaya
                  maupun media.
                </p>

                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Interaksi sosial menjadi sangat penting. Peserta didik yang
                  sudah menginjak masa remaja sering kali terpengaruh oleh
                  norma-norma kelompok dan budaya di sekitar mereka. Pengaruh
                  teman sebaya dapat mendorong perilaku seksual yang lebih
                  berani, termasuk hubungan intim dan eksplorasi seksual. Namun,
                  di sisi lain, pendidikan seksual yang memadai juga dapat
                  membantu mereka membuat keputusan yang lebih baik dan
                  bertanggung jawab.
                </p>

                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Seiring berjalannya waktu, pengalaman pertama dalam hubungan
                  romantis yang disebut &quot;pacaran&quot; sering kali menjadi
                  titik balik bagi remaja. Mereka belajar tentang emosi,
                  komitmen, dan konsekuensi dari tindakan mereka. Penting bagi
                  orang tua dan pendidik untuk memberikan dukungan dan informasi
                  yang tepat agar remaja dapat memahami dan menghadapi tantangan
                  berpacaran yang menimbulkan perilaku seksual. Dengan
                  pendekatan yang tepat, remaja dapat mengembangkan sikap yang
                  sehat terhadap seksualitas dan hubungan interpersonal.
                </p>

                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Beberapa contoh perilaku seksual yang timbul pada kehidupan
                  peserta didik yang menginjak masa remaja, diantaranya
                  berpegangan tangan, berciuman, berpelukan,
                  berfantasi/berimajinasi, masturbasi,
                  <em> petting</em>, bersenggama sebelum menikah. Beberapa
                  perilaku tersebut akan dijelaskan pada tabel di bawah ini.
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
                            <li>Tidak realistis terhadap hubungan</li>
                            <li>Menimbulkan kecemasan dan tekanan sosial</li>
                            <li>
                              Mengganggu fokus pendidikan dan pengembangan diri
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
                          birahi melalui rangsangan alat kelamin, baik dilakukan
                          sendiri atau orang lain hingga mencapai orgasme bagi
                          laki-laki dan ejakulasi bagi wanita dengan
                          berkontraksinya otot-otot secara otomatis terutama
                          otot vagina yang kadar kontraksinya paling besar.
                        </td>
                        <td className="border border-gray-400 px-4 py-2 text-gray-700 align-top">
                          <ol className="list-decimal pl-4">
                            <li>
                              Dapat menyebabkan kecanduan dan mengganggu
                              konsentrasi belajar dan aktivitas harian
                            </li>
                            <li>
                              Sering menimbulkan rasa bersalah dan kecemasan
                            </li>
                            <li>
                              Mempengaruhi minat terhadap hubungan intim yang
                              sehat
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
                  pada anak dengan hambatan penglihatan yang notabene sulit
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
                    Guru mengajarkan sesuai dengan jenis kelamin masing-masing
                    peserta didik. Guru menjelaskan secara perlahan
                    masing-masing poin materi agar anak dapat mencernanya dengan
                    baik. Guru membuka sesi tanya jawab yang menimbulkan pola
                    diskusi di dalamnya agar anak dengan hambatan penglihatan
                    benar-benar paham dan dapat menjauhi perilaku-perilaku
                    seksual yang telah dipelajari.
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
                  laki-laki dan perempuan memiliki beberapa perbedaan.
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
                        Pendidikan seksual sesuai usia & kesiapan mental
                      </span>
                      <br />
                      Memberikan pemahaman tentang seksualitas, hubungan sehat,
                      dan konsekuensi tindakan seksual. Pendidikan yang benar
                      membantu remaja membuat keputusan yang bertanggung jawab.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Ajarkan nilai moral yang kuat
                      </span>
                      <br />
                      Penanaman prinsip kejujuran, tanggung jawab, dan rasa
                      hormat sejak dini mencegah pergaulan bebas. Sekolah &
                      keluarga berperan penting.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Dorong anak ikut kegiatan positif
                      </span>
                      <br />
                      Bergabung dengan klub olahraga, seni, atau kelompok
                      bermain membantu membangun keterampilan sosial dan
                      mengurangi risiko perilaku negatif.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Pergaulan sehat mencegah perilaku menyimpang
                      </span>
                      <br />
                      Lingkungan teman yang mendukung memotivasi anak untuk
                      menghindari perilaku berisiko.
                    </li>
                    <li>
                      <span className="font-bold text-yellow-700">
                        Diskusi bijak tentang hubungan romantis
                      </span>
                      <br />
                      Orang tua & guru perlu menciptakan suasana terbuka agar
                      anak nyaman berbagi perasaan serta memahami hubungan yang
                      sehat.
                    </li>
                  </ol>
                </div>

                {/* Penutup */}
                <p className="mb-6 text-justify text-gray-700 leading-relaxed">
                  Orang tua dan guru harus memberikan informasi yang tepat
                  tentang hubungan yang sehat, termasuk nilai-nilai seperti
                  saling menghormati dan komunikasi yang baik. Mereka juga perlu
                  menjelaskan risiko yang mungkin dihadapi dalam hubungan
                  romantis, seperti tekanan teman sebaya atau masalah emosional.
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
                    Peserta didik diajak bercerita bersama lalu mendiskusikan
                    tentang ciri-ciri pubertas yang muncul terhadap dirinya.
                    Simulasi dapat dilakukan dengan cara membuat sebuah drama
                    percakapan antar peserta didik dalam rangka mensimulasikan
                    poin-poin dalam menjaga batasan anak.
                  </p>
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
