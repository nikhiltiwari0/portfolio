import "animate.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";
import SkillCard from "./components/SkillCards";

function App() {
  useEffect(() => {
    const lightString = [];
    const colors = ["#ff0000", "#00ff00", "#0000ff"]; // RGB colors

    for (let i = 0; i < 20; i++) {
      const light = document.createElement("div");
      light.className = "light";
      light.style.backgroundColor = colors[i % colors.length];
      document.body.appendChild(light);
      lightString.push(light);
    }

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      lightString.forEach((light, index) => {
        const delay = index * 50; // Increase delay for smoother effect
        setTimeout(() => {
          light.style.left = `${mouseX}px`;
          light.style.top = `${mouseY}px`;
        }, delay);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      lightString.forEach((light) => document.body.removeChild(light));
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
                      <p className="mt-6 text-lg text-white animate__animated animate__fadeIn animate__delay-2s">
                        I’m <strong className=" text-gray-300 animation: changeColor 1s infinite alternate;">Nikhil Tiwari</strong>, a sophomore at UW-Madison <br></br>
                        building software that makes an impact in people's lives.
                      </p>
                    </div>
                    <div className="skills-grid grid grid-cols-3 gap-6">

                    </div>
                    <div className="skills-section animate__animated animate__fadeIn animate__delay-3s">
                      <SkillCard></SkillCard>
                    </div>

                    {/* <div className="scroll-indicator mt-16">
                      <p className="text-lg text-white animate__animated animate__fadeIn animate__delay-4s">
                        Scroll down to learn more
                      </p>
                    </div> */}
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
