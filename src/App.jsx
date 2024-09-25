import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import "./App.css"; // Import the main CSS file

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Vision />
        {/* Add other sections like Mission, Research, etc. here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
