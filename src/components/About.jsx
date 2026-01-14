import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/gua.jpeg";
import PDFresume from "../assets/Resume Fahrul Fahmi.pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#020617] px-6 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,166,0.15),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      >
        <div className="flex flex-col md:flex-row gap-14 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00BFA6]/40 to-transparent blur-lg" />
            <img
              src={profileImage}
              alt="Fahrul Fahmi"
              className="relative w-56 h-65 object-cover rounded-3xl shadow-2xl grayscale contrast-110"
            />
          </motion.div>

          <div className="text-gray-300 max-w-xl">
            <p className="text-[#00BFA6] text-xl md:text-2xl font-semibold mb-4">
              “Every great product begins with an even better story.”
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Software Engineer | Acting Tech Lead
            </h1>

            <p className="leading-relaxed text-gray-300">
              I build{" "}
              <span className="text-white font-medium">
                production-ready, scalable digital products
              </span>
              with a strong focus on clean architecture, robust backend systems,
              and modern DevOps workflows — from code to deployment.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300">
              <li>
                • Full-stack development with{" "}
                <span className="text-white">
                  React, Next.js, Vue, Node.js, and Go
                </span>
              </li>
              <li>
                •{" "}
                <span className="text-white">
                  RESTful API & database design
                </span>{" "}
                built for real-world workloads
              </li>
              <li>
                •{" "}
                <span className="text-white">
                  CI/CD pipelines, Docker & Ansible automation
                </span>{" "}
                for reliable releases
              </li>
              <li>
                •{" "}
                <span className="text-white">
                  Microservices & scalable system design
                </span>{" "}
                for growing products
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="https://github.com/fahrulfahmi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#00BFA6] transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/fahrulfahmi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#00BFA6] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:fahmialfarobbi@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-[#00BFA6] transition-all hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={22} />
              </a>

              <motion.a
                href={PDFresume}
                download
                whileHover={{ scale: 1.05 }}
                className="ml-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00BFA6] to-[#008F7A] text-white font-semibold shadow-lg"
              >
                <FaDownload />
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
