import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/icons/marionCvs.png";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const menuRef = useRef(null);
  const location = useLocation();

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

  // Highlight the active link based on route
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(
      path === "/"
        ? "Home"
        : path.slice(1).charAt(0).toUpperCase() + path.slice(2)
    );
  }, [location]);

  return (
    <div className="bg-gray-900 text-gray-200 shadow-md fixed w-full top-0 z-50">
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
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`py-2 px-4 md:py-0 md:px-0 hover:text-gray-400 cursor-pointer ${
                    activeLink === link.name ? "text-secondary font-bold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <Link to="/order">
            <button className="bg-secondary text-white px-4 py-2 rounded-md shadow hover:bg-secondaryHover transition duration-300">
              Order a CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
