import React from "react";
import { motion } from "framer-motion";
import {languages} from "../data/data";

const Card = ({ children, className }) => {
  return (
    <div
      className={`p-4 rounded-3xl bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
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
      whileHover={{ scale: 1.05 }}
      className="flex justify-center items-center"
    >
      <Card>
        <CardContent className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt={name}
            className="w-20 h-20 mb-3 transition-all duration-300 hover:scale-110"
          />
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProgrammingLanguages = () => {
  return (
    <div className="flex justify-center p-6 bg-gray-900">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
        {languages.map((lang) => (
          <LanguageCard key={lang.name} {...lang} />
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
