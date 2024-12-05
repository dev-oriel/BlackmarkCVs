import ServicePackage from "../../components/ServicePackage";

const RateCard = () => {
  return (
    <section className="py-8 md:py-16 bg-accent text-accent">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-10 text-primary">
        Choose Your Package
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-8 sm:mb-12 text-primary px-4 sm:px-6">
        Flexible packages tailored to meet your career needs. Select the perfect
        package to elevate your professional profile. Get in touch today!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-8 lg:px-16">
        {/* Fresh Graduate Package */}
        <ServicePackage
          title="Fresh Graduate (0-1yr)"
          items={[
            {
              serviceName: "ATS Optimized CV and Cover Letter",
              price: "Ksh 1000",
            },
            { serviceName: "Modern CV and Cover Letter", price: "Ksh 1500" },
            {
              serviceName: "ATS Optimized CV, Modern CV, and Cover Letter",
              price: "Ksh 1750",
            },
            {
              serviceName:
                "ATS Optimized CV, Modern CV, Cover Letter, and LinkedIn Profile Optimization",
              price: "Ksh 3200",
            },
            {
              serviceName: "CV and Resume Formatting and Design",
              price: "Ksh 1200",
            },
            { serviceName: "Social Media Bio Writing", price: "Ksh 500" },
            { serviceName: "Portfolio Development", price: "Ksh 2500" },
          ]}
        />
        {/* Growth Package */}
        <ServicePackage
          title="Growth Package (2-9yrs)"
          items={[
            {
              serviceName: "ATS Optimized CV and Cover Letter",
              price: "Ksh 2500",
            },
            { serviceName: "Modern CV and Cover Letter", price: "Ksh 2750" },
            {
              serviceName: "ATS Optimized CV, Modern CV, and Cover Letter",
              price: "Ksh 3750",
            },
            {
              serviceName:
                "ATS Optimized CV, Modern CV, Cover Letter, and LinkedIn Profile Optimization",
              price: "Ksh 5000",
            },
            { serviceName: "Social Media Bio Writing", price: "Ksh 800" },
            { serviceName: "Portfolio Development", price: "Ksh 5000" },
            { serviceName: "Resume Review and Feedback", price: "Ksh 1500" },
          ]}
        />
        {/* Advanced Package */}
        <ServicePackage
          title="Advanced Package (10+ yrs)"
          items={[
            {
              serviceName: "ATS Optimized CV and Cover Letter",
              price: "Ksh 3000",
            },
            { serviceName: "Modern CV and Cover Letter", price: "Ksh 3500" },
            {
              serviceName: "ATS Optimized CV, Modern CV, and Cover Letter",
              price: "Ksh 4000",
            },
            {
              serviceName:
                "ATS Optimized CV, Modern CV, Cover Letter, and LinkedIn Profile Optimization",
              price: "Ksh 6500",
            },
            { serviceName: "Online Profile Management", price: "Ksh 2000" },
            {
              serviceName: "CV and Resume Formatting and Design",
              price: "Ksh 2000",
            },
            { serviceName: "Social Media Bio Writing", price: "Ksh 1500" },
            { serviceName: "Portfolio Development", price: "Ksh 8000" },
          ]}
        />
      </div>
    </section>
  );
};

export default RateCard;
