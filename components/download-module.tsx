import React, { useRef, useState, useCallback } from "react";

// Updated type definition for html2canvas to match actual library
type Html2CanvasFunction = (
  element: HTMLElement,
  options?: Record<string, unknown>
) =>
  | Promise<HTMLCanvasElement>
  | { then: (callback: (canvas: HTMLCanvasElement) => void) => void };

// Type for the html2canvas module structure
type Html2CanvasModule =
  | {
      default: Html2CanvasFunction;
    }
  | Html2CanvasFunction;

// Component mapping untuk dynamic loading individual
const componentMap = [
  () => import("@/app/module/cover"),
  () => import("@/components/module-page/1/cover-bab1"),
  () => import("@/components/module-page/1/page"),
  () => import("@/components/module-page/2/cover-bab2"),
  () => import("@/components/module-page/2/page"),
  () => import("@/components/module-page/3/cover"),
  () => import("@/components/module-page/3/page"),
  () => import("@/components/module-page/4/cover-bab4"),
  () => import("@/components/module-page/4/page"),
  () => import("@/components/module-page/Lampiran/page"),
  () => import("@/components/module-page/Lampiran/page1"),
  () => import("@/components/module-page/Lampiran/page2"),
];

const componentNames = [
  "Cover Modul",
  "Cover Bab 1",
  "Isi Bab 1",
  "Cover Bab 2",
  "Isi Bab 2",
  "Cover Bab 3",
  "Isi Bab 3",
  "Cover Bab 4",
  "Isi Bab 4",
  "Lampiran 1",
  "Lampiran 2",
  "Lampiran 3",
];

// Worker-like function untuk memproses canvas
const processCanvasInChunks = async (
  canvas: HTMLCanvasElement
): Promise<string> => {
  return new Promise((resolve) => {
    // Use PNG format for better quality (removed unused quality variable)
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => {
        resolve(canvas.toDataURL("image/png"));
      });
    } else {
      setTimeout(() => {
        resolve(canvas.toDataURL("image/png"));
      }, 0);
    }
  });
};

export default function PDFModulDownloader() {
  const tempContainerRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [canCancel, setCanCancel] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  // Sleep function dengan yield control
  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  // Force garbage collection jika tersedia
  const forceGC = () => {
    if (typeof window !== "undefined" && "gc" in window) {
      try {
        (window as typeof window & { gc: () => void }).gc();
      } catch {
        // Ignore if gc is not available
      }
    }
  };

  // Process single page dengan optimasi memory
  const processSinglePage = useCallback(
    async (
      pageIndex: number,
      html2canvasModule: Html2CanvasModule,
      totalPages: number
    ): Promise<string> => {
      if (isCancelled) {
        throw new Error("Process cancelled by user");
      }

      setCurrentStep(`Memuat ${componentNames[pageIndex]}...`);

      // Dynamic import komponen individual
      const ComponentModule = await componentMap[pageIndex]();
      const Component = ComponentModule.default;

      if (isCancelled) {
        throw new Error("Process cancelled by user");
      }

      // Buat temporary container untuk komponen ini saja
      const tempContainer = document.createElement("div");
      tempContainer.style.cssText = `
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: 1200px;
        min-height: 1600px;
        background: #ffffff;
        z-index: -1;
        padding: 40px;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #000000;
      `;

      document.body.appendChild(tempContainer);

      // Render React component ke temporary container
      const { createRoot } = await import("react-dom/client");
      const root = createRoot(tempContainer);

      // Wait for component to fully render
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          reject(new Error(`Timeout rendering ${componentNames[pageIndex]}`));
        }, 30000);

        root.render(React.createElement(Component));

        // Wait for component and images to load
        setTimeout(() => {
          const images = tempContainer.querySelectorAll("img");
          let loadedImages = 0;

          const checkComplete = () => {
            loadedImages++;
            if (loadedImages === images.length || images.length === 0) {
              clearTimeout(timeout);
              setTimeout(resolve, 500); // Extra wait for any async rendering
            }
          };

          if (images.length === 0) {
            clearTimeout(timeout);
            setTimeout(resolve, 1000);
          } else {
            images.forEach((img) => {
              if (img.complete && img.naturalHeight !== 0) {
                checkComplete();
              } else {
                img.onload = checkComplete;
                img.onerror = checkComplete;
              }
            });
          }
        }, 2000);
      });

      if (isCancelled) {
        root.unmount();
        document.body.removeChild(tempContainer);
        throw new Error("Process cancelled by user");
      }

      setCurrentStep(
        `Memproses ${componentNames[pageIndex]} (${
          pageIndex + 1
        }/${totalPages})...`
      );

      // Final wait for content to settle
      await sleep(1000);

      // Check if container has content
      const hasContent =
        tempContainer.innerText.trim().length > 0 ||
        tempContainer.querySelectorAll("img, svg, canvas").length > 0;

      if (!hasContent) {
        console.warn(`No content found in ${componentNames[pageIndex]}`);
      }

      // Handle html2canvas with proper typing
      const html2canvas: Html2CanvasFunction =
        typeof html2canvasModule === "function"
          ? html2canvasModule
          : html2canvasModule.default;

      const options = {
        backgroundColor: "#ffffff",
        scale: 1.5,
        useCORS: true,
        allowTaint: false,
        logging: true, // Enable logging for debugging
        width: tempContainer.scrollWidth,
        height: Math.max(tempContainer.scrollHeight, 1600),
        imageTimeout: 30000,
        onclone: (clonedDoc: Document) => {
          // Ensure all styles are preserved in cloned document
          const clonedContainer = clonedDoc.querySelector("div");
          if (clonedContainer) {
            clonedContainer.style.cssText = tempContainer.style.cssText;
            // Force visibility
            clonedContainer.style.visibility = "visible";
            clonedContainer.style.display = "block";
          }
        },
      };

      let canvas: HTMLCanvasElement;

      try {
        console.log(`Starting capture for ${componentNames[pageIndex]}...`);
        const result = html2canvas(tempContainer, options);

        if (result && typeof result === "object" && "then" in result) {
          canvas = await new Promise<HTMLCanvasElement>((resolve, reject) => {
            const timeout = setTimeout(() => {
              reject(
                new Error(`Timeout capturing ${componentNames[pageIndex]}`)
              );
            }, 45000);

            const promise = result.then((c) => {
              clearTimeout(timeout);
              console.log(
                `Capture successful for ${componentNames[pageIndex]}, canvas size: ${c.width}x${c.height}`
              );
              resolve(c);
            });

            if (promise && typeof promise.catch === "function") {
              promise.catch((error: unknown) => {
                clearTimeout(timeout);
                reject(error);
              });
            }
          });
        } else {
          canvas = await (result as Promise<HTMLCanvasElement>);
        }

        if (isCancelled) {
          throw new Error("Process cancelled by user");
        }

        // Validate canvas
        if (!canvas || canvas.width === 0 || canvas.height === 0) {
          throw new Error(
            `Invalid canvas for ${componentNames[pageIndex]}: ${canvas?.width}x${canvas?.height}`
          );
        }

        // Convert to base64
        const imgData = await processCanvasInChunks(canvas);

        // Validate image data
        if (!imgData || imgData === "data:image/png;base64,") {
          throw new Error(`Empty image data for ${componentNames[pageIndex]}`);
        }

        console.log(
          `Successfully processed ${componentNames[pageIndex]}, data length: ${imgData.length}`
        );

        // Cleanup immediately
        root.unmount();
        document.body.removeChild(tempContainer);

        // Clean canvas
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        canvas.width = 0;
        canvas.height = 0;

        forceGC();

        return imgData;
      } catch (error) {
        console.error(`Error processing ${componentNames[pageIndex]}:`, error);

        // Cleanup on error
        root.unmount();
        if (document.body.contains(tempContainer)) {
          document.body.removeChild(tempContainer);
        }
        throw error;
      }
    },
    [isCancelled]
  );

  // Cancel function
  const cancelDownload = useCallback(() => {
    setIsCancelled(true);
    setIsDownloading(false);
    setDownloadProgress(0);
    setCurrentStep("Download dibatalkan");
    setCanCancel(false);

    setTimeout(() => {
      setCurrentStep("");
      setIsCancelled(false);
    }, 2000);
  }, []);

  // Optimized PDF download
  const downloadAsPDF = useCallback(async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setIsCancelled(false);
    setDownloadProgress(0);
    setCurrentStep("Mempersiapkan download...");
    setCanCancel(true);

    try {
      setDownloadProgress(5);
      setCurrentStep("Memuat library PDF...");

      // Dynamic import untuk library
      const [{ default: jsPDF }, html2canvasModule] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ]);

      if (isCancelled) return;

      setDownloadProgress(10);

      const pdf = new jsPDF("p", "mm", "a4");
      const totalComponents = componentMap.length;
      let processedPages = 0;

      // Process each component individually
      for (let i = 0; i < totalComponents; i++) {
        if (isCancelled) {
          throw new Error("Download cancelled by user");
        }

        try {
          const imgData = await processSinglePage(
            i,
            html2canvasModule,
            totalComponents
          );

          if (isCancelled) {
            throw new Error("Download cancelled by user");
          }

          // Add page to PDF (except for first page)
          if (processedPages > 0) {
            pdf.addPage();
          }

          // A4 dimensions in mm
          const pdfWidth = 210;
          const pdfHeight = 297;

          // Add image to PDF
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          processedPages++;

          console.log(
            `Added page ${processedPages} to PDF: ${componentNames[i]}`
          );

          // Update progress
          const progress = 10 + ((i + 1) / totalComponents) * 80;
          setDownloadProgress(Math.min(progress, 90));

          // Small delay to prevent overwhelming
          await sleep(500);
          forceGC();
        } catch (pageError: unknown) {
          console.error(`Error processing component ${i + 1}:`, pageError);

          const errorMessage =
            pageError instanceof Error ? pageError.message : "Unknown error";

          if (isCancelled || errorMessage.includes("cancelled")) {
            throw pageError;
          }

          // Add a placeholder page or continue
          setCurrentStep(`Error pada ${componentNames[i]}, melanjutkan...`);
          await sleep(1000);
        }
      }

      if (isCancelled) return;

      // Validate PDF has pages
      if (processedPages === 0) {
        throw new Error("No pages were successfully processed");
      }

      setDownloadProgress(95);
      setCurrentStep("Menyimpan file PDF...");

      // Save the PDF
      pdf.save("Modul-Pendidikan-Seksual-Lengkap.pdf");

      setDownloadProgress(100);
      setCurrentStep(
        `Download selesai! ${processedPages} halaman berhasil diproses`
      );
      setCanCancel(false);

      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
        setCurrentStep("");
      }, 3000);
    } catch (error: unknown) {
      console.error("Error downloading PDF:", error);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";

      if (isCancelled || errorMessage.includes("cancelled")) {
        return;
      }

      setCurrentStep(`Error: ${errorMessage}`);

      setTimeout(() => {
        alert(
          `Gagal mendownload PDF: ${errorMessage}\n\nTips:\n- Coba refresh halaman dan ulangi\n- Buka Developer Console untuk melihat detail error\n- Pastikan semua komponen dapat di-render dengan benar\n- Gunakan browser Chrome/Firefox untuk performa terbaik`
        );
        setIsDownloading(false);
        setDownloadProgress(0);
        setCurrentStep("");
        setCanCancel(false);
      }, 1000);
    }
  }, [isDownloading, processSinglePage, isCancelled]);

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
                Modul PDF Downloader
              </h1>
              <p className="text-gray-600">
                Download modul pendidikan dalam format PDF
              </p>
            </div>

            {isDownloading && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
                  <span className="font-medium text-blue-800">
                    {currentStep || "Memproses Download..."}
                  </span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-blue-700 mt-2 text-center">
                  {downloadProgress}% selesai
                </p>

                {canCancel && (
                  <div className="mt-3 text-center">
                    <button
                      onClick={cancelDownload}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors"
                    >
                      Batalkan Download
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-center mb-6">
              <button
                onClick={downloadAsPDF}
                disabled={isDownloading}
                className="group bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center gap-3 transform hover:scale-105 active:scale-95 min-w-[300px] justify-center"
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
                    {isDownloading ? "Memproses..." : "Download PDF"}
                  </div>
                  <div className="text-sm opacity-90">
                    Dengan validasi konten dan debugging
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
                Debugging & Troubleshooting
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Buka Developer Console (F12) untuk melihat log proses</li>
                <li>
                  • Sistem akan memvalidasi setiap halaman sebelum diproses
                </li>
                <li>• Jika ada error, detail akan muncul di console</li>
                <li>• Pastikan semua komponen dapat di-render dengan benar</li>
                <li>• Proses menggunakan PNG format untuk kualitas maksimal</li>
                <li>• Waktu timeout diperpanjang untuk komponen kompleks</li>
              </ul>
            </div>

            {/* Warning untuk debugging */}
            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-yellow-500 mt-0.5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 15.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-yellow-800">
                    <strong>Debug Mode:</strong> Jika PDF masih kosong, buka
                    Developer Console untuk melihat log detail. Kemungkinan
                    penyebab: komponen tidak ter-render, error import, atau
                    masalah styling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden temp container */}
      <div ref={tempContainerRef} className="hidden" />

      {/* Enhanced Loading Overlay */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                {currentStep || "Memproses Download..."}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Memproses dengan validasi konten. Cek console untuk detail log.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">
                {downloadProgress}% selesai
              </p>

              {canCancel && (
                <button
                  onClick={cancelDownload}
                  className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors"
                >
                  Batalkan Download
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
