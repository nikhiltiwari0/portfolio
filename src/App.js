import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VersionSelector from "./components/VersionSelector";
import V0Archive from "./versions/v0/index";
import V1Archive from "./versions/v1/index";
import V2Archive from "./versions/v2/index";
import V3Archive from "./versions/v3/index";
import V4Portfolio from "./versions/v4/V4Portfolio";
import V5Ascii from "./versions/v5/index";
import V6Portfolio from "./versions/v6/V6Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        {/* Current Version - Landing Page */}
        <Route path="/" element={<V6Portfolio />} />

        {/* Archived Versions */}
        <Route path="/v0" element={<V0Archive />} />
        <Route path="/v1" element={<V1Archive />} />
        <Route path="/v2" element={<V2Archive />} />
        <Route path="/v3" element={<V3Archive />} />

        {/* Current Version */}
        <Route path="/v6" element={<V6Portfolio />} />
        <Route path="/v5" element={<V5Ascii />} />
        <Route path="/v4" element={<V4Portfolio />} />
        <Route path="/versions" element={<VersionSelector />} />

        {/* Fallback */}
        <Route path="*" element={<VersionSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
