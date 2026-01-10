import React from "react";
import { useNavigate } from "react-router-dom";

// V3 - Revamp (May 2025)
// Placeholder page - Vercel deployment requires auth

const V3Archive = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-mono p-8">
      <button
        onClick={() => navigate("/")}
        className="text-purple-400 hover:underline mb-8 block"
      >
        ← back to archive
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="border border-purple-900 p-6 mb-8 bg-purple-950/20">
          <div className="text-purple-600 text-xs mb-2">ARCHIVED VERSION</div>
          <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            v3 — Revamp
          </h1>
          <p className="text-gray-500">May 2025</p>
        </div>

        <div className="space-y-6 text-gray-300">
          <p>
            A complete overhaul after a 2+ month break. Redesigned frontend with
            gradient text, animated particles, and a full shadcn/ui component library.
          </p>

          <div className="border border-purple-900/50 p-4 bg-purple-950/10">
            <div className="text-purple-600 text-xs mb-2">FEATURES</div>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Complete visual redesign</li>
              <li>Gradient text effects</li>
              <li>Animated floating particles</li>
              <li>shadcn/ui component library (40+ components)</li>
              <li>New About Me section</li>
              <li>Fixed Projects page</li>
              <li>Blue/purple color scheme</li>
            </ul>
          </div>

          <div className="border border-purple-900/50 p-4 bg-purple-950/10">
            <div className="text-purple-600 text-xs mb-2">AESTHETIC</div>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" title="Gradient" />
              <div className="w-8 h-8 bg-blue-500 rounded" title="Blue" />
              <div className="w-8 h-8 bg-purple-500 rounded" title="Purple" />
              <div className="w-8 h-8 bg-gray-900 rounded border border-gray-700" title="Dark" />
            </div>
          </div>

          <div className="border border-purple-900/50 p-4 bg-purple-950/10">
            <div className="text-purple-600 text-xs mb-2">GRADIENT TEXT</div>
            <pre className="text-xs text-gray-500 overflow-x-auto">
{`<h1 className="text-7xl font-bold">
  <span className="bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    from-blue-400 to-purple-500">
    Welcome.
  </span>
</h1>`}
            </pre>
          </div>

          <div className="border border-purple-900/50 p-4 bg-purple-950/10">
            <div className="text-purple-600 text-xs mb-2">ANIMATED PARTICLES</div>
            <pre className="text-xs text-gray-500 overflow-x-auto">
{`<div className="absolute w-3 h-3 
  bg-purple-500 rounded-full 
  animate-ping"
  style={{
    top: "30%",
    left: "25%",
    animationDuration: "4s",
  }}
/>`}
            </pre>
          </div>

          <p className="text-gray-600 text-sm">
            This deployment is no longer publicly available.
            <br />
            <a
              href="https://github.com/nikhiltiwari0/portfolio/commit/07c622b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline"
            >
              View commit on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default V3Archive;
