import React from "react";
import { useNavigate } from "react-router-dom";

// V1 - Gemini (December 2024)
// This version is no longer available on Vercel
// Showing a placeholder with historical info

const V1Archive = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-mono p-8">
      <button
        onClick={() => navigate("/")}
        className="text-cyan-400 hover:underline mb-8 block"
      >
        ← back to archive
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="border border-cyan-900 p-6 mb-8 bg-cyan-950/20">
          <div className="text-cyan-600 text-xs mb-2">ARCHIVED VERSION</div>
          <h1 className="text-2xl text-cyan-400 mb-2">v1 — Gemini</h1>
          <p className="text-gray-500">December 2024</p>
        </div>

        <div className="space-y-6 text-gray-300">
          <p>
            The first major feature update. Added an AI chatbot powered by
            Gemini, with a cyan-themed aesthetic and mouse-following gradient.
          </p>

          <div className="border border-cyan-900/50 p-4 bg-cyan-950/10">
            <div className="text-cyan-600 text-xs mb-2">FEATURES</div>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Gemini AI Chatbot</li>
              <li>Mouse-following gradient background</li>
              <li>Skills section with icons</li>
              <li>Resume page with download</li>
              <li>About and Projects pages</li>
              <li>Cyan accent color theme</li>
            </ul>
          </div>

          <div className="border border-cyan-900/50 p-4 bg-cyan-950/10">
            <div className="text-cyan-600 text-xs mb-2">AESTHETIC</div>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 bg-cyan-400 rounded" title="Cyan" />
              <div className="w-8 h-8 bg-black border border-gray-700 rounded" title="Black" />
              <div className="w-8 h-8 bg-gray-800 rounded" title="Dark Gray" />
            </div>
          </div>

          <div className="border border-cyan-900/50 p-4 bg-cyan-950/10">
            <div className="text-cyan-600 text-xs mb-2">MOUSE GRADIENT EFFECT</div>
            <pre className="text-xs text-gray-500 overflow-x-auto">
{`const handleMouseMove = (e) => {
  background.style.background = 
    \`radial-gradient(circle at 
      \${e.clientX}px \${e.clientY}px, 
      rgba(255,255,255,0.01), 
      rgba(0,0,0,.99))\`;
};`}
            </pre>
          </div>

          <p className="text-gray-600 text-sm">
            This deployment is no longer available on Vercel.
            <br />
            <a
              href="https://github.com/nikhiltiwari0/portfolio/commit/e7f9821"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline"
            >
              View commit on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default V1Archive;
