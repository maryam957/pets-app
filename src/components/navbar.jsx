import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Pets Logo" className="h-12" />
        </Link>
        <nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`md:flex md:items-center ${menuOpen ? "block" : "hidden"}`}>
            <li className="mx-2">
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Gallery</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to="/care" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Care</NavLink>
            </li>
            <li className="mx-2">
              <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-500" : ""}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
