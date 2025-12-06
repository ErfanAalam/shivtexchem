"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import Image from "next/image";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface Product {
  name: string;
}

interface ProductCategory {
  id: number;
  name: string;
  image: string;
  products: Product[];
}

export default function ProductsPage() {
  const [isVisible] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    new Set()
  );
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

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const categories: ProductCategory[] = [
    {
      id: 1,
      name: "Acetyls",
      image: "/product1.webp",
      products: [
        { name: "Acetic Acid" },
        { name: "N-Butyl Acetate" },
        { name: "Vinyl Acetate Monomer" },
      ],
    },
    {
      id: 2,
      name: "Alcohol",
      image: "/product2.webp",
      products: [
        { name: "Isopropyl Alcohol" },
        { name: "Isobutanol" },
        { name: "N Butanol" },
        { name: "2-Ethyl Hexanol" },
        { name: "N Propyl Alcohol" },
      ],
    },
    {
      id: 3,
      name: "Aromatics & Blended Stock",
      image: "/product3.webp",
      products: [
        { name: "Aromised Solvents- D40/D80/D100" },
        { name: "Exxsol Hexane/ N-Hexane" },
        { name: "Isomer/Solvent Mix Xylene" },
        { name: "Solvent C-9" },
        { name: "Toluene" },
      ],
    },
    {
      id: 4,
      name: "Inorganics and Allied",
      image: "/product4.webp",
      products: [
        { name: "Aluminium chloride" },
        { name: "Caustic Soda Lye" },
        { name: "Caustic Soda Flakes" },
        { name: "Caustic Soda Ash" },
        { name: "Hydrochloric Acid" },
        { name: "Light Soda Ash" },
        { name: "Nitric Acid" },
        { name: "Sulphuric Acid" },
      ],
    },
    {
      id: 5,
      name: "Phenolic & Ketones",
      image: "/product5.webp",
      products: [
        { name: "Acetone" },
        { name: "Cyclohexanone" },
        { name: "Methyl Ethyl Ketone" },
        { name: "Methyl Iso Butyl Ketone" },
        { name: "Phenol" },
      ],
    },
    {
      id: 6,
      name: "Nithles & Isocynates",
      image: "/product6.webp",
      products: [{ name: "Aniline" }],
    },
    {
      id: 7,
      name: "Glycol",
      image: "/product7.webp",
      products: [
        { name: "Eastman Butyl Glycol" },
        { name: "Di Butyl Gylcol ( Butyl Carbitol)" },
        { name: "Propylene Glycol" },
        { name: "Diethylene Glycol" },
      ],
    },
    {
      id: 8,
      name: "Monomers",
      image: "/product8.webp",
      products: [
        { name: "N-Butyl Acrylate" },
        { name: "Styrene Monomer" },
        { name: "Methyl Methacrylate" },
        { name: "Acrylonitrile" },
        { name: "2-Ethylhexyl Acrylate" },
      ],
    },
    {
      id: 9,
      name: "Intermediate and Basic Chemicals",
      image: "/product9.webp",
      products: [
        { name: "DMF" },
        { name: "Pthalic Anhydride" },
        { name: "Maleic Anhydride" },
        { name: "Tetrahydrofuran" },
        { name: "Ethylene Di Chloride" },
        { name: "Linear Alkyl Benzene" },
        { name: "Melamine" },
      ],
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
                  className="p-4 rounded-full"
                  style={{
                    backgroundColor: "var(--tertiary)",
                    color: "var(--primary)",
                  }}
                >
                  <Package className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Our Products
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Comprehensive range of high-quality chemicals for diverse
                industrial applications
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {categories.map((category, index) => {
                const isExpanded = expandedCategories.has(category.id);
                const colors = [
                  "#3B82F6",
                  "#8B5CF6",
                  "#10B981",
                  "#F59E0B",
                  "#EC4899",
                  "#06B6D4",
                  "#6366F1",
                  "#F97316",
                  "#64748B",
                ];
                const categoryColor = colors[index % colors.length];

                return (
                  <div
                    key={category.id}
                    className="scroll-animate"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className="relative group rounded-3xl overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "2px solid var(--border-primary)",
                        minHeight: "450px",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0 8px 24px var(--shadow-sm)",
                        transform: "translateY(0) scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = categoryColor;
                        card.style.transform =
                          "translateY(-20px) scale(1.04) rotateY(2deg)";
                        card.style.boxShadow = `0 35px 70px ${categoryColor}30`;

                        // Animate image
                        const imageElement = card.querySelector(
                          "img"
                        ) as HTMLElement;
                        if (imageElement) {
                          imageElement.style.transform =
                            "scale(1.15) rotate(2deg)";
                        }

                        // Animate badge
                        const badgeElement = card.querySelector(
                          ".category-badge"
                        ) as HTMLElement;
                        if (badgeElement) {
                          badgeElement.style.transform =
                            "translateY(-5px) scale(1.05)";
                          badgeElement.style.backgroundColor = `${categoryColor}20`;
                        }

                        // Animate count badge
                        const countBadge = card.querySelector(
                          ".count-badge"
                        ) as HTMLElement;
                        if (countBadge) {
                          countBadge.style.transform = "scale(1.1)";
                          countBadge.style.backgroundColor = categoryColor;
                        }

                        // Animate sparkle icon
                        const sparkleIcon = card.querySelector(
                          ".sparkle-icon"
                        ) as HTMLElement;
                        if (sparkleIcon) {
                          sparkleIcon.style.opacity = "1";
                          sparkleIcon.style.transform =
                            "scale(1.2) rotate(180deg)";
                        }

                        // Animate button
                        const buttonElement = card.querySelector(
                          ".expand-button"
                        ) as HTMLElement;
                        if (buttonElement) {
                          buttonElement.style.backgroundColor = categoryColor;
                          buttonElement.style.transform = "scale(1.05)";
                        }

                        // Animate gradient
                        const gradientElement = card.querySelector(
                          ".product-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0.2";
                        }

                        // Animate shimmer
                        const shimmerElement = card.querySelector(
                          ".product-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation =
                            "shimmer 2s infinite";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = "var(--border-primary)";
                        card.style.transform =
                          "translateY(0) scale(1) rotateY(0deg)";
                        card.style.boxShadow = "0 8px 24px var(--shadow-sm)";

                        // Reset image
                        const imageElement = card.querySelector(
                          "img"
                        ) as HTMLElement;
                        if (imageElement) {
                          imageElement.style.transform =
                            "scale(1) rotate(0deg)";
                        }

                        // Reset badge
                        const badgeElement = card.querySelector(
                          ".category-badge"
                        ) as HTMLElement;
                        if (badgeElement) {
                          badgeElement.style.transform =
                            "translateY(0) scale(1)";
                          badgeElement.style.backgroundColor = "transparent";
                        }

                        // Reset count badge
                        const countBadge = card.querySelector(
                          ".count-badge"
                        ) as HTMLElement;
                        if (countBadge) {
                          countBadge.style.transform = "scale(1)";
                          countBadge.style.backgroundColor = "var(--primary)";
                        }

                        // Reset sparkle
                        const sparkleIcon = card.querySelector(
                          ".sparkle-icon"
                        ) as HTMLElement;
                        if (sparkleIcon) {
                          sparkleIcon.style.opacity = "0";
                          sparkleIcon.style.transform = "scale(1) rotate(0deg)";
                        }

                        // Reset button
                        const buttonElement = card.querySelector(
                          ".expand-button"
                        ) as HTMLElement;
                        if (buttonElement) {
                          buttonElement.style.backgroundColor =
                            "var(--primary)";
                          buttonElement.style.transform = "scale(1)";
                        }

                        // Reset gradient
                        const gradientElement = card.querySelector(
                          ".product-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0";
                        }

                        // Reset shimmer
                        const shimmerElement = card.querySelector(
                          ".product-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "none";
                        }
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div
                        className="product-shimmer absolute inset-0 pointer-events-none z-20"
                        style={{
                          background: `linear-gradient(110deg, transparent 30%, ${categoryColor}20 50%, transparent 70%)`,
                          transform: "translateX(-100%)",
                        }}
                      ></div>

                      {/* Background Gradient */}
                      <div
                        className="product-gradient absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at bottom left, ${categoryColor}15 0%, transparent 70%)`,
                          opacity: 0,
                        }}
                      ></div>

                      {/* Image Section */}
                      <div className="relative w-full h-72 overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover transition-all duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                          style={{
                            transform: "scale(1)",
                          }}
                        />

                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0 transition-opacity duration-700"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%)",
                          }}
                        ></div>

                        {/* Sparkle Icon */}
                        <div className="absolute top-4 right-4 z-10">
                          <Sparkles
                            className="sparkle-icon w-6 h-6 transition-all duration-700 opacity-0"
                            style={{ color: categoryColor }}
                          />
                        </div>

                        {/* Category Name Badge */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div
                            className="category-badge inline-block px-4 py-2 rounded-xl transition-all duration-700"
                            style={{
                              backgroundColor: "transparent",
                              backdropFilter: "blur(10px)",
                            }}
                          >
                            <h3
                              className="text-xl lg:text-2xl font-bold text-white drop-shadow-2xl"
                              style={{
                                textShadow: "0 4px 12px rgba(0, 0, 0, 0.9)",
                              }}
                            >
                              {category.name}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 flex flex-col p-6 relative z-10">
                        {/* Products Count with Icon */}
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div
                              className="count-badge px-3 py-1.5 rounded-lg transition-all duration-500"
                              style={{
                                backgroundColor: "var(--primary)",
                                color: "var(--button-text)",
                              }}
                            >
                              <p className="text-xs font-bold">
                                {category.products.length} Product
                                {category.products.length !== 1 ? "s" : ""}
                              </p>
                            </div>
                          </div>
                          <ArrowRight
                            className="w-5 h-5 transition-all duration-500 opacity-0 group-hover:opacity-100"
                            style={{ color: categoryColor }}
                          />
                        </div>

                        {/* Products List */}
                        <div
                          className={`overflow-hidden transition-all duration-700 ease-in-out ${
                            isExpanded
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <ul className="space-y-3 mb-4">
                            {category.products.map((product, productIndex) => (
                              <li
                                key={productIndex}
                                className="flex items-start space-x-3 group/item"
                                style={{
                                  color: "var(--text-secondary)",
                                  transform: isExpanded
                                    ? "translateX(0)"
                                    : "translateX(-20px)",
                                  opacity: isExpanded ? 1 : 0,
                                  transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${
                                    productIndex * 60
                                  }ms`,
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "translateX(8px)";
                                  e.currentTarget.style.color = categoryColor;
                                  const dot = e.currentTarget.querySelector(
                                    ".product-dot"
                                  ) as HTMLElement;
                                  if (dot) {
                                    dot.style.transform = "scale(1.5)";
                                    dot.style.backgroundColor = categoryColor;
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform =
                                    "translateX(0)";
                                  e.currentTarget.style.color =
                                    "var(--text-secondary)";
                                  const dot = e.currentTarget.querySelector(
                                    ".product-dot"
                                  ) as HTMLElement;
                                  if (dot) {
                                    dot.style.transform = "scale(1)";
                                    dot.style.backgroundColor =
                                      "var(--primary)";
                                  }
                                }}
                              >
                                <span
                                  className="product-dot w-2 h-2 rounded-full mt-2 shrink-0 transition-all duration-300"
                                  style={{ backgroundColor: "var(--primary)" }}
                                ></span>
                                <span className="text-sm font-medium">
                                  {product.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="expand-button mt-auto flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden group/btn"
                          style={{
                            backgroundColor: "var(--primary)",
                            color: "var(--button-text)",
                          }}
                          onMouseEnter={(e) => {
                            const btn = e.currentTarget;
                            btn.style.boxShadow = `0 8px 20px ${categoryColor}50`;

                            const icon = btn.querySelector(
                              "svg"
                            ) as SVGElement | null;
                            if (icon) {
                              icon.style.transform = isExpanded
                                ? "translateY(-4px)"
                                : "translateY(4px)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget;
                            btn.style.boxShadow = "none";

                            const icon = btn.querySelector(
                              "svg"
                            ) as SVGElement | null;
                            if (icon) {
                              icon.style.transform = "translateY(0)";
                            }
                          }}
                        >
                          <span className="relative z-10">
                            {isExpanded ? "Show Less" : "View Products"}
                          </span>
                          <span className="relative z-10 transition-transform duration-500">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </span>
                          {/* Button Shine Effect */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(90deg, transparent 0%, ${categoryColor}30 50%, transparent 100%)`,
                            }}
                          ></div>
                        </button>
                      </div>

                      {/* Animated Border Glow */}
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700"
                        style={{
                          boxShadow: `inset 0 0 0 2px ${categoryColor}`,
                          opacity: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "0.4";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section
          className="py-16 lg:py-24"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-animate text-center">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Quality Products for Every Industry
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We offer a comprehensive range of high-quality chemicals across
                multiple categories, serving various industries including paints
                and coatings, printing inks, agro-chemical products, specialty
                polymers, pharmaceuticals, and specialty industrial chemicals.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
