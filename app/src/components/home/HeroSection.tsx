"use client";

import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    const element = document.getElementById("company-description");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ backgroundColor: "var(--primary)" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ backgroundColor: "var(--primary)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="block">Welcome to</span>
            <span
              className="block mt-2 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--primary), var(--primary-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shiv Texchem Limited
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Leading the way in chemical manufacturing and distribution with
            excellence and innovation
          </p>
          <button
            onClick={scrollToContent}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--button-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary)";
            }}
          >
            <span>Explore More</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown
          className="w-6 h-6"
          style={{ color: "var(--text-tertiary)" }}
        />
      </div>
    </section>
  );
}
