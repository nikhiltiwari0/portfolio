import "./App.css";

import NavBar from "./components/NavBar"; // Adjust the path as needed
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <main className="p-8 lg:px-16">
        <h1>Welcome to My Website</h1>
        <p>
          I am going to be updating this frequently with both updates to the
          looks, and updates in general as life goes on!
        </p>
      </main>
    </div>
  );
}

export default App;