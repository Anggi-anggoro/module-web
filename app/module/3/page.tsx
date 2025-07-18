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
                    <li>
                      Bagi yang sudah menstruasi, ganti pembalut secara rutin
                      saat menstruasi terjadi (4-6 jam sekali).
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Metode & Media Tambahan */}
        <div className="mt-6">
          <p>
            <strong>Metode:</strong> Simulasi & Praktik
          </p>
          <p>
            <strong>Media:</strong> Handuk, Tisu, Air Mengalir, dan Alat Peraga
            / Manekin
          </p>
        </div>

        {/* Gambar Alat Peraga */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <img
              src="/images/manekin_perempuan.png"
              alt="Alat Peraga Perempuan"
              className="mx-auto w-[200px]"
            />
            <p className="mt-2 text-sm">
              contoh alat peraga organ reproduksi perempuan
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/manekin_laki.png"
              alt="Alat Peraga Laki-Laki"
              className="mx-auto w-[200px]"
            />
            <p className="mt-2 text-sm">
              contoh alat peraga organ reproduksi laki-laki
            </p>
          </div>
        </div>

        {/* Contoh Pembelajaran */}
        <div className="text-justify mt-6">
          <p>
            <strong>Contoh Pembelajaran:</strong> Peserta didik sesuai diajarkan
            oleh guru sesuai jenis kelamin masing-masing. Peserta didik diajak
            untuk menyentuh organ reproduksi yang ada di manekin atau alat
            peraga lalu dijelaskan langkah-langkahnya sambil peserta didik
            melaksanakannya. Guru menuntun dengan melihat langkah-langkah yang
            telah dilaksanakan oleh peserta didik.
          </p>
          <p className="mt-2">
            Cara membersihkan organ reproduksi diatas bersifat fleksibel,
            maksudnya tidak hanya diajarkan pada peserta didik tingkat menengah
            dan lanjutan, pada tingkat dasar juga bisa diajarkan sesuai dengan
            kesiapan mental dari peserta didik tersebut.
          </p>
        </div>

        {/* Penjelasan tentang Pembalut */}
        <div className="text-justify mt-6">
          <p>
            Pembalut berfungsi untuk menyerap dan menahan darah menstruasi agar
            tidak mengotori pakaian dan menjaga area vagina tetap kering dan
            higienis. Pembalut juga membantu mencegah iritasi dan infeksi pada
            area tersebut jika diganti secara rutin. Dalam menggunakan dan
            mengganti pembalut, anak perempuan harus diajarkan dengan cara yang
            benar.
          </p>
        </div>

        {/* Cara Menggunakan Pembalut */}
        <h4 className="font-semibold text-base mt-6">
          Cara Menggunakan Pembalut
        </h4>
        <div className="overflow-x-auto mt-2">
          <table className="table-auto w-full text-sm border border-gray-400">
            <tbody>
              {[
                "Menyiapkan pembalut bersih",
                "Tisu basah tanpa alkohol atau air bersih",
                "Kantong plastik kecil (untuk pembalut bekas)",
                "Bersihkan tangan dengan sabun dan air mengalir",
                "Lepas pembalut bekas",
                "Buka sisi perekat pembalut bekas dengan hati-hati",
                "Gulung pembalut dari depan ke belakang (bagian bersih di luar)",
                "Bersihkan area kewanitaan dari depan ke belakang menggunakan tisu basah atau air bersih dan mengalir",
                "Keringkan dengan tisu atau handuk bersih dengan cara ditepuk-tepuk",
                "Pasang pembalut baru (buka pembalut baru dan tempelkan pada celana dalam)",
                "Posisi sayap dilipat ke bawah celana dalam (jika pembalutnya memiliki sayap)",
                "Bagian tengah pembalut menutupi lubang vagina dengan sempurna",
                "Pembalut bekas yang sudah terbungkus plastik, buang ke tempat sampah yang tertutup",
                "Cuci tangan dengan sabun dan air mengalir agar memastikan tidak bakteri yang tertinggal",
              ].map((step, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{step}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Kebersihan Saat Menstruasi */}
        <h4 className="font-semibold text-base mt-6">
          Cara menjaga kebersihan saat menstruasi:
        </h4>
        <ol className="list-decimal list-inside space-y-1 text-justify mt-2">
          <li>
            Pilihlah pembalut yang bebas dari berbagai jenis bahan berbahaya dan
            nyaman saat dipakai.
          </li>
          <li>
            Ganti pembalut secara berkala, antara 3 hingga 5 kali dalam sehari
          </li>
          <li>
            Bersihkan vagina terlebih dahulu sebelum mengganti pembalut.
            (Membersihkan vagina sebaiknya dilakukan dengan air mengalir dan
            sebaiknya hindari penggunaan sabun)
          </li>
          <li>
            Cuci tangan sampai bersih setelah membuang pembalut serta sebelum
            mengganti pembalut.
          </li>
          <li>
            Rutin mengganti celana dalam (CD) untuk menghindari resiko tidak
            nyaman di sekitar vagina.
          </li>
        </ol>
        {/* Metode dan Media Tambahan */}
        <div className="mt-6">
          <p>
            <strong>Metode:</strong> Simulasi
          </p>
          <p>
            <strong>Media:</strong> Pembalut
          </p>
        </div>

        {/* Contoh Pembelajaran */}
        <div className="text-justify mt-4">
          <p>
            <strong>Contoh Pembelajaran:</strong> Sehari sebelum pembelajaran
            mengganti pembalut disimulasikan, guru menginstruksikan peserta
            didik untuk membawa pembalut dari rumah dengan berkoordinasi bersama
            orang tua untuk menjelaskan materi yang berkaitan dengan fungsi
            peserta didik membawa pembalut. Guru perempuan menuntut peserta
            didik perempuan untuk mengikuti langkah-langkah mengganti pembalut.
            Lalu bagi peserta didik perempuan yang menstruasi diminta untuk
            memberikan umpan baliknya setelah mempraktikkannya langsung.
          </p>
        </div>

        {/* Topik 2.3: Jenjang LANJUTAN */}
        <h4 className="font-semibold text-base mt-6">
          Topik 2.3: Jenjang LANJUTAN
        </h4>
        <p className="text-justify mt-2">
          Pada jenjang <strong>LANJUTAN</strong>, bagian organ reproduksi
          diajarkan kepada peserta didik dengan hambatan penglihatan. Dengan
          mengajarkan organ reproduksi tersebut, anak diharapkan tahu akan
          bagian-bagian reproduksi yang dimilikinya.
        </p>

        {/* Tabel Organ Reproduksi Laki-laki */}
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full text-sm border border-gray-400">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1" colSpan={2}>
                  Laki-Laki
                </th>
              </tr>
              <tr>
                <th className="border px-2 py-1 w-1/2">Organ Reproduksi</th>
                <th className="border px-2 py-1 w-1/2">
                  Fungsi Organ Reproduksi
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Penis", "Saluran yang menyalurkan sperma kepada vagina"],
                [
                  "Skrotum",
                  "Kantong kulit khusus yang melindungi testis dan epididimis dari cedera fisik dan merupakan pengatur suhu testis",
                ],
                ["Testis", "Memproduksi sperma dan hormon testosteron"],
                ["Epididimis", "Menyimpan dan mematangkan sperma dari testis"],
                [
                  "Vas Deferens",
                  "Mengangkut sperma dari epididimis ke uretra saat ejakulasi",
                ],
                [
                  "Vesikula Seminalis",
                  "Kelenjar penghasil cairan kaya fruktosa yang membentuk 60% air mani",
                ],
                [
                  "Ductus Ejakulatorius",
                  "Membawa spermatozoa dari vas deferens menuju ke basis prostat",
                ],
                [
                  "Glandula Prostatica",
                  "Mengeluarkan cairan basa yang menetralkan sekresi vagina yang asam, dan menjaga sperma tetap berada dalam vagina pada saat penis dikeluarkan",
                ],
                [
                  "Glandula Bulbourethralis",
                  "Mengeluarkan mucus untuk pelumasan",
                ],
              ].map(([organ, fungsi], i) => (
                <tr key={i}>
                  <td className="border px-2 py-1 align-top">{organ}</td>
                  <td className="border px-2 py-1 text-justify">{fungsi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabel Organ Reproduksi Perempuan */}
        <div className="overflow-x-auto mt-6">
          <table className="table-auto w-full text-sm border border-gray-400">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1" colSpan={2}>
                  Perempuan
                </th>
              </tr>
              <tr>
                <th className="border px-2 py-1 w-1/2">Organ Reproduksi</th>
                <th className="border px-2 py-1 w-1/2">
                  Fungsi Organ Reproduksi
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Glandula Vestibularis Mayor",
                  "Melubrikasi bagian distal vagina",
                ],
                [
                  "Glandula Vestibularis Minor",
                  "Mengeluarkan lendir untuk melembabkan vestibulum vagina dan labium pudendi",
                ],
                [
                  "Vagina",
                  "Organ kopulasi, jalan lahir dan menjadi duktus ekskretorius darah menstruasi",
                ],
                [
                  "Tuba Uterine",
                  "Membawa ovum dari ovarium ke kavum uteri dan mengalirkan spermatozoa dalam arah berlawanan dan tempat terjadinya fertilisasi",
                ],
                [
                  "Uterus",
                  "Tempat ovum yang telah dibuahi secara normal tertanam dan tempat normal dimana organ selanjutnya tumbuh dan mendapat makanan sampai bayi lahir",
                ],
                ["Ovarium", "Organ eksokrin dan endokrin"],
              ].map(([organ, fungsi], i) => (
                <tr key={i}>
                  <td className="border px-2 py-1 align-top">{organ}</td>
                  <td className="border px-2 py-1 text-justify">{fungsi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Metode & Media Penutup */}
        <div className="mt-6">
          <p>
            <strong>Metode:</strong> Ceramah, Diskusi dan Tanya Jawab
          </p>
          <p>
            <strong>Media:</strong> Alat Peraga Organ Reproduksi
          </p>
        </div>
        {/* Gambar Ulang Alat Peraga */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="text-center">
            <img
              src="/images/manekin_perempuan.png"
              alt="Alat Peraga Perempuan"
              className="mx-auto w-[200px]"
            />
            <p className="text-sm mt-2">
              contoh alat peraga organ reproduksi perempuan
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/manekin_laki.png"
              alt="Alat Peraga Laki-Laki"
              className="mx-auto w-[200px]"
            />
            <p className="text-sm mt-2">
              contoh alat peraga organ reproduksi laki-laki
            </p>
          </div>
        </div>

        {/* Contoh Pembelajaran */}
        <div className="text-justify mt-6">
          <p>
            <strong>Contoh Pembelajaran:</strong> Guru menjelaskan masing-masing
            organ reproduksi, lalu membantu peserta didik dengan menyentuh organ
            reproduksi yang disebutkan kepada alat peraga organ reproduksi yang
            ada.
          </p>
        </div>

        {/* Topik 2.4 */}
        <h4 className="font-semibold text-base mt-6">
          Topik 2.4: jenjang LANJUTAN
        </h4>
        <p className="text-justify mt-2">
          Dalam menjaga kesehatan reproduksi, anak juga harus dikenalkan
          berbagai macam masalah kesehatan yang akan muncul pada reproduksi
          manusia. Masalah kesehatan ini merupakan konsekuensi terhadap apa yang
          dilakukan anak: ketika tidak menjaga kesehatan reproduksi dengan baik
          dan benar. Ada beberapa jenis masalah kesehatan reproduksi pada
          laki-laki dan perempuan serta dampak saat tidak menjaga kesehatan
          organ reproduksi, diantaranya:
        </p>

        {/* Tabel Masalah Reproduksi */}
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full text-sm border border-gray-400">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 w-1/2">
                  Masalah Kesehatan Reproduksi Laki-Laki
                </th>
                <th className="border px-2 py-1 w-1/2">
                  Masalah Kesehatan Reproduksi Perempuan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Masalah Kesuburan:</strong> Masalah ini terjadi karena
                  jumlah sperma yang tidak memadai. Biasanya disebabkan oleh
                  gangguan hormon, testis, efek samping obat, atau faktor
                  genetik.
                </td>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Gangguan menstruasi:</strong> Tidak terjadinya
                  menstruasi sampai umur 17 tahun dan/atau menstruasi tidak
                  terjadi selama 3–6 bulan.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Disfungsi Seksual:</strong> Bentuknya bisa disfungsi
                  ereksi, ejakulasi dini, dan libido rendah.
                </td>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Kanker Serviks:</strong> Sel-sel kanker tumbuh di
                  lapisan epitel serviks.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Kanker Prostat dan Testis:</strong> Umumnya karena
                  faktor genetika.
                </td>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Kanker Ovarium:</strong> Gejalanya nyeri perut bawah,
                  pendarahan abnormal, gangguan pencernaan.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Gangguan Prostat:</strong> Umumnya menyerang pria
                  lanjut usia.
                </td>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Endometriosis:</strong> Tumbuhnya jaringan endometrium
                  di luar uterus, gejalanya nyeri haid, sakit pinggang, dan
                  nyeri saat menstruasi.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Gangguan Testis:</strong> Testis tidak turun ke
                  skrotum.
                </td>
                <td
                  className="border px-2 py-1 text-justify align-top"
                  rowSpan={2}
                >
                  <strong>Keputihan:</strong> Kondisi normal yang terbagi 2:
                  <br />
                  <em>1. Fisiologis:</em> cairan bening/putih encer, tidak
                  berbau dan tidak gatal.
                  <br />
                  <em>2. Patologis:</em> cairan kuning/hijau, kental, berbau
                  amis atau busuk, menyebabkan gatal dan perih.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Varikokel:</strong> Pelebaran pembuluh vena di sekitar
                  testis.
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  <strong>Hidrokel:</strong> Penumpukan cairan di sekitar testis
                  yang berbahaya.
                </td>
                <td className="border px-2 py-1"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Metode dan Contoh Pembelajaran */}
        <div className="mt-6">
          <p>
            <strong>Metode:</strong> Ceramah, Diskusi dan Tanya Jawab
          </p>
          <p>
            <strong>Media:</strong> -
          </p>
        </div>
        <div className="text-justify mt-2">
          <p>
            <strong>Contoh Pembelajaran:</strong> Peserta didik diberikan
            penjelasan seputar masalah pada organ reproduksi, lalu guru membuka
            sesi tanya jawab dengan cara mendiskusikannya bersama-sama di dalam
            kelas.
          </p>
        </div>

        {/* Topik 2.5 */}
        <h4 className="font-semibold text-base mt-6">
          Topik 2.5: jenjang LANJUTAN
        </h4>
        <p className="text-justify mt-2">
          Selain masalah kesehatan organ reproduksi yang disebutkan pada topik
          2.4 sebelumnya. Organ reproduksi juga bisa terserang berbagai penyakit
          yang berbahaya dikarenakan tidak menjaga kebersihan dan memiliki
          pergaulan yang tidak sehat. Berikut beberapa penyakit yang dapat
          menyerang organ reproduksi manusia:
        </p>
        {/* Tabel Penyakit Organ Reproduksi */}
        <div className="mt-6">
          <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full text-sm border border-gray-400">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-2 py-1 w-1/2">Nama Penyakit</th>
                  <th className="border px-2 py-1 w-1/2">Gejala</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">
                    Gonorrhea (Kencing Nanah)
                  </td>
                  <td className="border px-2 py-1 text-justify">
                    Disebabkan oleh bakteri Neisseria Gonorrhoeae dan ditularkan
                    melalui hubungan seksual. Timbul radang organ reproduksi,
                    nyeri saat buang air kecil, dan keluar cairan seperti nanah
                    dari penis atau vagina.
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Sifilis</td>
                  <td className="border px-2 py-1 text-justify">
                    Disebabkan oleh bakteri Treponema Pallidum. Gejala muncul
                    berupa luka tidak nyeri (primer), ruam kulit (sekunder), dan
                    bisa merusak organ (tersier).
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Herpes Genital</td>
                  <td className="border px-2 py-1 text-justify">
                    Disebabkan oleh virus Herpes Simpleks Tipe 2. Luka melepuh
                    di area genital, terasa nyeri dan gatal.
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">HIV/AIDS</td>
                  <td className="border px-2 py-1 text-justify">
                    Menyerang sistem kekebalan tubuh. Menular lewat cairan tubuh
                    seperti darah, ASI, dan cairan kelamin. Sampai saat ini
                    belum ada obat yang menyembuhkan.
                  </td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">
                    HPV (Human Papillomavirus)
                  </td>
                  <td className="border px-2 py-1 text-justify">
                    Menyebabkan kutil kelamin. Beberapa jenis virus ini bisa
                    menyebabkan kanker serviks atau anus.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Metode dan Media */}
        <div className="mt-4 mb-10">
          <p>
            <strong>Metode:</strong> Ceramah, Tanya Jawab, dan Diskusi
          </p>
          <p>
            <strong>Media:</strong> -
          </p>
        </div>
      </section>

      <section id="topik3" className="max-w-5xl mx-auto space-y-6 mt-10">
        <h3 className="font-semibold mt-6 text-lg">
          Topik 3. (Perilaku Seksual)
        </h3>
        <p className="text-justify">
          Topik yang sesuai untuk jenjang <strong>LANJUTAN</strong> ini
          merupakan topik yang sangat penting untuk peserta didik remaja.
          Perilaku seksual remaja merupakan fenomena yang kompleks dan
          dipengaruhi oleh banyak faktor, seperti perubahan fisik, emosi, teman
          sebaya, dan media.
        </p>
        <p className="text-justify">
          Peserta didik yang menginjak masa remaja sering kali terdorong untuk
          mencari informasi tentang hubungan dan seksualitas. Oleh karena itu,
          penting bagi guru untuk memberikan pemahaman yang tepat agar peserta
          didik dapat membuat keputusan yang bertanggung jawab dan sehat.
        </p>
        <p className="text-justify">
          Salah satu bentuk hubungan romantis yang umum pada remaja adalah
          “pacaran”. Dalam masa ini, mereka mulai belajar tentang cinta,
          komitmen, dan konsekuensi dari tindakan mereka. Orang tua dan guru
          harus mendampingi proses ini dengan pendekatan yang terbuka dan
          informatif.
        </p>
        <p className="text-justify">
          Ada berbagai bentuk perilaku seksual yang muncul dalam kehidupan
          sehari-hari remaja, seperti berfantasi, berpegangan tangan, berciuman,
          berpelukan, masturbasi, petting, hingga hubungan seksual. Berikut ini
          adalah beberapa contoh perilaku seksual dan dampaknya:
        </p>

        {/* Tabel Perilaku Seksual */}
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full text-sm border border-gray-400">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1">Bentuk Perilaku</th>
                <th className="border px-2 py-1">Definisi</th>
                <th className="border px-2 py-1">Dampak Negatif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Berfantasi / Berimajinasi</td>
                <td className="border px-2 py-1 text-justify">
                  Penciptaan sebuah imajinasi yang melibatkan aktivitas seksual
                  dalam pikiran seseorang. Proses ini terjadi secara spontan dan
                  dapat mempengaruhi keinginan perilaku seksual individu.
                </td>
                <td className="border px-2 py-1 text-justify">
                  <ol className="list-decimal list-inside space-y-1 text-left mt-2">
                    <li>
                      Dapat memicu ekspektasi yang tidak realistis terhadap
                      hubungan
                    </li>
                    <li>Menimbulkan kecemasan dan tekanan sosial</li>
                    <li>Mengganggu fokus pendidikan dan pengembangan diri.</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Masturbasi</td>
                <td className="border px-2 py-1 text-justify">
                  Suatu aktivitas yang mengarah pada pemusatan nafsu birahi
                  melalui rangsangan alat kelamin dan alat vital lainnya, baik
                  dilakukan sendiri atau orang lain hingga mencapai orgasme bagi
                  laki-laki dan ejakulasi bagi wanita dengan berkontraksinya
                  otot-otot secara otomatis terutama otot vagina yang kadar
                  kontraksinya paling besar.
                </td>
                <td className="border px-2 py-1 text-justify">
                  <ol className="list-decimal list-inside space-y-1 text-left mt-2">
                    <li>
                      Dapat menyebabkan kecanduan dan mengganggu konsentrasi
                      dalam belajar dan aktivitas sehari-hari.
                    </li>
                    <li>Sering menimbulkan rasa bersalah dan kecemasan.</li>
                    <li>
                      Mempengaruhi minat terhadap hubungan intim yang sehat.
                    </li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Petting </td>
                <td className="border px-2 py-1 text-justify">
                  Perilaku saling menggosokan alat kelamin.
                </td>
                <td className="border px-2 py-1 text-justify">
                  <ol className="list-decimal list-inside space-y-1 text-left mt-2">
                    <li>Menyebabkan kecanduan yang berlebihan</li>
                    <li>
                      Menjadi awal untuk melakukan hubungan seksual secara
                      langsung
                    </li>
                    <li>Mengganggu motivasi belajar</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <p className="text-justify">
            Ada beberapa faktor yang mendorong munculnya perilaku seksual pada
            anak dengan hambatan penglihatan yang notabene nya sulit menerima
            informasi secara visual. Faktor tersebut terbagi atau dua, yaitu
            faktor internal dan faktor eksternal. Berikut faktor yang mendorong
            munculnya perilaku seksual pada anak dengan hambatan penglihatan.
          </p>
        </div>

        {/* Tabel Faktor Internal dan Eksternal */}
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full text-sm border border-gray-400">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 w-1/2">Faktor Internal</th>
                <th className="border px-2 py-1 w-1/2">Faktor Eksternal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1 text-justify align-top">
                  Seorang anak yang menjalani hubungan pacaran, memiliki rasa
                  nyaman, cinta, serta rasa ingin tahu muncul didalam dirinya.
                  Tapi, minimnya pengetahuan dan pemahaman mengenai moralitas
                  dalam menjalani kasih yang dapat menumbuhkan perilaku yang
                  beresiko.
                </td>
                <td className="border px-2 py-1 text-justify align-top">
                  Kemajuan teknologi yang pesat, sehingga anak dapat mengakses
                  apapun di dunia ini. Orang tua yang minim perhatian, dan
                  komunikasi dalam keluarga yang rendah.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Metode dan Media untuk Faktor */}
        <div className="mt-4">
          <p>
            <strong>Metode:</strong> Ceramah, Tanya Jawab, dan Diskusi
          </p>
          <p>
            <strong>Media:</strong> -
          </p>
        </div>

        {/* Contoh Pembelajaran untuk Faktor */}
        <div className="text-justify mt-4">
          <p>
            <strong>Contoh Pembelajaran:</strong> Guru mengajarkan sesuai dengan
            jenis kelamin masing-masing peserta didik. Guru menjelaskan secara
            perlahan masing-masing poin materi agar anak dapat mencernanya
            dengan baik. Guru membuka sesi tanya jawab yang menumbuhkan pola
            diskusi didalam nya agar anak dengan hambatan penglihatan
            benar-benar paham dan dapat menjauhi perilaku-perilaku seksual yang
            telah dipelajari.
          </p>
        </div>
      </section>

      <section id="topik4" className="max-w-5xl mx-auto space-y-6 mt-10">
        <h3 className="font-semibold mt-6 text-lg">
          Topik 4. (Pergaulanku, Pergaulan Sehat!)
        </h3>
        <p className="text-justify">
          Topik yang sesuai pada jenjang <strong>MENENGAH</strong>. Dalam
          menjaga pergaulan, anak dengan hambatan penglihatan sama dengan anak
          pada umumnya. Biasanya anak memiliki keterkaitan kepada lawan jenis
          dimulai pada masa pubertas. Pubertas adalah masa peralihan dari
          anak-anak menuju dewasa, ditandai dengan perubahan fisik, emosional,
          dan hormonal yang mempersiapkan tubuh untuk kematangan seksual dan
          reproduksi. Pubertas antara laki-laki dan perempuan memiliki beberapa
          perbedaan. Berikut perbedaan pubertas antara anak laki-laki dan anak
          perempuan.
        </p>

        {/* Tabel Pubertas */}
        <div className="overflow-x-auto mt-4">
          <table className="table-auto w-full text-sm border border-gray-400">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-2 py-1 w-1/6">Indikator</th>
                <th className="border px-2 py-1 w-5/12">Laki-laki</th>
                <th className="border px-2 py-1 w-5/12">Perempuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1 font-semibold">Usia</td>
                <td className="border px-2 py-1">9 - 14 Tahun</td>
                <td className="border px-2 py-1">8 - 13 Tahun</td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">Hormon</td>
                <td className="border px-2 py-1">
                  Testosteron (dihasilkan testis)
                </td>
                <td className="border px-2 py-1">
                  Estrogen dan Progesteron (dihasilkan ovarium)
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">Fisik</td>
                <td className="border px-2 py-1">
                  Rambut di wajah mulai tumbuh seperti kumis dan jenggot
                </td>
                <td className="border px-2 py-1">
                  Tumbukhnya rambut di ketiak dan kemaluan
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1"></td>
                <td className="border px-2 py-1">
                  Tumbukhnya rambut di ketiak dan kemaluan
                </td>
                <td className="border px-2 py-1"></td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">Suara</td>
                <td className="border px-2 py-1">
                  Suara menjadi karean pembesaran laring
                </td>
                <td className="border px-2 py-1">
                  Suara tetap tinggi dan tidak berubah secara signifikan
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">Bentuk Tubuh</td>
                <td className="border px-2 py-1">
                  Bahu melebar
                  <br />
                  Otot berkembang
                  <br />
                  Tinggi badan meningkat
                </td>
                <td className="border px-2 py-1">
                  Pinggang melebak
                  <br />
                  Payudara membesar
                  <br />
                  Lemak di paha dan bokong bertambah
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">
                  Organ Reproduksi
                </td>
                <td className="border px-2 py-1">Penis dan Testis membesar</td>
                <td className="border px-2 py-1">
                  Vagina dan rahim berkembang
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">
                  Pertumbuhan Tinggi
                </td>
                <td className="border px-2 py-1">
                  Sperma mulai diproduksi
                  <br />
                  Dimulai lebih lambat tetapi berlangsung lama
                </td>
                <td className="border px-2 py-1">
                  Mulai menstruasi
                  <br />
                  Dimulai lebih cepat tetapi berhenti lebih awal
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">Emosional</td>
                <td className="border px-2 py-1">
                  Lebih Agresif
                  <br />
                  Energi meningkat
                  <br />
                  Lebih beresiko mengambil tindakan impulsif
                </td>
                <td className="border px-2 py-1">
                  Lebih sensitif
                  <br />
                  Lebih banyak berpikir soal penampilan
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1 font-semibold">
                  Kematangan Reproduksi
                </td>
                <td className="border px-2 py-1">
                  Produksi sperma dimulai, biasanya ditandai oleh mimpi basah
                </td>
                <td className="border px-2 py-1">
                  Menstruasi pertama menandakan awal siklus reproduksi
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-justify mt-6">
          Ketika anak pubertas, anak akan cenderung mencari jati dirinya
          sendiri. Pada masa ini, pergaulan anak harus benar-benar diawasi tanpa
          mengekang anak itu sendiri. Fase pubertas sendiri adalah fase penting
          dalam kehidupan anak dengan hambatan penglihatan. Dalam pergaulannya
          sendiri anak dengan hambatan penglihatan sudah mulai merasa mandiri.
          Menjaga pergaulan bagi anak dengan hambatan penglihatan sangat perlu
          diperhatikan, pada saat anak mulai memiliki ketertarikan dengan lawan
          jenis, maka peran guru dan orang tua harus turut andil di dalamnya.
          Anak dengan hambatan penglihatan perlu belajar tentang batasan dalam
          pergaulan. Berikut beberapa poin dalam menjaga batasan anak dengan
          hambatan penglihatan dalam pergaulan:
        </p>
        <ol type="a" className="mt-4 space-y-4 list-decimal list-inside">
          <li>
            <strong>
              Pendidikan seksual yang sesuai dengan usia dan kesiapan mental
              anak
            </strong>
            <br />
            Pada tahap pubertas anak mengalami berbagai perubahan fisik dan
            emosional yang dapat memengaruhi perilaku mereka. Oleh karena itu,
            memberikan pemahaman yang jelas mengenai seksualitas, hubungan yang
            sehat, dan konsekuensi dari tindakan seksual sangatlah krusial.
            Pendidikan seksual yang komprehensif dapat membantu remaja untuk
            memahami nilai-nilai dan norma-norma yang berkaitan dengan hubungan
            interpersonal. Dengan pengetahuan yang cukup, mereka dapat membuat
            keputusan yang lebih baik dan bertanggung jawab mengenai tubuh dan
            kesehatan mereka. Selain itu, pendidikan seksual juga dapat
            mengurangi stigma dan kesalahpahaman yang sering kali mengelilingi
            topik seksualitas.
          </li>

          <li>
            <strong>Ajarkan anak-anak nilai moral yang kuat</strong>
            <br />
            Anak-anak perlu diajarkan nilai-nilai moral yang kuat agar terhindar
            dari pergaulan bebas. Proses ini sebaiknya dimulai sejak usia dini
            apalagi pada ketika mereka masih dalam tahap perkembangan karakter.
            Dalam lingkungan keluarga, orang tua memiliki peran penting untuk
            menanamkan prinsip-prinsip moral seperti kejujuran, tanggung jawab,
            dan rasa hormat terhadap orang lain. Melalui komunikasi yang
            terbuka, orang tua dapat menjelaskan konsekuensi dari tindakan yang
            tidak sesuai norma.
            <br />
            Sekolah juga berkontribusi dalam pembentukan karakter anak.
            Kurikulum yang mengintegrasikan pendidikan moral dapat membantu
            siswa memahami pentingnya nilai-nilai tersebut. Selain itu, kegiatan
            ekstrakurikuler yang positif dapat menjadi wadah bagi anak-anak
            untuk berinteraksi dan belajar bekerja sama dengan baik.
          </li>

          <li>
            <strong>
              Mendorong anak berpartisipasi dalam kegiatan yang positif
            </strong>
            <br />
            Anak-anak harus didorong untuk berpartisipasi dalam kegiatan
            positif. Pertama, orang tua dan pendidik perlu mengenalkan berbagai
            aktivitas yang mendukung pengembangan keterampilan sosial dan
            emosional. Misalnya, mendorong anak untuk bergabung dalam kelompok
            bermain atau klub olahraga dapat membantu mereka belajar bekerja
            sama dan berkomunikasi dengan baik. Selanjutnya, partisipasi dalam
            kegiatan seni juga dapat meningkatkan kreativitas dan ekspresi diri
            anak.
            <br />
            Seiring berjalannya waktu, anak-anak yang terlibat dalam kegiatan
            positif akan lebih percaya diri dan memiliki rasa tanggung jawab
            yang tinggi. Keterlibatan ini juga dapat mengurangi risiko perilaku
            negatif, seperti kenakalan remaja dan pergaulan bebas. Oleh karena
            itu, penting bagi orang tua, guru, dan masyarakat untuk menciptakan
            lingkungan yang mendukung dan memberikan kesempatan bagi anak-anak
            untuk berpartisipasi dalam kegiatan yang bermanfaat.
          </li>

          <li>
            <strong>
              Pergaulan yang baik untuk mencegah perilaku menyimpang
            </strong>
            <br />
            Pergaulan yang baik memiliki peranan penting dalam membentuk
            karakter dan perilaku individu, terutama di kalangan anak dan
            remaja. Ketika seseorang berinteraksi dengan lingkungan sosial yang
            positif, mereka cenderung mendapatkan pengaruh yang konstruktif. Hal
            ini dimulai dari pembentukan hubungan yang sehat dengan sesama, di
            mana nilai-nilai baik dan norma sosial dapat saling dipertukarkan.
            Dalam proses ini, anak belajar untuk menghargai perbedaan,
            berkomunikasi dengan efektif, dan mengembangkan empati.
            <br />
            Seiring berjalannya waktu, pergaulan yang baik ini dapat berfungsi
            sebagai penghalang terhadap perilaku menyimpang. Ketika anak dengan
            hambatan penglihatan dikelilingi oleh teman-teman yang mendukung dan
            memiliki tujuan yang sama, mereka lebih termotivasi untuk
            menghindari tindakan yang merugikan diri sendiri atau orang lain.
          </li>

          <li>
            <strong>
              Diskusi tentang hubungan romantis dengan anak perlu dilakukan
              dengan bijak
            </strong>
            <br />
            Diskusi tentang hubungan romantis dengan anak perlu dilakukan dengan
            bijak. Pertama-tama, penting untuk menciptakan suasana yang aman dan
            terbuka, sehingga anak merasa nyaman untuk berbagi perasaannya. Pada
            tahap ini, orang tua dan guru dapat memulai dengan menanyakan
            pandangan anak tentang cinta dan hubungan, serta mendengarkan dengan
            seksama tanpa menghakimi.
          </li>
        </ol>

        <p className="mt-6">
          Setelah itu, orang tua dan guru harus memberikan informasi yang tepat
          tentang hubungan yang sehat, termasuk nilai-nilai seperti saling
          menghormati dan komunikasi yang baik. Dalam proses ini, orang tua dan
          guru juga perlu menjelaskan tentang risiko yang mungkin dihadapi dalam
          hubungan romantis, seperti tekanan dari teman sebaya atau masalah
          emosional.
        </p>

        <p className="mt-4">
          <strong>Metode:</strong> Ceramah, Tanya jawab, dan Simulasi
          <br />
          <strong>Media:</strong> -
        </p>
        {/* Metode dan Media untuk Topik 4 */}
        <div className="mt-6">
          <p>
            <strong>Metode:</strong> Ceramah, Tanya Jawab, dan Diskusi
          </p>
          <p>
            <strong>Media:</strong> -
          </p>
        </div>

        {/* Contoh Pembelajaran untuk Topik 4 */}
        <div className="text-justify mt-4">
          <p>
            <strong>Contoh Pembelajaran:</strong>Peserta didik diajak bercerita
            bersama lalu mendiskusikan tentang ciri-ciri pubertas yang muncul
            terhadap dirinya. Simulasi dapat dilakukan dengan cara membuat
            sebuah drama percakapan antar peserta didik dalam rangka
            mensimulasikan poin-poin dalam menjaga batasan anak.
          </p>
        </div>
      </section>
      <section id="referensi-bab3" className="mt-16 mb-10">
        <h3 className="text-lg font-bold text-center mb-6">REFERENSI</h3>
        <div className="space-y-4">
          <p className="text-justify">
            Al-Karimah, N., F. (2018){" "}
            <em>
              Sosialisai makna “masa puber” bagi remaja desa Tegalrejo,
              Kalurahan Ngesrep, Kecamatan Ngemplak, Kabupaten Boyolali, Jawa
              Tengah.{" "}
            </em>
            . Jurnal Abdi MOESTOPO, 01 (01), 7-13.
          </p>
          <p className="text-justify">
            Azizah, N., Riana, E., N., Megasari, A., L., M., Arhesa, S.,
            Syafriana, I., N., S., V., Perestroika, G., D., Aswan, M., Y.,
            Alfrianne, & Ariescha, P., A., Y. (2023).{" "}
            <em>Fisiologi sistem reproduksi</em>. Yayasan Kita Menulis.
          </p>
          <p className="text-justify">
            Beddu, M., J., Farizi, K., Noor, H., & Marlianis. (2024).{" "}
            <em>Homoseksual, lesbian, dan masturbasi perspektif islam</em>.
            Jurnal Addayan, 19 (1), 35-44.
          </p>
          <p className="text-justify">
            Hidayat, D., FINSDV., FAADV., Wedayani, A., A., A., N., Putri, N.,
            A., & Sari, D., S. (2024).{" "}
            <em>
              Edukasi Mengenai Kebersihan Genitalia Pada Remaja Awal di SMPK
              Kusuma Mataram
            </em>
            . Jurnal Pengabdian Magister Pendidikan IPA, 7(1), 358-361.
          </p>
          <p className="text-justify">
            Kausar, H. (2014). <em>Good Touch, Bad Touch, and Secret Touch</em>.
            Pemerintah Aceh.{" "}
            <a
              href="https://acehprov.go.id/berita/kategori/serba-serbi/62-good-touch-bad-touch-and-secret-touch"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://acehprov.go.id/berita/kategori/serba-serbi/62-good-touch-bad-touch-and-secret-touch
            </a>
          </p>
          <p className="text-justify">
            Rahmi, D. & Rikayoni. (2023).{" "}
            <em>
              Edukasi kesehatan terhadap pengetahuan anak usia sekolah melalui
              video pembelajaran menjaga diri/tubuh tentang bagian tubuh penting
              yang tidak boleh disentuh oleh orang lain di SDIT Cendekia Andalus
            </em>
            . Jurnal Abdimas Saintika, 5 (2), 99-106.
          </p>
          <p className="text-justify">
            Wahyuni, H., Amelia, L., Putri, B., S., Nurhasana, E., Garini, N.,
            A., DR, S., S., & Sinaga, I., E. (2023).{" "}
            <em>
              Mencegah dampak negatif gaya berpacaran yang beresiko dengan
              layanan penguasaan konten di SMP N 9 Kota Jambi
            </em>
            . Journal of Community Service (JCOS), 1 (3), 95-101.
          </p>
          <p className="text-justify">
            Wardiyah, A., Aryanti, L., Marliyana, Oktaliana, Khoirudin, P., &
            Dea, M., A. (2022).{" "}
            <em>
              Penyuluhan kesehatan tentang pentingnya menjaga kesehatan alat
              reproduksi
            </em>
            . Journal Of Public Health Concerns, 2 (1), 41-53.
          </p>
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
