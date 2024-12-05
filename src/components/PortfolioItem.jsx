import React from "react";
import { Link } from "react-router-dom"; // To handle navigation to external links

const PortfolioItem = ({ title, description, imageUrl, link, isResume }) => {
  const handleItemClick = () => {
    if (isResume) {
      // If it's a resume, open it in a new tab
      window.open(imageUrl, "_blank");
    } else {
      // If it's a portfolio, navigate to the external link
      window.location.href = link; // Navigates to the portfolio website
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleItemClick} // Handles the click based on whether it's a resume or portfolio
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-accent">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={handleItemClick} // Open the resume or navigate to the portfolio link
          className="text-secondary hover:text-secondaryHover font-semibold"
        >
          {isResume ? "View Resume" : "View Portfolio"} {/* Conditional text */}
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
