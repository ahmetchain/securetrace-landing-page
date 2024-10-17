import React from "react";
import Layer from "../assets/img/Layer.webp";

const LayeredSupportSection = () => {
  return (
    <div className="relative h-[500px] w-full max-w-7xl mx-auto flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg mb-20">
      <img
        src={Layer}
        alt="Layered Data Visualization"
        className="absolute inset-0 w-full h-full object-cover opacity-40  transition-all animate-spin-slow"
      />

      <div className="relative z-10 text-center px-8 py-16 bg-opacity-50 backdrop-blur-md bg-white rounded-lg shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
          Empowering Every Layer of Your Data Journey
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          SecureTrace supports you at every step, ensuring your data management and security processes are seamless and protected.
        </p>
      </div>
    </div>
  );
};

export default LayeredSupportSection;
