import React from "react";
import Data from "../assets/video/data.webm";
const VideoSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-20">
    {/* Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover blur-[2px]" // Blur artırıldı
      autoPlay
      loop
      muted
    >
      <source src={Data} />
      Your browser does not support the video tag.
    </video>
  
    <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-b from-transparent to-black/70">
      <div className="text-center text-white bg-black bg-opacity-70 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          Simplify Complexity, Track Your Data
        </h2>
        <p className="text-2xl md:text-3xl leading-relaxed animate-fadeIn delay-200">
          SecureTrace helps you easily track logs by transforming your server's
          data complexity into readable, actionable insights. Monitor, manage,
          and secure your data seamlessly.
        </p>
      </div>
    </div>
  </div>
  );
};

export default VideoSection;
