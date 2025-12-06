"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import { Target, Eye, Globe, Users, TrendingUp, Shield } from "lucide-react";

export default function MissionVisionPage() {
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

  const missionPoints = [
    {
      icon: Globe,
      title: "Global Market Tracking",
      description: "Management of tracking of global petroleum and hydrocarbon markets",
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "Ensuring seamless and secure operations for our clients",
    },
    {
      icon: TrendingUp,
      title: "Complex Storage Solutions",
      description: "Maintaining complex storage solutions for efficient operations",
    },
    {
      icon: Users,
      title: "Extensive Supplier Network",
      description: "Maintaining an extensive network of suppliers across key markets",
    },
  ];

  const visionPoints = [
    {
      icon: Target,
      title: "Leading Distributor",
      description: "To be a leading chemical distributor locally and globally",
    },
    {
      icon: Eye,
      title: "Exceptional Value",
      description: "Delivering exceptional value and reliability to customers",
    },
    {
      icon: TrendingUp,
      title: "Timely Delivery",
      description: "Ensuring delivery within acceptable timeframes",
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description: "A company where suppliers can rely, employees are proud, and investors seek long-term returns",
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
                Mission & Vision
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
                Guiding principles that drive our commitment to excellence and
                innovation
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
            {/* Mission Section */}
            <div className="mb-20 scroll-animate">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center mb-6">
                    <div
                      className="p-4 rounded-xl mr-4"
                      style={{
                        backgroundColor: "var(--tertiary)",
                        color: "var(--primary)",
                      }}
                    >
                      <Target className="w-8 h-8" />
                    </div>
                    <h2
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Mission
                    </h2>
                  </div>
                  <div
                    className="space-y-4 text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <p>
                      Our mission is to ensure seamless and secure operations
                      for our clients through management of tracking of global
                      petroleum and hydrocarbon markets, complex storage
                      solutions and maintaining an extensive network of
                      suppliers across key markets.
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
                    <Target
                      className="w-32 h-32 transition-all duration-500 group-hover:rotate-12"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Mission Points */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {missionPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 scroll-animate"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 30px var(--shadow-md)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-primary)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="p-3 rounded-lg w-fit mb-4"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="my-16 scroll-animate">
              <div
                className="h-px w-full"
                style={{ backgroundColor: "var(--border-primary)" }}
              ></div>
            </div>

            {/* Vision Section */}
            <div className="mb-20 scroll-animate">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl scroll-animate group order-2 lg:order-1"
                  style={{ backgroundColor: "var(--tertiary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Eye
                      className="w-32 h-32 transition-all duration-500 group-hover:rotate-12"
                      style={{ color: "var(--primary)" }}
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div
                      className="p-4 rounded-xl mr-4"
                      style={{
                        backgroundColor: "var(--tertiary)",
                        color: "var(--primary)",
                      }}
                    >
                      <Eye className="w-8 h-8" />
                    </div>
                    <h2
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Vision
                    </h2>
                  </div>
                  <div
                    className="space-y-4 text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <p>
                      Our vision is to be a leading chemical distributor locally
                      and globally by delivering exceptional value and
                      reliability to our customers within the acceptable time,
                      and to be a company where suppliers can rely, employees are
                      proud of and investors seek long term returns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Points */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visionPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 scroll-animate"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.boxShadow =
                          "0 10px 30px var(--shadow-md)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-primary)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="p-3 rounded-lg w-fit mb-4"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Values Section */}
            <div className="scroll-animate">
              <div
                className="p-8 lg:p-12 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--primary)",
                }}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Commitment
                  </h2>
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Through our mission and vision, we are committed to
                    building lasting relationships with our clients, suppliers,
                    employees, and investors. We strive to be a trusted partner
                    in the chemical distribution industry, delivering excellence
                    in every interaction and transaction.
                  </p>
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

