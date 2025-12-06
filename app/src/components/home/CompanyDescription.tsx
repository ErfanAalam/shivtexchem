"use client";

import { useEffect, useRef, useState } from "react";
import { Factory, Package, FlaskConical, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function CompanyDescription() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to prevent flash
    const currentRef = sectionRef.current;
    let observer: IntersectionObserver | null = null;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      if (currentRef && observer) {
        observer.observe(currentRef);
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const features = [
    {
      icon: Factory,
      title: "Chemical Manufacturing",
      description: "State-of-the-art facilities",
    },
    {
      icon: Package,
      title: "Distribution Network",
      description: "Wide-reaching supply chain",
    },
    {
      icon: FlaskConical,
      title: "Quality Products",
      description: "Premium chemical solutions",
    },
    {
      icon: TrendingUp,
      title: "Industry Leader",
      description: "Trusted by 500+ customers",
    },
  ];

  return (
    <section
      id="company-description"
      ref={sectionRef}
      className="py-20 lg:py-32"
      style={{
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              About Our Company
            </h2>
            <div
              className="space-y-4 text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                We are primarily engaged in the business of importing and
                distribution of hydrocarbon-based chemicals of the product
                family viz. Acetyls, Alcohol, Aromatics, Nitriles, Monomers,
                Glycols Phenolic, Ketones, Nithles and Isocynates, which are
                critical raw materials and inputs and have application across
                wide spectrum of industries like paints and coatings, printing
                inks, agro-chemical products, specialty polymers,
                pharmaceuticals products and specialty industrial chemicals.
              </p>
              <p>
                We manage the supply chain of these secondary and tertiary
                chemicals derived from base chemicals. For example, benzene
                serves as a fundamental building block for producing essential
                secondary and tertiary chemicals such as phenol, styrene and
                aniline. These secondary and tertiary chemicals are
                indispensable base raw material inputs in various industries
                including paints, coatings, printing inks, agrochemicals,
                pharmaceuticals, specialty polymers, and industrial chemicals.
              </p>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/homeBanner1.jpg"
                alt="Company Description"
                width={2000}
                height={2000}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-primary)",
                  transitionDelay: `${index * 100}ms`,
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
                  className="text-xl font-semibold mb-2"
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
    </section>
  );
}
