import { FaAward, FaHandshake, FaLightbulb } from "react-icons/fa";

const Values = () => {
  const values = [
    {
      title: "Excellence",
      description: "We aim for perfection in every CV we create.",
      icon: <FaAward />,
    },
    {
      title: "Integrity",
      description: "We uphold honesty and transparency in all our services.",
      icon: <FaHandshake />,
    },
    {
      title: "Innovation",
      description:
        "We stay ahead by leveraging the latest trends and technologies.",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <section className="relative bg-accent p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl mb-12 text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-secondary">
          Our Core Values
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
          At <span className="font-semibold">Marion CVs</span>, our core values
          drive our commitment to delivering exceptional results.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center"
            >
              <div className="text-4xl sm:text-5xl text-secondary mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2 text-center">
                {value.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
