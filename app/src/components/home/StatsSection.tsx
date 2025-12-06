"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Package, Users, Heart } from "lucide-react";

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
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / stat.duration, 1);

      setCount(Math.floor(progress * stat.value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(stat.value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, stat.value, stat.duration]);

  return (
    <div
      className={`text-center p-8 rounded-2xl transition-all duration-700 hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--border-primary)",
        transitionDelay: `${index * 150}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--primary)";
        e.currentTarget.style.transform = "scale(1.05) translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 20px 40px var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-primary)";
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="flex justify-center mb-4">
        <div
          className="p-4 rounded-full"
          style={{
            backgroundColor: "var(--tertiary)",
            color: "var(--primary)",
          }}
        >
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <div
        className="text-5xl sm:text-6xl font-bold mb-2"
        style={{ color: "var(--primary)" }}
      >
        {count}
        {stat.suffix}
      </div>
      <p
        className="text-base sm:text-lg font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to prevent flash
    const timer = setTimeout(() => {
      const currentRef = sectionRef.current;
      if (!currentRef) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(currentRef);

      return () => {
        observer.unobserve(currentRef);
      };
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Shiv Texchem In Numbers
          </h2>
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            At Shiv Texchem, we stand committed to improving the quality of life
            through our wide range of products and services. Pursuing our
            passion, we have adopted &apos;continuous improvement&apos; as a
            motto that shapes our plans and actions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
