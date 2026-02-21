import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import CustomCursor from '../../components/ui/CustomCursor';
import { Link } from 'react-router-dom';

const V6Portfolio = () => {
    return (
        <main className="bg-[#050505] min-h-screen w-full relative overflow-hidden font-dm selection:bg-[#ff0f39] selection:text-white cursor-none">
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-40 bg-noise pointer-events-none mix-blend-overlay"></div>

            <CustomCursor />

            <Hero />
            <About />
            <SkillsMarquee />
            <Projects />

            {/* Versions Archive Link */}
            <Link
                to="/versions"
                className="absolute top-8 right-8 md:top-12 md:right-12 z-50 font-mono text-xs text-[#555] hover:text-[#f7f7f7] transition-colors uppercase tracking-widest border border-[#333] px-4 py-2 hover:border-[#ff0f39] bg-[#050505]"
            >
                View Archives
            </Link>
        </main>
    );
};

export default V6Portfolio;
