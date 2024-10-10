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
        } mt-10 rounded-2xl `}
      >
        <div className="w-[350px] sm:w-[400px] md:w-[600px] xl:w-[700px]">
          <img
            loading="lazy"
            className="w-full rounded-2xl shadow-lg"
            src={Img}
            alt="Feature"
          />
        </div>
        <div className="text-center md:text-left w-[350px]  md:w-[580px] desktop_table:w-[450px] xl:w-[550px] desktop:w-[750px] md:pl-6 xl:pl-8 desktop:pl-12  ">
          <h1 className="text-xl md:text-4xl desktop_table:text-2xl xl:text-3xl desktop:text-5xl font-semibold">
            {Title}
          </h1>
          <p className="text-sm mt-5 mb-2 md:text-lg desktop_table:mt-5 desktop_table:mb-3  xl:text-lg desktop:text-xl">
            {Paragraph}
          </p>
          <a
            href="https://wa.me/905304200064"
            target="_blank"
            className="inline-flex cursor-pointer mt-5 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm sm:text-lg rounded-full transition-all duration-300 ease-in-out shadow-lg"
          >
            {Button}
          </a>
        </div>
      </div>
    </>
  );
}
