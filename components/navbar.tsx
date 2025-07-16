'use client';
import { useState } from 'react';
import { Search } from 'lucide-react'; // atau ganti dengan SVG custom jika tidak pakai lucide

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => setShowSearch((prev) => !prev);

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      window.dispatchEvent(new CustomEvent("closeSidebar"));
    }
  };

  const chapters = [
    { id: "bab1", title: "Bab 1. Perkembangan Seksual" },
    { id: "bab2", title: "Bab 2. Pendidikan Seksual" },
    { id: "bab3", title: "Bab 3. Metode Pembelajaran" },
    { id: "bab4", title: "Bab 4. Media" },
    { id: "bab5", title: "Bab 5. Evaluasi" },
  ];

  const filteredChapters = chapters.filter((bab) =>
    bab.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className=" bg-white p-0 sticky top-0 h-screen overflow-y-auto text-sm z-20">
      {/* Heading + Search Icon */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold text-orange-600 flex items-center gap-2">
          <span>📚 Navigasi Modul</span>
        </h2>
        <button
          onClick={toggleSearch}
          className="text-orange-600 hover:text-orange-800 transition-colors"
          aria-label="Toggle Search"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Search Bar Toggle */}
      {showSearch && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari bab..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      )}

      {/* Navigasi */}
      <ul className="space-y-1">
        {filteredChapters.map((bab) => (
          <li key={bab.id}>
            <a
              href={`#${bab.id}`}
              className="hover:underline block"
              onClick={closeSidebar}
            >
              {bab.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Navbar;
