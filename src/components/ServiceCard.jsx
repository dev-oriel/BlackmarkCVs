import PropTypes from "prop-types";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
