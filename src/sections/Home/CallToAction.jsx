const CallToAction = () => {
  return (
    <div className="bg-gray-900 text-center py-10 sm:py-12  lg:py-20 px-6 sm:px-8 lg:px-16">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        Ready to Order Your CV or Resume?
      </h2>
      <p className="text-white text-base sm:text-lg lg:text-xl mt-4 max-w-2xl mx-auto">
        Explore our wide range of CV and resume services, designed to highlight
        your strengths. Order now and take the next step in your career!
      </p>
      <button className="bg-secondary text-primary mt-6 px-6 py-3 sm:px-8 sm:py-4 rounded-md shadow hover:bg-secondaryHover transition duration-300">
        Order Now
      </button>
    </div>
  );
};

export default CallToAction;
