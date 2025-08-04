import React, { useRef, useState } from "react";
// Import semua komponen yang sudah ada
import ModulGuruCover from "@/app/module/cover";

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
import CoverBab1 from "@/components/module-page/1/cover-bab1";
import IsiBab1 from "@/components/module-page/1/page";
import CoverBab2 from "@/components/module-page/2/cover-bab2";
import IsiBab2 from "@/components/module-page/2/page";
import CoverBab3 from "@/components/module-page/3/cover";
import IsiBab3 from "@/components/module-page/3/page";
import CoverBab4 from "@/components/module-page/4/cover-bab4";
import IsiBab4 from "@/components/module-page/4/page";
import Lampiran1 from "@/components/module-page/Lampiran/page";
import Lampiran2 from "@/components/module-page/Lampiran/page1";
import Lampiran3 from "@/components/module-page/Lampiran/page2";

export default function CompleteModulDownloader() {
  const modulRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Download sebagai PDF (recommended untuk modul lengkap)
  const downloadAsPDF = async () => {
    if (!modulRef.current) return;

    setIsDownloading(true);
    setDownloadProgress(10);

    try {
      // Dynamic import untuk mengurangi bundle size
      const { default: jsPDF } = await import("jspdf");
      const { default: html2canvas } = await import("html2canvas");

      setDownloadProgress(20);

      // Get all pages
      const pages = modulRef.current!.children;
      const pdf = new jsPDF("p", "mm", "a4");

      for (let i = 0; i < pages.length; i++) {
        setDownloadProgress(20 + (i / pages.length) * 70);

        // Capture each page - Fixed: Menggunakan interface yang proper
        const canvas = await html2canvas(
          pages[i] as HTMLElement,
          {
            background: "#ffffff",
            scale: 2,
            useCORS: true,
            allowTaint: true,
            width: (pages[i] as HTMLElement).scrollWidth,
            height: (pages[i] as HTMLElement).scrollHeight,
          } as Html2CanvasOptions
        );

        const imgData = canvas.toDataURL("image/png");
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          imgWidth,
          Math.min(imgHeight, pageHeight)
        );
      }

      setDownloadProgress(95);

      // Save the PDF
      pdf.save("Modul-Pendidikan-Seksual-Lengkap.pdf");

      setDownloadProgress(100);
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
      }, 1000);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Gagal mendownload PDF. Silakan coba lagi.");
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  // Download sebagai ZIP berisi gambar-gambar
  const downloadAsImages = async () => {
    if (!modulRef.current) return;

    setIsDownloading(true);
    setDownloadProgress(10);

    try {
      const { default: JSZip } = await import("jszip");
      const { default: html2canvas } = await import("html2canvas");

      const zip = new JSZip();
      const pages = modulRef.current!.children;

      const pageNames = [
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
      ];

      for (let i = 0; i < pages.length; i++) {
        setDownloadProgress(10 + (i / pages.length) * 80);

        // Fixed: Menggunakan interface yang proper
        const canvas = await html2canvas(
          pages[i] as HTMLElement,
          {
            background: "#ffffff",
            scale: 2,
            useCORS: true,
            allowTaint: true,
          } as Html2CanvasOptions
        );

        const imgData = canvas.toDataURL("image/png").split(",")[1];
        const fileName = `${String(i + 1).padStart(2, "0")}-${
          pageNames[i] || `Page-${i + 1}`
        }.png`;

        zip.file(fileName, imgData, { base64: true });
      }

      setDownloadProgress(95);

      const content = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "Modul-Pendidikan-Seksual-Images.zip";
      link.click();

      setDownloadProgress(100);
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
      }, 1000);
    } catch (error) {
      console.error("Error downloading images:", error);
      alert("Gagal mendownload gambar. Silakan coba lagi.");
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  return (
    <div className="relative">
      {/* Download Controls - Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold text-gray-800">
              Modul Lengkap - Download Center
            </h1>
            {isDownloading && (
              <div className="flex items-center gap-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">
                  {downloadProgress}%
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={downloadAsPDF}
              disabled={isDownloading}
              className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              Download PDF
            </button>

            <button
              onClick={downloadAsImages}
              disabled={isDownloading}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              Download Images (ZIP)
            </button>
          </div>
        </div>
      </div>

      {/* Preview Notice */}
      <div className="mt-20 mb-8 max-w-4xl mx-auto px-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-blue-500 mt-0.5"
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
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">
                Preview Modul Lengkap
              </h3>
              <p className="text-blue-700 text-sm">
                Berikut adalah preview semua halaman modul. Gunakan tombol
                download di atas untuk mendapatkan file lengkap.
                <br />
                <strong>PDF:</strong> Satu file lengkap dengan semua halaman
                <br />
                <strong>ZIP Images:</strong> Koleksi gambar PNG untuk setiap
                halaman
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Modul Content */}
      <div ref={modulRef} className="space-y-0">
        {/* Cover Modul */}
        <div className="page-break">
          <ModulGuruCover />
        </div>

        {/* Bab 1 */}
        <div className="page-break">
          <CoverBab1 />
        </div>
        <div className="page-break">
          <IsiBab1 />
        </div>

        {/* Bab 2 */}
        <div className="page-break">
          <CoverBab2 />
        </div>
        <div className="page-break">
          <IsiBab2 />
        </div>

        {/* Bab 3 */}
        <div className="page-break">
          <CoverBab3 />
        </div>
        <div className="page-break">
          <IsiBab3 />
        </div>

        {/* Bab 4 */}
        <div className="page-break">
          <CoverBab4 />
        </div>
        <div className="page-break">
          <IsiBab4 />
        </div>

        {/* Lampiran */}
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

      {/* Loading Overlay */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">
                Memproses Download...
              </h3>
              <p className="text-gray-600 text-sm">
                Mohon tunggu, file sedang disiapkan
              </p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
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
        }

        @media print {
          .page-break {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  );
}
