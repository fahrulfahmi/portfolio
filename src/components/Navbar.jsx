import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-1.png";

const sections = ["hero", "about", "Tech", "project", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Tutup mobile menu saat scroll
      if (isOpen) setIsOpen(false);

      // Tentukan section aktif
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop - 100 : 0;
      });

      const scrollY = window.scrollY;
      let current = "hero";
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY >= offsets[i]) current = sections[i];
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav
  className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
    scrolled
      ? "bg-white/10 backdrop-blur-sm shadow-xl"
      : "bg-transparent backdrop-blur-md"
  }`}
  style={{ WebkitBackdropFilter: "blur(16px)" }}
>

      <div className="container mx-auto px-2 py-2 md:py-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 max-w-full">
          <img src={logo} alt="Logo" className="h-12 w-16 flex-shrink-0 drop-shadow-lg" />
          <span className="text-lg md:text-xl font-bold text-[#00BFA6] leading-tight break-words drop-shadow">
            FAHRUL FAHMI |{" "}
            <span className="whitespace-nowrap text-white/90">Software Engineer</span>{" "}
            <span className="hidden sm:inline text-white/60">(Web Application)</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={-70}
              duration={500}
              className={`relative px-3 py-1 rounded-xl font-medium cursor-pointer transition-all duration-200
                ${activeSection === section
                  ? "bg-[#00BFA6]/80 text-white shadow-md scale-105"
                  : "text-white/80 hover:text-[#00BFA6] hover:bg-white/10"}
              `}
              onSetActive={() => setActiveSection(section)}
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
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[68px] left-0 w-full z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white/20 backdrop-blur-xl border-b border-white/10 shadow-xl py-4 space-y-2 text-center animate-fade-in-down">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={-70}
              duration={500}
              className={`block px-4 py-2 rounded-xl font-medium transition-all duration-200 mx-4
                ${activeSection === section
                  ? "bg-[#00BFA6]/80 text-white shadow-md scale-105"
                  : "text-white/80 hover:text-[#00BFA6] hover:bg-white/10"}
              `}
              onClick={() => setIsOpen(false)}
              onSetActive={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
