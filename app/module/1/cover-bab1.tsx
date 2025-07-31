import React from "react";

const Bab1Cover = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-y-auto overflow-x-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Geometric Background Pattern - Improved positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/4 sm:w-1/3 h-1/3 sm:h-1/2 bg-gradient-to-bl from-orange-400 to-yellow-400 transform rotate-12 origin-top-right opacity-40 sm:opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/5 sm:w-1/4 h-1/4 sm:h-1/3 bg-gradient-to-tr from-yellow-300 to-orange-300 transform -rotate-6 origin-bottom-left opacity-40"></div>
      </div>

      {/* Header - Only BAB 1 Badge */}
      <div className="absolute top-6 sm:top-8 right-4 sm:right-6 z-20">
        <div className="bg-white text-yellow-600 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-lg sm:text-2xl font-bold tracking-wide shadow-xl border border-yellow-200">
          BAB 1
        </div>
      </div>

      {/* Main Content - Better spacing and responsiveness */}
      <div className="flex-grow px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24 max-w-6xl mx-auto w-full relative z-10">
        {/* Main Title - Improved responsive typography */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 sm:mb-4">
            ANAK DENGAN
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            HAMBATAN PENGLIHATAN
          </h1>
        </div>

        {/* Content Card - Better responsive sizing */}
        <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl max-w-full lg:max-w-4xl">
          <p className="text-orange-600 font-bold text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
            Memahami Karakteristik, Klasifikasi, dan Kebutuhan Khusus
          </p>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Definisi & Pengertian
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Klasifikasi Hambatan Penglihatan
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Karakteristik Khusus
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Redesigned for better layout */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 mt-8 sm:mt-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
          <div className="text-center space-y-4">
            {/* Main Title */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                Modul Guru Pendidikan Seksual
              </h2>
              <p className="text-base sm:text-lg font-semibold text-orange-600">
                Peserta Didik Dengan Hambatan Penglihatan
              </p>
            </div>

            {/* Subtitle
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
              </p>
            </div> */}

            {/* Authors */}
            <div className="border-t border-gray-200 pt-4">
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-orange-600 font-semibold">
                  Penulis:
                </p>
                <p className="text-sm sm:text-base text-gray-700 font-medium">
                  Irvan Dwi Novaldi dan Atien Nur Chamidah
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="pt-2">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
        {/* Year */}
        <div className="mt-2 sm:mt-4 text-center relative z-10 pb-6 sm:pb-8 lg:pb-10 flex-shrink-0">
          <span className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-transparent text-amber-800 text-xs sm:text-sm font-medium mt-3 md:mx-6">
            2025
          </span>
        </div>
      </div>

      {/* Decorative Elements - Positioned to avoid content overlap */}
      <div className="absolute top-1/4 right-1/6 w-6 h-6 sm:w-8 sm:h-8 bg-white opacity-10 sm:opacity-20 rounded-full blur-sm pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/6 w-4 h-4 sm:w-6 sm:h-6 bg-white opacity-10 sm:opacity-15 rounded-full blur-sm pointer-events-none"></div>
      <div className="absolute top-3/4 left-1/5 w-3 h-3 sm:w-4 sm:h-4 bg-orange-300 opacity-20 sm:opacity-30 rounded-full blur-sm pointer-events-none"></div>
    </div>
  );
};

export default Bab1Cover;
