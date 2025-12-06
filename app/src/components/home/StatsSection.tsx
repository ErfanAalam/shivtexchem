"use client";

import { useRef, useEffect, useState } from "react";
import { Award, Package, Users, Heart } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

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

interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

const stats: StatItem[] = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Of Experience",
    duration: 2000,
  },
  {
    icon: Package,
    value: 35,
    suffix: "+",
    label: "Products",
    duration: 2000,
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Customers",
    duration: 2000,
  },
  {
    icon: Heart,
    value: 50,
    suffix: "+",
    label: "Passionate Team Member",
    duration: 2000,
  },
];

interface StatCardProps {
  stat: StatItem;
  index: number;
  isVisible: boolean;
}

function StatCard({ stat, index, isVisible }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const Icon = stat.icon;

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  });

  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  if (isVisible) {
    spring.set(stat.value);
  } else {
    spring.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      className="text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden group"
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-primary)",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.8 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={!isMobile ? {
        scale: 1.12,
        y: -15,
        borderColor: "var(--primary)",
        boxShadow: "0 30px 60px rgba(139, 69, 19, 0.4)",
        rotateY: 5,
      } : {
        borderColor: "var(--primary)",
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-var(--primary)/10 via-transparent to-var(--primary)/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Enhanced floating particles effect - fewer on mobile */}
      {[...Array(isMobile ? 2 : 5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: "var(--primary)",
            width: `${isMobile ? 2 + i : 3 + i * 2}px`,
            height: `${isMobile ? 2 + i : 3 + i * 2}px`,
            opacity: 0.4,
            left: `${15 + i * 20}%`,
            top: `${15 + i * 20}%`,
            filter: "blur(2px)",
            boxShadow: `0 0 ${isMobile ? 3 + i * 2 : 5 + i * 3}px var(--primary)`,
          }}
          animate={{
            y: [0, isMobile ? -15 : -30, 0],
            x: [0, Math.sin(i) * (isMobile ? 10 : 20), 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, isMobile ? 1.5 : 2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="flex justify-center mb-3 sm:mb-4 relative z-10"
        whileHover={!isMobile ? { scale: 1.3, rotate: 360 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          className="p-3 sm:p-4 md:p-5 rounded-full relative"
          style={{
            backgroundColor: "var(--tertiary)",
            color: "var(--primary)",
            boxShadow: "0 4px 15px rgba(139, 69, 19, 0.2)",
          }}
          whileHover={!isMobile ? {
            backgroundColor: "var(--primary)",
            color: "var(--button-text)",
            boxShadow: "0 0 30px var(--primary)",
            scale: 1.1,
          } : {}}
          transition={{ duration: 0.3 }}
          animate={!isMobile ? {
            boxShadow: [
              "0 4px 15px rgba(139, 69, 19, 0.2)",
              "0 0 25px var(--primary)",
              "0 4px 15px rgba(139, 69, 19, 0.2)",
            ],
          } : {}}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: "var(--primary)" }}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 relative z-10"
        style={{
          color: "var(--primary)",
          textShadow: "0 4px 15px rgba(139, 69, 19, 0.3)",
        }}
        whileHover={!isMobile ? { scale: 1.15 } : {}}
        transition={{ duration: 0.3 }}
        animate={!isMobile ? {
          textShadow: [
            "0 4px 15px rgba(139, 69, 19, 0.3)",
            "0 0 30px var(--primary)",
            "0 4px 15px rgba(139, 69, 19, 0.3)",
          ],
        } : {}}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {display}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stat.suffix}
        </motion.span>
      </motion.div>

      <motion.p
        className="text-sm sm:text-base md:text-lg font-medium relative z-10"
        style={{ color: "var(--text-secondary)" }}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={!isMobile ? { color: "var(--primary)" } : {}}
      >
        {stat.label}
      </motion.p>

      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%", skewX: -15 }}
        whileHover={{
          x: "200%",
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      />
    </motion.div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: 0.05,
    margin: "-100px"
  });

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

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Floating orbs - hidden on mobile for performance */}
      {!isMobile && [...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{
            backgroundColor: "var(--primary)",
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${i * 30}%`,
            top: `${i * 20}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Shiv Texchem In Numbers
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Shiv Texchem, we stand committed to improving the quality of life
            through our wide range of products and services. Pursuing our
            passion, we have adopted &apos;continuous improvement&apos; as a
            motto that shapes our plans and actions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
