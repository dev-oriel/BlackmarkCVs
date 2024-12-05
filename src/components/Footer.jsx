const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-secondary text-lg font-bold mb-4">
            About Blackmark CVs
          </h3>
          <p className="leading-relaxed">
            Blackmark CVs is dedicated to helping individuals create
            professional and tailored CVs to achieve their career goals. We
            provide an intuitive and customizable platform that empowers users
            to showcase their skills effectively.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-secondary text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-secondaryHover transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-secondaryHover transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-secondaryHover transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#callToAction"
                className="hover:text-secondaryHover transition"
              >
                Get Started
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-secondaryHover transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Updated Contact Info */}
        <div>
          <h3 className="text-secondary text-lg font-bold mb-4">Contact Us</h3>
          <div className="space-y-4">
            {/* Email */}
            <div>
              <p className="font-bold">Email</p>
              <a
                href="mailto:blackmarksolutions@gmail.com"
                className="hover:text-secondaryHover transition break-all"
              >
                blackmarksolutions@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div>
              <p className="font-bold">Phone</p>
              <a
                href="tel:+254758997669"
                className="hover:text-secondaryHover transition"
              >
                +254 758 997 669
              </a>
            </div>
            {/* Address */}
            <div>
              <p className="font-bold">Address</p>
              <p>
                123 CV Builder Street, Spring Valley, Westlands, Nairobi - Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-secondary text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
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
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blackmark CVs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
