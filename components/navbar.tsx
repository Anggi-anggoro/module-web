'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>({});

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const chapters = [
    {
      id: 'bab1',
      title: 'Bab 1. Anak Dengan Hambatan Penglihatan',
      page: '/bab1',
      subChapters: [
        { id: 'pengertian-anak-dengan-hambatan-penglihatan', title: 'A. Pengertian' },
        { id: 'klasifikasi-anak-dengan-hambatan-penglihatan', title: 'B. Klasifikasi' },
      ],
    },
    {
      id: 'bab2',
      title: 'Bab 2. Pendidikan Seksual',
      page: '/bab2',
      subChapters: [],
    },
  ];

  // Filter berdasarkan pencarian
  const filteredChapters = chapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chapter.subChapters.some((sub) =>
      sub.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <aside className="bg-white p-4 sticky top-0 h-screen overflow-y-auto text-sm z-20 border-r border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-orange-600">📚 Navigasi Modul</h2>
        <button onClick={toggleSearch} className="text-orange-600" aria-label="Toggle Search">
          <Search size={20} />
        </button>
      </div>

      {showSearch && (
        <input
          type="text"
          placeholder="Cari bab atau sub..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      )}

      <ul className="space-y-2">
        {filteredChapters.map((chapter, idx) => (
          <li key={chapter.id}>
            <div className="flex items-center justify-between">
              <Link
                href={`/module/${idx + 1}`}
                className="font-medium hover:underline"
              >
                {chapter.title}
              </Link>
              {chapter.subChapters.length > 0 && (
                <button onClick={() => toggleChapter(chapter.id)} className="ml-2">
                  {openChapters[chapter.id] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </button>
              )}
            </div>

            {/* Subchapters */}
            {openChapters[chapter.id] && chapter.subChapters.length > 0 && (
              <ul className="pl-4 mt-1 space-y-1 text-gray-700">
                {chapter.subChapters.map((sub)=> (
                  <li key={sub.id}>
                    <Link
                      href={`/module/${idx + 1}#${sub.id}`}
                      className="hover:underline block text-sm"
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Navbar;
