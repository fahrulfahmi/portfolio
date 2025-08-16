import React, { useState } from "react";
import {projects} from "../data/data";

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  // Helper for pagination with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

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
            className="bg-white bg-opacity-80 shadow-xl rounded-2xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md"
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
                  className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full flex items-center gap-1"
                >
                  {/* Optionally add icon here */}
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
      <div className="flex justify-center items-center mt-8 gap-2 px-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 font-bold text-lg shadow-md ${
            currentPage === 1
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-gray-800 text-white hover:bg-[#00BFA6] hover:text-white'
          }`}
        >
          &#8592;
        </button>
        {getPageNumbers().map((page, idx) =>
          page === '...'
            ? (
                <span key={idx} className="w-10 h-10 flex items-center justify-center text-xl text-gray-400">...</span>
              )
            : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-1 transition-all duration-200 font-bold text-lg shadow-md ${
                    currentPage === page
                      ? 'bg-[#00BFA6] text-white scale-110 shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-[#00BFA6] hover:text-white'
                  }`}
                >
                  {page}
                </button>
              )
        )}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 font-bold text-lg shadow-md ${
            currentPage === totalPages
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-gray-800 text-white hover:bg-[#00BFA6] hover:text-white'
          }`}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Project;