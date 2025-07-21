"use client";
import React from "react";

const Bab4Cover = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-white/20 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-8 sm:left-20 w-20 sm:w-40 h-20 sm:h-40 bg-yellow-300/30 rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-14 sm:w-28 h-14 sm:h-28 bg-orange-400/40 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-white/15 rounded-full"></div>
      </div>

      {/* BAB 4 Badge */}
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
        <div className="bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
          <span className="text-yellow-600 font-bold text-base sm:text-lg">
            BAB 4
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            EVALUASI
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            PEMBELAJARAN
          </h2>
        </div>

        {/* Content Overview Box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 max-w-3xl w-full mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-2xl font-bold text-yellow-700 mb-4 sm:mb-6 text-center leading-tight">
            Mengukur Pemahaman dan Implementasi Pendidikan Seksual
          </h3>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Evaluasi Tingkat Pemahaman Melalui Soal Latihan
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Penilaian Kemampuan Melalui Unjuk Kerja
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Implementasi Praktik Langsung dalam Pembelajaran
              </p>
            </div>
          </div>
        </div>

        {/* Book Info - Redesigned Footer */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 max-w-4xl w-full">
          <div className="text-center">
            <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
              Buku Panduan Guru Pendidikan Khusus bagi Peserta Didik Disabilitas
              Netra
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
            </p>

            {/* Authors Section */}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-center">
                <span className="text-xs sm:text-sm text-gray-500 font-medium block mb-2">
                  Penulis:
                </span>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-6">
                  <span className="text-xs sm:text-sm text-gray-700 font-semibold">
                    Irvan Dwi Novaldi
                  </span>
                  <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                  <span className="text-xs sm:text-sm text-gray-700 font-semibold">
                    Atien Nur Chamidah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Year */}
        <div className="mt-3 sm:mt-4">
          <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-transparent text-amber-800 text-xs sm:text-sm font-medium mt-3 md:mx-6">
            2025
          </span>
        </div>
      </div>

      {/* Evaluation Icons - Responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 text-white/30 text-3xl sm:text-6xl">
        📊
      </div>
      <div className="absolute top-16 sm:top-32 right-16 sm:right-32 text-white/30 text-2xl sm:text-4xl">
        ✅
      </div>
      <div className="absolute bottom-8 sm:bottom-20 right-16 sm:right-32 text-white/30 text-3xl sm:text-5xl">
        📝
      </div>
    </div>
  );
};

export default Bab4Cover;
