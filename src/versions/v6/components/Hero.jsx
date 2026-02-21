import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacityContent = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleContent = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    // Removed canvas effect for a cleaner, minimal aesthetic

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
        >
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]">
                <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#000_100%)]"></div>
            </div>

            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 pointer-events-none"></div>

            {/* Typography Content */}
            <motion.div
                style={{ opacity: opacityContent, scale: scaleContent }}
                className="relative z-10 w-full max-w-[90vw] mx-auto flex flex-col items-start px-4 md:px-12 pointer-events-none"
            >
                <div className="overflow-visible">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="font-syne font-extrabold text-[12vw] md:text-[13vw] leading-[0.8] tracking-tighter text-[#f7f7f7] uppercase"
                    >
                        Nikhil
                    </motion.h1>
                </div>

                <div className="overflow-visible ml-0 md:ml-[15vw] mt-2">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="font-syne font-extrabold text-[12vw] md:text-[13vw] leading-[0.8] tracking-tighter text-transparent text-outline uppercase pr-4 md:pr-8"
                    >
                        Tiwari
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 md:mt-24 flex items-center gap-6"
                >
                    <div className="w-12 h-[2px] bg-[#ff0f39]"></div>
                    <p className="font-dm uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm text-[#888888] font-bold">
                        Software Engineer // Agentic Workflows
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-8 flex items-center gap-6 md:gap-8 ml-0 md:ml-[72px] pointer-events-auto"
                >
                    <a href="https://github.com/nikhiltiwari0" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#555] hover:text-[#f7f7f7] transition-colors uppercase tracking-widest cursor-crosshair">
                        [ GITHUB ]
                    </a>
                    <a href="https://linkedin.com/in/nikhiltiwari0" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[#555] hover:text-[#f7f7f7] transition-colors uppercase tracking-widest cursor-crosshair">
                        [ LINKEDIN ]
                    </a>
                    <a href="mailto:tiwarin9211@gmail.com" className="font-mono text-xs text-[#555] hover:text-[#f7f7f7] transition-colors uppercase tracking-widest cursor-crosshair">
                        [ EMAIL ]
                    </a>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;
