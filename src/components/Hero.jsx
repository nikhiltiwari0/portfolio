import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <motion.section
            style={{ opacity }}
            ref={targetRef}
            className="relative h-screen w-full bg-black text-white"
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-[12vw] font-black leading-none tracking-tighter text-white mix-blend-difference md:text-[10vw]">
                        NIKHIL
                        <br />
                        TIWARI
                    </h1>
                    <p className="mt-8 text-xl font-light tracking-widest text-neutral-400 md:text-2xl">
                        SOFTWARE ENGINEER
                    </p>
                </motion.div>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-500"
            >
                <FaArrowDown className="animate-bounce text-2xl" />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
