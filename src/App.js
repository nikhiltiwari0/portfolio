import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import React from "react";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<h1>Welcome to My Website</h1>} />
          
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;