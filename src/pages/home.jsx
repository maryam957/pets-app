import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [quote, setQuote] = useState("");
  const [lastVisit, setLastVisit] = useState("");

  // 🔹 Load last visited page from localStorage
  useEffect(() => {
    const page = localStorage.getItem("lastVisited");
    if (page && page !== "/") {
      const pretty =
        page === "/gallery"
          ? "Gallery Page 🐾"
          : page === "/care"
          ? "Care Page 🐾"
          : page === "/contact"
          ? "Contact Page 🐾"
          : "Home Page 🐾";

      setLastVisit(pretty);
    }
  }, []);

  // 🔹 Load quote from API
  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((res) => setQuote(res.data.quote))
      .catch(() =>
        setQuote("Paws, Love & Care – Because They Deserve the Best.")
      );
  }, []);

  return (
    <div className="site-container">
      {/*  Last visited banner (localStorage) */}
      {lastVisit && (
        <div className="last-visit-banner">
          <span className="last-visit-icon" aria-hidden="true">
            👀
          </span>
          <span>
            Last time, you visited: <strong>{lastVisit}</strong>
          </span>
        </div>
      )}

      {/* 🐾 Quote banner (API) */}
      {quote && (
        <div className="quote-banner home-quote-banner">
          <span className="quote-icon" aria-hidden>
            🐾
          </span>
          <marquee className="marquee" behavior="scroll" scrollAmount="5">
            {quote}
          </marquee>
        </div>
      )}

      {/*  HERO SECTION */}
      <section className="hero-section home-hero">
        <div className="hero-decor hero-decor-left" />
        <div className="hero-decor hero-decor-right" />

        <div className="hero-content">
          <p className="hero-kicker">Welcome to Pets Paradise</p>
          <h1 className="hero-title">
            Take Good <span>Care of Pets</span>
          </h1>
          <p className="hero-text">
            We help you keep your furry friends happy, healthy and full of life
            with simple tips, expert guidance and a touch of love.
          </p>

          <div className="hero-actions">
            <a href="/gallery" className="btn hero-btn-primary">
              🐶 Explore Gallery
            </a>
            <a href="/contact" className="btn hero-btn-secondary">
              📚 Contact Us
            </a>
          </div>

          <div className="hero-underline">
            <span />
          </div>
        </div>

        <div className="hero-image-wrapper">
          
          <img
            src="/assets/images/pets.png"
            alt="Cute cat and dog"
            className="hero-image"
          />
          <div className="floating-paw paw-1">🐾</div>
          <div className="floating-paw paw-2">❤️</div>
        </div>
      </section>

      {/* 🌈 FEATURES SECTION (same as before) */}
      <section className="features-section">
        <h2 className="section-title">Why Pet Lovers Choose Us ❤️</h2>

        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">🐶</span>
            <h3>Trusted Care</h3>
            <p>Your pet's health and happiness is our top priority.</p>
          </div>

          <div className="feature-card">
            <span className="icon">🍖</span>
            <h3>Healthy Diet Tips</h3>
            <p>We guide you with nutrition plans that keep pets active.</p>
          </div>

          <div className="feature-card">
            <span className="icon">🏡</span>
            <h3>Training &amp; Grooming</h3>
            <p>Learn simple tricks and grooming routines.</p>
          </div>

          <div className="feature-card">
            <span className="icon">📩</span>
            <h3>Ask The AI</h3>
            <p>Your personal AI assistant for all pet-related questions.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-home">
        <h2>Your pet deserves the best 🧡</h2>
        <p>Explore tips, guides, and expert advice in our Care section.</p>
        <a href="/care" className="cta-btn">
          Go To Pet Care
        </a>
      </section>
    </div>
  );
}

export default Home;
