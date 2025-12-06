"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import Image from "next/image";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Zap,
  Star,
} from "lucide-react";
import { motion, useInView, AnimatePresence, useAnimation } from "framer-motion";

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
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

  const colors = [
    "#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EC4899",
    "#06B6D4", "#6366F1", "#F97316", "#64748B",
  ];

  // Generate floating particles with stable positions
  const floatingParticles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
    })),
  []);

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen transition-colors duration-300 pt-20 relative overflow-hidden"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        {/* Hero Section with Dramatic Animations */}
        <motion.section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Background Particles - Always Visible */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingParticles.slice(0, 20).map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.8), rgba(139, 69, 19, 0.2))`,
                  boxShadow: "0 0 20px rgba(139, 69, 19, 0.5)",
                }}
                animate={{
                  y: [-30, 30, -30],
                  x: [-20, 20, -20],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          {/* Rotating Geometric Shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute border-4 opacity-20"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                borderColor: "var(--primary)",
                left: `${15 + i * 15}%`,
                top: `${20 + i * 12}%`,
                borderRadius: i % 2 === 0 ? "50%" : "20%",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                borderRadius: i % 2 === 0 ? ["50%", "20%", "50%"] : ["20%", "50%", "20%"],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center">
              {/* Animated Icon with Multiple Effects */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              >
                <motion.div
                  className="relative p-6 rounded-3xl"
                  style={{
                    backgroundColor: "var(--tertiary)",
                    color: "var(--primary)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 69, 19, 0.3)",
                      "0 0 60px rgba(139, 69, 19, 0.8)",
                      "0 0 20px rgba(139, 69, 19, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Package className="w-16 h-16" />
                  </motion.div>
                  
                  {/* Orbiting particles around icon */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: "var(--primary)",
                        boxShadow: "0 0 10px var(--primary)",
                      }}
                      animate={{
                        x: [
                          Math.cos((i * Math.PI * 2) / 8) * 60,
                          Math.cos(((i + 1) * Math.PI * 2) / 8) * 60,
                        ],
                        y: [
                          Math.sin((i * Math.PI * 2) / 8) * 60,
                          Math.sin(((i + 1) * Math.PI * 2) / 8) * 60,
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Animated Title with Gradient */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 relative inline-block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  style={{
                    background: "linear-gradient(90deg, var(--primary), #F59E0B, var(--primary))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  animate={{
                    backgroundPosition: ["0% center", "200% center", "0% center"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Our Products
                </motion.span>
              </motion.h1>

              {/* Animated Underline */}
              <motion.div
                className="w-32 h-2 mx-auto mb-8 rounded-full relative overflow-hidden"
                style={{ backgroundColor: "var(--primary)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ opacity: 0.5 }}
                />
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Comprehensive range of high-quality chemicals for diverse industrial applications
              </motion.p>
            </motion.div>
          </div>

          {/* Animated Wave Lines */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(139, 69, 19, ${0.4 - i * 0.1}), transparent)`,
                top: `${25 + i * 20}%`,
              }}
              animate={{
                scaleX: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.section>

        {/* Products Section with Extensive Animations */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          {/* Constantly Moving Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingParticles.slice(20).map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full blur-sm"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size * 4}px`,
                  height: `${particle.size * 4}px`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.15), transparent)`,
                }}
                animate={{
                  y: [-50, 50, -50],
                  x: [-30, 30, -30],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Animated Section Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8" style={{ color: "var(--primary)" }} />
                </motion.div>
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(139, 69, 19, 0.3)",
                      "0 0 20px rgba(139, 69, 19, 0.6)",
                      "0 0 10px rgba(139, 69, 19, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Explore Our Range
                </motion.h2>
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-8 h-8" style={{ color: "var(--primary)" }} />
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {categories.map((category, index) => {
                const isExpanded = expandedCategories.has(category.id);
                const categoryColor = colors[index % colors.length];

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 60, rotateX: -15 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0 
                    } : { 
                      opacity: 0, 
                      y: 60, 
                      rotateX: -15 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <motion.div
                      className="relative group rounded-3xl overflow-hidden cursor-pointer"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "2px solid var(--border-primary)",
                        minHeight: "500px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={!isMobile ? {
                        y: -25,
                        scale: 1.05,
                        rotateY: 5,
                        borderColor: categoryColor,
                        boxShadow: `0 40px 80px ${categoryColor}40`,
                        transition: { duration: 0.3 },
                      } : {}}
                    >
                      {/* Constantly Moving Shimmer */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none z-30"
                        style={{
                          background: `linear-gradient(120deg, transparent 20%, ${categoryColor}30 50%, transparent 80%)`,
                        }}
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />

                      {/* Animated Gradient Background */}
                      <motion.div
                        className="absolute inset-0 opacity-10"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${categoryColor}, transparent)`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      />

                      {/* Image Section with Zoom Animation */}
                      <div className="relative w-full h-72 overflow-hidden bg-gray-200">
                        <motion.div
                          className="relative w-full h-full"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                            unoptimized
                          />
                        </motion.div>

                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%)",
                          }}
                        />

                        {/* Sparkle Icon - Always Pulsing */}
                        <motion.div
                          className="absolute top-4 right-4 z-20"
                          animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          <Sparkles
                            className="w-7 h-7"
                            style={{ color: categoryColor, filter: "drop-shadow(0 0 10px currentColor)" }}
                          />
                        </motion.div>

                        {/* Category Badge with Glow */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <motion.div
                            className="inline-block px-5 py-3 rounded-2xl"
                            style={{
                              backdropFilter: "blur(15px)",
                              background: `linear-gradient(135deg, ${categoryColor}40, ${categoryColor}20)`,
                              border: `2px solid ${categoryColor}`,
                            }}
                            animate={{
                              boxShadow: [
                                `0 0 20px ${categoryColor}40`,
                                `0 0 40px ${categoryColor}80`,
                                `0 0 20px ${categoryColor}40`,
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <h3
                              className="text-xl lg:text-2xl font-bold text-white"
                              style={{
                                textShadow: "0 4px 12px rgba(0, 0, 0, 0.9)",
                              }}
                            >
                              {category.name}
                            </h3>
                          </motion.div>
                        </div>

                        {/* Corner Accents - Animated */}
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-8 h-8"
                            style={{
                              border: `3px solid ${categoryColor}`,
                              [i < 2 ? "top" : "bottom"]: "10px",
                              [i % 2 === 0 ? "left" : "right"]: "10px",
                              borderTop: i >= 2 ? "none" : undefined,
                              borderBottom: i < 2 ? "none" : undefined,
                              borderLeft: i % 2 !== 0 ? "none" : undefined,
                              borderRight: i % 2 === 0 ? "none" : undefined,
                            }}
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          />
                        ))}
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 flex flex-col p-6 relative z-10">
                        {/* Product Count Badge - Animated */}
                        <div className="mb-4 flex items-center justify-between">
                          <motion.div
                            className="px-4 py-2 rounded-xl font-bold text-sm"
                            style={{
                              backgroundColor: categoryColor,
                              color: "white",
                              boxShadow: `0 4px 15px ${categoryColor}50`,
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              boxShadow: [
                                `0 4px 15px ${categoryColor}50`,
                                `0 8px 25px ${categoryColor}80`,
                                `0 4px 15px ${categoryColor}50`,
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {category.products.length} Product{category.products.length !== 1 ? "s" : ""}
                          </motion.div>
                          
                          <motion.div
                            animate={{
                              x: [0, 8, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          >
                            <ArrowRight
                              className="w-6 h-6"
                              style={{ color: categoryColor }}
                            />
                          </motion.div>
                        </div>

                        {/* Expandable Product List */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="overflow-hidden mb-4"
                            >
                              <ul className="space-y-3">
                                {category.products.map((product, productIndex) => (
                                  <motion.li
                                    key={productIndex}
                                    className="flex items-center space-x-3 group/item"
                                    style={{
                                      color: "var(--text-secondary)",
                                    }}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ 
                                      duration: 0.4, 
                                      delay: productIndex * 0.08 
                                    }}
                                    whileHover={!isMobile ? {
                                      x: 12,
                                      color: categoryColor,
                                      transition: { duration: 0.2 },
                                    } : {}}
                                  >
                                    <motion.div
                                      animate={{
                                        scale: [1, 1.2, 1],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: productIndex * 0.2,
                                      }}
                                    >
                                      <Zap
                                        className="w-4 h-4 shrink-0"
                                        style={{ color: categoryColor }}
                                      />
                                    </motion.div>
                                    <span className="text-sm font-medium">{product.name}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand Button - Highly Animated */}
                        <motion.button
                          onClick={() => toggleCategory(category.id)}
                          className="mt-auto flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-bold relative overflow-hidden"
                          style={{
                            backgroundColor: categoryColor,
                            color: "white",
                          }}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: `0 15px 35px ${categoryColor}60`,
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            boxShadow: [
                              `0 5px 15px ${categoryColor}30`,
                              `0 10px 25px ${categoryColor}50`,
                              `0 5px 15px ${categoryColor}30`,
                            ],
                          }}
                          transition={{
                            boxShadow: { duration: 2, repeat: Infinity },
                          }}
                        >
                          <span className="relative z-10 text-base">
                            {isExpanded ? "Show Less" : "View Products"}
                          </span>
                          <motion.div
                            className="relative z-10"
                            animate={{ 
                              y: isExpanded ? [0, -4, 0] : [0, 4, 0],
                              rotate: isExpanded ? 180 : 0,
                            }}
                            transition={{ 
                              y: { duration: 1, repeat: Infinity },
                              rotate: { duration: 0.3 },
                            }}
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-6 h-6" />
                            ) : (
                              <ChevronDown className="w-6 h-6" />
                            )}
                          </motion.div>
                          
                          {/* Button shine animation */}
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                            }}
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        </motion.button>
                      </div>

                      {/* Floating Stars on Card */}
                      {!isMobile && [...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute pointer-events-none z-20"
                          style={{
                            left: `${20 + i * 12}%`,
                            top: `${30 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            y: [-20, 20, -20],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        >
                          <Star
                            className="w-4 h-4"
                            style={{ 
                              color: categoryColor,
                              filter: "drop-shadow(0 0 8px currentColor)",
                            }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Summary Section with Animations */}
        <motion.section
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          {/* Animated background grid */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle, var(--primary) 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl sm:text-5xl font-bold mb-6 relative inline-block"
                style={{ color: "var(--text-primary)" }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(139, 69, 19, 0.2)",
                    "0 0 40px rgba(139, 69, 19, 0.5)",
                    "0 0 20px rgba(139, 69, 19, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Quality Products for Every Industry
                
                {/* Decorative lines */}
                <motion.span
                  className="absolute -bottom-4 left-0 right-0 h-1 rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                  animate={{
                    scaleX: [0.5, 1, 0.5],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.h2>
              
              <motion.p
                className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mt-8"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We offer a comprehensive range of high-quality chemicals across
                multiple categories, serving various industries including paints
                and coatings, printing inks, agro-chemical products, specialty
                polymers, pharmaceuticals, and specialty industrial chemicals.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
