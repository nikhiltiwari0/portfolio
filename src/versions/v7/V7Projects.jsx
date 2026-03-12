import React from "react";
import V7Layout from "./V7Layout";

const V7Projects = () => (
  <V7Layout showBack>
    <h1
      className="text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] mb-10"
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
    >
      Projects
    </h1>

    <div>
      {projects.map((project) => {
        const Row = project.url ? "a" : "div";
        const linkProps = project.url
          ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <Row
            key={project.name}
            {...linkProps}
            className={`flex items-baseline justify-between gap-4 py-4 border-b border-[#e8e8e8] group ${
              project.url ? "hover:text-[#555]" : "text-[#111]"
            } transition-colors duration-200`}
          >
            <div>
              <span className="text-[15px] font-dm font-medium text-[#111] group-hover:underline underline-offset-[3px]">
                {project.name}
              </span>
              <span className="text-[13px] text-[#999] ml-3">
                {project.description}
              </span>
            </div>
            {project.stat && (
              <span className="text-[11px] font-mono text-[#aaa] shrink-0">
                {project.stat}
              </span>
            )}
          </Row>
        );
      })}
    </div>
  </V7Layout>
);

const projects = [
  {
    name: "SharedAI",
    url: "https://shared-ai.vercel.app/",
    description: "Real-time collaborative AI platform",
    stat: "40k+ impressions",
  },
  {
    name: "GeoGuessr AI",
    url: "https://github.com/nikhiltiwari0/geoguessr_ai",
    description: "Geo-classification from street images with C++17/ONNX",
    stat: "40x speedup",
  },
  {
    name: "What Happened Today",
    url: "https://www.raycast.com/nikhil_tiwari/what-happened-today",
    description: "Raycast extension for daily historical insights",
    stat: "250+ downloads",
  },
  {
    name: "SyntaxCV",
    url: "https://github.com/nikhiltiwari0/AIResumeGen",
    description: "AI resume optimizer using Gemini to rewrite LaTeX bullets for job descriptions",
  },
  {
    name: "Informed Sentinel",
    description: "Polymarket insider trading detection via suspicious pattern monitoring",
  },
  {
    name: "CRATE",
    description: "Audio analysis and feature extraction — BPM, key, danceability",
  },
  {
    name: "Elder Tasks",
    url: "https://eldertasks.vercel.app/",
    description: "Family task manager with Firebase real-time sync",
  },
  {
    name: "Real Estate Scam Check",
    description: "ML detection of duplicate or suspicious property listings",
  },
  {
    name: "Neural Architecture",
    description: "3D neural network visualization with Three.js",
  },
  {
    name: "ONE DAY",
    description: "Social media where posts disappear after 24 hours",
  },
  {
    name: "Voice to Computer",
    description: "Voice command parser that converts speech to system actions",
  },
  {
    name: "Control Compute AI",
    description: "Native macOS voice-activated AI assistant with system tray",
  },
  {
    name: "CF API Generator",
    description: "Natural language to REST API endpoints on Cloudflare with Llama 3.3",
  },
  {
    name: "Family Tree",
    description: "Interactive family relationship mapping with XYFlow",
  },
  {
    name: "Quant",
    description: "Quantitative trading system with Alpaca Markets and InfluxDB",
  },
];

export default V7Projects;
