import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Fahrul Fahmi</h3>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/fahrulfahmi" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/fahrulfahmi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400 transition" />
          </a>
          <a href="mailto:fahmialfarobbi@gmail.com">
            <FaEnvelope className="text-2xl hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
