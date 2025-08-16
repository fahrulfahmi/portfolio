import React from "react";
import { motion } from "framer-motion";
import { languages } from "../data/data";

const Card = ({ children, className }) => {
  return (
    <div
      className={`p-4 rounded-3xl bg-white/20 border border-white/30 shadow-2xl hover:shadow-[0_8px_32px_0_rgba(0,191,166,0.25)] hover:border-[#00BFA6] backdrop-blur-lg transition-all duration-300 ${className}`}
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const LanguageCard = ({ name, logo }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95, rotate: 3 }}
      whileHover={{ scale: 1.08 }}
      className="flex justify-center items-center"
    >
      <Card className="group relative cursor-pointer">
        <CardContent className="flex flex-col items-center text-center">
          <div className="w-20 h-20 mb-3 flex items-center justify-center rounded-full bg-white/30 shadow-inner border border-white/40 group-hover:scale-110 transition-transform duration-300">
            <img
              src={logo}
              alt={name}
              className="w-12 h-12 object-contain"
            />
          </div>
          <h3 className="text-base font-semibold text-[#00BFA6] mt-2 drop-shadow-lg">
            {name}
          </h3>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-2 opacity-0 group-hover:opacity-100 bg-gray-900/90 text-white text-xs rounded px-2 py-1 transition-opacity duration-200 pointer-events-none z-10">
            {name}
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProgrammingLanguages = () => {
  return (
    <section id="Tech" className="flex flex-col items-center p-8 min-h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-[#0f3d3e]">
      <div className="w-full text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[#00BFA6] mb-10 drop-shadow-lg">
          Tech Stack & Tools
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-7">
        {languages.map((lang) => (
          <LanguageCard key={lang.name} {...lang} />
        ))}
      </div>
    </section>
  );
};

export default ProgrammingLanguages;
