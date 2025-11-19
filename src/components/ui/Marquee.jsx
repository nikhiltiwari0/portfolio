import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ items, direction = "left", speed = 20 }) => {
    return (
        <div className="relative flex overflow-hidden bg-black py-4">
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent"></div>

            <motion.div
                initial={{ x: 0 }}
                animate={{ x: direction === "left" ? "-50%" : "0%" }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex min-w-full shrink-0 gap-8 whitespace-nowrap"
            >
                {[...items, ...items].map((item, idx) => (
                    <span
                        key={idx}
                        className="text-4xl font-bold uppercase text-neutral-800 transition-colors hover:text-white"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
