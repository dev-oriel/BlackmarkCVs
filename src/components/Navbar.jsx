import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/icons/marionCvs.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div className="bg-gray-900 text-gray-200 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-14 h-auto" src={logo} alt="Marion CVs Logo" />
          <span className="ml-2 text-xl font-semibold tracking-wide">
            Marion CVs
          </span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          ref={menuRef}
          className={`absolute top-16 right-6 bg-gray-800 rounded-lg shadow-lg w-56 transition-transform ${
            isMenuOpen ? "block" : "hidden"
          } md:static md:bg-transparent md:shadow-none md:flex md:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-lg font-medium md:items-center">
            <li
              className="hover:text-gray-400 cursor-pointer py-2 px-4 md:py-0 md:px-0"
              onClick={handleLinkClick}
            >
              Home
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 px-4 md:py-0 md:px-0"
              onClick={handleLinkClick}
            >
              About
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 px-4 md:py-0 md:px-0"
              onClick={handleLinkClick}
            >
              Services
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 px-4 md:py-0 md:px-0"
              onClick={handleLinkClick}
            >
              Portfolio
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 px-4 md:py-0 md:px-0"
              onClick={handleLinkClick}
            >
              FAQ
            </li>
            <li
              className="hover:text-gray-400 cursor-pointer py-2 px-4 md:py-0 md:px-0"
              onClick={handleLinkClick}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <button className="bg-secondary text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
