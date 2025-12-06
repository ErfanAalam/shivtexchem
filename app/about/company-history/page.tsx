"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import { Calendar, Building2, FileText, Award } from "lucide-react";

export default function CompanyHistoryPage() {
  const [isVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent double initialization
    if (initializedRef.current) return;
    initializedRef.current = true;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            // Use requestAnimationFrame for smooth animation
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

    // Initialize elements immediately but with RAF for smoothness
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Only set initial state if not already animated
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

  const milestones = [
    {
      icon: Building2,
      year: "2005",
      title: "Company Incorporation",
      description:
        "Incorporated as 'Shiv Texchem Private Limited' on March 31, 2005",
    },
    {
      icon: Award,
      year: "2005 - 2024",
      title: "Growth & Development",
      description:
        "Established presence in chemicals and dyes sector with continuous growth",
    },
    {
      icon: FileText,
      year: "2024",
      title: "Conversion to Public Limited",
      description:
        "Converted to public limited company and renamed to 'Shiv Texchem Limited'",
    },
    {
      icon: Calendar,
      year: "July 2024",
      title: "New Certificate",
      description:
        "Received fresh certificate of incorporation on July 05, 2024",
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
              className={`text-center transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ willChange: "opacity, transform" }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Company History
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full transition-all duration-1000 delay-300"
                style={{
                  backgroundColor: "var(--primary)",
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto transition-all duration-1000 delay-200"
                style={{
                  color: "var(--text-secondary)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                }}
              >
                A journey of growth, transformation, and excellence in the
                chemical industry
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Welcome Section */}
            <div className="mb-16 scroll-animate">
              <div className="max-w-4xl mx-auto text-center">
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Welcome to Shiv Texchem Limited
                </h2>
                <div
                  className="space-y-6 text-base sm:text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <p>
                    Our Company was originally incorporated as a &apos;Shiv
                    Texchem Private Limited&apos; as private limited company in
                    Mumbai under the provisions of the Companies Act, 1965,
                    pursuant to certificate of incorporation dated March 31,
                    2005, issued by Registrar of Companies, Maharashtra, Mumbai.
                    (&quot;ROC&quot;/ &quot;Registrar of Companies&quot;), with
                    the name &apos;Shiv Texchem Private Limited&apos; bearing
                    Corporate Identity Number U24110MH2005PTC152341. Our Company
                    has been in the chemicals and dyes sector since the date of
                    incorporation.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="mb-16 scroll-animate">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-12 text-center"
                style={{ color: "var(--text-primary)" }}
              >
                Our Journey
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block"
                  style={{ backgroundColor: "var(--border-primary)" }}
                ></div>

                <div className="space-y-12 lg:space-y-16">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={milestone.year}
                        className={`relative flex flex-col lg:flex-row items-center ${
                          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                        } gap-8 scroll-animate`}
                      >
                        {/* Timeline Dot */}
                        <div className="relative z-10 shrink-0">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110"
                            style={{
                              backgroundColor: "var(--primary)",
                              color: "var(--button-text)",
                            }}
                          >
                            <Icon className="w-8 h-8" />
                          </div>
                        </div>

                        {/* Content Card */}
                        <div
                          className={`flex-1 ${
                            isEven
                              ? "lg:text-right lg:pr-8"
                              : "lg:text-left lg:pl-8"
                          } text-center lg:text-left`}
                        >
                          <div
                            className="p-6 lg:p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                            style={{
                              backgroundColor: "var(--bg-secondary)",
                              border: "1px solid var(--border-primary)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor =
                                "var(--primary)";
                              e.currentTarget.style.boxShadow =
                                "0 15px 35px var(--shadow-lg)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor =
                                "var(--border-primary)";
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          >
                            <div
                              className="text-2xl font-bold mb-2"
                              style={{ color: "var(--primary)" }}
                            >
                              {milestone.year}
                            </div>
                            <h3
                              className="text-xl lg:text-2xl font-semibold mb-3"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {milestone.title}
                            </h3>
                            <p
                              className="text-sm lg:text-base"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Conversion Section */}
            <div className="scroll-animate">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Transformation to Public Limited
                  </h2>
                  <div
                    className="space-y-4 text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <p>
                      Subsequently, our Company was converted from a private
                      limited company to a public limited company pursuant to
                      special resolution passed by our shareholders at an
                      Extra-Ordinary General held on June 11, 2024, and the name
                      of our Company was subsequently changed to &apos;Shiv
                      Texchem Limited.&apos;
                    </p>
                    <p>
                      A fresh certificate of incorporation consequent to
                      conversion dated July 05, 2024, was issued by the
                      Registrar of Companies bearing Corporate Identity Number
                      U24110MH2005PLC152341.
                    </p>
                  </div>
                </div>
                <div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl scroll-animate group"
                  style={{ backgroundColor: "var(--tertiary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <FileText
                      className="w-32 h-32 transition-all duration-500 group-hover:rotate-12"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Key Information */}
            <div className="mt-16 scroll-animate">
              <div
                className="p-8 lg:p-12 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--primary)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Original Incorporation
                    </h3>
                    <div
                      className="space-y-2 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <p>
                        <strong>Date:</strong> March 31, 2005
                      </p>
                      <p>
                        <strong>Name:</strong> Shiv Texchem Private Limited
                      </p>
                      <p>
                        <strong>CIN:</strong> U24110MH2005PTC152341
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Current Status
                    </h3>
                    <div
                      className="space-y-2 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <p>
                        <strong>Conversion Date:</strong> July 05, 2024
                      </p>
                      <p>
                        <strong>Current Name:</strong> Shiv Texchem Limited
                      </p>
                      <p>
                        <strong>CIN:</strong> U24110MH2005PLC152341
                      </p>
                    </div>
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
