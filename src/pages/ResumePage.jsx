import "@react-pdf-viewer/core/lib/styles/index.css";

import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";

const ResumePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <div style={{ height: "750px" }}>
          <Viewer fileUrl="/resume.pdf" />
        </div>
      </Worker>
    </div>
  );
};

export default ResumePage;