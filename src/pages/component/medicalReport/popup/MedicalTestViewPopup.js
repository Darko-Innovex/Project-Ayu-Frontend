import { PDFDocument } from "pdf-lib";
import React, { useEffect, useState } from "react";

const MedicalTestViewPopup = ({ data }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const byteArrayToPdfObject = async (base64String) => {
    try {
      // Check if base64String is present and valid
      if (!base64String || typeof base64String !== "string") {
        throw new Error("Invalid Base64 string");
      }

      // Decode Base64 string
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // Load PDF document
      const pdfDoc = await PDFDocument.load(byteArray);

      // Save PDF document and create URL
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      // Update state
      setPdfUrl(url);
      setLoading(false);
    } catch (error) {
      console.error("Error loading PDF:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.file) {
      byteArrayToPdfObject(data.file);
    }
  }, [data.file]);

  return (
    <div id="ReportData">
      {loading ? (
        <p>Loading...</p>
      ) : pdfUrl ? (
        <embed
          src={pdfUrl}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      ) : (
        <p>Error loading PDF</p>
      )}
    </div>
  );
};

export default MedicalTestViewPopup;
