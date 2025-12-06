import React, { useEffect, useRef, useState } from "react";
import { certificates } from "../data/data";

export default function Certificate() {
  const VISIBLE = 3;
  const GAP = 24;

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(260);

  useEffect(() => {
    function calc() {
      const screenWidth = window.innerWidth;
      const containerWidth = Math.min(screenWidth - 32, 1152);

      const totalGap = GAP * (VISIBLE - 1);
      const w = (containerWidth - totalGap) / VISIBLE;

      setItemWidth(w);
    }

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const totalSlides = Math.ceil(certificates.length / VISIBLE);
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const translateX = -(index * (itemWidth * VISIBLE + GAP * VISIBLE - GAP));

  return (
    <section id="certificate" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Certificates
        </h2>

        <div className="relative">
          <div ref={containerRef} className="overflow-hidden">
            <div
              style={{
                display: "flex",
                gap: `${GAP}px`,
                transform: `translateX(${translateX}px)`,
                transition: "transform 600ms ease",
              }}
            >
              {certificates.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: `${itemWidth}px`,
                    flex: `0 0 ${itemWidth}px`,
                  }}
                  className="bg-gray-800 p-4 rounded-xl shadow-lg"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full object-contain rounded-md mb-3"
                    style={{ height: itemWidth * 0.6 }}
                  />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
