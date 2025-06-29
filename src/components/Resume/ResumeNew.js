import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const resumeUrl = "/Resume_Wasif_Karim.pdf";
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1333 60%, #c770f022 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "48px 0 32px 0"
    }}>
      <h1 style={{ color: "#c770f0", fontWeight: 800, marginBottom: 32, letterSpacing: 1, fontSize: "2.2rem", textShadow: "0 2px 16px #c770f055" }}>My Resume</h1>
      <div style={{
        width: "fit-content",
        margin: "0 auto 32px auto",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 8px 32px 0 #c770f055, 0 0 0 2px #c770f0aa",
        background: "rgba(40,30,60,0.55)",
        backdropFilter: "blur(12px)",
        border: "1.5px solid #c770f055",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
        animation: "fadeInResumeBox 1.2s cubic-bezier(.77,0,.18,1)"
      }}>
        {loading && (
          <div style={{ padding: 40, color: "#c770f0", fontWeight: 600 }}>Loading PDF…</div>
        )}
        <Document
          file={resumeUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={null}
          onLoadError={() => setLoading(false)}
        >
          <Page
            pageNumber={1}
            scale={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={null}
            style={{ borderRadius: 18, background: "#fff", boxShadow: "0 2px 16px #c770f055" }}
          />
        </Document>
      </div>
      <a
        href={resumeUrl}
        download="Resume_Wasif_Karim.pdf"
        style={{
          display: "inline-block",
          marginTop: 8,
          background: "#c770f0",
          color: "#fff",
          fontWeight: 700,
          padding: "12px 32px",
          borderRadius: 8,
          textDecoration: "none",
          fontSize: "1.08rem",
          boxShadow: "0 2px 16px #c770f055",
          transition: "background 0.2s, transform 0.2s",
          border: "none",
          outline: "none",
          cursor: "pointer",
          letterSpacing: 0.5
        }}
      >
        Download Resume
      </a>
      <style>{`
        @keyframes fadeInResumeBox {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

export default ResumeNew;
