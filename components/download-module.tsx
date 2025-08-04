import React, { useRef, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";

// Interface untuk mengatasi masalah TypeScript dengan html2canvas options
interface Html2CanvasOptions {
  background?: string;
  scale?: number;
  useCORS?: boolean;
  allowTaint?: boolean;
  width?: number;
  height?: number;
  logging?: boolean;
  proxy?: string;
  removeContainer?: boolean;
  foreignObjectRendering?: boolean;
  imageTimeout?: number;
  ignoreElements?: (element: Element) => boolean;
}

// Interface untuk JSZip generateAsync options
interface JSZipGenerateOptions {
  type: "blob";
  compression?: "STORE" | "DEFLATE";
  compressionOptions?: {
    level: number;
  };
}

// Lazy load komponen untuk mengurangi bundle size awal
const ModulGuruCover = dynamic(() => import("@/app/module/cover"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      Loading Cover...
    </div>
  ),
  ssr: false,
});
const CoverBab1 = dynamic(
  () => import("@/components/module-page/1/cover-bab1"),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Loading Bab 1 Cover...
      </div>
    ),
    ssr: false,
  }
);
const IsiBab1 = dynamic(() => import("@/components/module-page/1/page"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      Loading Bab 1...
    </div>
  ),
  ssr: false,
});
const CoverBab2 = dynamic(
  () => import("@/components/module-page/2/cover-bab2"),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Loading Bab 2 Cover...
      </div>
    ),
    ssr: false,
  }
);
const IsiBab2 = dynamic(() => import("@/components/module-page/2/page"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      Loading Bab 2...
    </div>
  ),
  ssr: false,
});
const CoverBab3 = dynamic(() => import("@/components/module-page/3/cover"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      Loading Bab 3 Cover...
    </div>
  ),
  ssr: false,
});
const IsiBab3 = dynamic(() => import("@/components/module-page/3/page"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      Loading Bab 3...
    </div>
  ),
  ssr: false,
});
const CoverBab4 = dynamic(
  () => import("@/components/module-page/4/cover-bab4"),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Loading Bab 4 Cover...
      </div>
    ),
    ssr: false,
  }
);
const IsiBab4 = dynamic(() => import("@/components/module-page/4/page"), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      Loading Bab 4...
    </div>
  ),
  ssr: false,
});
const Lampiran1 = dynamic(
  () => import("@/components/module-page/Lampiran/page"),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Loading Lampiran 1...
      </div>
    ),
    ssr: false,
  }
);
const Lampiran2 = dynamic(
  () => import("@/components/module-page/Lampiran/page1"),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Loading Lampiran 2...
      </div>
    ),
    ssr: false,
  }
);
const Lampiran3 = dynamic(
  () => import("@/components/module-page/Lampiran/page2"),
  {
    loading: () => (
      <div className="h-screen flex items-center justify-center">
        Loading Lampiran 3...
      </div>
    ),
    ssr: false,
  }
);

export default function CompleteModulDownloader() {
  const modulRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Memoize page names untuk menghindari re-creation
  const pageNames = useMemo(
    () => [
      "Cover-Modul",
      "Cover-Bab-1",
      "Isi-Bab-1",
      "Cover-Bab-2",
      "Isi-Bab-2",
      "Cover-Bab-3",
      "Isi-Bab-3",
      "Cover-Bab-4",
      "Isi-Bab-4",
      "Lampiran-1",
      "Lampiran-2",
      "Lampiran-3",
    ],
    []
  );

  // Optimized PDF download dengan error handling dan memory management yang lebih baik
  const downloadAsPDF = useCallback(async () => {
    if (!modulRef.current || isDownloading) return;

    setIsDownloading(true);
    setDownloadProgress(5);

    // Tampilkan komponen yang tersembunyi untuk proses download
    if (modulRef.current) {
      modulRef.current.classList.remove("hidden");
    }

    setDownloadProgress(10);

    try {
      // Dynamic import untuk mengurangi bundle size
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ]);

      setDownloadProgress(20);

      const pages = Array.from(modulRef.current.children);
      const pdf = new jsPDF("p", "mm", "a4");

      // Process pages dengan batch untuk menghindari memory overload
      for (let i = 0; i < pages.length; i++) {
        setDownloadProgress(20 + (i / pages.length) * 70);

        const pageElement = pages[i] as HTMLElement;

        // Optimized html2canvas options untuk performa
        const canvas = await html2canvas(pageElement, {
          background: "#ffffff",
          scale: 1.5, // Turunkan scale untuk performa lebih baik
          useCORS: true,
          allowTaint: true,
          logging: false, // Disable logging untuk performa
          width: pageElement.scrollWidth,
          height: pageElement.scrollHeight,
          imageTimeout: 15000, // Timeout untuk menghindari hanging
        } as Html2CanvasOptions);

        const imgData = canvas.toDataURL("image/jpeg", 0.8); // Gunakan JPEG dengan kompresi
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(
          imgData,
          "JPEG",
          0,
          0,
          imgWidth,
          Math.min(imgHeight, pageHeight)
        );

        // Clear canvas dari memory
        canvas.width = 0;
        canvas.height = 0;

        // Force garbage collection hint
        if (i % 3 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }

      setDownloadProgress(95);

      // Save the PDF
      pdf.save("Modul-Pendidikan-Seksual-Lengkap.pdf");

      setDownloadProgress(100);
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
        // Sembunyikan kembali komponen setelah download selesai
        if (modulRef.current) {
          modulRef.current.classList.add("hidden");
        }
      }, 1000);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Gagal mendownload PDF. Silakan coba lagi.");
      setIsDownloading(false);
      setDownloadProgress(0);
      // Sembunyikan kembali komponen jika error
      if (modulRef.current) {
        modulRef.current.classList.add("hidden");
      }
    }
  }, [isDownloading]);

  // Optimized image download
  const downloadAsImages = useCallback(async () => {
    if (!modulRef.current || isDownloading) return;

    setIsDownloading(true);
    setDownloadProgress(5);

    // Tampilkan komponen yang tersembunyi untuk proses download
    if (modulRef.current) {
      modulRef.current.classList.remove("hidden");
    }

    setDownloadProgress(10);

    try {
      const [{ default: JSZip }, { default: html2canvas }] = await Promise.all([
        import("jszip"),
        import("html2canvas"),
      ]);

      const zip = new JSZip();
      const pages = Array.from(modulRef.current.children);

      for (let i = 0; i < pages.length; i++) {
        setDownloadProgress(10 + (i / pages.length) * 80);

        const pageElement = pages[i] as HTMLElement;

        const canvas = await html2canvas(pageElement, {
          background: "#ffffff",
          scale: 1.5, // Turunkan scale untuk performa
          useCORS: true,
          allowTaint: true,
          logging: false,
          imageTimeout: 15000,
        } as Html2CanvasOptions);

        const imgData = canvas.toDataURL("image/jpeg", 0.8).split(",")[1]; // JPEG dengan kompresi
        const fileName = `${String(i + 1).padStart(2, "0")}-${
          pageNames[i] || `Page-${i + 1}`
        }.jpg`; // Gunakan .jpg

        zip.file(fileName, imgData, { base64: true });

        // Memory cleanup
        canvas.width = 0;
        canvas.height = 0;

        if (i % 2 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
      }

      setDownloadProgress(95);

      // Fixed JSZip generateAsync call with proper typing
      const zipOptions: JSZipGenerateOptions = {
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: { level: 6 },
      };

      const content = await zip.generateAsync(zipOptions);

      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "Modul-Pendidikan-Seksual-Images.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup URL
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);

      setDownloadProgress(100);
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
        // Sembunyikan kembali komponen setelah download selesai
        if (modulRef.current) {
          modulRef.current.classList.add("hidden");
        }
      }, 1000);
    } catch (error) {
      console.error("Error downloading images:", error);
      alert("Gagal mendownload gambar. Silakan coba lagi.");
      setIsDownloading(false);
      setDownloadProgress(0);
      // Sembunyikan kembali komponen jika error
      if (modulRef.current) {
        modulRef.current.classList.add("hidden");
      }
    }
  }, [isDownloading, pageNames]);

  return (
    <div className="relative">
      {/* Download Controls - Centered */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Modul Lengkap Downloader
              </h1>
              <p className="text-gray-600">
                Download modul pendidikan dalam format PDF atau kumpulan gambar
              </p>
            </div>

            {isDownloading && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
                  <span className="font-medium text-blue-800">
                    Memproses Download...
                  </span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-blue-700 mt-2 text-center">
                  {downloadProgress}% selesai
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={downloadAsPDF}
                disabled={isDownloading}
                className="group bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex flex-col items-center gap-3 transform hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="text-center">
                  <div className="text-lg font-bold">
                    {isDownloading ? "Processing..." : "Download PDF"}
                  </div>
                  <div className="text-sm opacity-90">
                    Satu file lengkap dengan semua halaman
                  </div>
                </div>
              </button>

              <button
                onClick={downloadAsImages}
                disabled={isDownloading}
                className="group bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex flex-col items-center gap-3 transform hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="text-center">
                  <div className="text-lg font-bold">
                    {isDownloading ? "Processing..." : "Download Images"}
                  </div>
                  <div className="text-sm opacity-90">
                    Koleksi gambar JPEG untuk setiap halaman
                  </div>
                </div>
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Informasi Download
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  • Modul terdiri dari 12 halaman (Cover + 4 Bab + 3 Lampiran)
                </li>
                <li>
                  • Format PDF: Satu file dengan kualitas JPEG untuk ukuran
                  optimal
                </li>
                <li>• Format ZIP: Kumpulan file gambar JPEG terpisah</li>
                <li>• Proses download memerlukan waktu beberapa menit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Content Container - Hanya dimuat saat download */}
      <div ref={modulRef} className="hidden space-y-0">
        <div className="page-break">
          <ModulGuruCover />
        </div>
        <div className="page-break">
          <CoverBab1 />
        </div>
        <div className="page-break">
          <IsiBab1 />
        </div>
        <div className="page-break">
          <CoverBab2 />
        </div>
        <div className="page-break">
          <IsiBab2 />
        </div>
        <div className="page-break">
          <CoverBab3 />
        </div>
        <div className="page-break">
          <IsiBab3 />
        </div>
        <div className="page-break">
          <CoverBab4 />
        </div>
        <div className="page-break">
          <IsiBab4 />
        </div>
        <div className="page-break">
          <Lampiran1 />
        </div>
        <div className="page-break">
          <Lampiran2 />
        </div>
        <div className="page-break">
          <Lampiran3 />
        </div>
      </div>

      {/* Loading Overlay - Improved */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Memproses Download...
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Mohon tunggu, komponen sedang dimuat dan file sedang disiapkan
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">
                {downloadProgress}% selesai
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .page-break {
          break-after: page;
          min-height: 100vh;
          will-change: transform;
        }

        @media print {
          .page-break {
            page-break-after: always;
          }
        }

        /* Optimize rendering */
        .page-break > * {
          contain: layout style paint;
        }
      `}</style>
    </div>
  );
}
