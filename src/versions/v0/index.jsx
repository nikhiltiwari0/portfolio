import React from "react";
import { useNavigate } from "react-router-dom";

// V0 - Origin (November 2024)
// This version is no longer available on Vercel
// Showing a placeholder with historical info

const V0Archive = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-mono p-8">
      <button
        onClick={() => navigate("/")}
        className="text-[#00ff00] hover:underline mb-8 block"
      >
        ← back to archive
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="border border-[#333] p-6 mb-8">
          <div className="text-[#888] text-xs mb-2">ARCHIVED VERSION</div>
          <h1 className="text-2xl text-[#00ff00] mb-2">v0 — Origin</h1>
          <p className="text-[#888]">November 2024</p>
        </div>

        <div className="space-y-6 text-[#ccc]">
          <p>
            The very first iteration of my portfolio. A simple React app with
            just a navbar and basic routing.
          </p>

          <div className="border border-[#333] p-4">
            <div className="text-[#888] text-xs mb-2">FEATURES</div>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Basic React setup</li>
              <li>Navigation bar</li>
              <li>React Router</li>
              <li>Simple welcome message</li>
            </ul>
          </div>

          <div className="border border-[#333] p-4">
            <div className="text-[#888] text-xs mb-2">ORIGINAL CODE</div>
            <pre className="text-xs text-[#888] overflow-x-auto">
{`function App() {
  return (
    <div>
      <NavBar />
      <main className="p-8 lg:px-16">
        <h1>Welcome to My Website</h1>
        <p>
          I am going to be updating this 
          frequently with both updates to the
          looks, and updates in general as 
          life goes on!
        </p>
      </main>
    </div>
  );
}`}
            </pre>
          </div>

          <p className="text-[#666] text-sm">
            This deployment is no longer available on Vercel.
            <br />
            <a
              href="https://github.com/nikhiltiwari0/portfolio/commit/2e1a4a1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6699ff] hover:underline"
            >
              View commit on GitHub →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default V0Archive;
