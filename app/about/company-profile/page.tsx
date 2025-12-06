"use client";

import { useRef, useState, useEffect } from "react";
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
import { motion, useInView } from "framer-motion";

export default function CompanyProfilePage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.05,
    margin: "-100px",
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen transition-colors duration-300 pt-20"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${50 + i * 30}px`,
                  height: `${50 + i * 30}px`,
                  left: `${10 + i * 12}%`,
                  top: `${15 + i * 10}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, ${
                    0.15 - i * 0.015
                  }), transparent)`,
                  filter: `blur(${20 + i * 5}px)`,
                }}
                animate={{
                  y: [0, -30 - i * 10, 0],
                  x: [0, 20 + i * 5, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Floating geometric shapes */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute w-16 h-16 border-2 border-var(--primary) opacity-20"
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + i * 15}%`,
                rotate: i * 45,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [i * 45, i * 45 + 180, i * 45],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.7,
              }}
            />
          ))}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Company Profile
              </motion.h1>
              <motion.div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{
                  backgroundColor: "var(--primary)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.p
                className="text-lg sm:text-xl max-w-3xl mx-auto"
                style={{
                  color: "var(--text-secondary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Leading the way in chemical import and distribution with
                excellence and innovation
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          {/* Background animations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`bg-orb-${i}`}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  left: `${15 + i * 20}%`,
                  top: `${10 + i * 20}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.2), transparent)`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 30, 0],
                  scale: [1, 1.3, 1],
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Introduction */}
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={itemVariants}>
                  <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Business
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-var(--primary)"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </motion.h2>
                  <motion.div
                    className="space-y-4 text-base sm:text-lg leading-relaxed p-6 rounded-xl"
                    style={{
                      color: "var(--text-secondary)",
                      background: "rgba(139, 69, 19, 0.03)",
                      border: "1px solid rgba(139, 69, 19, 0.1)",
                    }}
                    whileHover={
                      !isMobile
                        ? {
                            scale: 1.02,
                            boxShadow: "0 10px 30px rgba(139, 69, 19, 0.15)",
                          }
                        : {}
                    }
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
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group"
                  variants={itemVariants}
                  whileHover={!isMobile ? { scale: 1.03, rotateY: 5 } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/aboutbanner1.jpg"
                      alt="Company Profile"
                      width={2000}
                      height={2000}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                    animate={{
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Industry Focus */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-8 text-center relative mx-auto block"
                style={{ color: "var(--text-primary)" }}
              >
                Industry Focus
                <motion.span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-var(--primary)"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry}
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-primary)",
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={
                      !isMobile
                        ? {
                            scale: 1.05,
                            y: -8,
                            borderColor: "var(--primary)",
                            boxShadow: "0 10px 25px rgba(139, 69, 19, 0.2)",
                          }
                        : {}
                    }
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <CheckCircle
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                      </motion.div>
                      <span
                        className="font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {industry}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business Model */}
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 group"
                  variants={itemVariants}
                  whileHover={!isMobile ? { scale: 1.03, rotateY: -5 } : {}}
                >
                  <Image
                    src="/aboutbanner2.webp"
                    alt="Company Profile"
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="order-1 lg:order-2"
                  variants={itemVariants}
                >
                  <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Our Business Model
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-var(--primary)"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                  </motion.h2>
                  <motion.div
                    className="space-y-4 text-base sm:text-lg leading-relaxed p-6 rounded-xl"
                    style={{
                      color: "var(--text-secondary)",
                      background: "rgba(139, 69, 19, 0.03)",
                      border: "1px solid rgba(139, 69, 19, 0.1)",
                    }}
                    whileHover={
                      !isMobile
                        ? {
                            scale: 1.02,
                            boxShadow: "0 10px 30px rgba(139, 69, 19, 0.15)",
                          }
                        : {}
                    }
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
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-12 text-center relative mx-auto block"
                style={{ color: "var(--text-primary)" }}
              >
                Our Core Strengths
                <motion.span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-var(--primary)"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="p-6 rounded-xl group"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                      }
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      whileHover={
                        !isMobile
                          ? {
                              scale: 1.05,
                              y: -12,
                              borderColor: "var(--primary)",
                              boxShadow: "0 15px 35px rgba(139, 69, 19, 0.3)",
                            }
                          : {}
                      }
                    >
                      <motion.div
                        className="p-3 rounded-lg w-fit mb-4"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                        whileHover={!isMobile ? { scale: 1.1, rotate: 6 } : {}}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </motion.div>
                      </motion.div>
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div variants={itemVariants}>
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
                </motion.div>
                <motion.div
                  className="p-8 rounded-2xl"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-primary)",
                  }}
                  variants={itemVariants}
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.02,
                          borderColor: "var(--primary)",
                          boxShadow: "0 10px 30px rgba(139, 69, 19, 0.2)",
                        }
                      : {}
                  }
                >
                  <h3
                    className="text-2xl font-semibold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    What We Offer
                  </h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        style={{ color: "var(--text-secondary)" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        whileHover={!isMobile ? { x: 5 } : {}}
                      >
                        <CheckCircle
                          className="w-5 h-5 shrink-0 mt-0.5"
                          style={{ color: "var(--primary)" }}
                        />
                        <span>{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="p-8 lg:p-12 rounded-2xl group"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--primary)",
                }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(139, 69, 19, 0.3)",
                      }
                    : {}
                }
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Users
                      className="w-16 h-16 mx-auto mb-6"
                      style={{ color: "var(--primary)" }}
                    />
                  </motion.div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
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
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
