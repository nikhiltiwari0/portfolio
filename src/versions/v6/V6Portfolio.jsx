import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import CustomCursor from '../../components/ui/CustomCursor';

const V6Portfolio = () => {
    return (
        <main className="bg-[#050505] min-h-screen w-full relative overflow-hidden font-dm selection:bg-[#ff0f39] selection:text-white">
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-40 bg-noise pointer-events-none mix-blend-overlay"></div>

            <CustomCursor />

            <Hero />
            <About />
            <SkillsMarquee />
            <Projects />
        </main>
    );
};

export default V6Portfolio;
