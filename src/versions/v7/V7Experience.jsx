import React from "react";
import V7Layout from "./V7Layout";

const V7Experience = () => (
  <V7Layout showBack>
    <h1
      className="text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.02em] mb-10"
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
    >
      Experience
    </h1>

    <div className="space-y-10">
      {experiences.map((exp) => (
        <div key={exp.company} className="border-t border-[#e8e8e8] pt-6">
          <div className="flex items-baseline justify-between gap-4 mb-1">
            <h2 className="text-[16px] font-dm font-medium text-[#111]">
              {exp.company}
            </h2>
            <span className="text-[12px] font-mono text-[#aaa] shrink-0">
              {exp.date}
            </span>
          </div>
          <p className="text-[13px] text-[#666] mb-3">{exp.role}</p>
          <p className="text-[13px] text-[#888] leading-[1.7]">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  </V7Layout>
);

const experiences = [
  {
    company: "AfterQuery (YC W25)",
    role: "Software Engineer Intern",
    date: "2026 —",
    description:
      "Built sandboxed RL environments with automated pass@k scoring across 14+ frontier models. 600 concurrent agent trajectories on GKE with isolated execution via Daytona. Hybrid retrieval (kNN + BM25, 3072-dim embeddings) over 100k+ entities at sub-second latency. Eval systems used by Google, OpenAI, and Anthropic.",
  },
  {
    company: "BeReal.",
    role: "Software Engineer Intern",
    date: "2025",
    description:
      "Backend systems for Cantum, a social music app built with Voodoo. Track forking, versioning, and collaborative editing with generative music APIs. Firebase real-time sync. Selected from 20 student teams. 30% increase in early retention.",
  },
  {
    company: "Milliman",
    role: "Software Development Intern",
    date: "2025",
    description:
      "250% faster data transfer via high-concurrency SFTP with low-level network and I/O optimizations. GenAI pipeline processing 55M+ healthcare records, reducing delivery from 10 days to 20 minutes. C extension for a critical Python module, cutting pipeline latency 80%.",
  },
  {
    company: "Taro (acq. by Handshake)",
    role: "Software Engineer Intern",
    date: "2024",
    description:
      "UI/UX overhaul of the web platform with React, reducing churn 10%. Admin features for tracking subscriptions and recurring revenue via REST APIs. SEO initiatives increasing organic search traffic 20% in 2 months.",
  },
];

export default V7Experience;
