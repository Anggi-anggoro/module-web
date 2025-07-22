"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import { ScrollToId } from "./utils";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPostTest, setIsPostTest] = useState<boolean | null>(false);
  const [openChapters, setOpenChapters] = useState<{ [key: string]: boolean }>(
    {}
  );
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data, error }) => {
      if (error || !data.user || !data.user.email) {
      } else {
        supabase
          .from("userdata")
          .select("posttest_score")
          .eq("email", data.user.email)
          .single()
          .then(({ data: userData, error: userError }) => {
            if (userError || !userData.posttest_score) {
              setIsPostTest(false);
            } else {
              setIsPostTest(true);
            }
          });
      }
    });
  }, [router]);

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
          id: "karakteristik-anak-dengan-hambatan-penglihatan",
          title: "Karakteristik Anak Dengan Hambatan Penglihatan",
        },
      ],
    },
    {
      id: "bab2",
      title: "Bab 2. Pendidikan Seksual",
      subChapters: [
        {
          id: "tujuan-pembelajaran",
          title: "Tujuan Pembelajaran",
        },
        {
          id: "definisi-pendidikan-seksual",
          title: "Definisi Pendidikan Seksual",
        },
        {
          id: "sasaran-jenjang-pembelajaran-pendidikan-seksual",
          title: "Sasaran Jenjang Pembelajaran Pendidikan Seksual",
        },
        {
          id: "metode-dan-perencanaan-pembelajaran-pendidikan-seksual",
          title: "Metode dan Perencanaan Pembelajaran Pendidikan Seksual",
        },
        {
          id: "media-pembelajaran",
          title: "Media Pembelajaran",
        },
      ],
    },
    {
      id: "bab3",
      title: "Bab 3. Materi Pendidikan Seksual",
      subChapters: [
        {
          id: "tujuan-pembelajaran-bab3",
          title: "Tujuan Pembelajaran",
        },
        {
          id: "bagaimana-bentuk-tubuhku",
          title: "Bagaimana Bentuk Tubuhku?",
        },
        {
          id: "ayo-jaga-kesehatan-reproduksi",
          title: "Ayo Jaga Kesehatan Reproduksi!",
        },
        {
          id: "perilaku-seksual",
          title: "Perilaku Seksual",
        },
        {
          id: "pergaulanku-pergaulan-sehat",
          title: "Pergaulanku, Pergaulan Sehat",
        },
      ],
    },
    {
      id: "bab4",
      title: "Bab 4. Evaluasi Pembelajaran",
      subChapters: [
        {
          id: "tpbab4",
          title: "Tujuan Pembelajaran",
        },
      ],
    },
    {
      id: "lampiran",
      title: "Lampiran",
      subChapters: [
        {
          id: "lampiran",
          title: "Perencanaan Pembelajaran Pendidikan Seksual",
        },
        {
          id: "modulajar",                    
          title: "Contoh modul ajar / RPP terintegrasi dengan pendidikan seksual",
        },
        {
          id: "contohsoalevaluasi",                    
          title: "Contoh soal evaluasi",
        },
      ],
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
    <aside className="sticky top-3 py-4 px-3 overflow-y-auto text-sm z-20 border-2 border-orange-400 rounded-md bg-orange-100 max-sm:mr-5 max-sm:max-w-80">
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
        {filteredChapters.map(
          (chapter, index) =>
            (index <= 2 || isPostTest) && (
              <li key={chapter.id}>
                <div className="flex items-start justify-between">
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="font-medium hover:underline text-left"
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
                      <li className="list-disc ml-3" key={sub.id}>
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
            )
        )}
      </ul>
    </aside>
  );
};

export default Navbar;
