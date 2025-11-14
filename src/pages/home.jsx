import React, { useEffect, useState } from "react";
import VideoCard from "../components/videocard";
import AIChat from "../components/aichat";
import axios from "axios";

function Home() {
  const [quote, setQuote] = useState("");
  
  useEffect(() => {
    // Example API: DummyJSON quote
    axios.get("https://dummyjson.com/quotes/random")
      .then(res => setQuote(res.data.quote))
      .catch(err => setQuote("Paws, Love & Care – Because They Deserve the Best"));
  }, []);

  return (
    <div className="site-container">
      {quote && (
        <div className="quote-banner">
          <span className="quote-icon" aria-hidden>🐾</span>
          <marquee className="marquee" behavior="scroll" scrollamount="5">{quote}</marquee>
        </div>
      )}
      <h1 className="page-title">Pet Care Tips 🐾</h1>
      <div className="grid-cards">
        <VideoCard title="Nutrition" videoSrc="/assets/videos/food.mp4" description="Balanced diets with quality food keep pets strong, active, and full of life." />
        <VideoCard title="Grooming" videoSrc="/assets/videos/groom.mp4" description="Regular baths, brushing, and nail trimming keep pets clean and comfortable." />
        <VideoCard title="Exercise" videoSrc="/assets/videos/exercise.mp4" description="Daily walks and playtime are key to keeping pets fit and stress-free." />
        <VideoCard title="Health" videoSrc="/assets/videos/health.mp4" description="Routine vet visits and vaccinations help prevent diseases and ensure long life." />
      </div>
      
      {/* AI Chat component inserted on Home page */}
      <AIChat />
    </div>
  );
}

export default Home;
