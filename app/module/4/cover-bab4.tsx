"use client";
import React from "react";

const Bab4Cover = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/20 rounded-lg transform rotate-45"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-yellow-300/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-400/40 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-6">
          <div className="text-center text-white text-sm font-medium">
            Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
          </div>
          <div className="text-center text-white text-xs mt-1">
            Republik Indonesia, 2025
          </div>
        </div>
      </div>

      {/* BAB 4 Badge */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-white rounded-xl px-6 py-3 shadow-lg">
          <span className="text-yellow-600 font-bold text-lg">BAB 4</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            EVALUASI
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            PEMBELAJARAN
          </h2>
        </div>

        {/* Content Overview Box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-3xl w-full mb-12">
          <h3 className="text-2xl font-bold text-yellow-700 mb-6 text-center">
            Mengukur Pemahaman dan Implementasi Pendidikan Seksual
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                Evaluasi Tingkat Pemahaman Melalui Soal Latihan
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                Penilaian Kemampuan Melalui Unjuk Kerja
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 leading-relaxed">
                Implementasi Praktik Langsung dalam Pembelajaran
              </p>
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-4xl w-full">
          <div className="text-center">
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Buku Panduan Guru Pendidikan Khusus bagi Peserta Didik Disabilitas
              Netra
            </h4>
            <p className="text-gray-600 text-sm mb-2">
              Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-700">
              <span>Penulis: Irvan Dwi Novaldi dan Atien Nur Chamidah</span>
              <span className="text-gray-400">|</span>
              <span>ISBN 978-602-244-942-6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Icons */}
      <div className="absolute bottom-10 left-10 text-white/30 text-6xl">
        📊
      </div>
      <div className="absolute top-32 right-32 text-white/30 text-4xl">✅</div>
      <div className="absolute bottom-20 right-32 text-white/30 text-5xl">
        📝
      </div>
    </div>
  );
};

export default Bab4Cover;
