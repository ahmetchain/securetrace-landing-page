import React from "react";
import Data from "../assets/img/file.webp";

const DataSimplificationSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-16 bg-white">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={Data}
          alt="Data Simplification"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left px-6">
        <h2 className="text-4xl font-bold mb-4">
          Manage Your Data Easily, Eliminate Complexity
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          SecureTrace simplifies complex data structures on your servers, making
          them more understandable and readable. This allows you to identify
          critical issues faster and increase your business efficiency. With
          real-time data monitoring and smart analytics, streamline your
          workflow seamlessly.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DataSimplificationSection;
