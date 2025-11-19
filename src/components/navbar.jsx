import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ onToggleSidebar, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Pets Logo" className="logo" />
        </Link>

        {/* Navigation */}
        <nav>
          {/* Mobile menu toggle */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* AI Chat sidebar toggle */}
          <button
            className="btn-toggle-sidebar"
            onClick={onToggleSidebar}
            aria-label="Toggle AI Chat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Theme toggle button */}
          <button
            type="button"
            className="btn-theme-toggle"
            onClick={onToggleTheme}
          >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* Links */}
          <ul className={`nav-links ${menuOpen ? "open" : "hidden"}`}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/care"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Care
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
