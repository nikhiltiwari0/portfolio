import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "./components/Hero";
import About from "./components/About";
import BentoGrid from "./components/BentoGrid";
import Contact from "./components/Contact";

function App() {
  return (
    <ReactLenis root>
      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
        <Hero />
        <About />
        <BentoGrid />
        <Contact />
      </div>
    </ReactLenis>
  );
}

export default App;
