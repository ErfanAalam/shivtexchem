"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import { X } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Leader {
  name: string;
  position: string;
  image: string;
  description: string;
}

export default function OurLeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
        setTimeout(() => setSelectedLeader(null), 300);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedLeader(null), 300);
  };

  const leaders: Leader[] = [
    {
      name: "Vikas Pavankumar",
      position: "Managing Director & Chairman",
      image: "/vikasji.webp",
      description:
        "Vikas Pavankumar is the Managing Director and Chairman of our Company. He has been associated with our Company since April 14, 2021, and was appointed to his current designation pursuant to Board meeting dated July 08, 2024. He obtained his bachelor's degree in science in Industrial Engineering from Purdue University in the year 2009 and completed his graduation programme in Management from the Indian School of Business in the year 2014. Further, he was employed as a Senior Associate with the India Office of the Boston Consulting Group in the year 2014. He currently oversees the sales & marketing operations, business development and human resources in the Company. He has been instrumental in developing the business in the international as well as domestic markets.",
    },
    {
      name: "Hemanshu S Chokhani",
      position: "Chief Financial Officer & Whole Time Director",
      image: "/himanshuji.webp",
      description:
        "Hemanshu Shyamsundar Chokhani is the Whole Time Director and Chief Financial Officer of our Company. He has been associated with our Company since 19 years and was appointed to his current designation pursuant to Board meeting dated July 08, 2024. He obtained a certification in the Professional Education Examination-I held by the Institute of Chartered Accountants of India in 2005 with an All-India rank of 14 and has been awarded Ganeshmai Patni Memorial Prize for the best paper on Statistics jointly with 58 candidates by the Institute of Chartered Accountants of India in 2005. He completed his final examination in 2009 with an All-India rank of 36. Further, he obtained his Post-Graduate Diploma in Management from the Indian Institute of Management, Ahmedabad in the year 2011. Previously he has worked as a Senior Consultant in Booz & Co. India Private Limited. His professional caliber and acumen ship has been helping Company in a competitive procurement of products and availing trade finance apart from his involvement in accounts, audit, taxation, and other statutory compliances in the Company.",
    },
    {
      name: "Shyamsundar Chokhani",
      position: "Whole Time Director",
      image: "/shyamji.webp",
      description:
        "Shyamsundar Chokhani is the Whole-Time Director of our Company. He has been associated with our Company since 19 years and was appointed to his current designation pursuant to Board meeting dated July 08, 2024. He obtained his master's degree of technology in Mechanical Engineering from the Indian Institute of Technology, Bombay in the year 1973 and has completed a Middle Management Course of the 3-Tier Programme for Management Development held by the Indian Institute of Management in the year 1973. He has been guiding force behind the success of the Company and currently looks after logistics including inbound logistics, vessel chartering, local logistics and domestic banking in the Company.",
    },
    {
      name: "Neha Chokhani",
      position: "Whole Time Director",
      image: "/nehaji.webp",
      description:
        "Neha Chokhani is the Whole Time Director of our Company. She has been associated with our Company since April 14, 2021, and was appointed to her current designation pursuant to Board meeting dated July 08, 2024. She obtained her bachelor's degree in commerce from the University of Mumbai in the year 2012 and was placed in the first class. She obtained a certification in Integrated Professional Competence Examination held by the Institute of Chartered Accountants of India in the year 2012. She overseas inventory & warehousing, clearance management, custom clearance and custom compliance related matters in the Company.",
    },
    {
      name: "Girdhari Lal Kundalwal",
      position: "Independent Director",
      image: "/girdhariji.webp",
      description:
        "Girdhari Lal Kundalwal is an Independent Director of our Company and was appointed to this designation pursuant to Board meeting dated July 08, 2024. He obtained his master's degree in commerce (Accountancy and Business Statistics) in the year 1985, and a certification in the Associate Examination of the Indian Institute of Bankers in the year 1989 and his master's degree in business administration (Banking & Finance) in the year 2002 from Indira Gandhi National Open University. He has worked with the Union Bank of India for 38 years, from 1983 up until 2021, and retired as a Deputy General Manager.",
    },
    {
      name: "Sushil Kumar Relan",
      position: "Independent Director",
      image: "/sunilji.webp",
      description:
        "Sushil Kumar Relan is an Independent Director of our Company and was appointed to this designation pursuant to Board meeting dated July 08, 2024. He obtained his Master's in Arts (Economics) from Meerut University in 1986. He has worked in the State Bank of India from the year 1982, up to 2022 and retired from the position of Deputy General Manager and worked in Nido Home Finance Limited from 2022 to 2023 as a SVP – Internal Audit in the Internal Audit team in Mumbai.",
    },
    {
      name: "Rajen Gada",
      position: "Independent Director",
      image: "/rajen_gadaji.webp",
      description:
        "Rajen Gada is an Independent Director of our Company and was appointed to this designation pursuant to Board meeting dated July 2024. He obtained his bachelor's degree in commerce from the University of Bombay in 1994, his Chartered Accountancy Degree from the Institute of Chartered Accountants of India in the year 1998, his Graduation Degree as a Cost Accountant from the Institute of Cost Works Accountants of India in the year 1999, and his Limited Insolvency Examination Certificate from the Insolvency and Bankruptcy Board of India in 2017. He has previously worked as the Chief Financial Officer in BCD Travel India Pvt. Ltd.",
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
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${50 + i * 35}px`,
                  height: `${50 + i * 35}px`,
                  left: `${6 + i * 13}%`,
                  top: `${14 + i * 10}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, ${0.14 - i * 0.015}), transparent)`,
                  filter: `blur(${22 + i * 5}px)`,
                }}
                animate={{
                  y: [0, -38 - i * 7, 0],
                  x: [0, 22 + i * 4, 0],
                  scale: [1, 1.25, 1],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 9 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Profile silhouettes floating */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`silhouette-${i}`}
              className="absolute opacity-8"
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            >
              <div
                className="w-16 h-16 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.2), transparent)`,
                }}
              />
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
                Our Leadership
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
                Meet the visionary leaders driving our company&apos;s success
                and growth
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
                key={`bg-${i}`}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: `${110 + i * 55}px`,
                  height: `${110 + i * 55}px`,
                  left: `${17 + i * 18}%`,
                  top: `${14 + i * 20}%`,
                  background: `radial-gradient(circle, rgba(139, 69, 19, 0.2), transparent)`,
                }}
                animate={{
                  y: [0, -55, 0],
                  x: [0, 42, 0],
                  scale: [1, 1.35, 1],
                }}
                transition={{
                  duration: 16 + i * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Leaders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  className="leader-card group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-lg"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-primary)",
                    }}
                    whileHover={!isMobile ? {
                      y: -12,
                      borderColor: "var(--primary)",
                      boxShadow: "0 20px 40px rgba(139, 69, 19, 0.3)",
                    } : {}}
                    onClick={() => openModal(leader)}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-96 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                        />
                      </motion.div>

                      {/* Gradient overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.8 }}
                      />

                      {/* Hover indicator */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        <motion.div
                          className="px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg"
                          style={{
                            backgroundColor: "var(--primary)",
                          }}
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1 }}
                        >
                          Click to view details
                        </motion.div>
                      </motion.div>

                      {/* Animated corner accents */}
                      {[
                        { top: 0, left: 0, rotate: 0 },
                        { top: 0, right: 0, rotate: 90 },
                        { bottom: 0, left: 0, rotate: -90 },
                        { bottom: 0, right: 0, rotate: 180 },
                      ].map((pos, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-6 h-6 opacity-0 group-hover:opacity-100"
                          style={{
                            ...pos,
                            borderTop: "2px solid var(--primary)",
                            borderLeft: "2px solid var(--primary)",
                            transform: `rotate(${pos.rotate}deg)`,
                          }}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        />
                      ))}
                    </div>

                    {/* Name and Position */}
                    <div className="p-6 text-center">
                      <motion.h3
                        className="text-xl lg:text-2xl font-bold mb-2"
                        style={{ color: "var(--text-primary)" }}
                        whileHover={{ color: "var(--primary)" }}
                      >
                        {leader.name}
                      </motion.h3>
                      <motion.div
                        className="w-16 h-0.5 mx-auto mb-3 rounded-full"
                        style={{ backgroundColor: "var(--primary)" }}
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      />
                      <p
                        className="text-sm lg:text-base font-medium"
                        style={{ color: "var(--primary)" }}
                      >
                        {leader.position}
                      </p>
                    </div>

                    {/* Floating particles on hover */}
                    <AnimatePresence>
                      {!isMobile && (
                        <>
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 rounded-full pointer-events-none"
                              style={{
                                background: "var(--primary)",
                                boxShadow: "0 0 10px var(--primary)",
                                left: `${30 + i * 20}%`,
                                bottom: "30%",
                              }}
                              initial={{ opacity: 0, y: 0 }}
                              whileHover={{
                                opacity: [0, 1, 0],
                                y: -50,
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                              }}
                            />
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedLeader && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(4px)",
              }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-3xl w-full rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "2px solid var(--primary)",
                  maxHeight: "90vh",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-primary)",
                  }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Modal Content */}
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <motion.div
                    className="relative w-full lg:w-1/3 h-64 lg:h-auto shrink-0"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className="flex-1 p-6 lg:p-8 overflow-y-auto"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.h2
                      className="text-2xl lg:text-3xl font-bold mb-3"
                      style={{ color: "var(--text-primary)" }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {selectedLeader.name}
                    </motion.h2>
                    <motion.div
                      className="w-20 h-1 mb-4 rounded-full"
                      style={{ backgroundColor: "var(--primary)" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    />
                    <motion.p
                      className="text-base lg:text-lg font-semibold mb-6"
                      style={{ color: "var(--primary)" }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {selectedLeader.position}
                    </motion.p>
                    <motion.div
                      className="prose prose-sm lg:prose-base max-w-none"
                      style={{ color: "var(--text-secondary)" }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <p className="text-sm lg:text-base leading-relaxed">
                        {selectedLeader.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
