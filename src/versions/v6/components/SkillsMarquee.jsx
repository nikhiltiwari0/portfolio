import React from 'react';
import { motion } from 'framer-motion';

const SkillsMarquee = () => {
    const skills = [
        "React", "TypeScript", "Next.js", "Python", "Tailwind", "C++", "Java",
        "Node.js", "AI/ML", "AWS", "Docker", "Git", "Framer Motion", "MongoDB"
    ];

    // Duplicate array to ensure seamless loop
    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <section className="py-24 bg-[#050505] overflow-hidden border-y border-[#1a1a1a]">
            <div className="relative flex w-[200vw] -left-[50vw] md:w-full md:left-0 rotate-[-2deg] scale-110">
                <motion.div
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity
                    }}
                    className="flex shrink-0 gap-8 items-center"
                >
                    {duplicatedSkills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-8">
                            <span className="font-syne text-5xl md:text-8xl font-black uppercase text-transparent text-outline hover:text-[#f7f7f7] hover:[-webkit-text-stroke:0px] transition-all duration-300">
                                {skill}
                            </span>
                            <span className="text-[#ff0f39] text-3xl">✸</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsMarquee;
