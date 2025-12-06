"use client";

import { useRef, useEffect, useState } from "react";
import { Factory, Package, FlaskConical, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default function CompanyDescription() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.05,
    margin: "-100px",
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
  };

  return (
    <section
      id="company-description"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      {/* Multi-layered Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 50%, rgba(160, 82, 45, 0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 50% 50%, rgba(139, 69, 19, 0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.15) 0%, transparent 40%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${150 + i * 50}px`,
            height: `${150 + i * 50}px`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            background: `radial-gradient(circle, rgba(139, 69, 19, ${
              0.12 - i * 0.02
            }), transparent)`,
          }}
          animate={{
            x: [0, 30 + i * 10, 0],
            y: [0, 20 + i * 5, 0],
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

      {/* Animated Wave Lines */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute left-0 right-0"
          style={{
            height: "1px",
            top: `${25 + i * 20}%`,
            background: `linear-gradient(90deg, transparent, rgba(139, 69, 19, ${
              0.3 - i * 0.05
            }), transparent)`,
          }}
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
        >
          {/* Text Content */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-var(--primary) to-transparent"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: -50, scale: 0.9 }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              <span className="relative">
                About Our Company
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-var(--primary) to-var(--primary-light)"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h2>
            <motion.div
              className="space-y-6 text-base sm:text-lg leading-relaxed relative"
              style={{ color: "var(--text-secondary)" }}
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative p-6 rounded-xl backdrop-blur-sm"
                style={{
                  background: "rgba(139, 69, 19, 0.03)",
                  border: "1px solid rgba(139, 69, 19, 0.1)",
                }}
                initial={{ opacity: 0, x: -30, rotateY: -10 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, rotateY: 0 }
                    : { opacity: 0, x: -30, rotateY: -10 }
                }
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(139, 69, 19, 0.15)",
                        borderColor: "rgba(139, 69, 19, 0.3)",
                      }
                    : {}
                }
              >
                <motion.div
                  className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-var(--primary) to-var(--primary-light) rounded-l-xl"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <p className="pl-0 md:pl-4">
                  We are primarily engaged in the business of importing and
                  distribution of hydrocarbon-based chemicals of the product
                  family viz. Acetyls, Alcohol, Aromatics, Nitriles, Monomers,
                  Glycols Phenolic, Ketones, Nithles and Isocynates, which are
                  critical raw materials and inputs and have application across
                  wide spectrum of industries like paints and coatings, printing
                  inks, agro-chemical products, specialty polymers,
                  pharmaceuticals products and specialty industrial chemicals.
                </p>
              </motion.div>

              <motion.div
                className="relative p-6 rounded-xl backdrop-blur-sm"
                style={{
                  background: "rgba(139, 69, 19, 0.03)",
                  border: "1px solid rgba(139, 69, 19, 0.1)",
                }}
                initial={{ opacity: 0, x: -30, rotateY: -10 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, rotateY: 0 }
                    : { opacity: 0, x: -30, rotateY: -10 }
                }
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(139, 69, 19, 0.15)",
                        borderColor: "rgba(139, 69, 19, 0.3)",
                      }
                    : {}
                }
              >
                <motion.div
                  className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-var(--primary-light) to-var(--primary) rounded-l-xl"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
                <p className="pl-0 md:pl-4">
                  We manage the supply chain of these secondary and tertiary
                  chemicals derived from base chemicals. For example, benzene
                  serves as a fundamental building block for producing essential
                  secondary and tertiary chemicals such as phenol, styrene and
                  aniline. These secondary and tertiary chemicals are
                  indispensable base raw material inputs in various industries
                  including paints, coatings, printing inks, agrochemicals,
                  pharmaceuticals, specialty polymers, and industrial chemicals.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content - Enhanced 3D Design */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            className="order-1 lg:order-2 relative"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative floating elements around image */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`deco-${i}`}
                className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.4), rgba(139, 69, 19, 0.1))`,
                  boxShadow: "0 0 30px rgba(139, 69, 19, 0.4)",
                  left: i % 2 === 0 ? "-8%" : "auto",
                  right: i % 2 === 1 ? "-8%" : "auto",
                  top: `${20 + i * 20}%`,
                  zIndex: -1,
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

            <motion.div
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(139, 69, 19, 0.25)",
                transformStyle: "preserve-3d",
              }}
              whileHover={
                !isMobile
                  ? {
                      rotateY: 5,
                      scale: 1.02,
                      boxShadow: "0 30px 80px rgba(139, 69, 19, 0.4)",
                    }
                  : {}
              }
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/homeBanner1.jpg"
                  alt="Company Description"
                  width={2000}
                  height={2000}
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
              </motion.div>

              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-var(--primary)/20"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Scan line effect */}
              <motion.div
                className="absolute inset-x-0 h-40 bg-gradient-to-b from-white/20 to-transparent"
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Corner accents */}
              {[
                { top: 0, left: 0, rotate: 0 },
                { top: 0, right: 0, rotate: 90 },
                { bottom: 0, left: 0, rotate: -90 },
                { bottom: 0, right: 0, rotate: 180 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 sm:w-12 sm:h-12"
                  style={{
                    ...pos,
                    borderTop: "3px solid var(--primary)",
                    borderLeft: "3px solid var(--primary)",
                    transform: `rotate(${pos.rotate}deg)`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Feature Cards - Modern Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === feature.title;
            return (
              <motion.div
                key={feature.title}
                className="p-6 sm:p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "2px solid var(--border-primary)",
                  transformStyle: "preserve-3d",
                }}
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onMouseEnter={() => setHoveredCard(feature.title)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={
                  !isMobile
                    ? {
                        scale: 1.1,
                        y: -15,
                        borderColor: "var(--primary)",
                        boxShadow: "0 30px 60px rgba(139, 69, 19, 0.4)",
                        rotateY: 8,
                        rotateX: 3,
                      }
                    : {
                        borderColor: "var(--primary)",
                      }
                }
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-var(--primary)/5 to-var(--primary)/10 opacity-0"
                  animate={
                    isHovered
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        }
                  }
                  transition={{ duration: 0.4 }}
                />

                {/* Floating particles inside card */}
                {isHovered &&
                  [...Array(3)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: "var(--primary)",
                        boxShadow: "0 0 10px var(--primary)",
                        left: `${20 + i * 30}%`,
                        top: "50%",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        y: [-30, -60],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                {/* Pulsing ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-var(--primary)"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={
                    isHovered
                      ? {
                          scale: [1, 1.05, 1],
                          opacity: [0, 0.5, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeOut",
                  }}
                />

                <motion.div
                  className="relative z-10 mb-5"
                  animate={
                    isHovered
                      ? {
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          y: -5,
                        }
                      : {
                          scale: 1,
                          rotate: 0,
                          y: 0,
                        }
                  }
                  transition={{
                    duration: 0.5,
                    rotate: { duration: 0.6 },
                  }}
                >
                  <motion.div
                    className="p-4 sm:p-5 rounded-2xl w-fit relative"
                    style={{
                      backgroundColor: "var(--tertiary)",
                      color: "var(--primary)",
                      boxShadow: "0 4px 15px rgba(139, 69, 19, 0.2)",
                    }}
                    animate={
                      isHovered
                        ? {
                            backgroundColor: "var(--primary)",
                            color: "var(--button-text)",
                            boxShadow: "0 0 30px rgba(139, 69, 19, 0.6)",
                          }
                        : {
                            backgroundColor: "var(--tertiary)",
                            color: "var(--primary)",
                          }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </motion.div>

                    {/* Orbiting ring */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-var(--primary)"
                      animate={
                        isHovered
                          ? {
                              scale: [1, 1.4],
                              opacity: [0.5, 0],
                              rotate: [0, 180],
                            }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-xl sm:text-2xl font-bold mb-3 relative z-10"
                  style={{
                    color: isHovered ? "var(--primary)" : "var(--text-primary)",
                  }}
                  animate={
                    isHovered
                      ? {
                          scale: 1.05,
                          x: 5,
                        }
                      : {
                          scale: 1,
                          x: 0,
                        }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-var(--primary)"
                    initial={{ width: 0 }}
                    animate={isHovered ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.h3>

                <motion.p
                  className="text-sm sm:text-base relative z-10"
                  style={{ color: "var(--text-secondary)" }}
                  animate={
                    isHovered
                      ? {
                          x: 5,
                        }
                      : {
                          x: 0,
                        }
                  }
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {feature.description}
                </motion.p>

                {/* Animated shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={
                    isHovered
                      ? {
                          x: ["-100%", "200%"],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "linear",
                  }}
                />

                {/* Corner glow effect */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl"
                  style={{
                    background: "var(--primary)",
                  }}
                  animate={
                    isHovered
                      ? {
                          opacity: [0, 0.3, 0],
                          scale: [0.5, 1.5, 0.5],
                        }
                      : {
                          opacity: 0,
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
