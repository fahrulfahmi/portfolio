import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Certificate from "./components/Certificate";
import Tect from "./components/Tect";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Certificate />
      <Tect />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
