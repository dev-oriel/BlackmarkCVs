import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PropTypes from "prop-types";

const ServicePackage = ({ title, items }) => {
  const handleWhatsAppClick = (item) => {
    const encodedMessage = encodeURIComponent(
      `I am interested in the service: "${item.serviceName} - ${item.price}"`
    );
    return `https://wa.me/254758997669?text=${encodedMessage}`;
  };

  const handleEmailClick = (item) => {
    const subject = encodeURIComponent("Service Enquiry");
    const body = encodeURIComponent(
      `I am interested in the service: "${item.serviceName} - ${item.price}"`
    );
    return `mailto:blackmarksolutions@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4 text-center">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center hover:bg-gray-100 transition duration-300"
          >
            <div>
              <h4 className="text-sm sm:text-base font-medium text-gray-700">
                {item.serviceName} - {item.price}
              </h4>
            </div>
            <div className="flex space-x-3">
              <a
                href={handleWhatsAppClick(item)}
                className="text-green-500 hover:text-green-600"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order via WhatsApp"
              >
                <FaWhatsapp sm:size={20} size={24} />
              </a>
              <a
                href={handleEmailClick(item)}
                className="text-coral-500 hover:text-coral-600"
                aria-label="Order via Email"
              >
                <MdEmail sm:size={20} size={24} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ServicePackage.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      serviceName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ServicePackage;
