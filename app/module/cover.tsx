export default function ModulGuruCover() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
      {/* Geometric Background Pattern - Different positioning */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/2 h-1/3 bg-gradient-to-r from-orange-400 to-yellow-400 transform -rotate-12 origin-top-left"></div>
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-yellow-300 to-orange-300 transform rotate-6 origin-bottom-right"></div>
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-gradient-to-br from-white/20 to-orange-200/30 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full blur-3xl"></div>
      </div>

      {/* Centered Content Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Top Section - University Info */}
        <div className="mb-8">
          <p className="text-white/90 text-sm font-medium mb-2">
            Universitas Negeri Yogyakarta
          </p>
          <p className="text-white/80 text-xs">Fakultas Ilmu Pendidikan</p>
        </div>

        {/* Main Title Section */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-extrabold text-white leading-none mb-6 drop-shadow-2xl">
            MODIS
          </h1>
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
            <p className="text-yellow-600 font-bold text-2xl md:text-3xl mb-4">
              MODUL PENDIDIKAN SEKSUAL
            </p>
            <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed">
              untuk meningkatkan pengetahuan dan mencegah masalah perilaku
              seksual remaja disabilitas intelektual
            </p>
          </div>
        </div>

        {/* Module Type Badge */}
        <div className="mb-8">
          <div className="bg-orange-500 text-white px-8 py-4 rounded-full shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
              MODUL GURU
            </h2>
          </div>
        </div>

        {/* Authors Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-lg mx-auto">
          <h3 className="text-orange-600 font-bold text-lg mb-4">
            Ditulis Oleh:
          </h3>
          <div className="space-y-2">
            <p className="text-gray-800 font-medium">Irvan Dwi Novaldi</p>
            <p className="text-gray-800 font-medium">Atien Nur Chamidah</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <p className="text-white/70 text-sm font-medium">2025</p>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-white opacity-40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-orange-300 opacity-50 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-white opacity-30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-16 w-5 h-5 bg-yellow-300 opacity-40 rounded-full animate-pulse delay-1500"></div>
    </div>
  );
}
