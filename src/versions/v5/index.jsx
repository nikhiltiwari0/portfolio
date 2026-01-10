import React, { useEffect, useMemo, useState } from "react";
import { v5About, v5Profile, v5Projects, v5Skills, v5Videos, v5Work } from "./data";

import AsciiVideoPlayer from "./AsciiVideoPlayer";
import { useNavigate } from "react-router-dom";

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateAsciiBackdrop({ rows, cols, seed }) {
  const rand = mulberry32(seed);
  const chars = " .·:;+*#@";

  const lines = [];
  for (let r = 0; r < rows; r += 1) {
    let line = "";
    for (let c = 0; c < cols; c += 1) {
      // Simple gradient noise - denser at top, fading down
      const yFade = 1 - r / rows;
      const noise = rand();
      const threshold = 0.3 + yFade * 0.5;

      if (noise > threshold) {
        line += " ";
      } else {
        const idx = Math.floor(rand() * chars.length);
        line += chars[idx];
      }
    }
    lines.push(line);
  }

  return lines.join("\n");
}

const V5Ascii = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("about");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate("/");
        return;
      }
      if (e.key === "1") setView("about");
      if (e.key === "2") setView("work");
      if (e.key === "3") setView("projects");
      if (e.key === "4") setView("contact");
      if (e.key === "v" || e.key === "V") setView("video");
      if (e.key === "h" || e.key === "H" || e.key === "?") setView("help");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  const backdrop = useMemo(() => {
    // Calculate rows/cols based on viewport to ensure full coverage
    const vh = windowSize.height || window.innerHeight || 800;
    const vw = windowSize.width || window.innerWidth || 1200;
    const rows = Math.max(60, Math.ceil(vh / 12) + 20); // ~12px per row + buffer
    const cols = Math.max(140, Math.ceil(vw / 8) + 40); // ~8px per col + buffer
    return generateAsciiBackdrop({
      rows,
      cols,
      seed: 42,
    });
  }, [windowSize]);

  const renderAbout = () => v5About;

  const renderWork = () => {
    let out = "[work]\n\n";
    for (const j of v5Work) {
      out += `${j.role} @ ${j.company}\n`;
      out += `${j.dates} — ${j.note}\n\n`;
    }
    return out.trim();
  };

  const renderProjects = () => {
    // Return JSX for projects with clickable names
    return (
      <div className="space-y-4">
        <div className="text-white/80">[projects]</div>
        {v5Projects.map((p, idx) => {
          const primaryLink = p.links && p.links.length > 0 ? p.links[0].url : null;
          return (
            <div key={idx} className="space-y-1">
              <div>
                {primaryLink ? (
                  <a
                    href={primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    • {p.name}
                  </a>
                ) : (
                  <span className="text-white">• {p.name}</span>
                )}
              </div>
              <div className="text-white/70 pl-4">{p.note}</div>
              {p.links && p.links.length > 0 && (
                <div className="text-white/60 pl-4 text-xs break-all">
                  {p.links.map((l, i) => (
                    <span key={i}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {l.label}
                      </a>
                      {i < p.links.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderContact = () => {
    return `[contact]

email: ${v5Profile.email}

socials:
• ${v5Profile.links.github}
• ${v5Profile.links.linkedin}
• ${v5Profile.links.lastfm}
press [esc] to go back`;
  };

  const renderHelp = () =>
    `[help]

keys:
  1 = about
  2 = work
  3 = projects
  4 = contact
  v = ascii video
  h = this help
  esc = back to archive`;

  const renderBody = () => {
    if (view === "about") return renderAbout();
    if (view === "work") return renderWork();
    if (view === "projects") return renderProjects();
    if (view === "contact") return renderContact();
    if (view === "help") return renderHelp();
    return "";
  };

  const renderBodyContent = () => {
    const content = renderBody();
    // Projects returns JSX, others return strings
    if (view === "projects") {
      return content;
    }
    return (
      <pre className="text-xs sm:text-sm text-white/80 whitespace-pre-wrap break-all leading-relaxed">
        {content}
      </pre>
    );
  };

  return (
    <div
      className="relative min-h-screen bg-black text-[#e6e6e6] font-mono overflow-hidden"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") navigate("/");
      }}
    >
      {/* ASCII background */}
      <pre
        aria-hidden
        className="pointer-events-none select-none fixed inset-0 text-[10px] leading-[12px] tracking-widest text-white/10 overflow-hidden"
        style={{ width: '100vw', height: '100vh' }}
      >
        {backdrop}
      </pre>

      {/* overlay tint */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

      {/* Foreground */}
      <div className="relative z-10 min-h-screen p-4 sm:p-8 flex items-start justify-center">
        <div className="w-full max-w-2xl">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4 text-xs text-white/70 flex-wrap gap-2">
            <button
              type="button"
              className="hover:text-white underline-offset-4 hover:underline"
              onClick={() => navigate("/")}
            >
              [← back]
            </button>
            <div className="text-white/50">v5 / ascii</div>
          </div>

          {/* Main card */}
          <div className="border border-white/20 bg-black/80 backdrop-blur-sm">
            {/* Header */}
            <div className="border-b border-white/10 px-4 py-3">
              <div className="text-lg sm:text-xl text-white">{v5Profile.name}</div>
              <div className="text-xs text-white/60 mt-1">{v5Profile.tagline}</div>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
              {/* Key hints */}
              <div className="text-xs text-white/50">
                press:{" "}
                <span className="text-white/70">1</span>/<span className="text-white/70">2</span>/<span className="text-white/70">3</span>/<span className="text-white/70">4</span>{" "}
                • <span className="text-white/70">v</span> video • <span className="text-white/70">h</span> help • <span className="text-white/70">esc</span> back
              </div>

              {/* Menu + Links side by side on larger screens */}
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="border border-white/10 p-3">
                  <div className="text-xs text-white/50 mb-2">menu</div>
                  <div className="space-y-1">
                    {[
                      { key: "1", label: "about", val: "about" },
                      { key: "2", label: "work", val: "work" },
                      { key: "3", label: "projects", val: "projects" },
                      { key: "4", label: "contact", val: "contact" },
                      { key: "v", label: "mvs", val: "video" },
                      { key: "h", label: "help", val: "help" },
                    ].map((m) => (
                      <button
                        key={m.val}
                        type="button"
                        onClick={() => setView(m.val)}
                        className={`block hover:underline ${view === m.val ? "text-white" : "text-white/70"}`}
                      >
                        [{m.key}] {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border border-white/10 p-3">
                  <div className="text-xs text-white/50 mb-2">quick links</div>
                  <div className="space-y-1 text-sm break-all">
                    <a
                      className="block hover:underline text-white/70"
                      href={`https://${v5Profile.links.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {v5Profile.links.github}
                    </a>
                    <a
                      className="block hover:underline text-white/70"
                      href={`https://${v5Profile.links.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {v5Profile.links.linkedin}
                    </a>
                    <a
                      className="block hover:underline text-white/70"
                      href={`https://${v5Profile.links.lastfm}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {v5Profile.links.lastfm}
                    </a>
                    <a
                      className="block hover:underline text-white/70"
                      href={`mailto:${v5Profile.email}`}
                    >
                      {v5Profile.email}
                    </a>
                  </div>
                  <div className="text-xs text-white/40 mt-2">
                    skills: {v5Skills.slice(0, 5).join(", ")}…
                  </div>
                </div>
              </div>

              {/* Content area */}
              {view === "video" ? (
                <AsciiVideoPlayer videos={v5Videos} cols={100} rows={36} fps={12} />
              ) : (
                <div className="text-xs sm:text-sm">
                  {renderBodyContent()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V5Ascii;
