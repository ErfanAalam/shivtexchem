"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import { Target, Eye, Globe, Users, TrendingUp, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function MissionVisionPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.05,
    margin: "-100px"
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
        className="min-h-screen transition-colors duration-300 pt-20"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        {/* Hero Section */}
        <motion.section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${40 + i * 25}px`,
                  height: `${40 + i * 25}px`,
                  left: `${8 + i * 10}%`,
                  top: `${12 + i * 8}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, ${0.15 - i * 0.012}), transparent)`,
                  filter: `blur(${18 + i * 4}px)`,
                }}
                animate={{
                  y: [0, -35 - i * 5, 0],
                  x: [0, 20 + i * 3, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 9 + i * 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Animated target/eye symbols */}
          <motion.div
            className="absolute left-1/4 top-1/4 opacity-15"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Target className="w-24 h-24" style={{ color: "var(--primary)" }} />
          </motion.div>
          <motion.div
            className="absolute right-1/4 top-1/3 opacity-15"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Eye className="w-28 h-28" style={{ color: "var(--primary)" }} />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Mission & Vision
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
                Guiding principles that drive our commitment to excellence and
                innovation
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
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`bg-${i}`}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: `${100 + i * 60}px`,
                  height: `${100 + i * 60}px`,
                  left: `${18 + i * 15}%`,
                  top: `${12 + i * 18}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.2), transparent)`,
                }}
                animate={{
                  y: [0, -60, 0],
                  x: [0, 45, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 14 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.9,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Mission Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-4 rounded-xl mr-4"
                      style={{
                        backgroundColor: "var(--tertiary)",
                        color: "var(--primary)",
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                        <Target className="w-8 h-8" />
                      </motion.div>
                    </motion.div>
                    <h2
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Mission
                    </h2>
                  </div>
                  <motion.div
                    className="space-y-4 text-base sm:text-lg leading-relaxed p-6 rounded-xl"
                    style={{
                      color: "var(--text-secondary)",
                      background: "rgba(139, 69, 19, 0.03)",
                      border: "1px solid rgba(139, 69, 19, 0.1)",
                    }}
                    whileHover={!isMobile ? {
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(139, 69, 19, 0.15)",
                    } : {}}
                  >
                    <p>
                      Our mission is to ensure seamless and secure operations
                      for our clients through management of tracking of global
                      petroleum and hydrocarbon markets, complex storage
                      solutions and maintaining an extensive network of
                      suppliers across key markets.
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group"
                  style={{ backgroundColor: "var(--tertiary)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={!isMobile ? { scale: 1.05, rotateY: 5 } : {}}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Target
                        className="w-32 h-32"
                        style={{ color: "var(--primary)" }}
                      />
                    </motion.div>
                  </div>
                  {/* Orbiting elements */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: "var(--primary)",
                        boxShadow: "0 0 8px var(--primary)",
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [0, Math.cos((i * 45 * Math.PI) / 180) * 120],
                        y: [0, Math.sin((i * 45 * Math.PI) / 180) * 120],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Mission Points */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {missionPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      className="p-6 rounded-xl"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={!isMobile ? {
                        scale: 1.05,
                        y: -8,
                        borderColor: "var(--primary)",
                        boxShadow: "0 10px 30px rgba(139, 69, 19, 0.2)",
                      } : {}}
                    >
                      <motion.div
                        className="p-3 rounded-lg w-fit mb-4"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="my-16"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                className="h-px w-full"
                style={{ backgroundColor: "var(--border-primary)" }}
              ></div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group order-2 lg:order-1"
                  style={{ backgroundColor: "var(--tertiary)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={!isMobile ? { scale: 1.05, rotateY: -5 } : {}}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Eye
                        className="w-32 h-32"
                        style={{ color: "var(--primary)" }}
                      />
                    </motion.div>
                  </div>
                  {/* Pulsing rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-2xl border-2 border-var(--primary)"
                      animate={{
                        scale: [1, 1.5 + i * 0.2],
                        opacity: [0.5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
                <motion.div
                  className="order-1 lg:order-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-4 rounded-xl mr-4"
                      style={{
                        backgroundColor: "var(--tertiary)",
                        color: "var(--primary)",
                      }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <Eye className="w-8 h-8" />
                    </motion.div>
                    <h2
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Vision
                    </h2>
                  </div>
                  <motion.div
                    className="space-y-4 text-base sm:text-lg leading-relaxed p-6 rounded-xl"
                    style={{
                      color: "var(--text-secondary)",
                      background: "rgba(139, 69, 19, 0.03)",
                      border: "1px solid rgba(139, 69, 19, 0.1)",
                    }}
                    whileHover={!isMobile ? {
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(139, 69, 19, 0.15)",
                    } : {}}
                  >
                    <p>
                      Our vision is to be a leading chemical distributor locally
                      and globally by delivering exceptional value and
                      reliability to our customers within the acceptable time,
                      and to be a company where suppliers can rely, employees are
                      proud of and investors seek long term returns.
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Vision Points */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visionPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      className="p-6 rounded-xl"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-primary)",
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      whileHover={!isMobile ? {
                        scale: 1.05,
                        y: -8,
                        borderColor: "var(--primary)",
                        boxShadow: "0 10px 30px rgba(139, 69, 19, 0.2)",
                      } : {}}
                    >
                      <motion.div
                        className="p-3 rounded-lg w-fit mb-4"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                        whileHover={{ rotate: -360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="p-8 lg:p-12 rounded-2xl"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--primary)",
                }}
                whileHover={!isMobile ? {
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 69, 19, 0.3)",
                } : {}}
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(139, 69, 19, 0)",
                        "0 0 20px rgba(139, 69, 19, 0.4)",
                        "0 0 0px rgba(139, 69, 19, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    Our Commitment
                  </motion.h2>
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
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
