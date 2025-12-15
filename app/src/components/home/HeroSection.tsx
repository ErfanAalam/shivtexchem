"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

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

// Enhanced Particle component - reacts to mouse hover
const Particle = ({
  mousePos = { x: 0, y: 0 },
}: {
  mousePos?: { x: number; y: number };
}) => {
  const [particleProps] = useState(() => ({
    width: Math.random() * 6 + 3,
    height: Math.random() * 6 + 3,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.2,
    duration: 5 + Math.random() * 2,
    blur: Math.random() * 8 + 3,
    baseX: Math.random() * 100,
    baseY: Math.random() * 100,
  }));

  // Calculate distance from mouse to particle
  const distance = Math.sqrt(
    Math.pow(mousePos.x - particleProps.baseX, 2) +
      Math.pow(mousePos.y - particleProps.baseY, 2)
  );
  const influence = Math.max(0, 1 - distance / 30); // Influence radius

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        backgroundColor: "var(--primary)",
        width: particleProps.width,
        height: particleProps.height,
        left: `${particleProps.baseX}%`,
        top: `${particleProps.baseY}%`,
        filter: `blur(${particleProps.blur}px)`,
        boxShadow: `0 0 ${particleProps.width * 2}px var(--primary)`,
      }}
      animate={{
        x: influence * (mousePos.x - particleProps.baseX) * 1.5,
        y: influence * (mousePos.y - particleProps.baseY) * 1.5,
        scale: 1 + influence * 2,
        opacity: particleProps.opacity + influence * 0.5,
      }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 15,
        mass: 0.3,
      }}
    />
  );
};

// Stunning animated mesh gradient with floating 3D spheres and particle network
const InteractiveMeshBackground = ({
  mousePos,
  scrollY,
}: {
  mousePos: { x: number; y: number };
  scrollY: number;
}) => {
  // Node positions for particle network
  const nodes = [
    { x: 20, y: 20 },
    { x: 80, y: 20 },
    { x: 50, y: 40 },
    { x: 15, y: 60 },
    { x: 85, y: 60 },
    { x: 40, y: 80 },
    { x: 70, y: 75 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at ${40 + mousePos.x * 0.15}% ${
            30 + mousePos.y * 0.15
          }%, rgba(139, 69, 19, 0.2) 0%, transparent 50%),
            radial-gradient(at ${60 + mousePos.x * 0.1}% ${
            70 + mousePos.y * 0.1
          }%, rgba(160, 82, 45, 0.15) 0%, transparent 50%),
            radial-gradient(at ${30 - mousePos.x * 0.1}% ${
            60 - mousePos.y * 0.1
          }%, rgba(139, 69, 19, 0.18) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particle Network with Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Draw connecting lines between nearby nodes */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) +
                Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 40) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="rgba(139, 69, 19, 0.3)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Floating 3D Spheres */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            perspective: "1000px",
          }}
          animate={{
            x: [
              0,
              mousePos.x * (0.5 + i * 0.1) + Math.cos(scrollY * 0.01 + i) * 20,
              0,
            ],
            y: [
              0,
              mousePos.y * (0.5 + i * 0.1) + Math.sin(scrollY * 0.01 + i) * 20,
              0,
            ],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full relative"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(160, 82, 45, 0.6), rgba(139, 69, 19, 0.3))`,
              boxShadow: `0 0 40px rgba(139, 69, 19, 0.5), inset 0 0 20px rgba(139, 69, 19, 0.3)`,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotateX: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              rotateY: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              },
            }}
          >
            {/* Inner glow */}
            <motion.div
              className="absolute inset-2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent)",
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute left-1/2 top-1/2"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            marginLeft: `-${100 + i * 50}px`,
            marginTop: `-${100 + i * 50}px`,
            border: `2px solid rgba(139, 69, 19, ${0.2 - i * 0.05})`,
            borderRadius: "50%",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: [0, 360],
            rotateY: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotateX: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            },
          }}
        />
      ))}

      {/* Ambient particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`ambient-${i}`}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full"
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 13) % 100}%`,
            background: "var(--primary)",
            boxShadow: "0 0 10px var(--primary)",
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wave effect at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
        style={{
          background:
            "linear-gradient(to top, rgba(139, 69, 19, 0.3), transparent)",
        }}
        animate={{
          scaleY: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mouse tracking for interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 100,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 100,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById("company-description");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate particles - optimized count
  const particleCount = isMobile ? 15 : 40;
  const particles = Array.from({ length: particleCount }, (_, i) => (
    <Particle key={i} mousePos={mousePosition} />
  ));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const gradientVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Stunning Mesh Background with 3D Spheres and Particle Network */}
      <InteractiveMeshBackground mousePos={mousePosition} scrollY={scrollY} />

      {/* Animated Particle Background - Mouse Reactive */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        {particles}
      </div>

      {/* Animated Background Elements - Static (no scroll lag) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "var(--primary)",
            opacity: isMobile ? 0.1 : 0.15,
            boxShadow: isMobile
              ? "0 0 100px var(--primary)"
              : "0 0 200px var(--primary)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, isMobile ? 20 : 50, 0],
            y: [0, isMobile ? 15 : 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 sm:w-80 md:w-[500px] h-64 sm:h-80 md:h-[500px] rounded-full blur-3xl"
          style={{
            backgroundColor: "var(--primary)",
            opacity: isMobile ? 0.08 : 0.12,
            boxShadow: isMobile
              ? "0 0 120px var(--primary)"
              : "0 0 250px var(--primary)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, isMobile ? -30 : -60, 0],
            y: [0, isMobile ? -25 : -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        {!isMobile && (
          <>
            <motion.div
              className="absolute top-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full blur-2xl"
              style={{
                backgroundColor: "var(--primary-light)",
                opacity: 0.15,
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </>
        )}
      </div>

      {/* Main Content with highest z-index */}
      <motion.div
        className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
            variants={titleVariants}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              Welcome to
            </motion.span>
            <motion.span
              className="block mt-2 bg-clip-text text-transparent relative"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, var(--primary), var(--primary-light), var(--primary))",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 20px rgba(139, 69, 19, 0.4))",
              }}
              variants={gradientVariants}
              transition={{ duration: 1.5, ease: "easeOut" }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
            >
              Dabala All Chem LLP
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mt-16 mx-auto leading-relaxed px-4"
          style={{ color: "var(--text-secondary)" }}
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Leading the way in chemical manufacturing and distribution with
          excellence and innovation
        </motion.p>

        <motion.button
          onClick={scrollToContent}
          className="inline-flex items-center gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl font-semibold relative overflow-hidden group touch-manipulation backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), var(--primary-light))",
            color: "var(--button-text)",
            boxShadow:
              "0 10px 40px rgba(139, 69, 19, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
            minHeight: "44px",
          }}
          whileHover={
            !isMobile
              ? {
                  scale: 1.05,
                  y: -3,
                  boxShadow:
                    "0 20px 60px rgba(139, 69, 19, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)",
                }
              : {}
          }
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            type: "spring",
            stiffness: 200,
          }}
        >
          <motion.span
            className="relative z-10"
            initial={{ x: 0 }}
            whileHover={{ x: -5 }}
          >
            Explore More
          </motion.span>
          <motion.div
            className="relative z-10"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-50"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)",
            }}
          />
        </motion.button>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation"
        onClick={scrollToContent}
        style={{ minHeight: "44px", minWidth: "44px" }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={!isMobile ? { scale: 1.2 } : {}}
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            className="w-6 h-6"
            style={{ color: "var(--text-tertiary)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
