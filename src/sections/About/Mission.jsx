const Mission = () => {
  return (
    <section className="relative bg-accent p-6  rounded-lg shadow-xl mb-12 text-white flex flex-col items-center justify-center min-h-[40vh]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-2 border-red-500 bg-white opacity-10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-primary">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Our mission is to empower job seekers with
          <span className="font-semibold">
            {" "}
            professional and customized CVs
          </span>{" "}
          that showcase their strengths and enhance their career prospects. We
          believe in creating tools that bridge the gap between{" "}
          <span className="font-semibold">talent</span> and{" "}
          <span className="font-semibold">opportunity</span>.
        </p>
      </div>
    </section>
  );
};

export default Mission;
