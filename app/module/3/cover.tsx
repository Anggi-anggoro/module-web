import React from "react";

const Bab3Cover = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-bl from-yellow-400 via-amber-500 to-orange-600">
      {/* Creative background elements - responsive positioning */}
      <div className="absolute top-4 md:top-10 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-white bg-opacity-20 transform rotate-12 rounded-xl md:rounded-3xl"></div>
      <div className="absolute top-1/4 md:top-1/3 right-8 md:right-20 w-12 h-12 md:w-24 md:h-24 bg-orange-300 bg-opacity-30 rounded-full"></div>
      <div className="absolute bottom-32 md:bottom-40 left-1/6 md:left-1/4 w-20 h-10 md:w-40 md:h-20 bg-white bg-opacity-15 transform -rotate-45 rounded-xl md:rounded-2xl"></div>
      <div className="absolute bottom-8 md:bottom-20 right-4 md:right-10 w-14 h-14 md:w-28 md:h-28 bg-amber-300 bg-opacity-25 transform rotate-45"></div>

      {/* Header - removed ministry info */}
      <div className="relative z-10 pt-3 md:pt-6 pb-2 md:pb-4">
        <div className="flex justify-center md:justify-start px-4 md:px-8">
          <div className="bg-gradient-to-r from-white to-yellow-50 text-amber-700 px-3 md:px-8 py-1.5 md:py-4 rounded-lg md:rounded-2xl text-base md:text-2xl font-bold tracking-wide shadow-xl border border-white border-opacity-30">
            BAB 3
          </div>
        </div>
      </div>

      {/* Main Content - improved responsive layout */}
      <div className="relative z-10 flex flex-col items-center justify-center px-3 md:px-8 py-4 md:py-0">
        {/* Main Title - responsive text sizing */}
        <div className="text-center mb-4 md:mb-8">
          <div className="relative inline-block">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-1 md:mb-2 tracking-wider drop-shadow-2xl relative z-10">
              MATERI
            </h1>
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-orange-400 to-amber-400 opacity-30 blur-lg rounded-lg"></div>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg mt-1 md:mt-4 px-2">
            PENDIDIKAN SEKSUAL
          </h2>
          <div className="w-20 md:w-32 h-1 bg-white mx-auto mt-3 md:mt-6 rounded-full opacity-80"></div>
        </div>

        {/* Content Focus Box - improved mobile layout */}
        <div className="bg-gradient-to-br from-white via-orange-50 to-amber-50 bg-opacity-95 rounded-xl md:rounded-3xl p-3 md:p-6 lg:p-8 shadow-2xl w-full max-w-5xl border border-white border-opacity-50">
          {/* Card-based Topic Layout - improved grid with better spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-3 md:mb-6">
            {/* Topic A */}
            <div className="bg-gradient-to-r from-orange-800 via-orange-700 to-amber-600 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 text-white shadow-xl min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex flex-col">
              <div className="flex items-start mb-2 md:mb-3">
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm md:text-base lg:text-lg">
                    A
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm md:text-base lg:text-lg leading-tight text-left break-words">
                    Tujuan Pembelajaran
                  </h4>
                </div>
              </div>
              <p className="text-cyan-100 text-xs md:text-sm leading-relaxed flex-1 mt-auto">
                Memahami objektif dan target yang ingin dicapai
              </p>
            </div>

            {/* Topic B */}
            <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-yellow-400 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 text-white shadow-xl min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex flex-col">
              <div className="flex items-start mb-2 md:mb-3">
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm md:text-base lg:text-lg">
                    B
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm md:text-base lg:text-lg leading-tight text-left break-words">
                    Bagaimana Bentuk Tubuhku?
                  </h4>
                </div>
              </div>
              <p className="text-blue-100 text-xs md:text-sm leading-relaxed flex-1 mt-auto">
                Mengenal anatomi dan perkembangan tubuh
              </p>
            </div>

            {/* Topic C */}
            <div className="bg-gradient-to-r from-orange-800 via-orange-700 to-amber-600 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 text-white shadow-xl min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex flex-col">
              <div className="flex items-start mb-2 md:mb-3">
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm md:text-base lg:text-lg">
                    C
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm md:text-base lg:text-lg leading-tight text-left break-words">
                    Ayo Jaga Kesehatan Reproduksi!
                  </h4>
                </div>
              </div>
              <p className="text-emerald-100 text-xs md:text-sm leading-relaxed flex-1 mt-auto">
                Menjaga kebersihan dan kesehatan tubuh
              </p>
            </div>

            {/* Topic D */}
            <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-yellow-400 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 text-white shadow-xl min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex flex-col">
              <div className="flex items-start mb-2 md:mb-3">
                <div className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-sm md:text-base lg:text-lg">
                    D
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm md:text-base lg:text-lg leading-tight text-left break-words">
                    Perilaku Seksual
                  </h4>
                </div>
              </div>
              <p className="text-cyan-100 text-xs md:text-sm leading-relaxed flex-1 mt-auto">
                Memahami batasan dan norma perilaku sehat
              </p>
            </div>
          </div>

          {/* Topic E - Special Featured Card */}
          <div className="bg-gradient-to-r from-orange-800 via-amber-600 to-yellow-400 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-5 text-white shadow-xl min-h-[100px] md:min-h-[120px]">
            <div className="flex items-start justify-center md:justify-start">
              <div className="w-9 h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                <span className="text-white font-bold text-base md:text-lg lg:text-2xl">
                  E
                </span>
              </div>
              <div className="text-center md:text-left flex-1 min-w-0">
                <h4 className="font-bold text-sm md:text-base lg:text-xl leading-tight mb-1 break-words">
                  Pergaulan dan Keamanan Sehat
                </h4>
                <p className="text-cyan-100 text-xs md:text-sm leading-relaxed">
                  Membangun hubungan yang sehat, aman, dan positif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redesigned Footer */}
      <div className="relative z-10 pb-3 md:pb-8 mt-3 md:mt-6">
        <div className="mx-3 md:mx-8">
          <div className="bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-lg md:rounded-2xl p-3 md:p-6 shadow-lg border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-2 md:mb-3">
                <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-white to-amber-200 rounded-full mr-2 md:mr-3"></div>
                <h4 className="text-sm md:text-base lg:text-xl font-bold bg-gradient-to-r from-white via-yellow-100 to-amber-100 bg-clip-text text-transparent">
                  Buku Panduan Guru Pendidikan Khusus
                </h4>
                <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-white to-amber-200 rounded-full ml-2 md:ml-3"></div>
              </div>

              <div className="bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-lg p-2 md:p-4 mb-2 md:mb-3">
                <p className="text-white text-xs md:text-sm font-medium leading-relaxed">
                  bagi Peserta Didik Disabilitas Netra
                </p>
                <p className="text-amber-100 text-xs md:text-sm font-light">
                  Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 md:space-y-3 text-xs md:text-sm text-white/90">
                <div className="flex items-center">
                  <span className="font-bold bg-white rounded-lg text-amber-600 p-1 px-2">
                    Penulis:
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
                  <span className="font-bold text-white">
                    Irvan Dwi Novalidi
                  </span>
                  <div className="hidden sm:block w-1 h-4 bg-white/30"></div>
                  <span className="font-bold text-white">
                    Atien Nur Chamidah
                  </span>
                </div>
              </div>

              {/* Year */}
              <div className="mt-2 md:mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-transparent text-amber-800 text-xs md:text-sm font-medium">
                  2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bab3Cover;
