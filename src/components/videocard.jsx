import React from "react";

function VideoCard({ title, videoSrc, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <video src={videoSrc} muted autoPlay loop className="" />
      <p>{description}</p>
    </div>
  );
}

export default VideoCard;
