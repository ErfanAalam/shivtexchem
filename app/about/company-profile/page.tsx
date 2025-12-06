"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  Factory,
  Package,
  Globe,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function CompanyProfilePage() {
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

  const features = [
    {
      icon: Factory,
      title: "Chemical Import & Distribution",
      description:
        "Specialized in hydrocarbon-based chemicals for various industries",
    },
    {
      icon: Package,
      title: "Supply Chain Management",
      description:
        "Efficient management of secondary and tertiary chemical supply chains",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description:
        "Connecting international producers with domestic industries",
    },
    {
      icon: TrendingUp,
      title: "Industry Support",
      description:
        "Supporting multiple industries with essential raw materials",
    },
  ];

  const services = [
    "Purchase planning assistance",
    "Order aggregation from customers",
    "Negotiation with global suppliers",
    "Price and specification management",
    "Quantity and delivery scheduling",
    "Storage and handling support",
    "Logistics management",
  ];

  const industries = [
    "Paints and Coatings",
    "Printing Inks",
    "Agro-chemical Products",
    "Specialty Polymers",
    "Pharmaceuticals",
    "Specialty Industrial Chemicals",
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
                Company Profile
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
                Leading the way in chemical import and distribution with
                excellence and innovation
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
            {/* Introduction */}
            <div className="mb-16 scroll-animate">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="scroll-animate">
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Business
                  </h2>
                  <div
                    className="space-y-4 text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <p>
                      We are primarily engaged in the business of importing and
                      distribution of hydrocarbon-based chemicals of the product
                      family viz. Acetyls, Alcohol, Aromatics, Nitriles,
                      Monomers, Glycols Phenolic, Ketones, and Isocynates, which
                      are critical raw materials and inputs and have application
                      across wide spectrum of industries like paints and
                      coatings, printing inks, agro-chemical products, specialty
                      polymers, pharmaceuticals products and specialty
                      industrial chemicals.
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
                    {/* <Factory
                      className="w-32 h-32 transition-all duration-500 group-hover:rotate-12"
                      style={{ color: "var(--primary)" }}
                    /> */}
                    <Image 
                      src="/aboutbanner1.jpg"
                      alt="Company Profile"
                      width={2000}
                      height={2000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Focus */}
            <div className="mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-8 text-center scroll-animate"
                style={{ color: "var(--text-primary)" }}
              >
                Industry Focus
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className="p-4 rounded-lg scroll-animate transition-all duration-300 ease-out"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-primary)",
                      transitionDelay: `${index * 50}ms`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--primary)";
                      e.currentTarget.style.transform =
                        "translateY(-8px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px var(--shadow-md)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "var(--border-primary)";
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5 shrink-0 transition-transform duration-300"
                        style={{ color: "var(--primary)" }}
                      />
                      <span className="font-medium">{industry}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Model */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 scroll-animate group"
                  style={{ backgroundColor: "var(--tertiary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    {/* <Globe
                      className="w-32 h-32 transition-all duration-500 group-hover:rotate-12"
                      style={{ color: "var(--primary)" }}
                    /> */}
                    <Image
                      src="/aboutbanner2.webp"
                      alt="Company Profile"
                      width={2000}
                      height={2000}
                      className="w-full h-full object-fit"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 scroll-animate">
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Business Model
                  </h2>
                  <div
                    className="space-y-4 text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <p>
                      In the petrochemical industry, there is a wide array of
                      base chemicals that serve as the foundation for various
                      derivative chemicals. These chemicals serve as secondary
                      and tertiary chemicals for application in various
                      industries. Our business focuses on the import and
                      redistribution of these secondary and tertiary chemicals,
                      which are essential raw materials for multiple industries.
                    </p>
                    <p>
                      We manage the supply chain of these secondary and tertiary
                      chemicals derived from base chemicals. For example,
                      benzene serves as a fundamental building block for
                      producing essential secondary and tertiary chemicals such
                      as phenol, styrene and aniline. These secondary and
                      tertiary chemicals are indispensable base raw material
                      inputs in various industries including paints, coatings,
                      printing inks, agrochemicals, pharmaceuticals, specialty
                      polymers, and industrial chemicals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-12 text-center scroll-animate"
                style={{ color: "var(--text-primary)" }}
              >
                Our Core Strengths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="p-6 rounded-xl scroll-animate transition-all duration-500 ease-out group"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                        transitionDelay: `${index * 100}ms`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--primary)";
                        e.currentTarget.style.transform =
                          "translateY(-8px) scale(1.03)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px var(--shadow-lg)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--border-primary)";
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="p-3 rounded-lg w-fit mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                      >
                        <Icon className="w-6 h-6 transition-transform duration-500" />
                      </div>
                      <h3
                        className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="scroll-animate">
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Services
                  </h2>
                  <div
                    className="space-y-4 text-base sm:text-lg leading-relaxed mb-8"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <p>
                      Our role involves sourcing these chemicals from
                      international producers and suppliers, redistributing them
                      to domestic industries, and ensuring sufficient and timely
                      supply to manufacturers. By handling the import and
                      distribution of these essential raw materials, we support
                      various industries in accessing high-quality chemicals for
                      their manufacturing processes. We bridge the gap between
                      global suppliers and local industries, ensuring a steady
                      and reliable supply of crucial chemicals.
                    </p>
                  </div>
                </div>
                <div
                  className="p-8 rounded-2xl scroll-animate transition-all duration-500 hover:scale-[1.02]"
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
                    e.currentTarget.style.borderColor = "var(--border-primary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <h3
                    className="text-2xl font-semibold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 transition-all duration-300 hover:translate-x-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <CheckCircle
                          className="w-5 h-5 shrink-0 mt-0.5 transition-transform duration-300"
                          style={{ color: "var(--primary)" }}
                        />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="scroll-animate">
              <div
                className="p-8 lg:p-12 rounded-2xl transition-all duration-500 hover:scale-[1.02] group"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px var(--shadow-lg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <Users
                    className="w-16 h-16 mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ color: "var(--primary)" }}
                  />
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-6 transition-colors duration-300"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Value Proposition
                  </h2>
                  <p
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    We act as one of the preferred sourcing partners for our
                    customers wherein we assist and support our customers for
                    their purchase planning of these products, aggregate orders
                    from customers, engage with global and domestic producers
                    and suppliers to negotiate terms which includes price,
                    specifications, quantity and delivery schedule and manage
                    supply chain, which includes storage, handling and logistics
                    support.
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
