const Achievements = () => {
  const stats = [
    { label: "CVs Created", value: "10,000+" },
    { label: "Happy Clients", value: "5,000+" },
    { label: "Years of Experience", value: "5+" },
  ];

  return (
    <section className="relative text-center bg-gradient-to-r from-coral-400 via-coral-300 to-coral-500 text-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg mb-12">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-accent">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-4xl sm:text-5xl font-extrabold text-secondary mb-2">
                {stat.value}
              </h3>
              <p className="text-base sm:text-lg font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
