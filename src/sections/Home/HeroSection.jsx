import { useState, useEffect } from "react";
import { slides } from "../../constants";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col md:flex-row items-center md:h-[100vh] justify-between py-12 px-6 sm:px-8 lg:px-16 bg-transparent">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
          Build Your CV with Ease
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
          Stand out in your job search with professional CV templates designed
          for success.
        </p>
        <button className="bg-secondary text-white px-6 py-3 rounded-md shadow hover:bg-secondaryHover transition duration-300">
          Get Started
        </button>
      </div>

      {/* Carousel */}
      <div className="relative md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].label}
          className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-md rounded-md shadow-lg object-cover"
        />
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-secondary" : "bg-gray-400"
              } transition-all duration-300 focus:outline-none focus:ring focus:ring-secondary`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
