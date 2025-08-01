import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          &copy; 2025 MODIS - Modul Pendidikan Seksual Anak dengan Hambatan
          Penglihatan. All rights reserved.
        </p>
        <p className="text-xs md:text-sm text-orange-100 mt-1 mb-2">
          Developed with ❤️ by AA&ZAND
        </p>
        <Link className="my-2 hover:underline" href={'https://anggi-anggoro.vercel.app/'}>
          Contact our Team
        </Link>
      </div>
    </footer>
  );
}
