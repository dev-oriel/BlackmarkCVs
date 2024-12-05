const Vision = () => {
  return (
    <section className="relative bg-accent p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl mb-12 text-white flex flex-col items-center justify-center min-h-[40vh]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-primary">
          Our Vision
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          To become the leading platform for crafting{" "}
          <span className="font-semibold">professional CVs and resumes</span>,
          empowering job seekers worldwide to achieve their{" "}
          <span className="font-semibold">career dreams</span> with confidence
          and excellence.
        </p>
      </div>
    </section>
  );
};

export default Vision;
