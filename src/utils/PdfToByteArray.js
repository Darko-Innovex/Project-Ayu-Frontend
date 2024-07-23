import { PDFDocument } from "pdf-lib";

// Convert a File object to a byte array
export const fileToByteArray = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(new Uint8Array(reader.result));
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };

    reader.readAsArrayBuffer(file);
  });
};

// Convert byte array to PDFDocument object using pdf-lib
export const byteArrayToPdfObject = async (byteArray) => {
  try {
    const pdfDoc = await PDFDocument.load(byteArray);
    return pdfDoc;
  } catch (error) {
    console.error("Error loading PDF:", error);
  }
};
