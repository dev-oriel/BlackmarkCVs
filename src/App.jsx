import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layers */}
      <div className="fixed top-0 -z-20 h-full w-full">
        <div className="h-screen w-screen bg-primary"></div>
        <div className="h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-70"></div>
        <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent)] opacity-20"></div>
      </div>

      {/* Application Content */}
      <div className="container mx-auto px-0">
        <header>
          <Navbar />
        </header>
        <main className="px-4 my-20">
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-secondary text-white p-3 rounded-sm shadow-lg backdrop-blur-sm backdrop-opacity-50 backdrop-brightness-125 hover:bg-secondaryHover transition duration-300"
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default App;
