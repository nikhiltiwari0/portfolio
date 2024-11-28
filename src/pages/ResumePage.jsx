import React, { useState } from "react";

const ResumePage = () => {
  const [viewInverted, setViewInverted] = useState(true);

  const toggleResumeView = () => {
    setViewInverted(!viewInverted);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>

      {/* Toggle and Download Section */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleResumeView}
            className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition-colors"
          >
            View {viewInverted ? "Normal" : "Inverted"} Resume
          </button>
        </div>

        {/* Download Buttons */}
        <div className="flex space-x-4">
          <a
            href="/nikhil_tiwari_resume.pdf"
            download
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition-colors"
          >
            Download Normal Resume
          </a>
          <a
            href="/nikhil_tiwari_inverted_resume.pdf"
            download
            className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition-colors"
          >
            Download Inverted Resume
          </a>
        </div>
      </div>

      {/* Resume Viewer */}
      <div
        style={{
          backgroundColor: "current", // change to #1a1a1a if you want a border
          padding: "16px",
          borderRadius: "8px",
          height: "750px",
        }}
      >
        <embed
          src={`/${
            viewInverted
              ? "nikhil_tiwari_inverted_resume.pdf"
              : "nikhil_tiwari_resume.pdf"
          }`}
          width="100%"
          height="100%"
          style={{
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default ResumePage;