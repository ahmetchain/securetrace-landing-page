import React from "react";

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 p-4 sm:p-8 bg-gray-800 rounded-lg">
      <div className="text-center md:text-left">
        <div className="flex gap-x-3 items-center mb-2 justify-center md:justify-start">
          <h4 className="text-blue-500 font-semibold">About Us</h4>
          <div className="bg-blue-500 px-10 h-1"></div>
        </div>
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white w-full md:w-[500px]">
          Empowering Security Through Innovation
        </h1>
      </div>
      <p className="text-lg sm:text-2xl md:text-3xl w-full md:w-[1000px] text-center md:text-left text-gray-300">
        At SecureTrace, we provide cutting-edge solutions to enhance your
        digital security. Our monitoring and log tracking tools ensure your
        systems are protected, giving you peace of mind to focus on what
        matters.
      </p>
    </div>
  );
}
