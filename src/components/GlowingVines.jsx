import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const GlowingVines = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    });

    // Helper to generate vine style
    const getVineStyle = (width = 3, opacity = 0.8) => ({
        fill: "none",
        stroke: "white",
        strokeWidth: width,
        strokeLinecap: "round",
        opacity: opacity,
        filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))",
    });

    // Left Vine System - Starts from top-left corner/side
    const leftPaths = [
        "M 0 0 C 50 300, 150 500, 50 800 C -20 1100, 100 1400, 50 1700 C 0 2000, 100 2300, 20 2600", // Main stem
        "M -10 50 C 80 350, 120 550, 20 850 C -50 1150, 130 1450, 20 1750 C -30 2050, 70 2350, 0 2650", // Weaver 1
        "M -20 100 C 20 400, 180 600, 80 900 C 10 1200, 150 1500, 80 1800 C 30 2100, 130 2400, 50 2700", // Weaver 2
    ];

    // Right Vine System - Starts from top-right corner/side
    const rightPaths = [
        "M 500 0 C 300 250, 450 600, 350 900 C 250 1200, 400 1500, 300 1900 C 200 2200, 350 2500, 250 2800", // Main stem
        "M 510 50 C 330 300, 480 650, 380 950 C 280 1250, 430 1550, 330 1950 C 230 2250, 380 2550, 280 2850", // Weaver 1
        "M 520 100 C 270 200, 420 550, 320 850 C 220 1150, 370 1450, 270 1850 C 170 2150, 320 2450, 220 2750", // Weaver 2
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Left Vine Container */}
            <svg
                className="absolute left-0 top-0 h-full w-[300px] opacity-90"
                viewBox="0 0 300 2600"
                preserveAspectRatio="none"
            >
                {leftPaths.map((d, i) => (
                    <motion.path
                        key={`left-${i}`}
                        d={d}
                        style={{ ...getVineStyle(i < 3 ? 4 : 2, i < 3 ? 0.9 : 0.6), pathLength }} // Thicker main stems, thinner offshoots
                    />
                ))}
            </svg>

            {/* Right Vine Container */}
            <svg
                className="absolute right-0 top-0 h-full w-[500px] opacity-90"
                viewBox="0 0 500 2800"
                preserveAspectRatio="none"
            >
                {rightPaths.map((d, i) => (
                    <motion.path
                        key={`right-${i}`}
                        d={d}
                        style={{ ...getVineStyle(i < 3 ? 4 : 2, i < 3 ? 0.9 : 0.6), pathLength }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default GlowingVines;
