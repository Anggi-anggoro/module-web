"use client";
import Image from "next/image";
import React from "react";
import boy from "@/app/assets/BOY3.png";
import girl from "@/app/assets/GIRL.png";
import both from "@/app/assets/both2.png";

const Bab3 = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 leading-relaxed">
      <section id="bab3" className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-xl font-bold text-center">BAB III</h1>
        <h2 className="text-lg font-semibold text-center mb-4">
          MATERI PENDIDIKAN SEKSUAL
        </h2>

        {/* Tujuan */}
        <div>
          <h3 className="font-semibold mb-2">Tujuan Pembelajaran:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Menjelaskan Topik 1 (Bagaimana Bentuk Tubuhku?)</li>
            <li>Menjelaskan Topik 2 (Ayo jaga Kesehatan Reproduksi!)</li>
            <li>Menjelaskan Topik 3 (Perilaku Seksual)</li>
            <li>Menjelaskan Topik 4 (Pergaulanku, Pergaulan Sehat!)</li>
          </ol>
        </div>

        {/* Deskripsi Topik */}
        <div>
          <h3 className="font-semibold mt-6">
            Topik 1. Bagaimana Bentuk Tubuhku?
          </h3>
          <p className="text-justify">
            Pada topik ini peserta didik dengan hambatan penglihatan diajarkan
            mengenal bentuk tubuhnya baik laki-laki ataupun perempuan. Topik ini
            dapat diajarkan pada anak jenjang <strong>DASAR</strong>. Ditopik
            ini anak diajarkan bagian-bagian tubuh mereka dan perbedaan antara
            bagian tubuh laki-laki dan perempuan.
          </p>
          <p className="text-justify mt-2">
            <strong>Topik 1.1:</strong> Dimulai dengan bentuk tubuh, dikarenakan
            anak dengan hambatan penglihatan biasanya tidak memiliki hambatan
            pada intelektualnya, maka sejak dini kita sudah harus membiasakan
            dengan bahasa-biologis dalam pengucapan dari bentuk tubuh tersebut.
            Misalnya, penggunaan kata “burung” sudah mulai kita ajarkan dengan
            pembiasaan nama “penis”. Penggunaan kata “susu” sudah mulai kita
            ajarkan pembiasaan nama “payudara”. Pada topik ini juga untuk
            peserta didik pada tingkat dasar juga harus diajarkan mana saja
            bagian tubuh yang boleh disentuh dan tidak boleh disentuh oleh orang
            lain.
          </p>
        </div>

        {/* Tabel Ilustrasi */}
        <div className="border border-gray-400 rounded-md overflow-x-auto mt-6">
          <table className="w-full text-sm text-center table-fixed border-collapse">
            <thead>
              <tr className="bg-gray-100 font-semibold">
                <th className="border px-2 py-1 w-1/2">Laki-laki</th>
                <th className="border px-2 py-1 w-1/2">Perempuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-3">
                  <Image
                    src={boy}
                    alt="Tubuh Laki-Laki"
                    width={600}
                    height={800}
                    className="mx-auto w-[300px] md:w-[360px] lg:w-[800px] h-auto"
                  />
                </td>
                <td className="border px-2 py-3">
                  <Image
                    src={girl}
                    alt="Tubuh Perempuan"
                    width={600}
                    height={800}
                    className="mx-auto w-[300px] md:w-[360px] lg:w-[800px] h-auto"
                  />
                </td>
              </tr>
              <tr className="bg-gray-100 font-semibold">
                <td className="border px-2 py-1" colSpan={2}>
                  Keterangan
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-2 text-left align-top">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Mulut</li>
                    <li>Dada</li>
                    <li>Tangan</li>
                    <li>Perut</li>
                    <li>Penis</li>
                    <li>Kaki</li>
                    <li>Pantat (Bokong)</li>
                  </ol>
                </td>
                <td className="border px-2 py-2 text-left align-top">
                  <ol className="list-decimal list-inside space-y-1">
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
        {/* Kredit Gambar */}
        <div className="mt-6 text-xs text-gray-500">
          <p>
            Gambar laki-laki diambil dari:{" "}
            <a
              href="https://www.freepik.com/free-vector/opposite-words-with-front-back-young-man_15952045.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Freepik - Front/Back Man
            </a>{" "}
            dan gambar perempuan dari:{" "}
            <a
              href="https://www.freepik.com/free-vector/opposite-words-with-front-back-young-woman_12364779.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Freepik - Front/Back Woman
            </a>
            . Gambar telah diedit dan ditambahkan nomor penanda sesuai tabel
            keterangan.
          </p>
        </div>

        {/* Metode & Media */}
        <div className="mt-6">
          <p>
            <strong>Metode:</strong> Ceramah, Tanya Jawab, dan Praktik
          </p>
          <p>
            <strong>Media:</strong> Manekin Tubuh Manusia Laki-Laki dan
            Perempuan & tubuh anak itu sendiri
          </p>
        </div>

        {/* Contoh Pembelajaran */}
        <div className="text-justify">
          <p>
            <strong>Contoh pembelajaran:</strong> Anak diajak untuk menyebutkan
            organ tubuh yang diketahuinya, lalu guru membuka sesi tanya jawab
            dengan para peserta didik. Pada sesi akhir peserta didik diajak
            untuk menyebutkan dan menyentuh organ tubuh yang dimaksud melalui
            manekin ataupun pengalaman langsung dengan tubuhnya.
          </p>
        </div>

        {/* Topik 1.2 */}
        <h4 className="font-semibold mt-6">
          Topik 1.2: Ada Rahasia di Balik Bajumu!
        </h4>
        <p>
          Istilah ini diberikan kepada peserta didik tingkat dasar untuk
          mengajarkan bagian tubuh yang tidak boleh disentuh oleh orang lain.
          Area rahasia tersebut yaitu:
        </p>
        <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
          {/* Kiri: Daftar Area Rahasia */}
          <div className="w-full md:w-1/2">
            <p className="mb-2 font-semibold">Area rahasia tersebut yaitu:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Mulut</li>
              <li>Dada / Payudara</li>
              <li>Penis / Vagina</li>
              <li>Pantat (Bokong)</li>
            </ul>
          </div>

          {/* Kanan: Gambar */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={both}
              alt="Area rahasia tubuh"
              width={400}
              height={400}
              className="w-full max-w-[300px] md:max-w-[400px] h-auto"
            />
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <p>
            <strong>Metode:</strong> Ceramah dan Praktik
          </p>
          <p>
            <strong>Media:</strong> Nyanyian dari{" "}
            <span className="italic">YouTube</span> berjudul “Sentuhan Boleh”
          </p>
          <p>
            <strong>Contoh Pembelajaran:</strong> Guru memberikan pemahaman
            tentang area rahasia, lalu mengajak menyanyi dan berdiskusi tentang
            lagu tersebut.
          </p>
        </div>
      </section>

      <section id="topik2" className="max-w-5xl mx-auto space-y-6">
        <h3 className="font-semibold mt-6 text-lg">
          Topik 2. Ayo Jaga Kesehatan Reproduksi!
        </h3>
        <p className="text-justify">
          Pada topik ini, peserta didik dengan hambatan penglihatan harus
          diajarkan bagaimana cara menjaga kesehatan reproduksi. Kesehatan
          reproduksi ini dimulai dengan cara membersihkan dan menjaga organ
          reproduksi dengan baik. Selain menjaga kesehatan reproduksi tersebut,
          peserta didik juga harus diajarkan bagian-bagian reproduksi setiap
          jenis kelamin. Meskipun membersihkan alat reproduksi ini hal yang
          biasa, akan tetapi peserta didik tetap harus diajarkan tata cara
          membersihkannya dengan baik.
        </p>
        <p className="text-justify">
          Pada penjelasannya nanti anak dengan hambatan penglihatan diajarkan
          mulai dari uretra sampai dengan penis pada laki-laki dan mulai dari
          ovarium sampai dengan vagina. Selain dari bagian-bagian tersebut,
          fungsi dari setiap bagiannya juga tidak luput dari pengajaran terhadap
          anak dengan hambatan penglihatan. Pada materi ini guru diberikan
          kebebasan untuk memberikannya kepada jenjang yang sesuai dengan
          kesiapan mental peserta didik baik menengah ataupun lanjutan. Materi
          ini disesuaikan masing-masing jenis kelamin, guru laki-laki
          mengajarkan kepada anak laki-laki dan guru perempuan mengajarkan
          kepada anak perempuan.
        </p>

        {/* Tabel Tata Cara Membersihkan Organ Reproduksi */}
        <h4 className="font-semibold text-base mt-4">
          Topik 2.1: Jenjang DASAR & MENENGAH. Tata cara dalam membersihkan
          organ reproduksi baik laki-laki atau perempuan sebagai berikut:
        </h4>
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full text-sm border border-gray-400">
            <thead>
              <tr className="bg-gray-200 text-center font-semibold">
                <th className="border px-2 py-1 w-1/2">Laki-laki</th>
                <th className="border px-2 py-1 w-1/2">Perempuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 align-top">
                  <ol className="list-decimal list-inside space-y-2 text-justify">
                    <li>Penis dibersihkan secara rutin dan runtut</li>
                    <li>
                      Cuci penis ketika mandi menggunakan sabun dan air mengalir
                    </li>
                    <li>
                      Penis dicuci mulai dari awal batang sampai dengan kepala
                      penis
                    </li>
                    <li>
                      Setelah dicuci, penis dikeringkan menggunakan handuk
                      lembut, kering, bersih dan tidak berbau atau menggunakan
                      tisu baru. Pastikan penis benar-benar kering pada area
                      kulup (bagi penis yang belum disunat) agar mencegah
                      pertumbuhan bakteri atau jamur.
                    </li>
                    <li>
                      Jangan gunakan sabun cuci tangan, parfum, ataupun deodoran
                      pada area penis karena dapat menyebabkan infeksi atau
                      iritasi.
                    </li>
                    <li>
                      Ganti celana dalam secara rutin minimal dua kali sehari
                      dan gunakan celana dalam yang menyerap keringat.
                    </li>
                    <li>
                      Jika muncul gejala gatal, kemerahan, dan bau tidak sedap
                      segera konsultasikan ke dokter.
                    </li>
                  </ol>
                </td>
                <td className="border p-2 align-top">
                  <ol className="list-decimal list-inside space-y-1 text-justify">
                    <li>Vagina dibersihkan secara rutin dan runtut</li>
                    <li>
                      Bersihkan vagina dari arah yang benar, yaitu dari depan ke
                      belakang (dari vagina ke arah anus) agar mencegah bakteri
                      dari anus masuk ke vagina
                    </li>
                    <li>Gunakan air yang bersih dan mengalir</li>
                    <li>
                      Gunakan sabun khusus kewanitaan atau sabun khusus vagina,
                      serta hindari sabun wangi, sabun sirih, deodoran, dan
                      bedak karena dapat menyebabkan kulit kelamin rentan
                      iritasi
                    </li>
                    <li>
                      Hindari membersihkan vagina dari dalam untuk menghindari
                      terjadinya infeksi
                    </li>
                    <li>
                      Keringkan dengan benar. Area vagina dikeringkan
                      menggunakan handuk bersih atau tisu dengan cara
                      ditepuk-tepuk ringan dan bukan digosok.
                    </li>
                    <li>
                      Gunakan pakaian dalam yang menyerap keringat dan hindari
                      pakaian dalam yang terlalu ketat, lalu ganti pakaian dalam
                      minimal satu kali dalam sehari.
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Footer */}
      <div className="flex justify-end items-center px-6 py-2 text-sm text-orange-300 mt-16">
        <span className="mr-2">3</span>
        <span className="text-2xl">⚥</span>
      </div>
    </main>
  );
};

export default Bab3;
