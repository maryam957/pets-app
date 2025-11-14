import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 p-6 text-center">
      <p>&copy; 2025 Pets Website | Designed with ❤️</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="/gallery">Gallery</a>
        <span>|</span>
        <a href="/care">Pet Care</a>
        <span>|</span>
        <a href="/contact">Contact</a>
      </div>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
