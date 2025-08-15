import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/70 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      {/* Navbar Main */}
      <div className="container mx-auto px-2 py-2 md:py-3 flex flex-wrap justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2 max-w-full">
          <img src={logo} alt="Logo" className="h-12 w-16 flex-shrink-0" />
          <span className="text-lg md:text-xl font-bold text-teal-100 leading-tight break-words">
            FAHRUL FAHMI |{" "}
            <span className="whitespace-nowrap">Software Engineer</span>{" "}
            <span className="hidden sm:inline">(Web Specialist)</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["hero", "about", "skils", "project", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={-70}
              className="hover:text-teal-400 cursor-pointer transition-colors duration-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-md  space-y-2 text-center">
          {["hero", "about", "skils", "project", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={-70}
              className="block hover:text-teal-400 cursor-pointer transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
