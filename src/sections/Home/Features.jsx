import { FaUserTie, FaClipboardCheck, FaDollarSign } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-accent flex flex-col items-center justify-center py-12 px-6 sm:px-8 md:py-20 lg:px-16 mb-8 sm:mb-20">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary">
        Why Choose Blackmark CVs?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
        {/* Feature 1 */}
        <div className="bg-primary p-6 sm:p-8 rounded-md shadow-md text-center">
          <FaUserTie className="text-secondary text-4xl lg:text-5xl mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">
            Professional Services
          </h3>
          <p className="text-accent mt-4 text-sm sm:text-base lg:text-lg">
            Work with experienced professionals to craft CVs and resumes that
            highlight your unique strengths and experiences.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-primary p-6 sm:p-8 rounded-md shadow-md text-center">
          <FaClipboardCheck className="text-secondary text-4xl lg:text-5xl mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">
            Tailored Solutions
          </h3>
          <p className="text-accent mt-4 text-sm sm:text-base lg:text-lg">
            Receive personalized CVs tailored to your specific industry, career
            level, and goals.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-primary p-6 sm:p-8 rounded-md shadow-md text-center">
          <FaDollarSign className="text-secondary text-4xl lg:text-5xl mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">
            Transparent Pricing
          </h3>
          <p className="text-accent mt-4 text-sm sm:text-base lg:text-lg">
            Affordable and straightforward pricing for all our services with no
            hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
