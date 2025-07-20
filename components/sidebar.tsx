import Image from "next/image";
import ipan from "@/app/assets/Ipan.jpg";
const Sidebar = () => (
  <div className="sticky top-3 py-4 px-3 overflow-y-auto text-sm z-20 border-2 border-orange-400 rounded-md bg-orange-100">
    <div className="mb-6">
      <h3 className="font-semibold text-orange-800 mb-3">👤 Profil Penulis</h3>

      {/* Foto Profile */}
      <div className="flex justify-center mb-4">
        <div className="w-32 h-40 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center mt-6">
          <Image
            src={ipan}
            alt="Irvan Dwi Novaldi"
            width={700}
            height={900}
            className="object-cover"
          />
        </div>
      </div>

      {/* Data Profile */}
      <div className="space-y-2 text-xs">
        <div>
          <span className="font-semibold text-gray-700">Nama:</span>
          <p className="text-gray-600">Irvan Dwi Novaldi</p>
        </div>

        <div>
          <span className="font-semibold text-gray-700">
            Tempat, Tanggal Lahir:
          </span>
          <p className="text-gray-600">Dumai, 15 November 1999</p>
        </div>

        <div>
          <span className="font-semibold text-gray-700">Deskripsi:</span>
          <p className="text-gray-600 text-justify leading-relaxed">
            Lulus Pendidikan S1 Pendidikan Luar Biasa Universitas Islam
            Nusantara Kota Bandung pada tahun 2021, dan mengembangkan modul ini
            sebagai syarat lulus magister pendidikan sekolah pascasarjana
            Program Studi Pendidikan Luar Biasa Universitas Negeri Yogyakarta.
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mt-1">
            Berkecimpung di dunia disabilitas dan menjadi pendidik di SLB
            Assyifa Umaimah Kota Dumai sejak 2021. Pada tahun 2023 dipercaya
            memimpin di salah satu satuan pendidikan khusus atau SLB Wati
            Purnama Kota Dumai Provinsi Riau hingga saat ini.
          </p>
          <p className="text-gray-600 text-justify leading-relaxed mt-1">
            Di satuan pendidikan khusus, memiliki keahlian di bidang pendidikan
            anak tunanetra dan pendidikan anak autis. Sejak S1 memiliki
            konsentrasi dan minat dalam mengembangkan pembelajaran pendidikan
            seksual bagi anak dengan hambatan penglihatan. Selain itu, aktif
            menjadi narasumber dan instruktur seputar anak berkebutuhan khusus
            di provinsi Riau khususnya di Kota Dumai.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
