import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="bg-black px-6 py-32 text-center text-white">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-5xl font-bold tracking-tighter md:text-8xl">
                    LET'S TALK
                </h2>
                <p className="mb-12 text-xl text-neutral-400">
                    Got a project in mind? Or just want to say hi?
                </p>

                <div className="flex justify-center gap-8">
                    <a href="mailto:tiwarin9211@gmail.com" className="group flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-white">
                        <div className="rounded-full border border-neutral-800 bg-neutral-900 p-4 transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                            <FaEnvelope size={24} />
                        </div>
                        <span className="text-sm uppercase tracking-widest">Email</span>
                    </a>
                    <a href="https://github.com/nikhiltiwari0" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-white">
                        <div className="rounded-full border border-neutral-800 bg-neutral-900 p-4 transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                            <FaGithub size={24} />
                        </div>
                        <span className="text-sm uppercase tracking-widest">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/nikhil-tiwari-094b2231a/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-neutral-500 transition-colors hover:text-white">
                        <div className="rounded-full border border-neutral-800 bg-neutral-900 p-4 transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                            <FaLinkedin size={24} />
                        </div>
                        <span className="text-sm uppercase tracking-widest">LinkedIn</span>
                    </a>
                </div>

                <footer className="mt-32 text-sm text-neutral-800">
                    © {new Date().getFullYear()} NIKHIL TIWARI. ALL RIGHTS RESERVED.
                </footer>
            </div>
        </section>
    );
};

export default Contact;
