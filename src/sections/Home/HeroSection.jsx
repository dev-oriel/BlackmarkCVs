import { useState, useEffect } from "react";
import { slides } from "../../constants"; // Ensure this path is correct

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col md:flex-row items-center md:h-[100vh] justify-between py-8 md:py-16 px-4 md:px-12 bg-transparent">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight">
          Build Your CV with Ease
        </h1>
        <p className="text-gray-300 text-base md:text-lg">
          Stand out in your job search with professional CV templates designed
          for success.
        </p>
        <button className="bg-secondary text-white px-6 py-3 rounded-md shadow hover:bg-pink-600 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Carousel */}
      <div className="relative md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].label}
          className="w-full max-w-[90%] sm:max-w-[70%] md:max-w-md rounded-md shadow-lg"
        />
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-secondary" : "bg-gray-400"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
