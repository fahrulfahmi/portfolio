import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/me.jpeg";
import PDFresume from "../assets/Resume Fahrul Fahmi.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function About() {
  return (
    <motion.div
      id="about"
      className="flex flex-col items-center text-center px-4 py-12 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#00BFA6] mb-10 tracking-wide">
        INTRODUCTION
      </h1>

      {/* Card */}
      <motion.div
        className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-10 w-full flex flex-col md:flex-row items-center md:items-start shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.01 }}
      >
        {/* Profile Image */}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-40 h-40 rounded-2xl mb-6 md:mb-0 md:mr-10 object-cover shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Text & Links */}
        <div className="text-left text-gray-300 max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Hi! I'm a{" "}
            <span className="text-white font-semibold">Software Developer</span>{" "}
            with a strong interest in{" "}
            <span className="text-white font-medium">Golang</span>,{" "}
            <span className="text-white font-medium">React</span>,{" "}
            <span className="text-white font-medium">Node.js</span>, and{" "}
            <span className="text-white font-medium">Next.js</span>. I’m also
            proficient in{" "}
            <span className="text-white font-medium">Laravel</span> and{" "}
            <span className="text-white font-medium">PHP</span>. I enjoy
            creating scalable and impactful web applications, and I thrive in
            collaborative environments where I can turn ideas into reliable and
            efficient digital solutions.
          </p>

          {/* Social Links */}
          <div className="flex space-x-5 mb-6">
            <a
              href="https://github.com/fahrulfahmi"
              className="text-white hover:text-gray-400 hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/fahrulfahmi"
              className="text-white hover:text-blue-400 hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="mailto:fahmialfarobbi@gmail.com"
              className="text-white hover:text-sky-400 hover:scale-110 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={26} />
            </a>
          </div>

          {/* Download Resume Button */}
          <motion.a
            href={PDFresume}
            download
            className="inline-flex items-center px-5 py-2.5 bg-[#00BFA6] text-white rounded-lg shadow-md hover:bg-[#00a78f] transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
