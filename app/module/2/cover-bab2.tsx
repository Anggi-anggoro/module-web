import React from "react";

const Bab2Cover = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex flex-col">
      {/* Simple geometric background elements - responsive positioning */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-white bg-opacity-10 rounded-full transform translate-x-16 sm:translate-x-24 lg:translate-x-32 -translate-y-16 sm:-translate-y-24 lg:-translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-white bg-opacity-15 transform -translate-x-20 sm:-translate-x-30 lg:-translate-x-40 translate-y-20 sm:translate-y-30 lg:translate-y-40 rotate-45"></div>

      {/* Header - BAB 2 centered at top */}
      <div className="relative z-10 pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 flex-shrink-0">
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-yellow-600 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl lg:rounded-2xl text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide shadow-xl">
            BAB 2
          </div>
        </div>
      </div>

      {/* Main Content - flexible height and responsive sizing */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Main Title - more responsive text sizes */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 tracking-wide drop-shadow-lg leading-tight px-2">
            PEMBELAJARAN
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white drop-shadow-lg leading-tight px-2">
            PENDIDIKAN SEKSUAL
          </h2>
        </div>

        {/* Content Focus Box - more responsive padding and grid */}
        <div className="bg-white bg-opacity-95 rounded-xl lg:rounded-2xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-2">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-orange-600 text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-1">
            Memahami Definisi, Sasaran, Metode, dan Media Pembelajaran
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 lg:mb-3">
                <span className="text-white font-bold text-sm sm:text-base">
                  A
                </span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm font-medium leading-tight px-1">
                Definisi & Pengertian
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 lg:mb-3">
                <span className="text-white font-bold text-sm sm:text-base">
                  B
                </span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm font-medium leading-tight px-1">
                Sasaran Jenjang
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 lg:mb-3">
                <span className="text-white font-bold text-sm sm:text-base">
                  C
                </span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm font-medium leading-tight px-1">
                Metode & Perencanaan
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5 lg:mb-3">
                <span className="text-white font-bold text-sm sm:text-base">
                  D
                </span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm font-medium leading-tight px-1">
                Media Pembelajaran
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - redesigned with better layout */}
      <div className="relative z-10 pb-6 sm:pb-8 lg:pb-10 flex-shrink-0">
        <div className="mx-4 sm:mx-6 lg:mx-8">
          <div className="bg-white bg-opacity-95 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="text-center space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                  Buku Panduan Guru Pendidikan Khusus
                </h4>
                <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-orange-600 mt-2">
                  Peserta Didik Disabilitas Netra
                </h5>
              </div>

              <div className="space-y-3">
                <p className="text-gray-600 text-sm sm:text-base font-medium">
                  Disertai Hambatan Intelektual untuk SDLB, SMPLB, dan SMALB
                </p>
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-gray-700 text-sm sm:text-base font-semibold">
                    Penulis:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center text-orange-600 font-medium text-sm sm:text-base">
                    <span>Irvan Dwi Novaldi</span>
                    <span className="hidden sm:inline mx-2">•</span>
                    <span className="sm:hidden">dan</span>
                    <span>Atien Nur Chamidah</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bab2Cover;
