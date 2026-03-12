import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import V7Layout from "./V7Layout";

const V7Portfolio = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("tiwarin9211@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <V7Layout>
      {/* ── Name ── */}
      <h1
        className="text-[40px] md:text-[52px] leading-[1.08] tracking-[-0.02em] text-[#111] mb-5"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      >
        Nikhil Tiwari
      </h1>

      {/* ── Bio ── */}
      <div className="font-dm text-[15px] leading-[1.7] text-[#444] mb-4 space-y-4">
        <p>
          hey, i'm a software engineer at{" "}
          <a
            href="https://afterquery.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111] underline decoration-[#ccc] underline-offset-[3px] hover:decoration-[#111] transition-colors duration-200"
          >
            AfterQuery
          </a>{" "}
          <span className="text-[#999] font-mono text-[13px]">(YC W25)</span>{" "}
          and a sophomore at uw-madison studying cs. when i'm not coding, i'm probably listening to music, at the gym, or hanging out with friends.
        </p>
      </div>

      {/* ── Navigation ── */}
      <nav className="border-t border-[#e8e8e8]">
        <NavRow as={Link} to="/experience" label="experience" />
        <NavRow as={Link} to="/projects" label="projects" />
        <NavRow
          as="a"
          href="https://github.com/nikhiltiwari0"
          target="_blank"
          rel="noopener noreferrer"
          label="github"
          external
        />
        <NavRow
          as="a"
          href="https://linkedin.com/in/nikhiltiwari0"
          target="_blank"
          rel="noopener noreferrer"
          label="linkedin"
          external
        />
        <NavRow
          as="a"
          href="https://www.last.fm/user/snake9211"
          target="_blank"
          rel="noopener noreferrer"
          label="music"
          external
        />
        <button
          onClick={copyEmail}
          className="flex items-center justify-between w-full py-4 border-b border-[#e8e8e8] text-[15px] font-dm text-[#111] hover:text-[#555] transition-colors duration-200 cursor-pointer text-left"
        >
          <span>{copied ? "Copied" : "tiwarin9211 [at] gmail (dot) com"}</span>
          <span className="text-[12px] font-mono text-[#ccc]">copy</span>
        </button>
      </nav>

    </V7Layout>
  );
};

const NavRow = ({ as: Component = "a", label, external, ...props }) => (
  <Component
    {...props}
    className="flex items-center justify-between py-4 border-b border-[#e8e8e8] text-[15px] font-dm text-[#111] hover:text-[#555] transition-colors duration-200"
  >
    <span>{label}</span>
    <span className="text-[12px] font-mono text-[#ccc]">
      {external ? "↗" : "→"}
    </span>
  </Component>
);

export default V7Portfolio;
