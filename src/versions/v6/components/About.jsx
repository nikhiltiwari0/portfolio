import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="relative bg-[#050505] text-[#f7f7f7] py-32 px-4 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-16 lg:gap-24">

                    {/* Top - Large Typography */}
                    <div className="transform lg:-rotate-1 origin-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="font-syne font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase relative z-10"
                        >
                            Intelligent<br />
                            <span className="text-transparent text-outline">Systems</span><br />
                            <span className="text-[#ff0f39] text-4xl md:text-5xl lg:text-6xl">&</span><br />
                            Agentic<br />
                            Workflows
                        </motion.h2>
                    </div>

                    {/* Bottom - Content & Experience */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.2 }}
                            className="text-base md:text-lg font-dm text-[#888888] leading-relaxed relative z-10"
                        >
                            <p className="mb-6">
                                I engineer agentic workflows and construct RL environments at <strong className="text-[#f7f7f7] font-normal border-b border-[#ff0f39] pb-0.5">AfterQuery</strong>.
                                Beyond traditional software development, I am focused on the bleeding edge of intelligent systems, building infrastructure that learns, adapts, and scales.
                            </p>
                            <p>
                                I'm also a junior at UW-Madison with a deep track record of shipping full-stack products, mobile apps, and high-performance ML models.
                            </p>
                        </motion.div>

                        {/* Experience List - Minimal Style */}
                        <div className="flex flex-col border-t border-[#333333] relative z-10">
                            {[
                                { company: "AfterQuery", role: "Software Engineer (AI/RL)", year: "2026" },
                                { company: "Milliman", role: "Software Dev Intern", year: "2025" },
                                { company: "BeReal.", role: "Software Engineer Intern", year: "2025" },
                                { company: "Taro (YC S22)", role: "Software Engineer Intern", year: "2024" }
                            ].map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: 0.1 * index }}
                                    className={`group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#333333] transition-colors cursor-crosshair ${index === 0 ? 'border-[#ff0f39]/50 hover:border-[#ff0f39]' : 'hover:border-[#ff0f39]'}`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                                        <h3 className={`font-syne text-2xl md:text-3xl font-bold uppercase transition-transform group-hover:translate-x-2 duration-300 ${index === 0 ? 'text-[#f7f7f7]' : 'text-[#a0a0a0]'}`}>
                                            {index === 0 && <span className="text-[#ff0f39] mr-2 text-xl">►</span>}
                                            {exp.company}
                                        </h3>
                                        <span className="font-mono text-xs text-[#888888] tracking-widest group-hover:text-[#f7f7f7] transition-colors duration-300">
                                            {exp.role}
                                        </span>
                                    </div>
                                    <div className="hidden md:block font-mono text-sm text-[#555] group-hover:text-[#ff0f39] transition-colors duration-300 transform translate-y-1">
                                        [ {exp.year} ]
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff0f39] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        </section>
    );
};

export default About;
