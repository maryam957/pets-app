import React from "react";

function Footer() {
  return (
    <footer className="site-footer footer">
      <p>&copy; 2025 Pets Website | Designed with ❤️</p>

      <nav className="footer-links mt-2" aria-label="Footer navigation">
        <a href="/gallery">Gallery</a>
        <span>|</span>
        <a href="/care">Pet Care</a>
        <span>|</span>
        <a href="/contact">Contact</a>
      </nav>

      <div className="social-icons mt-2" aria-hidden="false">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .08 2 .08v2.2h-1.1c-1.1 0-1.5.74-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z"/>
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.1A4.9 4.9 0 1016.9 13 4.9 4.9 0 0012 8.1zm6.4-2.5a1.2 1.2 0 11-1.2-1.2 1.2 1.2 0 011.2 1.2zM12 10.5A1.5 1.5 0 1110.5 12 1.5 1.5 0 0112 10.5z"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" title="Twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M22 5.92c-.66.29-1.37.49-2.11.58a3.7 3.7 0 001.62-2.05 7.28 7.28 0 01-2.33.9 3.66 3.66 0 00-6.24 3.34A10.37 10.37 0 013 4.86a3.66 3.66 0 001.13 4.88 3.6 3.6 0 01-1.66-.46v.05a3.66 3.66 0 002.94 3.59 3.7 3.7 0 01-1.65.06 3.66 3.66 0 003.42 2.55A7.34 7.34 0 012 19.54 10.36 10.36 0 008.29 21c6.03 0 9.33-5 9.33-9.33v-.43A6.6 6.6 0 0022 5.92z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
