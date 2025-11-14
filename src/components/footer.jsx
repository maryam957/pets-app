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
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
