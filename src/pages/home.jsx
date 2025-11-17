import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [quote, setQuote] = useState("");
  const [lastPage, setLastPage] = useState("");

  // Load last visited page + quote API
  useEffect(() => {
    // Last visited
    const page = localStorage.getItem("lastVisited");
    if (page) {
      let cleaned =
        page === "/contact"
          ? "Contact Page 🐾"
          : page === "/care"
          ? "Care Page 🐾"
          : page === "/gallery"
          ? "Gallery Page 🐾"
          : "";

      setLastPage(cleaned);
    }

    // Quote API
    axios
      .get("https://dummyjson.com/quotes/random")
      .then((res) => setQuote(res.data.quote))
      .catch(() =>
        setQuote("Paws, Love & Care – Because They Deserve the Best")
      );
  }, []);

  return (
    <div className="site-container">

      {/* ⭐ Last Visited Banner */}
      {lastPage && (
        <div
          style={{
            background: "#FFEFD5",
            padding: "12px 20px",
            borderRadius: "10px",
            textAlign: "center",
            marginBottom: "1.5rem",
            fontWeight: "600",
            color: "#6b4226",
            boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
          }}
        >
          👀 Last time, you visited: <b>{lastPage}</b>
        </div>
      )}

      {/* ⭐ Quote Banner */}
      {quote && (
        <div className="quote-banner">
          <span className="quote-icon" aria-hidden>
            🐾
          </span>
          <marquee className="marquee" behavior="scroll" scrollamount="5">
            {quote}
          </marquee>
        </div>
      )}

      {/* 🌟 HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Pets Paradise 🐾</h1>
          <p>Your one-stop place for pet care, love & companionship.</p>
          <a href="/gallery" className="hero-btn">Explore Gallery</a>
        </div>

        <div className="hero-img">
          <img src="/assets/images/hero.png" alt="Pets" />
        </div>
      </section>

      {/* 🌈 FEATURES */}
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
            <h3>Training & Grooming</h3>
            <p>Learn simple tricks and grooming routines.</p>
          </div>

          <div className="feature-card">
            <span className="icon">📩</span>
            <h3>Ask The AI</h3>
            <p>Your personal AI assistant for all pet-related questions.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-home">
        <h2>Your pet deserves the best 🧡</h2>
        <p>Explore tips, guides, and expert advice in our Care section.</p>
        <a href="/care" className="cta-btn">Go To Pet Care</a>
      </section>

    </div>
  );
}

export default Home;
