import React from "react";
import Marquee from "./ui/Marquee";

const About = () => {
    return (
        <section className="bg-black py-24 text-white">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mb-24">
                    <h2 className="mb-12 text-4xl font-bold tracking-tighter md:text-6xl">
                        ABOUT ME
                    </h2>
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="text-xl leading-relaxed text-neutral-400">
                            <p className="mb-6">
                                I'm a junior at UW-Madison, obsessed with building software that feels
                                <span className="text-white font-bold"> premium</span> and
                                <span className="text-white font-bold"> intuitive</span>.
                            </p>
                            <p>
                                My journey started with a simple HTML site in 2018. Since then, I've shipped Android apps,
                                built full-stack platforms, and dived deep into AI/ML. 
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="border-l border-neutral-800 pl-6">
                                <h3 className="text-lg font-bold text-white">Milliman</h3>
                                <p className="text-sm text-neutral-500">Software Development Intern (2025)</p>
                                <p className="mt-2 text-sm text-neutral-400">Developing and testing healthcare software solutions.</p>
                            </div>
                            <div className="border-l border-neutral-800 pl-6">
                                <h3 className="text-lg font-bold text-white">BeReal.</h3>
                                <p className="text-sm text-neutral-500">Software Engineer Intern (2025)</p>
                                <p className="mt-2 text-sm text-neutral-400">Built a co-creation AI Music App.</p>
                            </div>
                            <div className="border-l border-neutral-800 pl-6">
                                <h3 className="text-lg font-bold text-white">Taro (YC S22)</h3>
                                <p className="text-sm text-neutral-500">Software Engineer Intern (2024)</p>
                                <p className="mt-2 text-sm text-neutral-400">Overhauled UI/UX and optimized internal tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-y border-neutral-900 bg-neutral-950/50 py-12">
                <Marquee items={["React", "Python", "TypeScript", "C++", "Next.js", "Node.js", "AI/ML", "Tailwind", "C", "Java", "HTML", "CSS", "Git", "Docker", "AWS", "Android", "Flutter", "Firebase", "MongoDB"]} speed={30} />
            </div>
        </section>
    );
};

export default About;
