import React from "react";

function VideoCard({ title, videoSrc, description }) {
  return (
    <div className="border rounded p-2 shadow hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <video src={videoSrc} muted autoPlay loop className="w-full rounded mb-2" />
      <p>{description}</p>
    </div>
  );
}

export default VideoCard;
