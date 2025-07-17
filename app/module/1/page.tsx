"use client";
import React from "react";

const Bab1 = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 leading-relaxed">
      <section id="bab1">
        <h1 className="text-2xl font-bold text-center mb-8">BAB I</h1>
        <h2 className="text-xl font-bold text-center mb-6">
          ANAK DENGAN HAMBATAN PENGLIHATAN
        </h2>

        <section
          id="pengertian-anak-dengan-hambatan-penglihatan"
          className="mb-10"
        >
          <h3 className="text-lg font-semibold mb-2">
            A. Pengertian Anak Dengan Hambatan Penglihatan
          </h3>
          <p className="mb-4 text-justify">
            Anak dengan hambatan penglihatan adalah individu yang mengalami
            gangguan penglihatan yang signifikan, baik sejak lahir maupun akibat
            kondisi tertentu, yang memengaruhi kemampuan mereka untuk
            berpartisipasi dalam aktivitas pendidikan dan sosial tanpa dukungan
            khusus <em>(Westling et al., 2015)</em>. Anak dengan hambatan
            penglihatan adalah individu yang mengalami gangguan penglihatan
            secara signifikan, baik sebagian maupun total, sehingga memengaruhi
            kemampuan mereka untuk belajar dan berinteraksi dengan lingkungan
            tanpa bantuan khusus. Mereka memerlukan adaptasi dalam metode
            pembelajaran dan alat bantu untuk mengakses informasi visual{" "}
            <em>(Kirk et al., 2015)</em>.
          </p>
        </section>

        <section
          id="klasifikasi-anak-dengan-hambatan-penglihatan"
          className="mb-10"
        >
          <h3 className="text-lg font-semibold mb-2">
            B. Klasifikasi Anak Dengan Hambatan Penglihatan
          </h3>
          <p className="mb-4 text-justify">
            Dengan hambatan penglihatan yang diklasifikasikan dari kemampuan
            matanya menurut Hosni (2016:26), yaitu:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>
              Kelompok yang mempunyai acuity 20/70 feet (6/21 meter) artinya ia
              bisa melihat jarak 20 feet sedangkan anak normal dari jarak 70
              feet ini tergolong kurang melihat atau <em>low vision</em>.
            </li>
            <li>
              Kelompok yang hanya dapat membaca huruf E paling besar pada kartu
              Snellen dari jarak 20 feet, sedang orang normal dapat membacanya
              dari jarak 200 feet (20/200 feet atau 6/60 meter), dan ini secara
              hukum sudah tergolong buta atau <em>legally blind</em>.
            </li>
            <li>
              Kelompok yang sangat sedikit penglihatannya sehingga ia hanya
              mengenal bentuk dan objek.
            </li>
            <li>
              Kelompok yang hanya dapat menghitung jari dari berbagai jarak.
            </li>
            <li>Kelompok yang melihat tangan digerakan.</li>
            <li>
              Kelompok yang hanya mempunyai <em>light projection</em> (dapat
              melihat terang serta gelap dan dapat menunjuk sumber cahaya).
            </li>
            <li>
              Kelompok yang hanya mempunyai persepsi cahaya (
              <em>light perception</em>) yaitu hanya bisa melihat terang dan
              gelap.
            </li>
            <li>
              Kelompok yang tidak mempunyai persepsi cahaya (
              <em>no light perception</em>) disebut dengan buta total (
              <em>totally blind</em>).
            </li>
          </ol>
        </section>

        <section id="karakteristik-anak-dengan-hambatan-penglihatan">
          <h3 className="text-lg font-semibold mb-2">
            C. Karakteristik Anak Dengan Hambatan Penglihatan
          </h3>
          <p className="mb-4 text-justify">
            (Hallahan et al., 2018) mengatakan anak dengan hambatan penglihatan
            memiliki karakteristik yang bervariasi tergantung pada tingkat
            gangguan penglihatan dan usia saat gangguan tersebut terjadi.
            Beberapa karakteristik umum meliputi:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>
              Keterbatasan dalam mobilitas: Anak dengan hambatan penglihatan
              sering mengalami kesulitan dalam bergerak dan menavigasi
              lingkungan tanpa bantuan.
            </li>
            <li>
              Ketergantungan pada indera lain: Mereka cenderung mengandalkan
              indera pendengaran, peraba, penciuman, dan kinestetik untuk
              memahami dunia sekitar.
            </li>
            <li>
              Perkembangan kognitif yang unik: Anak dengan hambatan penglihatan
              mungkin mengalami keterlambatan dalam konsep spasial dan pemahaman
              visual, tetapi dapat mengembangkan kemampuan memori pendengaran
              yang kuat.
            </li>
          </ol>
        </section>
        <section id="referensi-bab1" className="mt-16 mb-10">
          <h3 className="text-lg font-bold text-center mb-6">REFERENSI</h3>
          <div className="space-y-4">
            <p className="text-justify">
              Hosni. (2016) <em>Pendidikan Anak Tunanetra</em>. Departemen
              Pendidikan Dan Kebudayaan Direktorat Jendral Pendidikan Tinggi
              Proyek Pendidikan Tenaga Guru.
            </p>
            <p className="text-justify">
              Hallahan, D. P., Kauffman, J. M., & Pullen, P., C. (2018).{" "}
              <em>
                Exceptional learners: An introduction to special education
              </em>
              . Pearson.
            </p>
            <p className="text-justify">
              Kirk, S., Gallagher, J., & Coleman, M., R. (2015).{" "}
              <em>Educating exceptional children</em>. Cengage learning.
            </p>
            <p className="text-justify">
              Westling, D., L., Fox, L., & Carter, E., W. (2015).{" "}
              <em>Teaching student with severe disabilities</em>. Pearson.
            </p>
          </div>
        </section>
      </section>
      {/* Footer */}
      <div className="flex justify-end items-center px-6 py-2 text-sm text-orange-300">
        <span className="mr-2">1</span>
        <span className="text-2xl">⚥</span>
      </div>
    </main>
  );
};

export default Bab1;
