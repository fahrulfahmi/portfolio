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
        isLeft ? "md:pr-16" : "md:pl-16 md:mt-16"
      }`}
    >
      {/* Timeline Dot */}
      <span
        className={`absolute top-10 ${
          isLeft ? "md:right-[-10px]" : "md:left-[-10px]"
        } hidden md:block w-5 h-5 rounded-full bg-[#00BFA6] shadow-[0_0_20px_rgba(0,191,166,0.8)]`}
      />

      {/* Experience Card */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_12px_45px_rgba(0,0,0,0.45)] hover:border-[#00BFA6]/60 transition-colors duration-300"
      >
        {/* Hover Background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFA6]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Content */}
        <div className="relative text-left">
          {/* Job Title */}
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          {/* Company */}
          <p className="text-[#00BFA6] font-medium mt-1">
            {company}
          </p>

          {/* Period */}
          <p className="text-sm text-gray-400 italic mt-1">
            {period}
          </p>

          {/* Tasks */}
          <ul className="mt-5 space-y-3 text-gray-300 text-sm">
            {tasks.map((task, taskIndex) => (
              <li
                key={taskIndex}
                className="flex items-start gap-3 leading-relaxed"
              >
                <span className="text-[#00BFA6] mt-[2px] shrink-0">
                  ▹
                </span>

                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
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
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00BFA6] mb-20">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row md:flex-wrap">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-[#00BFA6]/40 to-transparent hidden md:block" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              {...exp}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
