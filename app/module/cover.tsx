export default function ModulGuruCover() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white font-sans relative">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 md:px-8">
        <div className="text-center max-w-2xl w-full">
          {/* Logo Title */}
          <h2 className="text-5xl md:text-9xl font-extrabold text-yellow-500 drop-shadow-md mb-2 break-words">
            MODIS
          </h2>
          <div className="bg-yellow-500 text-white px-4 py-2 rounded-full inline-block font-semibold text-sm md:text-base tracking-wide mb-2">
            MODUL PENDIDIKAN SEKSUAL
          </div>
          <p className="mt-2 text-xs md:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
            untuk meningkatkan pengetahuan dan mencegah masalah perilaku seksual
            remaja disabilitas intelektual
          </p>

          {/* Spacer */}
          <div className="h-16 md:h-36" />

          {/* Modul Guru */}
          <h3 className="text-lg md:text-2xl font-bold mb-4">MODUL GURU</h3>
          <div className="text-sm md:text-base text-gray-800 space-y-1">
            <p>Atien Nur Chamidah</p>
            <p>Elisabeh Siti Herini</p>
            <p>Sri Hartini</p>
            <p>Mumpuniarti</p>
          </div>
        </div>
      </div>
    </div>
  );
}
