import React, { useState } from "react";
import {projects} from "../data/data";

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="project" className="py-12 bg-gray-900 text-white">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-[#00BFA6] mb-16">
        My Work
      </h1>
      <p className="text-lg text-center mx-auto w-4/5 md:w-2/3 lg:w-1/2 text-gray-300 mb-12">
        The following projects demonstrate my skills and experience through real-world examples of my work. Each project is briefly described, reflecting my ability to solve complex problems, work with various technologies, and manage projects effectively.
      </p>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[400px] object-contain rounded-lg mb-4"
            />
            <h3 className="text-xl text-gray-800 font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-8 px-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 px-3 py-1 rounded-lg ${
              currentPage === i + 1
                ? "bg-[#00BFA6] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Project;