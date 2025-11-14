import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Pets Logo" className="logo" />
        </Link>
        <nav>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? "open" : "hidden"}`}>
            <li className="nav-item">
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link-active" : ""}>Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/care" className={({ isActive }) => isActive ? "nav-link-active" : ""}>Care</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link-active" : ""}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
