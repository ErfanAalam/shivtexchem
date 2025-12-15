"use client";

import { useRef, useState, useEffect, useMemo } from "react";
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
  Zap,
  TrendingUp,
  Star,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

interface Industry {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: string;
}

export default function IndustriesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.05,
    margin: "-100px",
  });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

  // Generate floating particles
  const floatingParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 25; i++) {
      particles.push({
        id: i,
        x: (i * 37) % 100,
        y: (i * 53) % 100,
        size: 2 + (i % 3),
        duration: 8 + (i % 15),
        delay: i % 4,
      });
    }
    return particles;
  }, []);

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
        {/* Hero Section - Dramatically Animated */}
        <motion.section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Constantly Moving Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.9), rgba(139, 69, 19, 0.3))`,
                  boxShadow: "0 0 15px rgba(139, 69, 19, 0.6)",
                }}
                animate={{
                  y: [-40, 40, -40],
                  x: [-25, 25, -25],
                  scale: [1, 1.6, 1],
                  opacity: [0.4, 0.9, 0.4],
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
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute border-4"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                borderColor: "var(--primary)",
                left: `${10 + i * 18}%`,
                top: `${15 + i * 15}%`,
                opacity: 0.15,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
                borderRadius: ["30%", "50%", "30%"],
              }}
              transition={{
                duration: 18 + i * 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center">
              {/* Animated Factory Icon */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.6 }}
              >
                <motion.div
                  className="relative p-6 rounded-3xl"
                  style={{
                    backgroundColor: "var(--tertiary)",
                    color: "var(--primary)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(139, 69, 19, 0.4)",
                      "0 0 70px rgba(139, 69, 19, 0.9)",
                      "0 0 30px rgba(139, 69, 19, 0.4)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Factory className="w-16 h-16" />
                  </motion.div>

                  {/* Orbiting Gears */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4"
                      style={{
                        background: "var(--primary)",
                        borderRadius: "30%",
                        boxShadow: "0 0 12px var(--primary)",
                      }}
                      animate={{
                        x: [
                          Math.cos((i * Math.PI * 2) / 6) * 70,
                          Math.cos(((i + 1) * Math.PI * 2) / 6) * 70,
                        ],
                        y: [
                          Math.sin((i * Math.PI * 2) / 6) * 70,
                          Math.sin(((i + 1) * Math.PI * 2) / 6) * 70,
                        ],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Animated Title */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--primary), #10B981, var(--primary))",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  animate={{
                    backgroundPosition: [
                      "0% center",
                      "200% center",
                      "0% center",
                    ],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  Industries We Cater To
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
                  style={{ opacity: 0.6 }}
                />
              </motion.div>

              <motion.p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                At Dabala All Chem LLP, we partner with a wide range of industries to
                provide cost-effective solutions.
              </motion.p>
            </motion.div>
          </div>

          {/* Animated Wave Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(139, 69, 19, ${
                  0.5 - i * 0.12
                }), transparent)`,
                top: `${30 + i * 25}%`,
              }}
              animate={{
                scaleX: [0.6, 1.6, 0.6],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}
        </motion.section>

        {/* Industries Grid Section - Highly Animated */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          {/* Moving Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: `${150 + i * 30}px`,
                  height: `${150 + i * 30}px`,
                  left: `${10 + i * 12}%`,
                  top: `${15 + i * 10}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.12), transparent)`,
                }}
                animate={{
                  y: [-60, 60, -60],
                  x: [-40, 40, -40],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 12 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="flex items-center justify-center gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp
                    className="w-8 h-8"
                    style={{ color: "var(--primary)" }}
                  />
                </motion.div>
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                  animate={{
                    textShadow: [
                      "0 0 15px rgba(139, 69, 19, 0.3)",
                      "0 0 30px rgba(139, 69, 19, 0.7)",
                      "0 0 15px rgba(139, 69, 19, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  Our Industry Partners
                </motion.h2>
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <TrendingUp
                    className="w-8 h-8"
                    style={{ color: "var(--primary)" }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, y: 60, rotateX: -20 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0, rotateX: 0 }
                        : { opacity: 0, y: 60, rotateX: -20 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: index * 0.12,
                      type: "spring",
                      stiffness: 80,
                    }}
                  >
                    <motion.div
                      className="relative group h-full rounded-3xl overflow-hidden cursor-pointer"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "2px solid var(--border-primary)",
                        minHeight: "420px",
                      }}
                      animate={{
                        y: [0, -12, 0],
                      }}
                      transition={{
                        duration: 5 + index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={
                        !isMobile
                          ? {
                              y: -20,
                              scale: 1.04,
                              rotateY: 3,
                              borderColor: industry.color,
                              boxShadow: `0 35px 70px ${industry.color}50`,
                              transition: { duration: 0.3 },
                            }
                          : {}
                      }
                    >
                      {/* Constantly Moving Shimmer */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none z-30"
                        style={{
                          background: `linear-gradient(120deg, transparent 25%, ${industry.color}35 50%, transparent 75%)`,
                        }}
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />

                      {/* Pulsing Background Gradient */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(circle at top right, ${industry.color}25 0%, transparent 70%)`,
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.15, 0.35, 0.15],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                        {/* Icon Container - Highly Animated */}
                        <motion.div
                          className="mb-6"
                          whileHover={
                            !isMobile ? { scale: 1.2, rotate: -8 } : {}
                          }
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div
                            className="p-5 rounded-2xl w-fit border-3 relative"
                            style={{
                              backgroundColor: "var(--tertiary)",
                              borderColor: industry.color,
                              color: "var(--primary)",
                            }}
                            animate={{
                              boxShadow: [
                                `0 0 20px ${industry.color}30`,
                                `0 0 40px ${industry.color}70`,
                                `0 0 20px ${industry.color}30`,
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <motion.div
                              animate={{
                                rotate: [0, 15, -15, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{ color: industry.color }}
                            >
                              <Icon className="w-11 h-11" />
                            </motion.div>

                            {/* Orbiting Dots */}
                            {[...Array(4)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                  background: industry.color,
                                  boxShadow: `0 0 8px ${industry.color}`,
                                }}
                                animate={{
                                  x: [
                                    Math.cos((i * Math.PI * 2) / 4) * 35,
                                    Math.cos(((i + 1) * Math.PI * 2) / 4) * 35,
                                  ],
                                  y: [
                                    Math.sin((i * Math.PI * 2) / 4) * 35,
                                    Math.sin(((i + 1) * Math.PI * 2) / 4) * 35,
                                  ],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            ))}
                          </motion.div>
                        </motion.div>

                        {/* Title with Arrow */}
                        <div className="flex items-center justify-between mb-4">
                          <motion.h3
                            className="text-xl lg:text-2xl font-bold"
                            style={{ color: "var(--text-primary)" }}
                            animate={{
                              textShadow: [
                                "0 0 5px rgba(139, 69, 19, 0.2)",
                                "0 0 15px rgba(139, 69, 19, 0.5)",
                                "0 0 5px rgba(139, 69, 19, 0.2)",
                              ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            {industry.name}
                          </motion.h3>
                          <motion.div
                            animate={{
                              x: [0, 10, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          >
                            <ArrowRight
                              className="w-6 h-6"
                              style={{ color: industry.color }}
                            />
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm lg:text-base leading-relaxed flex-1 mb-6"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {industry.description}
                        </p>

                        {/* Animated Progress Bar */}
                        <div className="mt-auto">
                          <motion.div
                            className="relative h-3 rounded-full overflow-hidden"
                            style={{ backgroundColor: "var(--tertiary)" }}
                          >
                            <motion.div
                              className="h-full rounded-full relative overflow-hidden"
                              style={{
                                backgroundColor: industry.color,
                              }}
                              initial={{ width: "0%" }}
                              animate={
                                isInView ? { width: "100%" } : { width: "0%" }
                              }
                              transition={{ duration: 2, delay: index * 0.1 }}
                            >
                              {/* Moving shine on progress bar */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                }}
                                style={{ opacity: 0.4 }}
                              />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>

                      {/* Floating Stars Around Card */}
                      {!isMobile &&
                        [...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute pointer-events-none z-20"
                            style={{
                              left: `${15 + i * 18}%`,
                              top: `${25 + (i % 3) * 25}%`,
                            }}
                            animate={{
                              y: [-25, 25, -25],
                              opacity: [0, 1, 0],
                              scale: [0, 1.2, 0],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              delay: i * 0.6,
                            }}
                          >
                            <Star
                              className="w-5 h-5"
                              style={{
                                color: industry.color,
                                filter: "drop-shadow(0 0 10px currentColor)",
                              }}
                            />
                          </motion.div>
                        ))}

                      {/* Corner Accents */}
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-10 h-10"
                          style={{
                            border: `3px solid ${industry.color}`,
                            [i < 2 ? "top" : "bottom"]: "12px",
                            [i % 2 === 0 ? "left" : "right"]: "12px",
                            borderTop: i >= 2 ? "none" : undefined,
                            borderBottom: i < 2 ? "none" : undefined,
                            borderLeft: i % 2 !== 0 ? "none" : undefined,
                            borderRight: i % 2 === 0 ? "none" : undefined,
                          }}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.6,
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section - Dramatically Animated */}
        <section
          ref={statsRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          {/* Animated Grid Background */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 2px, transparent 2px)",
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={
                statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl sm:text-5xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(139, 69, 19, 0.2)",
                    "0 0 45px rgba(139, 69, 19, 0.6)",
                    "0 0 20px rgba(139, 69, 19, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Your Trusted Chemical Partner
              </motion.h2>

              <motion.div
                className="w-32 h-2 mx-auto mb-8 rounded-full relative overflow-hidden"
                style={{ backgroundColor: "var(--primary)" }}
                initial={{ scaleX: 0 }}
                animate={statsInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ opacity: 0.5 }}
                />
              </motion.div>

              <motion.p
                className="text-lg leading-relaxed mb-12"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                With years of experience and a commitment to excellence, we
                provide reliable chemical solutions that drive innovation across
                diverse industries. Our extensive product portfolio and industry
                expertise make us the preferred partner for businesses seeking
                quality, reliability, and cost-effectiveness.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { value: "10+", label: "Industries Served", icon: Factory },
                  {
                    value: "500+",
                    label: "Satisfied Customers",
                    icon: Sparkles,
                  },
                  { value: "35+", label: "Product Categories", icon: Zap },
                ].map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      className="p-8 rounded-2xl relative overflow-hidden group"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        border: "2px solid var(--border-primary)",
                      }}
                      initial={{ opacity: 0, scale: 0.7, rotateY: -20 }}
                      animate={
                        statsInView
                          ? { opacity: 1, scale: 1, rotateY: 0 }
                          : { opacity: 0, scale: 0.7, rotateY: -20 }
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.7 + index * 0.15,
                        type: "spring",
                      }}
                      whileHover={
                        !isMobile
                          ? {
                              y: -15,
                              scale: 1.05,
                              boxShadow: "0 25px 50px rgba(139, 69, 19, 0.4)",
                            }
                          : {}
                      }
                    >
                      {/* Pulsing background */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(139, 69, 19, 0.15), transparent)",
                        }}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Animated Icon */}
                      <motion.div
                        className="flex justify-center mb-4"
                        animate={{
                          y: [-5, 5, -5],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <StatIcon
                          className="w-12 h-12"
                          style={{
                            color: "var(--primary)",
                            filter:
                              "drop-shadow(0 0 10px rgba(139, 69, 19, 0.5))",
                          }}
                        />
                      </motion.div>

                      <motion.div
                        className="text-4xl sm:text-5xl font-bold mb-3 relative z-10"
                        style={{ color: "var(--primary)" }}
                        initial={{ scale: 0 }}
                        animate={statsInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 1 + index * 0.15,
                          type: "spring",
                          bounce: 0.6,
                        }}
                      >
                        {stat.value}
                      </motion.div>

                      <p
                        className="text-sm font-semibold relative z-10"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {stat.label}
                      </p>

                      {/* Floating particles in stat cards */}
                      {!isMobile &&
                        [...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                              background: "var(--primary)",
                              boxShadow: "0 0 10px var(--primary)",
                              left: `${25 + i * 25}%`,
                              top: "50%",
                            }}
                            animate={{
                              y: [-30, 30, -30],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.8,
                            }}
                          />
                        ))}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
