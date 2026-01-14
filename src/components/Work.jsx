import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/data";

const ExperienceCard = ({ title, company, period, tasks, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative w-full md:w-1/2 px-6 py-10 ${
        isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:mt-16"
      }`}
    >
      <span
        className={`absolute top-10 ${
          isLeft ? "md:right-[-10px]" : "md:left-[-10px]"
        } hidden md:block w-5 h-5 rounded-full bg-[#00BFA6] shadow-[0_0_20px_rgba(0,191,166,0.8)]`}
      />

      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_12px_45px_rgba(0,0,0,0.45)] hover:border-[#00BFA6]/60"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFA6]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

        <h3 className="relative text-xl font-semibold text-white">{title}</h3>

        <p className="relative text-[#00BFA6] font-medium mt-1">{company}</p>

        <p className="relative text-sm text-gray-400 italic mt-1">{period}</p>

        <ul className="relative mt-4 space-y-2 text-gray-300 text-sm">
          {tasks.map((task) => (
            <li className="flex gap-2">
              <span className="text-[#00BFA6]">▹</span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] py-24 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00BFA6] mb-20">
          Work Experience
        </h2>

        <div className="relative flex flex-col md:flex-row md:flex-wrap">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-[#00BFA6]/40 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
