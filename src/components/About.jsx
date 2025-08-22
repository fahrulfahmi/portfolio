import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/me.jpeg";
import PDFresume from "../assets/Resume Fahrul Fahmi.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section className="w-full min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-[#0f3d3e] flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        id="about"
        className="flex flex-col items-center text-center max-w-5xl w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#00BFA6] mb-10 tracking-wide uppercase drop-shadow-lg">
          Introduction
        </h1>

        {/* Card */}
        <motion.div
          className="bg-white/10 border border-[#00BFA6]/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 w-full flex flex-col md:flex-row items-center md:items-start shadow-2xl hover:shadow-[0_8px_30px_rgba(0,191,166,0.18)] transition-all duration-300 group"
          whileHover={{ scale: 1.01 }}
        >
          {/* Profile Image */}
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-10 object-cover shadow-lg border-4 border-[#00BFA6]/60 bg-white/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text & Links */}
          <div className="text-left text-gray-200 max-w-2xl w-full">
            <p className="text-base md:text-lg leading-relaxed mb-6">
              <span className="block text-2xl md:text-3xl font-bold text-[#00BFA6] mb-4 drop-shadow-lg">
                “Every great product begins with an even better story.”
              </span>
              I’m a{" "}
              <span className="text-white font-bold bg-[#00BFA6]/30 px-2 rounded">
                Full Stack Developer
              </span>{" "}
              with hands-on experience in building modern web applications using
              <span className="text-[#00BFA6] font-semibold px-1">
                React.js
              </span>
              ,
              <span className="text-[#00BFA6] font-semibold px-1">Next.js</span>
              ,
              <span className="text-[#00BFA6] font-semibold px-1">Node.js</span>
              , and
              <span className="text-[#00BFA6] font-semibold px-1">Go</span>.
              Skilled in developing{" "}
              <span className="text-[#00BFA6] font-semibold px-1">
                RESTful APIs
              </span>
              , creating responsive and user-friendly interfaces, and
              efficiently managing databases. I also have understand with{" "}
              <span className="text-[#00BFA6] font-semibold px-1">Docker</span>{" "}
              and enjoy using modern tools. Interested in{" "}
              <span className="text-[#00BFA6] font-semibold px-1">
                Microservice architecture
              </span>{" "}
              , I continuously explore best practices for building robust,
              distributed systems. Always enthusiastic about learning new
              technologies, I focus on writing clean and maintainable code
              through{" "}
              <span className="text-[#00BFA6] font-semibold px-1">
                clean architecture
              </span>{" "}
              and solid design principles.
            </p>

            {/* Social Links */}
            <div className="flex space-x-5 mb-6 justify-start">
              <a
                href="https://github.com/fahrulfahmi"
                className="text-white bg-[#23272f] hover:bg-[#00BFA6] hover:text-white rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/fahrulfahmi"
                className="text-white bg-[#23272f] hover:bg-[#00BFA6] hover:text-white rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:fahmialfarobbi@gmail.com"
                className="text-white bg-[#23272f] hover:bg-[#00BFA6] hover:text-white rounded-full p-3 shadow-md transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            {/* Download Resume Button */}
            <motion.a
              href={PDFresume}
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00BFA6] to-[#008F7A] text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <FaDownload className="mr-2" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
