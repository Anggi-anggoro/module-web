import React from "react";

const Bab2Cover = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Simple geometric background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-10 rounded-full transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white bg-opacity-15 transform -translate-x-40 translate-y-40 rotate-45"></div>

      {/* Header */}
      <div className="relative z-10 pt-6 pb-4">
        <div className="flex justify-between items-start px-8">
          <div className="bg-white text-yellow-600 px-6 py-3 rounded-lg text-2xl font-bold tracking-wide shadow-lg">
            BAB 2
          </div>
          <div className="text-white">
            <p className="text-sm font-medium opacity-90">
              Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
            </p>
            <p className="text-xs opacity-80">Republik Indonesia, 2025</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-300px)] px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-wide drop-shadow-lg">
            PEMBELAJARAN
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            PENDIDIKAN SEKSUAL
          </h2>
        </div>

        {/* Content Focus Box */}
        <div className="bg-white bg-opacity-95 rounded-2xl px-12 py-8 shadow-2xl max-w-4xl">
          <h3 className="text-2xl font-bold text-orange-600 text-center mb-6">
            Memahami Definisi, Sasaran, Metode, dan Media Pembelajaran
          </h3>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">A</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                Definisi & Pengertian
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">B</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                Sasaran Jenjang
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">C</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                Metode & Perencanaan
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">D</span>
              </div>
              <p className="text-gray-700 text-sm font-medium">
                Media Pembelajaran
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-8">
        <div className="mx-8">
          <div className="bg-white bg-opacity-95 rounded-2xl p-6 shadow-2xl">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Buku Panduan Guru Pendidikan Khusus bagi Peserta Didik
                Disabilitas Netra
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
              </p>
              <div className="flex justify-center items-center space-x-4 text-xs text-gray-500">
                <span>Penulis: Irvan Dwi Novaldi dan Atien Nur Chamidah</span>
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

export default Bab2Cover;
