"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import { Calendar, Building2, FileText, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function CompanyHistoryPage() {
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
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${60 + i * 40}px`,
                  height: `${60 + i * 40}px`,
                  left: `${5 + i * 15}%`,
                  top: `${10 + i * 12}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, ${0.12 - i * 0.015}), transparent)`,
                  filter: `blur(${25 + i * 5}px)`,
                }}
                animate={{
                  y: [0, -40 - i * 8, 0],
                  x: [0, 25 + i * 3, 0],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.6,
                }}
              />
            ))}
          </div>

          {/* Timeline icons floating */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`icon-${i}`}
              className="absolute opacity-10"
              style={{
                left: `${25 + i * 30}%`,
                top: `${25 + i * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Calendar className="w-20 h-20" style={{ color: "var(--primary)" }} />
            </motion.div>
          ))}

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
                Company History
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
                A journey of growth, transformation, and excellence in the
                chemical industry
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
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`bg-${i}`}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: `${120 + i * 50}px`,
                  height: `${120 + i * 50}px`,
                  left: `${20 + i * 20}%`,
                  top: `${15 + i * 25}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.2), transparent)`,
                }}
                animate={{
                  y: [0, -50, 0],
                  x: [0, 40, 0],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Welcome Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block"
                  style={{ color: "var(--text-primary)" }}
                >
                  Welcome to Shiv Texchem Limited
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-var(--primary)"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </motion.h2>
                <motion.div
                  className="space-y-6 text-base sm:text-lg leading-relaxed p-6 rounded-xl"
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
                </motion.div>
              </div>
            </motion.div>

            {/* Timeline Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-12 text-center relative inline-block mx-auto block"
                style={{ color: "var(--text-primary)" }}
              >
                Our Journey
                <motion.span
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-var(--primary)"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.h2>
              <div className="relative">
                {/* Timeline Line */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block"
                  style={{ backgroundColor: "var(--border-primary)" }}
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />

                <div className="space-y-12 lg:space-y-16">
                  {milestones.map((milestone, index) => {
                    const Icon = milestone.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <motion.div
                        key={milestone.year}
                        className={`relative flex flex-col lg:flex-row items-center ${
                          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                        } gap-8`}
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                      >
                        {/* Timeline Dot */}
                        <div className="relative z-10 shrink-0">
                          <motion.div
                            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                            style={{
                              backgroundColor: "var(--primary)",
                              color: "var(--button-text)",
                            }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
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
                              <Icon className="w-8 h-8" />
                            </motion.div>
                          </motion.div>
                          {/* Pulsing ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-var(--primary)"
                            animate={{
                              scale: [1, 1.5],
                              opacity: [0.5, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        </div>

                        {/* Content Card */}
                        <div
                          className={`flex-1 ${
                            isEven
                              ? "lg:text-right lg:pr-8"
                              : "lg:text-left lg:pl-8"
                          } text-center lg:text-left`}
                        >
                          <motion.div
                            className="p-6 lg:p-8 rounded-2xl"
                            style={{
                              backgroundColor: "var(--bg-secondary)",
                              border: "1px solid var(--border-primary)",
                            }}
                            whileHover={!isMobile ? {
                              scale: 1.05,
                              y: -8,
                              borderColor: "var(--primary)",
                              boxShadow: "0 15px 35px rgba(139, 69, 19, 0.3)",
                            } : {}}
                          >
                            <motion.div
                              className="text-2xl font-bold mb-2"
                              style={{ color: "var(--primary)" }}
                              animate={{
                                textShadow: [
                                  "0 0 0px rgba(139, 69, 19, 0)",
                                  "0 0 20px rgba(139, 69, 19, 0.5)",
                                  "0 0 0px rgba(139, 69, 19, 0)",
                                ],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                              }}
                            >
                              {milestone.year}
                            </motion.div>
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
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Conversion Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Transformation to Public Limited
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-var(--primary)"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </motion.h2>
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
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group"
                  style={{ backgroundColor: "var(--tertiary)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  whileHover={!isMobile ? { scale: 1.05, rotateY: 5 } : {}}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
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
                      <FileText
                        className="w-32 h-32"
                        style={{ color: "var(--primary)" }}
                      />
                    </motion.div>
                  </div>
                  {/* Orbiting particles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: "var(--primary)",
                        boxShadow: "0 0 10px var(--primary)",
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [0, Math.cos((i * 120 * Math.PI) / 180) * 100],
                        y: [0, Math.sin((i * 120 * Math.PI) / 180) * 100],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Key Information */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.8 }}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={!isMobile ? { x: 5 } : {}}
                  >
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
                  </motion.div>
                  <motion.div
                    whileHover={!isMobile ? { x: -5 } : {}}
                  >
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
                  </motion.div>
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
