import React from "react";
import { useNavigate } from "react-router-dom";

// V2 - Timeline (February 2025)
// Placeholder page - Vercel deployment requires auth

const V2Archive = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono p-8">
      <button
        onClick={() => navigate("/")}
        className="text-emerald-400 hover:underline mb-8 block"
      >
        ← back to archive
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="border border-emerald-900 p-6 mb-8 bg-emerald-950/20">
          <div className="text-emerald-600 text-xs mb-2">ARCHIVED VERSION</div>
          <h1 className="text-2xl text-emerald-400 mb-2">v2 — Timeline</h1>
          <p className="text-gray-500">February 2025</p>
        </div>

        <div className="space-y-6 text-gray-300">
          <p>
            Introduced a visual timeline for projects, color-coded by type.
            Added Vercel and PostHog analytics for visitor insights.
          </p>

          <div className="border border-emerald-900/50 p-4 bg-emerald-950/10">
            <div className="text-emerald-600 text-xs mb-2">FEATURES</div>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Project timeline view</li>
              <li>Color-coded project types (Android, Website, Backend)</li>
              <li>Vercel Analytics integration</li>
              <li>PostHog event tracking</li>
              <li>Updated highlight colors</li>
            </ul>
          </div>

          <div className="border border-emerald-900/50 p-4 bg-emerald-950/10">
            <div className="text-emerald-600 text-xs mb-2">AESTHETIC</div>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 bg-emerald-500 rounded" title="Green" />
              <div className="w-8 h-8 bg-blue-500 rounded" title="Blue" />
              <div className="w-8 h-8 bg-red-500 rounded" title="Red" />
              <div className="w-8 h-8 bg-gray-900 rounded border border-gray-700" title="Dark" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Green = Android, Blue = Website, Red = Backend</p>
          </div>

          <div className="border border-emerald-900/50 p-4 bg-emerald-950/10">
            <div className="text-emerald-600 text-xs mb-2">TIMELINE CODE</div>
            <pre className="text-xs text-gray-500 overflow-x-auto">
{`.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #cccccc;
}

.project-card.android {
  border-left: 5px solid green;
}
.project-card.website {
  border-left: 5px solid blue;
}
.project-card.backend {
  border-left: 5px solid red;
}`}
            </pre>
          </div>

          <p className="text-gray-600 text-sm">
            This deployment is no longer publicly available.
            <br />
            <a
              href="https://github.com/nikhiltiwari0/portfolio/commit/32a1cdd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:underline"
            >
              View commit on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default V2Archive;
