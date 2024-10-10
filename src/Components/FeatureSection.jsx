import React from "react";

export default function FeatureSections({
  Title,
  Paragraph,
  Button,
  Img,
  Reverse,
  bg,
}) {
  return (
    <>
      <div
        className={`flex flex-col h-full gap-y-10 lg:flex-row items-center justify-between ${
          Reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } ${
          bg ? "bg-blue-900/10" : ""
        } mt-16 p-4 md:p-8 rounded-2xl shadow-md border`}
      >
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] xl:max-w-[700px]">
          <img
            loading="lazy"
            className="w-full rounded-2xl shadow-lg"
            src={Img}
            alt="Feature"
          />
        </div>
        <div className="text-center md:text-left w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] xl:max-w-[750px] mt-8 md:mt-0 md:pl-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold">
            {Title}
          </h1>
          <p className="text-sm sm:text-base mt-5 mb-5 md:text-lg xl:text-2xl">
            {Paragraph}
          </p>
          <a
            href="https://wa.me/905304200064"
            target="_blank"
            className="inline-block mt-5 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm sm:text-lg rounded-full transition-all duration-300 ease-in-out shadow-lg"
          >
            {Button}
          </a>
        </div>
      </div>
    </>
  );
}
