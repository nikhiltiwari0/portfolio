import React from "react";
import { motion } from "framer-motion";
import Spotlight from "./ui/Spotlight";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        name: "Shared-AI",
        description: "Group AI chat, allowing multiple users to talk to the same AI.",
        tags: ["TypeScript", "React", "AI"],
        link: "https://shared-ai.vercel.app/",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        name: "OnThisDay",
        description: "Raycast extension sharing historical events.",
        tags: ["TypeScript", "Raycast"],
        link: "https://www.raycast.com/nikhil_tiwari/what-happened-today",
        colSpan: "col-span-1",
    },
    {
        name: "AI Resume Generator",
        description: "AI-powered tool to generate tailored resumes.",
        tags: ["Python", "AI", "React"],
        link: "#",
        colSpan: "col-span-1",
    },
    {
        name: "Geoguessr AI",
        description: "ML model that guesses location from photos.",
        tags: ["Python", "CV", "ML"],
        // link: "https://github.com/nikhiltiwari0/geoguessr_ai",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        name: "Real Estate Scam Checker",
        description: "NLP-powered scam detection for listings.",
        tags: ["Python", "NLP"],
        // link: "https://github.com/nikhiltiwari0/realestatescamcheck",
        colSpan: "col-span-1",
    },
    {
        name: "DresserToGo",
        description: "Virtual try-on experience.",
        tags: ["Python", "CV"],
        // link: "https://github.com/nikhiltiwari0/DresserToGo",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        name: "Portfolio",
        description: "This website.",
        tags: ["React", "Tailwind"],
        // link: "https://github.com/nikhiltiwari0/portfolio",
        colSpan: "col-span-1 md:col-span-3",
    },
];

const BentoGrid = () => {
    return (
        <section className="bg-black px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center text-5xl font-bold tracking-tighter text-white md:text-7xl"
                >
                    SELECTED WORK
                </motion.h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block ${project.colSpan}`}
                        >
                            <Spotlight
                                className="group flex h-full flex-col justify-between p-8"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-400"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div
                                            className="text-neutral-500 hover:text-white transition-colors"
                                        >
                                            <FaGithub size={20} />
                                        </div>
                                    </div>

                                    <h3 className="mb-2 text-3xl font-bold text-white">{project.name}</h3>
                                    <p className="text-neutral-400">{project.description}</p>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                                    View Project <FaExternalLinkAlt size={12} />
                                </div>
                            </Spotlight>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
