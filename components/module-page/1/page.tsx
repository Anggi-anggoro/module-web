"use client";
import React from "react";

const Bab1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Yellow Background */}
      <div className="relative bg-yellow-500 pt-16 pb-32">
        {/* Geometric shapes */}
        <div className="absolute top-0 right-0 w-64 h-32 bg-yellow-600 transform rotate-12 origin-top-right"></div>
        <div className="absolute top-8 right-8 w-48 h-24 bg-yellow-400 transform -rotate-6"></div>

        {/* BAB 1 Title */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-right mb-8">
            <h1 className="text-6xl font-bold text-white mb-2">BAB 1</h1>
          </div>

          {/* Main Title */}
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-yellow-900 leading-tight">
              Anak dengan Hambatan Penglihatan
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <main className="text-gray-900 leading-relaxed">
            <section id="bab1">
              <section
                id="pengertian-anak-dengan-hambatan-penglihatan"
                className="mb-10"
              >
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  A. Pengertian Anak Dengan Hambatan Penglihatan
                </h3>
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Anak dengan hambatan penglihatan adalah individu yang
                  mengalami gangguan penglihatan yang signifikan, baik sejak
                  lahir maupun akibat kondisi tertentu, yang mempengaruhi
                  kemampuan mereka untuk berpartisipasi dalam aktivitas
                  pendidikan dan sosial tanpa dukungan khusus. Anak dengan
                  hambatan penglihatan adalah individu yang mengalami gangguan
                  penglihatan secara signifikan, baik sebagian maupun total,
                  sehingga memengaruhi kemampuan mereka untuk belajar dan
                  berinteraksi dengan lingkungan tanpa bantuan khusus. Mereka
                  memerlukan adaptasi dalam metode pembelajaran dan alat bantu
                  untuk mengakses informasi visual.
                </p>
              </section>

              <section
                id="klasifikasi-anak-dengan-hambatan-penglihatan"
                className="mb-10"
              >
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  B. Klasifikasi Anak Dengan Hambatan Penglihatan
                </h3>
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Dengan hambatan penglihatan yang dikasifikasikan dari
                  kemampuan matanya, yaitu:
                </p>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang mempunyai acuity 20/70 feet (6/21 meter)
                    artinya ia bisa melihat jarak 20 feet sedangkan anak normal
                    dari jarak 70 feet ini tergolong kurang melihat atau low
                    vision.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang hanya dapat membaca huruf E paling besar pada
                    kartu Snellen dari jarak 20 feet, sedang orang normal dapat
                    membacanya dari jarak 200 feet (20/200 feet atau 6/60 meter,
                    dan ini secara hukum sudah tergolong buta atau legally
                    blind).
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang sangat sedikit penglihatannya sehingga ia
                    hanya mengenal bentuk dan objek.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang hanya dapat menghitung jari dari berbagai
                    jarak.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang melihat tangan digerakan.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang hanya mempunyai light projection (dapat
                    melihat terang serta gelap dan dapat menunjuk sumber cahaya)
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang hanya mempunyai persepsi cahaya (light
                    perception) yaitu hanya bisa melihat terang dan gelap.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Kelompok yang tidak mempunyai persepsi cahaya (no light
                    perception) disebut dengan buta total (totally blind).
                  </li>
                </ol>
              </section>

              <section
                id="karakteristik-anak-dengan-hambatan-penglihatan"
                className="mb-10"
              >
                <h3 className="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  C. Karakteristik Anak Dengan Hambatan Penglihatan
                </h3>
                <p className="mb-4 text-justify text-gray-700 leading-relaxed">
                  Anak dengan hambatan penglihatan memiliki karakteristik yang
                  bervariasi tergantung pada tingkat gangguan penglihatan dan
                  usia saat gangguan tersebut terjadi. Beberapa karakteristik
                  umum meliputi:
                </p>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li className="text-gray-700 leading-relaxed">
                    Keterbatasan dalam mobilitas: Anak dengan hambatan
                    penglihatan sering mengalami kesulitan dalam bergerak dan
                    menavigasi lingkungan tanpa bantuan.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Ketergantungan pada indera lain: Mereka cenderung
                    mengandalkan indera pendengaran, peraba, penciuman, dan
                    kinestetik untuk memahami dunia sekitar.
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    Perkembangan kognitif yang unik: Anak dengan hambatan
                    penglihatan mungkin mengalami keterlambatan dalam konsep
                    spasial dan pemahaman visual, tetapi dapat mengembangkan
                    kemampuan memori pendengaran yang kuat.
                  </li>
                </ol>
              </section>

              <section id="referensi-bab1" className="mt-16 mb-10">
                <h3 className="text-xl font-bold mb-6 text-yellow-700 border-b-2 border-yellow-500 pb-2">
                  REFERENSI
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="text-justify leading-relaxed">
                    Hosni. (2016) <em>Pendidikan Anak Tunanetra</em>. Departemen
                    Pendidikan Dan Kebudayaan Direktorat Jendral Pendidikan
                    Tinggi Proyek Pendidikan Tenaga Guru.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Hallahan, D. P., Kauffman, J. M., & Pullen, P., C. (2018).{" "}
                    <em>
                      Exceptional learners: An introduction to special education
                    </em>
                    . Pearson.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Kirk, S., Gallagher, J., & Coleman, M., R. (2015).{" "}
                    <em>Educating exceptional children</em>. Cengage learning.
                  </p>
                  <p className="text-justify leading-relaxed">
                    Westling, D., L., Fox, L., & Carter, E., W. (2015).{" "}
                    <em>Teaching student with severe disabilities</em>. Pearson.
                  </p>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center py-6 text-yellow-600">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">1</span>
          <span className="text-2xl">⚥</span>
        </div>
      </div>
    </div>
  );
};

export default Bab1;
