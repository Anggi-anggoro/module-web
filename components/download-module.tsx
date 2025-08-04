import React, { useState } from "react";
import { Download, FileText, CheckCircle, Loader2 } from "lucide-react";

interface ModuleData {
  id: string;
  title: string;
  coverTitle: string;
  sections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  summary?: string;
  exercises?: Array<{
    question: string;
    type: "essay" | "multiple_choice";
    options?: string[];
  }>;
  references?: string[];
}

const BulkPDFDownloader: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<string[]>([]);

  // Data modul lengkap
  const modulesData: ModuleData[] = [
    {
      id: "1",
      title: "BAB 1",
      coverTitle: "Anak dengan Hambatan Penglihatan",
      sections: [
        {
          id: "pengertian",
          title: "A. Pengertian Anak Dengan Hambatan Penglihatan",
          content:
            "Anak dengan hambatan penglihatan adalah individu yang mengalami gangguan penglihatan yang signifikan, baik sejak lahir maupun akibat kondisi tertentu, yang mempengaruhi kemampuan mereka untuk berpartisipasi dalam aktivitas pendidikan dan sosial tanpa dukungan khusus. Anak dengan hambatan penglihatan adalah individu yang mengalami gangguan penglihatan secara signifikan, baik sebagian maupun total, sehingga memengaruhi kemampuan mereka untuk belajar dan berinteraksi dengan lingkungan tanpa bantuan khusus. Mereka memerlukan adaptasi dalam metode pembelajaran dan alat bantu untuk mengakses informasi visual.",
        },
        {
          id: "klasifikasi",
          title: "B. Klasifikasi Anak Dengan Hambatan Penglihatan",
          content:
            "Dengan hambatan penglihatan yang dikasifikasikan dari kemampuan matanya, yaitu:\n1. Kelompok yang mempunyai acuity 20/70 feet (6/21 meter) artinya ia bisa melihat jarak 20 feet sedangkan anak normal dari jarak 70 feet ini tergolong kurang melihat atau low vision.\n2. Kelompok yang hanya dapat membaca huruf E paling besar pada kartu Snellen dari jarak 20 feet, sedang orang normal dapat membacanya dari jarak 200 feet (20/200 feet atau 6/60 meter, dan ini secara hukum sudah tergolong buta atau legally blind).\n3. Kelompok yang sangat sedikit penglihatannya sehingga ia hanya mengenal bentuk dan objek.\n4. Kelompok yang hanya dapat menghitung jari dari berbagai jarak.\n5. Kelompok yang melihat tangan digerakan.\n6. Kelompok yang hanya mempunyai light projection (dapat melihat terang serta gelap dan dapat menunjuk sumber cahaya)\n7. Kelompok yang hanya mempunyai persepsi cahaya (light perception) yaitu hanya bisa melihat terang dan gelap.\n8. Kelompok yang tidak mempunyai persepsi cahaya (no light perception) disebut dengan buta total (totally blind).",
        },
        {
          id: "karakteristik",
          title: "C. Karakteristik Anak Dengan Hambatan Penglihatan",
          content:
            "Anak dengan hambatan penglihatan memiliki karakteristik yang bervariasi tergantung pada tingkat gangguan penglihatan dan usia saat gangguan tersebut terjadi. Beberapa karakteristik umum meliputi:\n1. Keterbatasan dalam mobilitas: Anak dengan hambatan penglihatan sering mengalami kesulitan dalam bergerak dan menavigasi lingkungan tanpa bantuan.\n2. Ketergantungan pada indera lain: Mereka cenderung mengandalkan indera pendengaran, peraba, penciuman, dan kinestetik untuk memahami dunia sekitar.\n3. Perkembangan kognitif yang unik: Anak dengan hambatan penglihatan mungkin mengalami keterlambatan dalam konsep spasial dan pemahaman visual, tetapi dapat mengembangkan kemampuan memori pendengaran yang kuat.",
        },
      ],
      summary:
        "Anak dengan hambatan penglihatan adalah individu yang mengalami gangguan penglihatan yang signifikan, baik sejak lahir maupun akibat kondisi tertentu, yang mempengaruhi kemampuan mereka untuk berpartisipasi dalam aktivitas pendidikan dan sosial tanpa dukungan khusus. Anak dengan hambatan penglihatan diklasifikasikan mulai dari low vision hingga totally blind. Keterbatasan dalam mobilitas, ketergantungan pada indera lain, dan perkembangan kognitif yang unik merupakan karakteristik yang dapat dijumpai pada anak dengan hambatan penglihatan.",
      exercises: [
        {
          question: "Siapa yang dimaksud anak dengan hambatan penglihatan?",
          type: "essay",
        },
        {
          question:
            "Kelompok anak dengan hambatan penglihatan yang tidak mempunyai persepsi cahaya disebut....",
          type: "essay",
        },
        {
          question:
            "Apa saja karakteristik yang dapat ditemui pada anak dengan hambatan penglihatan?",
          type: "essay",
        },
      ],
      references: [
        "Hosni. (2016) Pendidikan Anak Tunanetra. Departemen Pendidikan Dan Kebudayaan Direktorat Jendral Pendidikan Tinggi Proyek Pendidikan Tenaga Guru.",
        "Hallahan, D. P., Kauffman, J. M., & Pullen, P., C. (2018). Exceptional learners: An introduction to special education. Pearson.",
        "Kirk, S., Gallagher, J., & Coleman, M., R. (2015). Educating exceptional children. Cengage learning.",
        "Westling, D., L., Fox, L., & Carter, E., W. (2015). Teaching student with severe disabilities. Pearson.",
      ],
    },
    {
      id: "2",
      title: "BAB 2",
      coverTitle:
        "Strategi Pembelajaran untuk Anak dengan Hambatan Penglihatan",
      sections: [
        {
          id: "pendekatan",
          title: "A. Pendekatan Pembelajaran Multisensori",
          content:
            "Pendekatan pembelajaran multisensori merupakan strategi yang mengintegrasikan berbagai indera dalam proses pembelajaran. Untuk anak dengan hambatan penglihatan, pendekatan ini sangat penting karena mereka perlu mengoptimalkan indera lain seperti pendengaran, peraba, penciuman, dan kinestetik.",
        },
        {
          id: "media",
          title: "B. Media dan Alat Bantu Pembelajaran",
          content:
            "Media pembelajaran untuk anak dengan hambatan penglihatan meliputi: Braille, audio books, teknologi assistive, model taktil, dan perangkat lunak pembaca layar.",
        },
      ],
      summary:
        "Strategi pembelajaran untuk anak dengan hambatan penglihatan memerlukan pendekatan multisensori dan penggunaan media serta alat bantu yang sesuai.",
      exercises: [
        {
          question:
            "Jelaskan pentingnya pendekatan multisensori dalam pembelajaran anak dengan hambatan penglihatan.",
          type: "essay",
        },
      ],
      references: [
        "Smith, J. (2020). Teaching Students with Visual Impairments. Academic Press.",
      ],
    },
    {
      id: "3",
      title: "BAB 3",
      coverTitle: "Teknologi Assistive untuk Pembelajaran",
      sections: [
        {
          id: "teknologi",
          title: "A. Jenis-jenis Teknologi Assistive",
          content:
            "Teknologi assistive mencakup berbagai perangkat dan software yang membantu anak dengan hambatan penglihatan dalam mengakses informasi dan berpartisipasi dalam pembelajaran.",
        },
      ],
      summary:
        "Teknologi assistive memainkan peran penting dalam mendukung pembelajaran anak dengan hambatan penglihatan.",
      exercises: [
        {
          question:
            "Sebutkan jenis-jenis teknologi assistive yang dapat digunakan.",
          type: "essay",
        },
      ],
      references: [
        "Brown, A. (2019). Assistive Technology in Education. Tech Publications.",
      ],
    },
    {
      id: "4",
      title: "BAB 4",
      coverTitle: "Evaluasi dan Penilaian Pembelajaran",
      sections: [
        {
          id: "evaluasi",
          title: "A. Metode Evaluasi yang Adaptif",
          content:
            "Evaluasi pembelajaran untuk anak dengan hambatan penglihatan memerlukan adaptasi dalam metode dan instrumen penilaian.",
        },
      ],
      summary:
        "Evaluasi yang adaptif diperlukan untuk mengukur kemajuan pembelajaran anak dengan hambatan penglihatan secara efektif.",
      exercises: [
        {
          question: "Bagaimana cara melakukan evaluasi yang adaptif?",
          type: "essay",
        },
      ],
      references: [
        "Johnson, K. (2021). Assessment Methods for Special Education. Education Press.",
      ],
    },
  ];

  const generateModuleHTML = (moduleData: ModuleData): string => {
    const sectionsHTML = moduleData.sections
      .map(
        (section) => `
      <section class="mb-10">
        <h3 class="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
          ${section.title}
        </h3>
        <div class="text-justify text-gray-700 leading-relaxed">
          ${section.content
            .split("\n")
            .map((paragraph) =>
              paragraph.trim() ? `<p class="mb-4">${paragraph}</p>` : ""
            )
            .join("")}
        </div>
      </section>
    `
      )
      .join("");

    const summaryHTML = moduleData.summary
      ? `
      <section class="mb-10">
        <h3 class="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
          RANGKUMAN
        </h3>
        <div class="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <p class="text-justify text-gray-700 leading-relaxed">${moduleData.summary}</p>
        </div>
      </section>
    `
      : "";

    const exercisesHTML = moduleData.exercises
      ? `
      <section class="mb-10">
        <h3 class="text-xl font-bold mb-4 text-yellow-700 border-b-2 border-yellow-500 pb-2">
          LATIHAN MANDIRI
        </h3>
        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <ol class="list-decimal list-inside space-y-4 text-gray-700">
            ${moduleData.exercises
              .map(
                (exercise) => `
              <li class="leading-relaxed">${exercise.question}</li>
            `
              )
              .join("")}
          </ol>
        </div>
      </section>
    `
      : "";

    const referencesHTML = moduleData.references
      ? `
      <section class="mt-16 mb-10">
        <h3 class="text-xl font-bold mb-6 text-yellow-700 border-b-2 border-yellow-500 pb-2">
          REFERENSI
        </h3>
        <div class="space-y-4 text-gray-700">
          ${moduleData.references
            .map(
              (ref) => `
            <p class="text-justify leading-relaxed">${ref}</p>
          `
            )
            .join("")}
        </div>
      </section>
    `
      : "";

    return `
      <div class="page-break">
        <!-- Header Section -->
        <div class="relative bg-yellow-500 pt-16 pb-32 mb-8">
          <div class="absolute top-0 right-0 w-64 h-32 bg-yellow-600 transform rotate-12 origin-top-right"></div>
          <div class="absolute top-8 right-8 w-48 h-24 bg-yellow-400 transform -rotate-6"></div>
          
          <div class="container mx-auto px-6 relative z-10">
            <div class="text-right mb-8">
              <h1 class="text-6xl font-bold text-white mb-2">${moduleData.title}</h1>
            </div>
            
            <div class="max-w-2xl">
              <h2 class="text-4xl font-bold text-yellow-900 leading-tight">
                ${moduleData.coverTitle}
              </h2>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="container mx-auto px-6">
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
            <main class="text-gray-900 leading-relaxed">
              ${sectionsHTML}
              ${summaryHTML}
              ${exercisesHTML}
              ${referencesHTML}
            </main>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-center items-center py-6 text-yellow-600">
          <div class="flex items-center space-x-2">
            <span class="text-lg font-semibold">${moduleData.id}</span>
            <span class="text-2xl">⚥</span>
          </div>
        </div>
      </div>
    `;
  };

  const downloadAllModulesPDF = async () => {
    setIsDownloading(true);
    setDownloadProgress([]);

    try {
      // Create a new window for the combined PDF
      const printWindow = window.open("", "_blank");

      if (!printWindow) {
        alert("Pop-up diblokir! Silakan izinkan pop-up untuk mengunduh PDF.");
        setIsDownloading(false);
        return;
      }

      // Generate combined HTML for all modules
      const allModulesHTML = modulesData
        .map((moduleData) => {
          setDownloadProgress((prev) => [
            ...prev,
            `Memproses ${moduleData.title}...`,
          ]);
          return generateModuleHTML(moduleData);
        })
        .join("");

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Modul Lengkap - Pendidikan Anak dengan Hambatan Penglihatan</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @media print {
              body { margin: 0; }
              .page-break { page-break-before: always; }
              .page-break:first-child { page-break-before: avoid; }
            }
            body { 
              font-family: system-ui, -apple-system, sans-serif;
              background: white;
            }
            .container {
              max-width: 1200px;
            }
          </style>
        </head>
        <body class="bg-white">
          <!-- Cover Page -->
          <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
            <div class="text-center text-white">
              <h1 class="text-6xl font-bold mb-6">MODUL PEMBELAJARAN</h1>
              <h2 class="text-3xl font-semibold mb-8">Pendidikan Anak dengan Hambatan Penglihatan</h2>
              <div class="text-xl">
                <p class="mb-2">Koleksi Lengkap ${modulesData.length} BAB</p>
                <p>Tahun ${new Date().getFullYear()}</p>
              </div>
            </div>
          </div>

          <!-- Table of Contents -->
          <div class="page-break min-h-screen p-8">
            <h2 class="text-4xl font-bold text-center mb-12 text-yellow-700">DAFTAR ISI</h2>
            <div class="max-w-4xl mx-auto">
              ${modulesData
                .map(
                  (moduleData, index) => `
                <div class="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <span class="text-xl font-semibold text-yellow-700">${
                      moduleData.title
                    }</span>
                    <span class="ml-4 text-gray-700">${
                      moduleData.coverTitle
                    }</span>
                  </div>
                  <span class="text-xl font-bold text-yellow-600">${
                    index + 1
                  }</span>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- All Modules Content -->
          ${allModulesHTML}
        </body>
        </html>
      `;

      setDownloadProgress((prev) => [...prev, "Menyiapkan PDF..."]);

      printWindow.document.write(htmlContent);
      printWindow.document.close();

      // Wait for content to load, then print
      printWindow.onload = () => {
        setTimeout(() => {
          setDownloadProgress((prev) => [
            ...prev,
            "Membuka dialog download...",
          ]);
          printWindow.print();
          printWindow.close();
          setIsDownloading(false);
          setDownloadProgress([]);
        }, 1000);
      };
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Terjadi kesalahan saat membuat PDF. Silakan coba lagi.");
      setIsDownloading(false);
      setDownloadProgress([]);
    }
  };

  const downloadSingleModule = (moduleId: string) => {
    const moduleData = modulesData.find((m) => m.id === moduleId);
    if (!moduleData) return;

    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      alert("Pop-up diblokir! Silakan izinkan pop-up untuk mengunduh PDF.");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>${moduleData.title} - ${moduleData.coverTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          @media print {
            body { margin: 0; }
          }
          body { font-family: system-ui, -apple-system, sans-serif; }
        </style>
      </head>
      <body class="bg-white">
        ${generateModuleHTML(moduleData)}
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();

    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Download Modul PDF
        </h2>
        <p className="text-gray-600">
          Unduh modul pembelajaran dalam format PDF untuk akses offline
        </p>
      </div>

      {/* Download All Modules */}
      <div className="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-1">
              Download Modul
            </h3>
            <p className="text-yellow-700 text-sm">
              Unduh {modulesData.length} BAB sekaligus dalam satu file PDF
              lengkap
            </p>
          </div>
          <button
            onClick={downloadAllModulesPDF}
            disabled={isDownloading}
            className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {isDownloading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Download size={20} />
            )}
            <span>{isDownloading ? "Memproses..." : "Download"}</span>
          </button>
        </div>

        {/* Progress Indicator */}
        {downloadProgress.length > 0 && (
          <div className="mt-4 p-3 bg-white rounded border">
            <div className="text-sm text-gray-600 mb-2">Progress:</div>
            {downloadProgress.map((progress, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <CheckCircle size={16} className="text-green-500" />
                <span>{progress}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">
          Petunjuk Penggunaan:
        </h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>
            • Klik &ldquo;Download&rdquo; untuk mendapat semua modul dalam
            satu file PDF
          </li>
          <li>• Pastikan pop-up tidak diblokir oleh browser</li>
          <li>
            • File PDF akan terbuka di tab baru, pilih &ldquo;Save as PDF&rdquo;
            untuk menyimpan
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BulkPDFDownloader;
