import "animate.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProjectsPage from "./pages/ProjectsPage";
import React from "react";
import ResumePage from "./pages/ResumePage";
import SkillCard from "./components/SkillCards";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <NavBar />
        <main className="flex-grow overflow-auto pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen">
                  {/* Hero Section */}
                  <div className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Animated Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-blue-900 to-gray-900 opacity-50"></div>

                    {/* Animated Particles */}
                    <div className="absolute inset-0">
                      <div
                        className="absolute w-2 h-2 bg-blue-500 rounded-full animate-ping"
                        style={{
                          top: "10%",
                          left: "10%",
                          animationDuration: "3s",
                          animationDelay: "0.2s",
                        }}
                      ></div>
                      <div
                        className="absolute w-3 h-3 bg-purple-500 rounded-full animate-ping"
                        style={{
                          top: "30%",
                          left: "25%",
                          animationDuration: "4s",
                          animationDelay: "0.5s",
                        }}
                      ></div>
                      <div
                        className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping"
                        style={{
                          top: "65%",
                          left: "15%",
                          animationDuration: "3.5s",
                          animationDelay: "0.7s",
                        }}
                      ></div>
                      <div
                        className="absolute w-4 h-4 bg-yellow-500 rounded-full animate-ping"
                        style={{
                          top: "75%",
                          left: "80%",
                          animationDuration: "4.5s",
                          animationDelay: "1s",
                        }}
                      ></div>
                      <div
                        className="absolute w-2 h-2 bg-pink-500 rounded-full animate-ping"
                        style={{
                          top: "20%",
                          left: "70%",
                          animationDuration: "3.2s",
                          animationDelay: "1.2s",
                        }}
                      ></div>
                      <div
                        className="absolute w-3 h-3 bg-indigo-500 rounded-full animate-ping"
                        style={{
                          top: "50%",
                          left: "85%",
                          animationDuration: "4.2s",
                          animationDelay: "0.3s",
                        }}
                      ></div>
                    </div>

                    <div className="relative z-10 text-center px-6 max-w-4xl">
                      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate__animated animate__fadeIn">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                          Welcome.
                        </span>
                      </h1>

                      <p className="text-xl md:text-2xl text-gray-300 mb-8 animate__animated animate__fadeIn animate__delay-1s">
                        I'm{" "}
                        <span className="font-bold text-blue-400">
                          Nikhil Tiwari
                        </span>
                        , a sophomore at UW-Madison{" "}
                        <br className="hidden md:block" />
                        building software that makes an impact in people's
                        lives.
                      </p>

                      <div className="flex gap-4 justify-center mt-8 animate__animated animate__fadeIn animate__delay-2s">
                        <a
                          href="/projects"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          View My Projects
                        </a>
                        <a
                          href="/resume"
                          className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          My Resume
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate__animated animate__fadeIn animate__delay-3s animate-bounce">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>

                  {/* Skills Section */}
                  <div className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                      <h2 className="text-4xl font-bold text-center text-white mb-16 animate__animated animate__fadeIn">
                        My <span className="text-blue-400">Skills</span>
                      </h2>

                      <div className="skills-section animate__animated animate__fadeIn">
                        <SkillCard />
                      </div>
                    </div>
                  </div>
                </div>
                
              }
            />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
