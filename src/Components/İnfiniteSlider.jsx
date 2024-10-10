import React, { useState, useEffect, useCallback } from "react";

const InfiniteCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  }, [images.length, isTransitioning]);

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Geçiş süresi ile eşleşmeli

    return () => clearTimeout(transitionTimeout);
  }, [currentIndex]);

  useEffect(() => {
    const autoPlayInterval = setInterval(nextSlide, 5000); // Her 5 saniyede bir otomatik geçiş
    return () => clearInterval(autoPlayInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute  top-0 left-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
