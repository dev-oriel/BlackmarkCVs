import RateCard from "../sections/Services/RateCard";

const Services = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-coral-500 via-coral-400 to-coral-600 text-secondary py-10 md:py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Our Professional Services
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-accent">
          Elevate your career with tailored CVs, cover letters, and LinkedIn
          profile optimization services.
        </p>
      </header>

      {/* Rate Packages */}
      <RateCard />
    </div>
  );
};

export default Services;
