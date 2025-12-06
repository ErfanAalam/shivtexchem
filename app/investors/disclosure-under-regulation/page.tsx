"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  FileText,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Shield,
  FileCheck,
} from "lucide-react";

interface DisclosureItem {
  id: number;
  srNo: number;
  particulars: string;
  link: string;
  category?: string;
}

export default function DisclosureUnderRegulationPage() {
  const [isVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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
                index * 0.05
              }s, transform 0.8s ease-out ${index * 0.05}s`;
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

  const disclosureItems: DisclosureItem[] = [
    {
      id: 1,
      srNo: 1,
      particulars: "Code of Conduct for Directors and Senior Management",
      link: "#",
      category: "Governance",
    },
    {
      id: 2,
      srNo: 2,
      particulars: "Code of Fair Disclosure",
      link: "#",
      category: "Governance",
    },
    {
      id: 3,
      srNo: 3,
      particulars: "Dividend Distribution Policy",
      link: "#",
      category: "Financial",
    },
    {
      id: 4,
      srNo: 4,
      particulars: "Familiarization Program for Independent Directors",
      link: "#",
      category: "Governance",
    },
    {
      id: 5,
      srNo: 5,
      particulars: "Health Safety and Environment Policy",
      link: "#",
      category: "Compliance",
    },
    {
      id: 6,
      srNo: 6,
      particulars:
        "Internal Procedures and Conduct for Prevention of Insider Trading",
      link: "#",
      category: "Compliance",
    },
    {
      id: 7,
      srNo: 7,
      particulars: "Materiality Policy for Identification of Group Companies",
      link: "#",
      category: "Governance",
    },
    {
      id: 8,
      srNo: 8,
      particulars: "Nomination and Remuneration Policy",
      link: "#",
      category: "Governance",
    },
    {
      id: 9,
      srNo: 9,
      particulars: "Policy for Archival of Documents",
      link: "#",
      category: "Compliance",
    },
    {
      id: 10,
      srNo: 10,
      particulars: "Policy for Determination of Material Events and Disclosure",
      link: "#",
      category: "Compliance",
    },
    {
      id: 11,
      srNo: 11,
      particulars: "Policy for Determination of Material Subsidiaries",
      link: "#",
      category: "Governance",
    },
    {
      id: 12,
      srNo: 12,
      particulars: "Policy on Diversity on Board",
      link: "#",
      category: "Governance",
    },
    {
      id: 13,
      srNo: 13,
      particulars: "Policy on Evaluation of Board and Independent Directors",
      link: "#",
      category: "Governance",
    },
    {
      id: 14,
      srNo: 14,
      particulars:
        "Policy on Identification of Material Creditors and Material Litigations",
      link: "#",
      category: "Compliance",
    },
    {
      id: 15,
      srNo: 15,
      particulars: "Policy on Prevention of Sexual Harrasment at Workplace",
      link: "#",
      category: "Compliance",
    },
    {
      id: 16,
      srNo: 16,
      particulars: "Policy on Related Party Transactions",
      link: "#",
      category: "Governance",
    },
    {
      id: 17,
      srNo: 17,
      particulars:
        "Policy on Succession Planning for Board and Senior Management",
      link: "#",
      category: "Governance",
    },
    {
      id: 18,
      srNo: 18,
      particulars: "Policy on Terms of Appointment of Independent Directors",
      link: "#",
      category: "Governance",
    },
    {
      id: 19,
      srNo: 19,
      particulars:
        "Vigil Mechanism_Whistle Blower Policy for Directors and Employees",
      link: "#",
      category: "Compliance",
    },
    {
      id: 20,
      srNo: 20,
      particulars: "Corporate Social Responsibility",
      link: "#",
      category: "Social",
    },
    {
      id: 21,
      srNo: 21,
      particulars: "Audio/Video Recordings of half yearly investor calls",
      link: "#",
      category: "Investor Relations",
    },
    {
      id: 22,
      srNo: 22,
      particulars: "Transcript of H2 Earnings call",
      link: "#",
      category: "Investor Relations",
    },
  ];

  const getCategoryColor = (category?: string) => {
    const colors: { [key: string]: string } = {
      Governance: "#3B82F6",
      Compliance: "#10B981",
      Financial: "#F59E0B",
      Social: "#EC4899",
      "Investor Relations": "#8B5CF6",
    };
    return colors[category || ""] || "#6366F1";
  };

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
                  <Shield className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Disclosure under Regulation 46
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Comprehensive disclosure documents and policies in compliance
                with regulatory requirements
              </p>
            </div>
          </div>
        </section>

        {/* Disclosure Items Section */}
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
              className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Table Header (Desktop) */}
            <div className="hidden lg:grid grid-cols-12 gap-4 mb-6 scroll-animate">
              <div
                className="col-span-1 px-4 py-4 rounded-xl font-bold text-sm text-center"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                Sr. No.
              </div>
              <div
                className="col-span-9 px-4 py-4 rounded-xl font-bold text-sm"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                Particulars
              </div>
              <div
                className="col-span-2 px-4 py-4 rounded-xl font-bold text-sm text-center"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--border-primary)",
                  color: "var(--text-primary)",
                }}
              >
                Link
              </div>
            </div>

            {/* Disclosure Items */}
            <div className="space-y-4">
              {disclosureItems.map((item, index) => {
                const categoryColor = getCategoryColor(item.category);
                const isHovered = hoveredItem === item.id;

                return (
                  <div
                    key={item.id}
                    className="scroll-animate"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div
                      className="group relative rounded-2xl overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "2px solid var(--border-primary)",
                        boxShadow: "0 4px 16px var(--shadow-sm)",
                        transform: "translateY(0) scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = categoryColor;
                        card.style.transform = "translateY(-8px) scale(1.01)";
                        card.style.boxShadow = `0 20px 40px ${categoryColor}30`;
                        setHoveredItem(item.id);

                        // Animate gradient
                        const gradientElement = card.querySelector(
                          ".item-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0.15";
                        }

                        // Animate shimmer
                        const shimmerElement = card.querySelector(
                          ".item-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "shimmer 2s infinite";
                        }

                        // Animate icon
                        const iconElement = card.querySelector(
                          ".item-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform =
                            "scale(1.2) rotate(5deg)";
                          iconElement.style.color = categoryColor;
                        }
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = "var(--border-primary)";
                        card.style.transform = "translateY(0) scale(1)";
                        card.style.boxShadow = "0 4px 16px var(--shadow-sm)";
                        setHoveredItem(null);

                        // Reset gradient
                        const gradientElement = card.querySelector(
                          ".item-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0";
                        }

                        // Reset shimmer
                        const shimmerElement = card.querySelector(
                          ".item-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "none";
                        }

                        // Reset icon
                        const iconElement = card.querySelector(
                          ".item-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform = "scale(1) rotate(0deg)";
                          iconElement.style.color = "var(--primary)";
                        }
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div
                        className="item-shimmer absolute inset-0 pointer-events-none z-20"
                        style={{
                          background: `linear-gradient(110deg, transparent 30%, ${categoryColor}20 50%, transparent 70%)`,
                          transform: "translateX(-100%)",
                        }}
                      ></div>

                      {/* Background Gradient */}
                      <div
                        className="item-gradient absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at top right, ${categoryColor}20 0%, transparent 60%)`,
                          opacity: 0,
                        }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 p-4 lg:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          {/* Serial Number */}
                          <div className="flex items-center lg:items-start lg:flex-col gap-3 lg:gap-0 lg:w-20 shrink-0">
                            <div
                              className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl font-bold text-sm lg:text-base transition-all duration-500"
                              style={{
                                backgroundColor: `${categoryColor}20`,
                                color: categoryColor,
                              }}
                            >
                              {item.srNo}
                            </div>
                            {/* Category Badge (Mobile) */}
                            {item.category && (
                              <span
                                className="lg:hidden px-3 py-1 rounded-full text-xs font-semibold"
                                style={{
                                  backgroundColor: `${categoryColor}15`,
                                  color: categoryColor,
                                }}
                              >
                                {item.category}
                              </span>
                            )}
                          </div>

                          {/* Particulars */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-3">
                              <div
                                className="p-2 rounded-lg shrink-0 transition-all duration-500"
                                style={{
                                  backgroundColor: "var(--tertiary)",
                                }}
                              >
                                <FileText
                                  className="item-icon w-5 h-5 transition-all duration-500"
                                  style={{
                                    color: "var(--primary)",
                                  }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3
                                  className="text-base lg:text-lg font-semibold mb-1 transition-colors duration-300"
                                  style={{ color: "var(--text-primary)" }}
                                >
                                  {item.particulars}
                                </h3>
                                {/* Category Badge (Desktop) */}
                                {item.category && (
                                  <span
                                    className="hidden lg:inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 transition-all duration-300"
                                    style={{
                                      backgroundColor: `${categoryColor}15`,
                                      color: categoryColor,
                                    }}
                                  >
                                    {item.category}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Link Button */}
                          <div className="flex items-center lg:justify-center lg:w-32 shrink-0">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2 px-4 lg:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-500 relative overflow-hidden group/btn w-full lg:w-auto"
                              style={{
                                backgroundColor: isHovered
                                  ? categoryColor
                                  : "var(--primary)",
                                color: "var(--button-text)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor =
                                  categoryColor;
                                e.currentTarget.style.boxShadow = `0 8px 20px ${categoryColor}50`;
                                e.currentTarget.style.transform = "scale(1.05)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = isHovered
                                  ? categoryColor
                                  : "var(--primary)";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            >
                              <span className="relative z-10">Click Here</span>
                              <ExternalLink
                                className="w-4 h-4 relative z-10 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                              />
                              {/* Button Shine Effect */}
                              <div
                                className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                                style={{
                                  background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                                }}
                              ></div>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Animated Border Glow */}
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-700"
                        style={{
                          boxShadow: `inset 0 0 0 2px ${categoryColor}`,
                          opacity: isHovered ? "0.3" : "0",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section
          className="py-16 lg:py-24"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-animate text-center">
              <div className="flex justify-center mb-6">
                <div
                  className="p-4 rounded-full"
                  style={{
                    backgroundColor: "var(--tertiary)",
                    color: "var(--primary)",
                  }}
                >
                  <FileCheck className="w-8 h-8" />
                </div>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Regulatory Compliance
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                All disclosure documents are maintained in compliance with
                Regulation 46 of the SEBI Listing Regulations. These documents
                are regularly updated to reflect current policies and practices.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

