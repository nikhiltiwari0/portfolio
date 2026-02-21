import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        name: "Shared-AI",
        tags: ["TypeScript", "React", "AI"],
        href: "https://shared-ai.vercel.app/",
        metrics: { epochs: 1000, loss: 0.045, reward: 89.2 }
    },
    {
        name: "AI Resume Gen",
        tags: ["Python", "AI", "React"],
        href: "#",
        metrics: { epochs: 500, loss: 0.12, reward: 72.4 }
    },
    {
        name: "Geoguessr ML",
        tags: ["Python", "CV", "ML"],
        href: "#",
        metrics: { epochs: 2500, loss: 0.012, reward: 96.8 }
    }
];

const Projects = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    return (
        <section className="bg-[#050505] py-32 px-4 md:px-12 relative overflow-hidden text-[#f7f7f7]">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-[#333333] pb-8">
                    <h2 className="font-syne font-black text-5xl md:text-8xl tracking-tighter uppercase whitespace-nowrap">
                        Selected
                    </h2>
                    <h2 className="font-syne font-black text-5xl md:text-8xl tracking-tighter uppercase text-transparent text-outline whitespace-nowrap">
                        Work
                    </h2>
                </div>

                <div className="flex flex-col">
                    {projects.map((proj, idx) => (
                        <a
                            key={idx}
                            href={proj.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block py-10 md:py-16 border-b border-[#1a1a1a] hover:border-[#ff0f39] transition-colors"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-20 mix-blend-difference">
                                <h3 className="font-syne text-4xl md:text-7xl font-bold uppercase tracking-tight transform group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-500 will-change-transform">
                                    {proj.name}
                                </h3>

                                <div className="flex gap-4 mt-6 md:mt-0 transform md:group-hover:-translate-x-8 transition-transform duration-500">
                                    {proj.tags.map(tag => (
                                        <span key={tag} className="font-dm text-xs md:text-sm uppercase tracking-widest text-[#888888] group-hover:text-[#f7f7f7]">
                                            [{tag}]
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Reveal Interaction Block - Minimal RL Metric Slide */}
                            <AnimatePresence>
                                {hoveredIdx === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center text-[#ff0f39] font-mono text-sm tracking-widest z-10 pr-8 pointer-events-none"
                                    >
                                        [REWARD_RATE: {proj.metrics.reward}]
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Projects;
