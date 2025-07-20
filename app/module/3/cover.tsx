import React from "react";

const Bab3Cover = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-bl from-yellow-400 via-amber-500 to-orange-600">
      {/* Creative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-20 transform rotate-12 rounded-3xl"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-orange-300 bg-opacity-30 rounded-full"></div>
      <div className="absolute bottom-40 left-1/4 w-40 h-20 bg-white bg-opacity-15 transform -rotate-45 rounded-2xl"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-amber-300 bg-opacity-25 transform rotate-45"></div>

      {/* Header */}
      <div className="relative z-10 pt-6 pb-4">
        <div className="flex justify-between items-start px-8">
          <div className="bg-gradient-to-r from-white to-yellow-50 text-amber-700 px-8 py-4 rounded-2xl text-2xl font-bold tracking-wide shadow-xl border border-white border-opacity-30">
            BAB 3
          </div>
          <div className="text-white backdrop-blur-sm bg-white bg-opacity-10 rounded-xl px-4 py-2">
            <p className="text-sm font-medium opacity-95">
              Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
            </p>
            <p className="text-xs opacity-85">Republik Indonesia, 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-300px)] px-8">
        {/* Main Title with Different Style */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-wider drop-shadow-2xl relative z-10">
              MATERI
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-amber-400 opacity-30 blur-lg rounded-lg"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mt-4">
            PENDIDIKAN SEKSUAL
          </h2>
          <div className="w-32 h-1 bg-white mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        {/* Content Focus Box with Cards Layout */}
        <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 bg-opacity-95 rounded-3xl p-8 shadow-2xl max-w-6xl border border-white border-opacity-50">
          {/* Card-based Topic Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Topic A */}
            <div className="bg-gradient-to-r from-orange-800 via-orange-700 to-amber-600 rounded-2xl p-6 text-center text-white shadow-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h4 className="font-bold text-lg">Tujuan Pembelajaran</h4>
              </div>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Memahami objektif dan target yang ingin dicapai
              </p>
            </div>

            {/* Topic B */}
            <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-yellow-400 rounded-2xl p-6 text-center text-white shadow-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h4 className="font-bold text-lg">Bagaimana Bentuk Tubuhku?</h4>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Mengenal anatomi dan perkembangan tubuh
              </p>
            </div>

            {/* Topic C */}
            <div className="bg-gradient-to-r from-orange-800 via-orange-700 to-amber-600 rounded-2xl p-6 text-center text-white shadow-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h4 className="font-bold text-lg">
                  Ayo Jaga Kesehatan Reproduksi!
                </h4>
              </div>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Menjaga kebersihan dan kesehatan tubuh
              </p>
            </div>

            {/* Topic D */}
            <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-yellow-400 rounded-2xl p-6 text-center text-white shadow-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h4 className="font-bold text-lg">Perilaku Seksual</h4>
              </div>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Memahami batasan dan norma perilaku sehat
              </p>
            </div>
          </div>

          {/* Topic E - Special Featured Card */}
          <div className="bg-gradient-to-r from-orange-800 via-amber-600 to-yellow-400 rounded-2xl p-6 text-center text-white shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl mb-1">
                  Pergaulan dan Keamanan Sehat
                </h4>
                <p className="text-cyan-100 text-sm">
                  Membangun hubungan yang sehat, aman, dan positif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-8 mt-6">
        <div className="mx-8">
          <div className=" rounded-2xl p-6 shadow-2xl">
            <div className="text-center">
              <h4 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-2">
                Buku Panduan Guru Pendidikan Khusus bagi Peserta Didik
                Disabilitas Netra
              </h4>
              <p className="text-gray-600 text-sm mb-3 font-medium">
                Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
              </p>
              <div className="flex justify-center items-center space-x-4 text-xs text-gray-600">
                <span>Penulis: Irvan Dwi Novalidi dan Atien Nur Chamidah</span>
                <span>•</span>
                <span>ISBN 978-602-244-942-6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bab3Cover;
