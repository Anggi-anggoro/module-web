declare module 'jspdf' {
  export default class jsPDF {
    constructor(orientation?: string, unit?: string, format?: string);
    addPage(): jsPDF;
    addImage(
      imageData: string,
      format: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): jsPDF;
    save(filename: string): void;
  }
}

declare module 'jszip' {
  export default class JSZip {
    file(name: string, data: string, options?: { base64: boolean }): void;
    generateAsync(options: { type: string }): Promise<Blob>;
  }
}