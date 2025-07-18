import React from "react";

const Bab1Cover = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-orange-400 to-yellow-400 transform rotate-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-yellow-300 to-orange-300 transform -rotate-6 origin-bottom-left"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-6 px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-white mb-1">
            Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
          </p>
          <p className="text-sm text-white/90 font-medium">
            Republik Indonesia, 2025
          </p>
        </div>
      </div>

      {/* BAB 1 Badge - Positioned at top right like the content */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-white text-yellow-600 px-6 py-3 rounded-lg text-2xl font-bold tracking-wide shadow-lg">
          BAB 1
        </div>
      </div>

      {/* Main Content - Left aligned like the content */}
      <div className="relative z-10 flex flex-col justify-center px-8 mt-16 max-w-4xl">
        {/* Main Title */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            ANAK DENGAN
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            HAMBATAN PENGLIHATAN
          </h1>
        </div>

        {/* Content Card - White background like the content */}
        <div className="bg-white rounded-xl p-8 shadow-xl max-w-3xl">
          <p className="text-orange-600 font-bold text-xl mb-6">
            Memahami Karakteristik, Klasifikasi, dan Kebutuhan Khusus
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">
                Definisi & Pengertian
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">
                Klasifikasi Hambatan Penglihatan
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">
                Karakteristik Khusus
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
        <div className="bg-white rounded-xl p-6 shadow-xl">
          <div className="text-center">
            <p className="text-base font-bold text-gray-800 mb-2">
              Buku Panduan Guru Pendidikan Khusus bagi Peserta Didik Disabilitas
              Netra
            </p>
            <p className="text-sm text-gray-600 mb-3 font-medium">
              Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="font-medium">
                Penulis: Irvan Dwi Novaldi dan Atien Nur Chamidah
              </span>
              <span className="font-medium">ISBN 978-602-244-942-6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white opacity-20 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/2 left-1/4 w-6 h-6 bg-white opacity-15 rounded-full blur-sm"></div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-orange-300 opacity-30 rounded-full blur-sm"></div>
    </div>
  );
};

export default Bab1Cover;
