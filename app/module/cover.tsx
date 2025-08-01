import Image from "next/image";
import LogoUny from "@/app/assets/logo-uny.png";
export default function ModulGuruCover() {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Geometric Background Pattern - disembunyikan di mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-1/4 left-0 w-1/2 h-1/3 bg-gradient-to-r from-orange-400 to-yellow-400 transform -rotate-12 origin-top-left"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-yellow-300 to-orange-300 transform rotate-6 origin-bottom-right"></div>
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-to-br from-white/20 to-orange-200/30 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full blur-3xl"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 py-8 text-center">
        {/* Universitas Info */}
        <div className="mb-6 flex flex-col items-center">
          {/* UNY Logo */}
          <div className="mb-4">
            <Image
              src={LogoUny}
              alt="Logo Universitas Negeri Yogyakarta"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>
          <p className="text-white/90 text-xs sm:text-sm font-medium mb-1">
            Universitas Negeri Yogyakarta
          </p>
        </div>

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-white leading-none mb-4 drop-shadow-2xl flex items-center justify-center">
            <span>M</span>
            <span className="relative inline-block">
              <span className="opacity-0">O</span>
              <span className="absolute inset-0 flex items-center justify-center">
                ♀
              </span>
            </span>
            <span className="relative inline-block">
              <span className="absolute top-0 right-0 transform -translate-x-1/6 -translate-y-1/4  text-4xl sm:text-6xl md:text-8xl font-black z-0">
                ♂
              </span>
              <span className="relative  z-10">D</span>
            </span>
            <span>IS</span>
          </h1>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl w-full max-w-2xl mx-auto">
            <p className="text-yellow-600 font-bold text-xl sm:text-2xl md:text-3xl mb-2">
              MODUL PENDIDIKAN SEKSUAL
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              untuk meningkatkan pengetahuan guru dalam mengajarkan pendidikan
              seksual anak dengan hambatan penglihatan
            </p>
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6">
          <div className="bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-xl">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-wide">
              MODUL GURU
            </h2>
          </div>
        </div>

        {/* Authors */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl w-full max-w-md mx-auto">
          <h3 className="text-orange-600 font-bold text-base sm:text-lg mb-3">
            Ditulis Oleh:
          </h3>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Irvan Dwi Novaldi
            </p>
            <p className="text-gray-800 text-sm sm:text-base font-medium">
              Atien Nur Chamidah
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <p className="text-white/70 text-xs sm:text-sm font-medium">2025</p>
        </div>
      </div>

      {/* Decorative dots - sembunyikan di layar kecil */}
      <div className="hidden sm:block absolute top-20 left-20 w-4 h-4 bg-white opacity-40 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-20 w-6 h-6 bg-orange-300 opacity-50 rounded-full animate-pulse delay-1000"></div>
      <div className="hidden sm:block absolute top-1/3 right-16 w-3 h-3 bg-white opacity-30 rounded-full animate-pulse delay-500"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-16 w-5 h-5 bg-yellow-300 opacity-40 rounded-full animate-pulse delay-1500"></div>
    </div>
  );
}
