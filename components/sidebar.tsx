import Image from "next/image";
import ipan from "@/app/assets/Ipan.jpg";
// Note: You'll need to add the image for Dr. Atien
import atien from "@/app/assets/dosen.jpg";

const Sidebar = () => (
  <div className="sticky top-3 h-[calc(100vh-2rem)] py-4 px-3 overflow-y-auto text-sm z-20 border-2 border-orange-400 rounded-md bg-orange-100 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
    <div className="space-y-8">
      <h3 className="font-semibold text-orange-800 mb-6 text-center text-lg">
        👥 Profil Penulis
      </h3>

      {/* Profile 1 - Irvan Dwi Novaldi */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
        {/* Foto Profile */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-36 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={ipan}
              alt="Irvan Dwi Novaldi"
              width={800}
              height={900}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Data Profile */}
        <div className="space-y-3 text-xs">
          <div>
            <span className="font-semibold text-orange-700 block mb-1">
              Nama:
            </span>
            <p className="text-gray-700 font-medium">Irvan Dwi Novaldi</p>
          </div>

          <div>
            <span className="font-semibold text-orange-700 block mb-1">
              Tempat, Tanggal Lahir:
            </span>
            <p className="text-gray-600">Dumai, 15 November 1999</p>
          </div>

          <div>
            <span className="font-semibold text-orange-700 block mb-2">
              Deskripsi:
            </span>
            <div className="text-gray-600 text-justify leading-relaxed space-y-2">
              <p>
                Lulus Pendidikan S1 Pendidikan Luar Biasa Universitas Islam
                Nusantara Kota Bandung pada tahun 2021, dan mengembangkan modul
                ini sebagai syarat lulus magister pendidikan sekolah
                pascasarjana Program Studi Pendidikan Luar Biasa Universitas
                Negeri Yogyakarta.
              </p>
              <p>
                Berkecimpung di dunia disabilitas dan menjadi pendidik di SLB
                Assyifa Umaimah Kota Dumai sejak 2021. Pada tahun 2023 dipercaya
                memimpin di salah satu satuan pendidikan khusus atau SLB Wati
                Purnama Kota Dumai Provinsi Riau hingga saat ini.
              </p>
              <p>
                Di satuan pendidikan khusus, memiliki keahlian di bidang
                pendidikan anak tunanetra dan pendidikan anak autis. Sejak S1
                memiliki konsentrasi dan minat dalam mengembangkan pembelajaran
                pendidikan seksual bagi anak dengan hambatan penglihatan. Selain
                itu, aktif menjadi narasumber dan instruktur seputar anak
                berkebutuhan khusus di provinsi Riau khususnya di Kota Dumai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile 2 - Dr. dr. Atien Nur Chamidah */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
        {/* Foto Profile */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-36 bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Placeholder for Dr. Atien's photo - replace with actual image */}
            {/* Uncomment when image is available:*/}
            <Image
              src={atien}
              alt="Dr. dr. Atien Nur Chamidah, M.Dis.St."
              width={800}
              height={900}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Data Profile */}
        <div className="space-y-3 text-xs">
          <div>
            <span className="font-semibold text-orange-700 block mb-1">
              Nama:
            </span>
            <p className="text-gray-700 font-medium">
              Dr. dr. Atien Nur Chamidah, M.Dis.St.
            </p>
          </div>

          <div>
            <span className="font-semibold text-orange-700 block mb-2">
              Deskripsi:
            </span>
            <div className="text-gray-600 text-justify leading-relaxed space-y-2">
              <p>
                Lulus Pendidikan Profesi Dokter di Fakultas Kedokteran
                Universitas Gadjah Mada tahun 2006, lulus Master of Disability
                Studies di Flinders University South Australia tahun 2012, dan
                mendapatkan gelar Doktor dari Program Doktor Ilmu Kedokteran dan
                Kesehatan Fakultas Kedokteran, Kesehatan Masyarakat, dan
                Keperawatan Universitas Gadjah Mada tahun 2022.
              </p>
              <p>
                Berkecimpung di dunia disabilitas sejak menjadi dosen Program
                Studi Pendidikan Luar Biasa Fakultas Ilmu Pendidikan dan
                Psikologi Universitas Negeri Yogyakarta tahun 2008 dengan bidang
                keahlian Tumbuh Kembang dan Kesehatan Anak Berkebutuhan Khusus.
                Selain itu, pernah menjadi Sekretaris Pusat Disabilitas
                Universitas Negeri Yogyakarta tahun 2023.
              </p>
              <p>
                Saat ini aktif bekerja sebagai Dosen Fakultas Kedokteran
                Universitas Negeri Yogyakarta pada bidang keahlian Pendidikan
                Kesehatan. Berbagai penelitian dilakukan dengan fokus pada
                bidang kesehatan disabilitas dan perkembangan anak berkebutuhan
                khusus yang menghasilkan beberapa artikel ilmiah yang dimuat
                dalam jurnal ilmiah nasional maupun internasional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
