import { FaUserTie, FaClipboardCheck, FaDollarSign } from "react-icons/fa";

const Features = () => {
  return (
    <div className="bg-gray-800 md:h-[90vh] flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-secondary">
        Why Choose Marion CVs?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {/* Feature 1 */}
        <div className="bg-gray-900 p-6 rounded-md shadow text-center">
          <FaUserTie className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold text-secondary">
            Professional Services
          </h3>
          <p className="text-gray-300 mt-4">
            Work with experienced professionals to craft CVs and resumes that
            highlight your unique strengths and experiences.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-gray-900 p-6 rounded-md shadow text-center">
          <FaClipboardCheck className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold text-secondary">
            Tailored Solutions
          </h3>
          <p className="text-gray-300 mt-4">
            Receive personalized CVs tailored to your specific industry, career
            level, and goals.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-gray-900 p-6 rounded-md shadow text-center">
          <FaDollarSign className="text-secondary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold text-secondary">
            Transparent Pricing
          </h3>
          <p className="text-gray-300 mt-4">
            Affordable and straightforward pricing for all our services with no
            hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
