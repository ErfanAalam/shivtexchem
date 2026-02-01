"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  FileText,
  ExternalLink,
  TrendingUp,
  FileCheck,
  Download,
} from "lucide-react";

interface ReportItem {
  id: number;
  title: string;
  link: string;
}

interface Tab {
  id: string;
  label: string;
  items: ReportItem[];
}

export default function FinancialReportsPage() {
  const [isVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("group");
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

  const tabs: Tab[] = [
    {
      id: "group",
      label: "Group of Companies",
      items: [
        {
          id: 1,
          title: "Financial Statement – Dabala (2024-25)",
          link: "#",
        },
        {
          id: 2,
          title: "Financial Statement – Dabala (2023-24)",
          link: "#",
        },
        {
          id: 3,
          title: "Financial Statement – Dabala (2022-23)",
          link: "#",
        },
        {
          id: 4,
          title: "Financial Statement – Dabala (2021-22)",
          link: "#",
        },
        {
          id: 5,
          title: "Annual Reports",
          link: "#",
        },
        {
          id: 6,
          title: "Quarterly Financials_STCL Quarter 1 Fy 25",
          link: "#",
        },
        {
          id: 7,
          title: "Restatement financials signed with examination report",
          link: "#",
        },
        {
          id: 8,
          title: "Financial Statement – Dabala H1 FY 24-25",
          link: "#",
        },
        {
          id: 9,
          title: "Dabala All Chem LLP Investor Presentation",
          link: "#",
        },
        {
          id: 10,
          title: "Annual Report – FY 2024-25",
          link: "#",
        },
        {
          id: 11,
          title: "Financials Results – Half Year – 30th Sept 2025",
          link: "#",
        },
      ],
    },
    {
      id: "agm",
      label: "AGM",
      items: [
        {
          id: 1,
          title:
            "Dabala All Chem LLP Financial Result FY 2022-2023",
          link: "#",
        },
        {
          id: 2,
          title:
            "Mack Trading Company Limited Financial Result FY 2021-2022",
          link: "#",
        },
        {
          id: 3,
          title:
            "Mack Trading Company Limited Financial Result FY 2020-2021",
          link: "#",
        },
      ],
    },
    {
      id: "publications",
      label: "Publications",
      items: [
        {
          id: 1,
          title: "20th AGM Notice – Dabala Ltd",
          link: "#",
        },
        {
          id: 2,
          title:
            "Scrutinizer Report – AGM – 23rd September, 2025 – Dabala Ltd",
          link: "#",
        },
      ],
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

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
                  <TrendingUp className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Financial Reports
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Access our comprehensive financial reports, statements, and
                investor presentations
              </p>
            </div>
          </div>
        </section>

        {/* Tabs and Reports Section */}
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
              className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
            <div
              className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-6 py-3 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden"
                  style={{
                    backgroundColor:
                      activeTab === tab.id
                        ? "var(--primary)"
                        : "var(--bg-secondary)",
                    color:
                      activeTab === tab.id
                        ? "var(--button-text)"
                        : "var(--text-secondary)",
                    border:
                      activeTab === tab.id
                        ? "2px solid var(--primary)"
                        : "2px solid var(--border-primary)",
                    transform:
                      activeTab === tab.id ? "scale(1.05)" : "scale(1)",
                    boxShadow:
                      activeTab === tab.id
                        ? "0 8px 20px var(--shadow-lg)"
                        : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor =
                        "var(--tertiary)";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor =
                        "var(--bg-secondary)";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Reports List */}
            <div className="space-y-4">
              {activeTabData.items.map((item, index) => {
                const isHovered = hoveredItem === item.id;
                const color = "#3B82F6";

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
                        card.style.borderColor = color;
                        card.style.transform = "translateY(-8px) scale(1.01)";
                        card.style.boxShadow = `0 20px 40px ${color}30`;
                        setHoveredItem(item.id);

                        // Animate gradient
                        const gradientElement = card.querySelector(
                          ".report-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0.15";
                        }

                        // Animate shimmer
                        const shimmerElement = card.querySelector(
                          ".report-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation =
                            "shimmer 2s infinite";
                        }

                        // Animate icon
                        const iconElement = card.querySelector(
                          ".report-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform =
                            "scale(1.2) rotate(5deg)";
                          iconElement.style.color = color;
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
                          ".report-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0";
                        }

                        // Reset shimmer
                        const shimmerElement = card.querySelector(
                          ".report-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "none";
                        }

                        // Reset icon
                        const iconElement = card.querySelector(
                          ".report-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform = "scale(1) rotate(0deg)";
                          iconElement.style.color = "var(--primary)";
                        }
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div
                        className="report-shimmer absolute inset-0 pointer-events-none z-20"
                        style={{
                          background: `linear-gradient(110deg, transparent 30%, ${color}20 50%, transparent 70%)`,
                          transform: "translateX(-100%)",
                        }}
                      ></div>

                      {/* Background Gradient */}
                      <div
                        className="report-gradient absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at top right, ${color}20 0%, transparent 60%)`,
                          opacity: 0,
                        }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 p-4 lg:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                          {/* Icon and Title */}
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div
                              className="p-2 rounded-lg shrink-0 transition-all duration-500"
                              style={{
                                backgroundColor: "var(--tertiary)",
                              }}
                            >
                              <FileText
                                className="report-icon w-5 h-5 transition-all duration-500"
                                style={{
                                  color: "var(--primary)",
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3
                                className="text-base lg:text-lg font-semibold transition-colors duration-300"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {item.title}
                              </h3>
                            </div>
                          </div>

                          {/* Download Button */}
                          <div className="flex items-center shrink-0">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2 px-4 lg:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-500 relative overflow-hidden group/btn w-full lg:w-auto"
                              style={{
                                backgroundColor: isHovered
                                  ? color
                                  : "var(--primary)",
                                color: "var(--button-text)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = color;
                                e.currentTarget.style.boxShadow = `0 8px 20px ${color}50`;
                                e.currentTarget.style.transform = "scale(1.05)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = isHovered
                                  ? color
                                  : "var(--primary)";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "scale(1)";
                              }}
                            >
                              <Download className="w-4 h-4 relative z-10" />
                              <span className="relative z-10">Download</span>
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
                          boxShadow: `inset 0 0 0 2px ${color}`,
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
      </main>
      <Footer />
    </>
  );
}

