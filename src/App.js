import "animate.css";

import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ResumePage from "./pages/ResumePage";

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

                  <div className="skills-section mt-20 text-center animate__animated animate__fadeIn animate__delay-3s">
                    <h2 className="text-3xl font-semibold text-white">
                      Skills
                    </h2>
                    <div className="skills-grid mt-10 grid grid-cols-3 gap-6">
                      <div className="skill-card flex flex-col items-center bg-opacity-80 bg-gray-200 p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                        <p className="text-xl font-semibold text-gray-800">React</p>
                      </div>
                      <div className="skill-card flex flex-col items-center bg-opacity-80 bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                        <p className="text-xl font-semibold text-gray-800">TypeScript</p>
                      </div>
                      <div className="skill-card flex flex-col items-center bg-opacity-80 bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                        <p className="text-xl font-semibold text-gray-800">Python</p>
                      </div>
                      <div className="skill-card flex flex-col items-center bg-opacity-80 bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                        <p className="text-xl font-semibold text-gray-800">Firebase</p>
                      </div>
                      <div className="skill-card flex flex-col items-center bg-opacity-80 bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                        <p className="text-xl font-semibold text-gray-800">Java</p>
                      </div>
                      <div className="skill-card flex flex-col items-center bg-opacity-80 bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all">
                        <p className="text-xl font-semibold text-gray-800">Node.js</p>
                      </div>
                    </div>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;