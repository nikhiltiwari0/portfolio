import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioVersions } from "../versions/config";

const VersionSelector = () => {
  const navigate = useNavigate();
  const [isEvil, setIsEvil] = useState(false);

  const theme = isEvil
    ? {
        bg: "bg-[#0a0000]",
        text: "text-red-500",
        textMuted: "text-red-900",
        textSubtle: "text-red-950",
        border: "border-red-900/50",
        borderHover: "hover:bg-red-950/30",
        link: "text-red-400",
        accent: "text-red-500",
        tableBg: "bg-red-950/20",
        tableHeader: "bg-red-950/50",
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
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-mono p-8 cursor-auto transition-all duration-500`}>
      {/* Header */}
      <header className="max-w-2xl mx-auto mb-12">
        <pre className={`${theme.accent} text-xs sm:text-sm leading-tight mb-6 transition-all duration-500`}>
          {isEvil
            ? `
 _   _ _ _    _     _ _   
| \\ | (_) | _| |__ (_) |  
|  \\| | | |/ / '_ \\| | |  
| |\\  | |   <| | | | | |  👹
|_| \\_|_|_|\\_\\_| |_|_|_|  
      ~ d a r k   s i d e ~
`
            : `
 _   _ _ _    _     _ _ 
| \\ | (_) | _| |__ (_) |
|  \\| | | |/ / '_ \\| | |
| |\\  | |   <| | | | | |
|_| \\_|_|_|\\_\\_| |_|_|_|
                        
`}
        </pre>
        <h1 className="text-xl mb-2">
          {isEvil ? "Portfolio of Darkness" : "Portfolio Archive"}
        </h1>
        <p className={`${theme.textMuted} text-sm`}>
          {isEvil
            ? "Choose your fate. Each version holds its own secrets..."
            : "Select a version to view the portfolio at that point in time."}
        </p>
      </header>

      {/* Version list */}
      <main className="max-w-2xl mx-auto">
        <div className={`border ${theme.border} mb-8 transition-all duration-500`}>
          <div className={`${theme.tableHeader} px-4 py-2 text-xs ${theme.textMuted} transition-all duration-500`}>
            {isEvil ? "souls.txt" : "versions.txt"}
          </div>
          <div className={`p-4 ${theme.tableBg} transition-all duration-500`}>
            <table className="w-full text-sm">
              <thead>
                <tr className={`${theme.textMuted} text-left`}>
                  <th className="pb-2 pr-4">{isEvil ? "SOUL" : "ID"}</th>
                  <th className="pb-2 pr-4">{isEvil ? "ALIAS" : "NAME"}</th>
                  <th className="pb-2 pr-4">{isEvil ? "SUMMONED" : "DATE"}</th>
                  <th className="pb-2 pr-4">{isEvil ? "SEAL" : "COMMIT"}</th>
                  <th className="pb-2">{isEvil ? "RITUAL" : "ACTION"}</th>
                </tr>
              </thead>
              <tbody>
                {portfolioVersions.map((version) => (
                  <tr
                    key={version.id}
                    onClick={() => navigate(`/${version.id}`)}
                    className={`cursor-pointer ${theme.borderHover} transition-colors`}
                  >
                    <td className={`py-2 pr-4 ${theme.accent} font-bold`}>
                      {isEvil ? `☠${version.id}` : version.id}
                    </td>
                    <td className="py-2 pr-4">
                      {isEvil ? version.name.toUpperCase() : version.name}
                    </td>
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
                        <span className={theme.accent}>
                          {isEvil ? "[UNLEASH]" : "[ENTER]"}
                        </span>
                      ) : (
                        <span className={theme.link}>
                          {isEvil ? "[SUMMON]" : "[VIEW]"}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer with Evil Toggle */}
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
                {isEvil ? "github.com/nikhiltiwari0/portfolio 🔥" : "github.com/nikhiltiwari0/portfolio"}
              </a>
            </p>
          </div>

          {/* Evil Mode Toggle */}
          <button
            onClick={() => setIsEvil(!isEvil)}
            className={`
              flex items-center gap-2 px-3 py-2 text-xs border rounded-full
              transition-all duration-300
              ${isEvil 
                ? "border-red-800 bg-red-950/50 text-red-400 hover:bg-red-900/50" 
                : "border-[#d4c9b8] bg-white/50 text-[#666] hover:bg-[#ebe5d9]"
              }
            `}
          >
            <span className="text-base">{isEvil ? "😈" : "😇"}</span>
            <span>{isEvil ? "evil mode: ON" : "evil mode: OFF"}</span>
            <div
              className={`
                w-8 h-4 rounded-full relative transition-colors duration-300
                ${isEvil ? "bg-red-700" : "bg-[#d4c9b8]"}
              `}
            >
              <div
                className={`
                  absolute top-0.5 w-3 h-3 rounded-full transition-all duration-300
                  ${isEvil 
                    ? "right-0.5 bg-red-400" 
                    : "left-0.5 bg-white"
                  }
                `}
              />
            </div>
          </button>
        </div>

        {/* Evil mode easter egg */}
        {isEvil && (
          <p className="text-center text-red-900 text-[10px] mt-6 animate-pulse">
            ᚠᚢᚦᚨᚱᚲ... the ancient code awakens...
          </p>
        )}
      </footer>
    </div>
  );
};

export default VersionSelector;
