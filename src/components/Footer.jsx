const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-cyan-500 text-lg font-bold mb-4">
            About Marion CVs
          </h3>
          <p>
            Marion CVs is dedicated to helping individuals create professional
            and tailored CVs to achieve their career goals. We provide an
            intuitive and customizable platform that empowers users to showcase
            their skills effectively.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-cyan-500 text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-cyan-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-cyan-300 transition">
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-cyan-300 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#callToAction"
                className="hover:text-cyan-300 transition"
              >
                Get Started
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-300 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-cyan-500 text-lg font-bold mb-4">Contact Us</h3>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:support@marioncvs.com"
              className="hover:text-cyan-300 transition"
            >
              support@marioncvs.com
            </a>
          </p>
          <p>
            <span className="font-bold">Phone:</span>{" "}
            <a
              href="tel:+1234567890"
              className="hover:text-cyan-300 transition"
            >
              +123 456 7890
            </a>
          </p>
          <p>
            <span className="font-bold">Address:</span> 123 CV Builder Street,
            Nairobi, Kenya
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-cyan-500 text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-800 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-600 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Marion CVs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
