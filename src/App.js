import "animate.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import SkillCard from "./components/SkillCard";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Ensure the element exists before accessing its style
      const background = document.getElementById('background') || document.body;

      if (background) {
        background.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.01), rgba(0, 0, 0, .99))`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow p-6 overflow-auto">
          <Routes>
            <Route
              path="/"
              element={
                <div className="scroll-section p-4 text-center">
                  <div className="hero-section animate__animated animate__fadeIn">
                  <h1 className="text-5xl font-semibold text-center text-white animate__animated animate__fadeIn animate__delay-1s" style={{ fontSize: '4rem' }}>
                    Welcome.
                  </h1>
                    <p className="mt-4 text-lg text-white animate__animated animate__fadeIn animate__delay-2s">
                      I’m <strong className=" text-cyan-500 animation: changeColor 1s infinite alternate;">Nikhil Tiwari</strong>, a sophomore at UW-Madison
                      building software that makes an <strong className="text-cyan-500">impact</strong> in people's lives.
                    </p>
                  </div>
                  <div className="skills-grid mt-10 grid grid-cols-3 gap-6">
                    
                  </div>
                  <div className="skills-section mt-20 text-center animate__animated animate__fadeIn animate__delay-3s">
                    <h2 className="text-3xl font-semibold text-white">
                      Contact Me
                    </h2>
                    </div>
                    <div className="flex flex-col items-center rounded-md shadow-md hover:shadow-lg transition-all">
                    <a href="https://www.linkedin.com/in/nikhil-tiwari-094b2231a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.646-1.5-1.432 0-.798.546-1.432 1.536-1.432s1.5.634 1.5 1.432c0 .786-.537 1.432-1.536 1.432zm13.5 12.268h-3v-5.606c0-1.341-.479-2.256-1.673-2.256-.912 0-1.452.631-1.689 1.239-.087.211-.109.505-.109.799v5.824h-3s.04-9.454 0-10.427h3v1.479c.4-.619 1.117-1.499 2.717-1.499 1.985 0 3.481 1.296 3.481 4.081v6.366z"></path>
                      </svg>
                    </a>
                    <a href="mailto:tiwarin9211@gmail.com" aria-label="Email">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M20 4h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 2v.511l-8 6.224-8-6.224v-.511h16zm-16 12v-9.339l7.573 5.888c.255.198.598.198.854 0l7.573-5.888v9.339h-16z"></path>
                      </svg>
                    </a>
                    <a href="/resume" aria-label="Resume"> {/* add target="_blank" if should open in a new page. */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path >
                          Resume //  add text or image.
                        </path>
                      </svg>
                    </a>
                  </div>
                    

                  <div className="skills-section mt-20 text-center animate__animated animate__fadeIn animate__delay-3s">
                    <SkillCard></SkillCard>
                  </div>

                  <div className="scroll-indicator mt-16">
                    <p className="text-lg text-white animate__animated animate__fadeIn animate__delay-4s">
                      Scroll down to learn more
                    </p>
                  </div>
                </div>
              }
            />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            {/* <Route path="/contact" element= make this once you make the contact page. */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;