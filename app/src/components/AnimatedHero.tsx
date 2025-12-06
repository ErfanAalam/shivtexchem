"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export default function AnimatedHero({ icon: Icon, title, subtitle }: AnimatedHeroProps) {
  return (
    <motion.section
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
              background: `radial-gradient(circle, rgba(139, 69, 19, ${0.15 - i * 0.015}), transparent)`,
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

      {/* Floating shapes */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border-2 border-var(--primary) opacity-15"
          style={{
            width: `${50 + i * 20}px`,
            height: `${50 + i * 20}px`,
            left: `${18 + i * 24}%`,
            top: `${28 + i * 16}%`,
            borderRadius: i % 2 === 0 ? "50%" : "0",
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
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
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="p-4 sm:p-5 rounded-2xl relative"
              style={{
                backgroundColor: "var(--tertiary)",
                color: "var(--primary)",
                boxShadow: "0 4px 20px rgba(139, 69, 19, 0.2)",
              }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 8px 30px rgba(139, 69, 19, 0.4)",
              }}
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
                <Icon className="w-12 h-12 sm:w-14 sm:h-14" />
              </motion.div>
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-var(--primary)"
                animate={{
                  scale: [1, 1.3],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
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
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

