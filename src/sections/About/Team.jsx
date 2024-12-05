import { teamMembers } from "../../constants";

const Team = () => {
  return (
    <section className="relative text-center bg-accent p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg mb-12 text-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-1">
                {member.name}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
