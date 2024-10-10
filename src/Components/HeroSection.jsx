import React from "react";
import Banner from "../assets/video/Server.mp4";
export default function HeroSection({scroll}) {
  return (
    <main className="relative w-full rounded-lg mb-20">
      <div className="absolute w-[100%] mx-auto inset-0 bg-gradient-to-b from-black/80 to-transparent "></div>
      <video
        autoPlay
        loop
        muted
        loading="lazy"
        className="w-[100%] h-full mx-auto md:object-cover md:object-center object-right object-cover"
      >
        <source src={Banner} />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-[90%] max-w-[250px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px] -translate-y-1/2 top-[56%] sm:top-[50%] md:top-[55%] lg:top-[40%] -translate-x-1/2 left-1/2">
        <h1 className="text-[20px] sm:text-[35px] md:text-[45px] lg:text-[60px] tracking-wide font-bold text-center text-white">
          SECURE <span className="text-blue-500">TRACE</span>
        </h1>
        <h2 className="text-[12px] sm:text-2xl md:text-3xl lg:text-5xl  text-white text-center mt-2 mb-4 sm:mt-5 sm:mb-6 md:mt-10 md:mb-10 font-thin">
          Comprehensive server monitoring and log tracking for secure
          infrastructure.
        </h2>
        <nav className="flex items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-20 md:mt-5">
          <a
            className="rounded-full text-nowrap font-semibold px-3.5 py-1.5 text-[10px] sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-600 text-white md:text-xl transition-all duration-300 ease-in-out shadow-lg"
            href="https://wa.me/905304200064"
            target="_blank"
          >
            Contact Us
          </a>
          <a onClick={scroll} className="cursor-pointer rounded-full px-3.5 py-1.5 text-[10px] sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gray-700 hover:bg-gray-600 text-white md:text-xl transition-all duration-300 ease-in-out shadow-lg">
            Explore Our Solutions
          </a>
        </nav>
      </div>
    </main>
  );
}
