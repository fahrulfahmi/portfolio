import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/data";

const ExperienceCard = ({ title, company, period, tasks, isLeft }) => {
  return (
    <motion.div
      className={`relative w-full md:w-1/2 px-4 py-8 ${
        isLeft
          ? "md:pr-16 md:items-end md:text-left"
          : "md:pl-16 md:text-left md:mt-16"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-800 border border-cyan-400 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-white text-left">{title}</h1>
        <p className="text-cyan-400 text-left">{company}</p>
        <p className="text-sm text-gray-400 mt-1 italic text-left">{period}</p>
        <ul className="mt-4 list-disc text-sm text-gray-300 space-y-1 px-4">
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};


const WorkExperience = () => {
  return (
    <section className="bg-[#0D1117] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[#00BFA6] mb-16">
          Work Experience
        </h2>

        <div className="relative flex flex-col md:flex-row md:flex-wrap md:justify-between items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 z-0 hidden md:block" />

          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
