"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  Factory,
  Palette,
  FlaskConical,
  Sprout,
  Paintbrush,
  Sparkles,
  Droplets,
  Layers,
  Building2,
  Wrench,
  ArrowRight,
} from "lucide-react";

interface Industry {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

export default function IndustriesPage() {
  const [isVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            requestAnimationFrame(() => {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
              element.style.transition = `opacity 0.8s ease-out ${
                index * 0.1
              }s, transform 0.8s ease-out ${index * 0.1}s`;
            });
            observerRef.current?.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.style.opacity !== "1" && observerRef.current) {
          htmlEl.style.opacity = "0";
          htmlEl.style.transform = "translateY(30px)";
          htmlEl.style.willChange = "opacity, transform";
          observerRef.current.observe(htmlEl);
        }
      });
    });

    return () => {
      if (observerRef.current) {
        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observerRef.current?.unobserve(el));
        observerRef.current.disconnect();
      }
      initializedRef.current = false;
    };
  }, []);

  const industries: Industry[] = [
    {
      id: 1,
      name: "Paints and Coating",
      icon: Paintbrush,
      description:
        "Essential raw materials for high-performance paints and protective coatings",
      color: "#3B82F6",
    },
    {
      id: 2,
      name: "Adhesives and Polysols",
      icon: Layers,
      description:
        "Specialized chemicals for advanced adhesive formulations and polymer solutions",
      color: "#8B5CF6",
    },
    {
      id: 3,
      name: "Pharmaceuticals",
      icon: FlaskConical,
      description:
        "High-purity chemicals for pharmaceutical manufacturing and drug development",
      color: "#10B981",
    },
    {
      id: 4,
      name: "Agro Chemicals",
      icon: Sprout,
      description:
        "Critical inputs for agricultural chemicals and crop protection products",
      color: "#22C55E",
    },
    {
      id: 5,
      name: "Dyes and Inks",
      icon: Palette,
      description:
        "Premium colorants and solvents for printing inks and dye manufacturing",
      color: "#EC4899",
    },
    {
      id: 6,
      name: "Cosmetics",
      icon: Sparkles,
      description:
        "Quality ingredients for personal care and cosmetic product formulations",
      color: "#F59E0B",
    },
    {
      id: 7,
      name: "Detergents",
      icon: Droplets,
      description:
        "Essential components for detergent and cleaning product manufacturing",
      color: "#06B6D4",
    },
    {
      id: 8,
      name: "Speciality Polymers",
      icon: Factory,
      description:
        "Advanced monomers and chemicals for specialty polymer production",
      color: "#6366F1",
    },
    {
      id: 9,
      name: "Adhesives",
      icon: Wrench,
      description:
        "High-performance chemicals for industrial and construction adhesives",
      color: "#F97316",
    },
    {
      id: 10,
      name: "Construction",
      icon: Building2,
      description:
        "Essential materials for construction chemicals and building products",
      color: "#64748B",
    },
  ];

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="p-4 rounded-full animate-pulse"
                  style={{
                    backgroundColor: "var(--tertiary)",
                    color: "var(--primary)",
                  }}
                >
                  <Factory className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Industries We Cater To
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                At Shiv Texchem, we partner with a wide range of industries to
                provide cost-effective solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid Section */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.id}
                    className="scroll-animate"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className="relative group h-full rounded-3xl overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "2px solid var(--border-primary)",
                        minHeight: "380px",
                        boxShadow: "0 4px 20px var(--shadow-sm)",
                        transform: "translateY(0) scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = industry.color;
                        card.style.transform = "translateY(-16px) scale(1.03)";
                        card.style.boxShadow = `0 30px 60px ${industry.color}40`;

                        // Animate icon container
                        const iconContainer = card.querySelector(
                          ".icon-container"
                        ) as HTMLElement;
                        if (iconContainer) {
                          iconContainer.style.transform = "scale(1.15) rotate(-5deg)";
                          iconContainer.style.backgroundColor = `${industry.color}20`;
                          iconContainer.style.borderColor = industry.color;
                        }

                        // Animate icon
                        const iconElement = card.querySelector(
                          ".industry-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform = "scale(1.3) rotate(10deg)";
                          iconElement.style.color = industry.color;
                        }

                        // Animate background gradient
                        const gradientElement = card.querySelector(
                          ".industry-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0.15";
                        }

                        // Animate shimmer
                        const shimmerElement = card.querySelector(
                          ".shimmer-effect"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "shimmer 2s infinite";
                        }

                        // Animate arrow
                        const arrowElement = card.querySelector(
                          ".arrow-icon"
                        ) as HTMLElement;
                        if (arrowElement) {
                          arrowElement.style.opacity = "1";
                          arrowElement.style.transform = "translateX(8px)";
                        }

                        // Animate title
                        const titleElement = card.querySelector(
                          ".industry-title"
                        ) as HTMLElement;
                        if (titleElement) {
                          titleElement.style.color = industry.color;
                        }
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = "var(--border-primary)";
                        card.style.transform = "translateY(0) scale(1)";
                        card.style.boxShadow = "0 4px 20px var(--shadow-sm)";

                        // Reset icon container
                        const iconContainer = card.querySelector(
                          ".icon-container"
                        ) as HTMLElement;
                        if (iconContainer) {
                          iconContainer.style.transform = "scale(1) rotate(0deg)";
                          iconContainer.style.backgroundColor = "var(--tertiary)";
                          iconContainer.style.borderColor = "transparent";
                        }

                        // Reset icon
                        const iconElement = card.querySelector(
                          ".industry-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform = "scale(1) rotate(0deg)";
                          iconElement.style.color = "var(--primary)";
                        }

                        // Reset gradient
                        const gradientElement = card.querySelector(
                          ".industry-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0";
                        }

                        // Reset shimmer
                        const shimmerElement = card.querySelector(
                          ".shimmer-effect"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "none";
                        }

                        // Reset arrow
                        const arrowElement = card.querySelector(
                          ".arrow-icon"
                        ) as HTMLElement;
                        if (arrowElement) {
                          arrowElement.style.opacity = "0";
                          arrowElement.style.transform = "translateX(0)";
                        }

                        // Reset title
                        const titleElement = card.querySelector(
                          ".industry-title"
                        ) as HTMLElement;
                        if (titleElement) {
                          titleElement.style.color = "var(--text-primary)";
                        }
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div
                        className="shimmer-effect absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(110deg, transparent 30%, ${industry.color}15 50%, transparent 70%)`,
                          transform: "translateX(-100%)",
                        }}
                      ></div>

                      {/* Background Gradient */}
                      <div
                        className="industry-gradient absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at top right, ${industry.color}20 0%, transparent 60%)`,
                          opacity: 0,
                        }}
                      ></div>

                      {/* Animated Border Glow */}
                      <div
                        className="absolute inset-0 rounded-3xl transition-opacity duration-700"
                        style={{
                          boxShadow: `inset 0 0 0 2px ${industry.color}`,
                          opacity: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "0.3";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                        {/* Icon */}
                        <div className="mb-6">
                          <div
                            className="icon-container p-5 rounded-2xl w-fit transition-all duration-700 border-2"
                            style={{
                              backgroundColor: "var(--tertiary)",
                              borderColor: "transparent",
                            }}
                          >
                            <Icon
                              className="industry-icon w-10 h-10 transition-all duration-700"
                              style={{
                                color: "var(--primary)",
                              }}
                            />
                          </div>
                        </div>

                        {/* Title with Arrow */}
                        <div className="flex items-center justify-between mb-4">
                          <h3
                            className="industry-title text-xl lg:text-2xl font-bold transition-colors duration-500"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {industry.name}
                          </h3>
                          <ArrowRight
                            className="arrow-icon w-5 h-5 transition-all duration-500 opacity-0"
                            style={{ color: "var(--primary)" }}
                          />
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm lg:text-base leading-relaxed flex-1 mb-6 transition-colors duration-300"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {industry.description}
                        </p>

                        {/* Animated Progress Bar */}
                        <div className="mt-auto">
                          <div className="relative h-2 rounded-full overflow-hidden bg-opacity-20" style={{ backgroundColor: "var(--tertiary)" }}>
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{
                                backgroundColor: "var(--primary)",
                                width: "0%",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.width = "100%";
                                e.currentTarget.style.backgroundColor = industry.color;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.width = "0%";
                                e.currentTarget.style.backgroundColor = "var(--primary)";
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full opacity-0 transition-opacity duration-700"
                            style={{
                              width: `${4 + i * 2}px`,
                              height: `${4 + i * 2}px`,
                              backgroundColor: industry.color,
                              top: `${20 + i * 15}%`,
                              left: `${10 + i * 12}%`,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.opacity = "0.6";
                              e.currentTarget.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.opacity = "0";
                              e.currentTarget.style.transform = "translate(0, 0)";
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section
          className="py-16 lg:py-24"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-animate">
              <div className="max-w-4xl mx-auto text-center">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Your Trusted Chemical Partner
                </h2>
                <div
                  className="w-24 h-1 mx-auto mb-8 rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                ></div>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: "var(--text-secondary)" }}
                >
                  With years of experience and a commitment to excellence, we
                  provide reliable chemical solutions that drive innovation
                  across diverse industries. Our extensive product portfolio and
                  industry expertise make us the preferred partner for businesses
                  seeking quality, reliability, and cost-effectiveness.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-primary)",
                    }}
                  >
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--primary)" }}
                    >
                      10+
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Industries Served
                    </p>
                  </div>
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-primary)",
                    }}
                  >
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--primary)" }}
                    >
                      500+
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Satisfied Customers
                    </p>
                  </div>
                  <div
                    className="p-6 rounded-xl"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-primary)",
                    }}
                  >
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: "var(--primary)" }}
                    >
                      35+
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Product Categories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

