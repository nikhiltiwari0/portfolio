import About from "../../components/About";
import BentoGrid from "../../components/BentoGrid";
import Contact from "../../components/Contact";
import CustomCursor from "../../components/ui/CustomCursor";
import Hero from "../../components/Hero";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import VersionBadge from "../../components/ui/VersionBadge";

function V4Portfolio() {
  return (
    <ReactLenis root>
      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black cursor-none">
        <CustomCursor />
        <VersionBadge versionId="v4" />
        <Hero />
        <About />
        <BentoGrid />
        <Contact />
      </div>
    </ReactLenis>
  );
}

export default V4Portfolio;
