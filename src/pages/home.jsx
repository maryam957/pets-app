import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
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
    <div className="container mx-auto p-6">
      <marquee className="mb-4">{quote}</marquee>
      <h1 className="text-3xl font-bold mb-4">Pet Care Tips 🐾</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <VideoCard title="Nutrition" videoSrc="/assets/videos/food.mp4" description="Balanced diets with quality food keep pets strong, active, and full of life." />
        <VideoCard title="Grooming" videoSrc="/assets/videos/groom.mp4" description="Regular baths, brushing, and nail trimming keep pets clean and comfortable." />
        <VideoCard title="Exercise" videoSrc="/assets/videos/exercise.mp4" description="Daily walks and playtime are key to keeping pets fit and stress-free." />
        <VideoCard title="Health" videoSrc="/assets/videos/health.mp4" description="Routine vet visits and vaccinations help prevent diseases and ensure long life." />
      </div>
    </div>
  );
}

export default Home;
