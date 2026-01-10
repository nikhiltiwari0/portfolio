import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioVersions } from "../versions/config";

const VersionSelector = () => {
  const navigate = useNavigate();
  
  // Load theme from localStorage or default to "light"
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved;
    // Check system preference as fallback
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  
  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("portfolio-theme", themeMode);
  }, [themeMode]);
  
  const isDark = themeMode === "dark";

  const side = isDark
    ? {
        rail: "bg-white/10",
        railSoft: "bg-white/5",
        text: "text-white/15",
        fadeL: "from-white/10",
        fadeR: "from-white/10",
      }
    : {
        rail: "bg-black/10",
        railSoft: "bg-black/5",
        text: "text-black/15",
        fadeL: "from-black/10",
        fadeR: "from-black/10",
      };

  const theme = isDark
    ? {
        bg: "bg-[#0b0c10]",
        text: "text-[#e6e6e6]",
        textMuted: "text-[#9aa0a6]",
        textSubtle: "text-[#6b7280]",
        border: "border-[#2a2f3a]",
        borderHover: "hover:bg-white/5",
        link: "text-[#8ab4f8]",
        accent: "text-white",
        tableBg: "bg-white/5",
        tableHeader: "bg-white/10",
      }
    : {
        bg: "bg-[#f5f0e8]",
        text: "text-[#1a1a1a]",
        textMuted: "text-[#666]",
        textSubtle: "text-[#999]",
        border: "border-[#d4c9b8]",
        borderHover: "hover:bg-[#ebe5d9]",
        link: "text-[#8b7355]",
        accent: "text-[#1a1a1a]",
        tableBg: "bg-white/50",
        tableHeader: "bg-[#e8e0d4]",
      };

  return (
    <div
      className={`relative overflow-hidden min-h-screen ${theme.bg} ${theme.text} font-mono p-8 cursor-auto transition-all duration-500`}
    >
      {/* Side rails / background gutters (lg+) */}
      <div aria-hidden className="pointer-events-none hidden lg:block absolute inset-0 -z-10">
        {/* Edge fades */}
        <div className={`absolute inset-y-0 left-0 w-56 bg-gradient-to-r ${side.fadeL} to-transparent`} />
        <div className={`absolute inset-y-0 right-0 w-56 bg-gradient-to-l ${side.fadeR} to-transparent`} />

        {/* Left rail */}
        <div className="absolute inset-y-0 left-0 w-64">
          <div className={`absolute inset-y-10 right-10 w-px ${side.rail}`} />
          <div className={`absolute inset-y-10 right-20 w-px ${side.railSoft}`} />
          <div className={`absolute top-10 right-12 text-[10px] tracking-[0.35em] ${side.text} origin-top-right rotate-90`}>
            PORTFOLIO
          </div>
        </div>

        {/* Right rail */}
        <div className="absolute inset-y-0 right-0 w-64">
          <div className={`absolute inset-y-10 left-10 w-px ${side.rail}`} />
          <div className={`absolute inset-y-10 left-20 w-px ${side.railSoft}`} />
          <div className={`absolute bottom-10 left-12 text-[10px] tracking-[0.35em] ${side.text} origin-bottom-left -rotate-90`}>
            ARCHIVE
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-2xl mx-auto mb-12">
          <pre className={`${theme.accent} text-xs sm:text-sm leading-tight mb-6 transition-all duration-500`}>
            {`
 _   _ _ _    _     _ _ 
| \\ | (_) | _| |__ (_) |
|  \\| | | |/ / '_ \\| | |
| |\\  | |   <| | | | | |
|_| \\_|_|_|\\_\\_| |_|_|_|
                        
`}
          </pre>
          <h1 className="text-xl mb-2">Portfolio Archive</h1>
          <p className={`${theme.textMuted} text-sm`}>
            Select a version to view the portfolio at that point in time.
          </p>
        </header>

        {/* Version list */}
        <main className="max-w-2xl mx-auto">
          <div className={`border ${theme.border} mb-8 transition-all duration-500`}>
            <div className={`${theme.tableHeader} px-4 py-2 text-xs ${theme.textMuted} transition-all duration-500`}>
              versions.txt
            </div>
            <div className={`p-4 ${theme.tableBg} transition-all duration-500`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className={`${theme.textMuted} text-left`}>
                    <th className="pb-2 pr-4">ID</th>
                    <th className="pb-2 pr-4">NAME</th>
                    <th className="pb-2 pr-4">DATE</th>
                    <th className="pb-2 pr-4">COMMIT</th>
                    <th className="pb-2">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioVersions.map((version) => (
                    <tr
                      key={version.id}
                      onClick={() => navigate(`/${version.id}`)}
                      className={`cursor-pointer ${theme.borderHover} transition-colors`}
                    >
                      <td className={`py-2 pr-4 ${theme.accent} font-bold`}>{version.id}</td>
                      <td className="py-2 pr-4">{version.name}</td>
                      <td className={`py-2 pr-4 ${theme.textMuted}`}>{version.date}</td>
                      <td className="py-2 pr-4">
                        <a
                          href={version.commitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${theme.link} hover:underline`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {version.commitHash.slice(0, 7)}
                        </a>
                      </td>
                      <td className="py-2">
                        {version.isCurrent ? (
                          <span className={theme.accent}>[ENTER]</span>
                        ) : (
                          <span className={theme.link}>[VIEW]</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="max-w-2xl mx-auto mt-12 pt-8 border-t border-current/20">
          <div className="flex items-center justify-between">
            <div className={`text-xs ${theme.textMuted}`}>
              <p>© 2024-{new Date().getFullYear()} Nikhil Tiwari</p>
              <p className="mt-1">
                <a
                  href="https://github.com/nikhiltiwari0/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.link} hover:underline`}
                >
                  github.com/nikhiltiwari0/portfolio
                </a>
              </p>
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setThemeMode((m) => (m === "dark" ? "light" : "dark"))}
              className={`
                flex items-center gap-2 px-3 py-2 text-xs border rounded-full
                transition-all duration-300
                ${isDark 
                  ? "border-[#2a2f3a] bg-white/5 text-[#9aa0a6] hover:bg-white/10" 
                  : "border-[#d4c9b8] bg-white/50 text-[#666] hover:bg-[#ebe5d9]"
                }
              `}
            >
              <span>{`theme: ${isDark ? "dark" : "light"}`}</span>
              <div
                className={`
                  w-8 h-4 rounded-full relative transition-colors duration-300
                  ${isDark ? "bg-[#3c4043]" : "bg-[#d4c9b8]"}
                `}
              >
                <div
                  className={`
                    absolute top-0.5 w-3 h-3 rounded-full transition-all duration-300
                    ${isDark 
                      ? "right-0.5 bg-[#e6e6e6]" 
                      : "left-0.5 bg-white"
                    }
                  `}
                />
              </div>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VersionSelector;
