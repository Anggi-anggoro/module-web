"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { ScrollToId } from "./utils";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const chapters = [
    {
      id: "bab1",
      title: "Bab 1. Anak Dengan Hambatan Penglihatan",
      subChapters: [
        {
          id: "pengertian-anak-dengan-hambatan-penglihatan",
          title: "Pengertian Anak Dengan Hambatan Penglihatan",
        },
        {
          id: "klasifikasi-anak-dengan-hambatan-penglihatan",
          title: "Klasifikasi anak dengan hambatan-penglihatan",
        },
        {
          id: "karakteristik Anak Dengan Hambatan Penglihatan",
          title: "Karakteristik Anak Dengan Hambatan Penglihatan",
        },
      ],
    },
    {
      id: "bab2",
      title: "Bab 2. Pendidikan Seksual",
      subChapters: [],
    },
  ];

  const filteredChapters = chapters
    .map((chapter) => {
      const chapterMatches = chapter.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // If chapter matches, keep all subchapters
      if (chapterMatches) {
        return chapter;
      }

      // If not, filter subchapters
      const filteredSubChapters = chapter.subChapters.filter((sub) =>
        sub.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Only return chapter if it has matching subchapters
      if (filteredSubChapters.length > 0) {
        return {
          ...chapter,
          subChapters: filteredSubChapters,
        };
      }

      // Return null if no matches found
      return null;
    })
    .filter((chapter) => chapter !== null); // Remove null entries

  return (
    <aside className="sticky top-3 py-4 px-3 overflow-y-auto text-sm z-20 border-2 border-orange-400 rounded-md bg-orange-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-orange-600">📚 Navigasi Modul</h2>
        <button
          onClick={toggleSearch}
          className="text-orange-600"
          aria-label="Toggle Search"
        >
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
        {filteredChapters.map((chapter) => (
          <li key={chapter.id}>
            <div className="flex items-start justify-between">
              <button
                onClick={() => toggleChapter(chapter.id)}
                className="font-medium hover:underline"
              >
                {chapter.title}
              </button>
              {chapter.subChapters.length > 0 && (
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="ml-2"
                >
                  {openChapters[chapter.id] ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
              )}
            </div>

            {/* Subchapters */}
            {openChapters[chapter.id] && chapter.subChapters.length > 0 && (
              <ul className="pl-4 mt-1 space-y-1 text-gray-700">
                {chapter.subChapters.map((sub) => (
                  <li className="list-decimal ml-3" key={sub.id}>
                    <Link
                      onClick={(e) => ScrollToId(sub.id, e)}
                      href={`#${sub.id}`}
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
