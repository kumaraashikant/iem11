import React, { useState } from "react";
import "./MenuToggle.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>
        <ul className={menuOpen ? "menu show" : "menu"}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Vision</a>
          </li>
          <li>
            <a href="#services">Mission</a>
          </li>
          <li>
            <a href="#contact">Research</a>
          </li>
          <li>
            <a href="#contact">Faculty</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
