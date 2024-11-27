import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProjectsPage from "./pages/ProjectsPage";
import React from "react";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow p-4">
          <Routes>
            {/* Default Page ("/") */}
            <Route
              path="/"
              element={
                <div className="p-4 text-right">
                  <h1 className="text-3xl font-bold text-center ">Welcome to My Website</h1>
                  <p className="mt-2 ">I’m Nikhil Tiwari, a sophomore at UW-Madison building software that actually makes an impact in peoples lives.<br></br>
                    I've worked on various projects, many of which use AI, and I'm always looking for new opportunities to learn and grow.<br></br>
                    Skilled in React, TypeScript, and Firebase, I focus on creating practical, user-driven solutions that make a difference.</p>
                </div>
              }
            />
            {/* Resume Page */}
            <Route path="/resume" element={<ResumePage />} />
            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />
            {/* Projects Page */}
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;