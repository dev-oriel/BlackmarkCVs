import { useState, useEffect } from "react";
import { testimonials } from "../../constants";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically switch testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="py-8 mb-8 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 bg-transparent ">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-secondary mb-6">
        What Our Users Say
      </h2>

      {/* Testimonial Card */}
      <div className="relative w-full sm:w-4/5 lg:w-3/5 max-w-2xl mt-6 flex flex-col items-center">
        <div className="bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg text-center w-full flex flex-col items-center min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] transition-all duration-500 ease-in-out">
          {/* Decorative Quote Mark */}
          <div className="text-secondary text-[40px] sm:text-[50px] lg:text-[60px] font-serif leading-none mb-4">
            &#8220;
          </div>

          {/* Testimonial Content */}
          <p
            className="text-gray-300 italic text-sm sm:text-base lg:text-lg leading-relaxed w-11/12 sm:w-4/5 lg:w-3/4"
            aria-live="polite"
          >
            {testimonials[currentTestimonial].feedback}
          </p>

          {/* Testimonial Name */}
          <p className="text-secondary font-semibold mt-4 text-base sm:text-lg lg:text-xl">
            ~ {testimonials[currentTestimonial].name} ~
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 sm:px-6 lg:px-8">
          <button
            onClick={handlePrev}
            className="text-secondary text-2xl sm:text-3xl hover:text-pink-600 transition duration-300 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="text-secondary text-2xl sm:text-3xl hover:text-pink-600 transition duration-300 focus:outline-none"
            aria-label="Next Testimonial"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex space-x-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
              currentTestimonial === index ? "bg-secondary" : "bg-gray-500"
            } transition-all duration-300 focus:outline-none focus:ring focus:ring-secondary`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
