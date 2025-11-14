import React, { useEffect, useState } from "react";
import VideoCard from "../components/videocard";
import axios from "axios";

function Care() {
  const [careTips, setCareTips] = useState([]);

  useEffect(() => {
    axios.get("/src/data/care.json")
      .then(res => setCareTips(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="site-container">
      <h1 className="page-title">Pet Care Tips 🐾</h1>
      <div className="grid-cards">
        {careTips.map((tip, idx) => (
          <VideoCard key={idx} title={tip.title} videoSrc={`/assets/videos/${tip.video}`} description={tip.description} />
        ))}
      </div>
    </div>
  );
}

export default Care;
