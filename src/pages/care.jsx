import React, { useEffect, useState } from "react";
import VideoCard from "src/components/VideoCard";
import axios from "axios";

function Care() {
  const [careTips, setCareTips] = useState([]);

  useEffect(() => {
    axios.get("/src/data/care.json")
      .then(res => setCareTips(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Pet Care Tips 🐾</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {careTips.map((tip, idx) => (
          <VideoCard key={idx} title={tip.title} videoSrc={`/assets/videos/${tip.video}`} description={tip.description} />
        ))}
      </div>
    </div>
  );
}

export default Care;
