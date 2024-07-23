/*
import { PDFDocument } from "pdf-lib";

const MedicalTestViewPopup = ({ data }) => {
  console.log("-----------------------------------------", data);
  const byteArrayToPdfObject = async () => {
    try {
      const pdfDoc = await PDFDocument.load(data.file);
      return pdfDoc;
    } catch (error) {
      console.error("Error loading PDF:", error);
    }
  };

  return (
    <div id="ReportData">
      <embed
        src={byteArrayToPdfObject}
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default MedicalTestViewPopup;
*/
import { PDFDocument } from "pdf-lib";
import React, { useEffect, useState } from "react";

const MedicalTestViewPopup = ({ data }) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const byteArrayToPdfObject = async (base64String) => {
    try {
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const pdfDoc = await PDFDocument.load(byteArray);

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      setPdfUrl(url);
    } catch (error) {
      console.error("Error loading PDF:", error);
    }
  };

  useEffect(() => {
    if (data.file) {
      byteArrayToPdfObject(data.file);
    }
  }, [data.file]);

  return (
    <div id="ReportData">
      {pdfUrl ? (
        <embed
          src={pdfUrl}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MedicalTestViewPopup;
