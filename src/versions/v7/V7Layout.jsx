import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const V7Layout = ({ children, showBack }) => {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const meta = document.querySelector('meta[name="theme-color"]');

    const origHtmlBg = html.style.backgroundColor;
    const origBodyBg = body.style.backgroundColor;
    const origBodyColor = body.style.color;
    const origTheme = meta?.getAttribute("content");

    html.style.backgroundColor = "#fff";
    body.style.backgroundColor = "#fff";
    body.style.color = "#111";
    if (meta) meta.setAttribute("content", "#ffffff");

    return () => {
      html.style.backgroundColor = origHtmlBg;
      body.style.backgroundColor = origBodyBg;
      body.style.color = origBodyColor;
      if (meta) meta.setAttribute("content", origTheme || "#000000");
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111] antialiased selection:bg-[#111] selection:text-white">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24">
        {showBack && (
          <Link
            to="/"
            className="inline-block text-[13px] font-mono text-[#999] hover:text-[#111] mb-10 transition-colors duration-200"
          >
            ← Back
          </Link>
        )}
        {children}
      </div>
    </div>
  );
};

export default V7Layout;
