"use client";

import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  particleCount?: number;
  shapeCount?: number;
  opacity?: number;
}

export default function AnimatedBackground({
  particleCount = 8,
  shapeCount = 4,
  opacity = 0.1,
}: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {/* Floating orbs */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            left: `${8 + i * 11}%`,
            top: `${12 + i * 10}%`,
            background: `radial-gradient(circle, rgba(139, 69, 19, ${0.2 - i * 0.02}), transparent)`,
          }}
          animate={{
            y: [0, -40 - i * 10, 0],
            x: [0, 25 + i * 5, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Geometric shapes */}
      {[...Array(shapeCount)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border-2 opacity-20"
          style={{
            width: `${40 + i * 15}px`,
            height: `${40 + i * 15}px`,
            borderColor: "var(--primary)",
            left: `${20 + i * 22}%`,
            top: `${25 + i * 18}%`,
            borderRadius: i % 2 === 0 ? "50%" : "0",
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Animated wave lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute left-0 right-0"
          style={{
            height: "2px",
            top: `${30 + i * 25}%`,
            background: `linear-gradient(90deg, transparent, rgba(139, 69, 19, ${0.3 - i * 0.08}), transparent)`,
          }}
          animate={{
            scaleX: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}
    </div>
  );
}

