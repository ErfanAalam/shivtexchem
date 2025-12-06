"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  Users,
  Shield,
  Award,
  Heart,
  UserCheck,
  Briefcase,
} from "lucide-react";

interface CommitteeMember {
  id: number;
  name: string;
  boardDesignation: string;
  committeeDesignation: string;
}

interface Committee {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  members: CommitteeMember[];
}

export default function CommitteesPage() {
  const [isVisible] = useState(true);
  const [hoveredCommittee, setHoveredCommittee] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            requestAnimationFrame(() => {
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
              element.style.transition = `opacity 0.8s ease-out ${
                index * 0.1
              }s, transform 0.8s ease-out ${index * 0.1}s`;
            });
            observerRef.current?.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.style.opacity !== "1" && observerRef.current) {
          htmlEl.style.opacity = "0";
          htmlEl.style.transform = "translateY(30px)";
          htmlEl.style.willChange = "opacity, transform";
          observerRef.current.observe(htmlEl);
        }
      });
    });

    return () => {
      if (observerRef.current) {
        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observerRef.current?.unobserve(el));
        observerRef.current.disconnect();
      }
      initializedRef.current = false;
    };
  }, []);

  const committees: Committee[] = [
    {
      id: 1,
      name: "Audit Committee",
      icon: Shield,
      color: "#3B82F6",
      members: [
        {
          id: 1,
          name: "Sushil Kumar Relan",
          boardDesignation: "Independent Director",
          committeeDesignation: "Chairperson",
        },
        {
          id: 2,
          name: "Girdhari Lal Kundalwal",
          boardDesignation: "Independent Director",
          committeeDesignation: "Member",
        },
        {
          id: 3,
          name: "Neha Chokhani",
          boardDesignation: "Whole time Director",
          committeeDesignation: "Member",
        },
      ],
    },
    {
      id: 2,
      name: "Nomination & Remuneration Committee",
      icon: Award,
      color: "#10B981",
      members: [
        {
          id: 1,
          name: "Sushil Kumar Relan",
          boardDesignation: "Independent Director",
          committeeDesignation: "Chairperson",
        },
        {
          id: 2,
          name: "Girdhari Lal Kundalwal",
          boardDesignation: "Independent Director",
          committeeDesignation: "Member",
        },
        {
          id: 3,
          name: "Rajen Gada",
          boardDesignation: "Independent Director",
          committeeDesignation: "Member",
        },
      ],
    },
    {
      id: 3,
      name: "Stakeholders Relationship Committee",
      icon: Users,
      color: "#F59E0B",
      members: [
        {
          id: 1,
          name: "Sushil Kumar Relan",
          boardDesignation: "Independent, Non-executive Director",
          committeeDesignation: "Chairperson",
        },
        {
          id: 2,
          name: "Vikas Pavankumar",
          boardDesignation: "Managing Director",
          committeeDesignation: "Member",
        },
        {
          id: 3,
          name: "Neha Chokhani",
          boardDesignation: "Whole-time Director",
          committeeDesignation: "Member",
        },
      ],
    },
    {
      id: 4,
      name: "Corporate Social Responsibility (CSR) Committee",
      icon: Heart,
      color: "#EC4899",
      members: [
        {
          id: 1,
          name: "Girdhari Lal Kundalwal",
          boardDesignation: "Independent Director",
          committeeDesignation: "Chairperson",
        },
        {
          id: 2,
          name: "Vikas Pavankumar",
          boardDesignation: "Managing Director",
          committeeDesignation: "Member",
        },
        {
          id: 3,
          name: "Shyamsunder Chokhani",
          boardDesignation: "Whole-time Director",
          committeeDesignation: "Member",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
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
              className={`text-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex justify-center mb-6">
                <div
                  className="p-4 rounded-full animate-pulse"
                  style={{
                    backgroundColor: "var(--tertiary)",
                    color: "var(--primary)",
                  }}
                >
                  <Users className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Board Committees
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Our board committees ensure effective governance, oversight, and
                strategic decision-making
              </p>
            </div>
          </div>
        </section>

        {/* Committees Section */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {committees.map((committee, index) => {
                const Icon = committee.icon;
                const isHovered = hoveredCommittee === committee.id;

                return (
                  <div
                    key={committee.id}
                    className="scroll-animate"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className="relative group rounded-3xl overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "2px solid var(--border-primary)",
                        boxShadow: "0 8px 24px var(--shadow-sm)",
                        transform: "translateY(0) scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = committee.color;
                        card.style.transform = "translateY(-12px) scale(1.02)";
                        card.style.boxShadow = `0 30px 60px ${committee.color}30`;
                        setHoveredCommittee(committee.id);

                        // Animate icon
                        const iconElement = card.querySelector(
                          ".committee-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform =
                            "scale(1.2) rotate(5deg)";
                          iconElement.style.color = committee.color;
                        }

                        // Animate gradient
                        const gradientElement = card.querySelector(
                          ".committee-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0.15";
                        }

                        // Animate shimmer
                        const shimmerElement = card.querySelector(
                          ".committee-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation =
                            "shimmer 2s infinite";
                        }
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget;
                        card.style.borderColor = "var(--border-primary)";
                        card.style.transform = "translateY(0) scale(1)";
                        card.style.boxShadow = "0 8px 24px var(--shadow-sm)";
                        setHoveredCommittee(null);

                        // Reset icon
                        const iconElement = card.querySelector(
                          ".committee-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform = "scale(1) rotate(0deg)";
                          iconElement.style.color = "var(--primary)";
                        }

                        // Reset gradient
                        const gradientElement = card.querySelector(
                          ".committee-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0";
                        }

                        // Reset shimmer
                        const shimmerElement = card.querySelector(
                          ".committee-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "none";
                        }
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div
                        className="committee-shimmer absolute inset-0 pointer-events-none z-20"
                        style={{
                          background: `linear-gradient(110deg, transparent 30%, ${committee.color}20 50%, transparent 70%)`,
                          transform: "translateX(-100%)",
                        }}
                      ></div>

                      {/* Background Gradient */}
                      <div
                        className="committee-gradient absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at top right, ${committee.color}20 0%, transparent 60%)`,
                          opacity: 0,
                        }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 p-6 lg:p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start space-x-4 flex-1">
                            <div
                              className="p-3 rounded-xl transition-all duration-500"
                              style={{
                                backgroundColor: "var(--tertiary)",
                                color: "var(--primary)",
                              }}
                            >
                              <Icon className="committee-icon w-6 h-6 transition-all duration-500" />
                            </div>
                            <div className="flex-1">
                              <h3
                                className="text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {committee.name}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Members List */}
                        <div className="space-y-4">
                          {committee.members.map((member, memberIndex) => (
                            <div
                              key={member.id}
                              className="p-4 rounded-xl transition-all duration-500"
                              style={{
                                backgroundColor: "var(--bg-primary)",
                                border: "1px solid var(--border-primary)",
                                transform: isHovered
                                  ? "translateX(8px)"
                                  : "translateX(0)",
                                transitionDelay: `${memberIndex * 50}ms`,
                              }}
                            >
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                  <UserCheck
                                    className="w-5 h-5 shrink-0"
                                    style={{ color: committee.color }}
                                  />
                                  <h4
                                    className="font-semibold text-base"
                                    style={{ color: "var(--text-primary)" }}
                                  >
                                    {member.name}
                                  </h4>
                                </div>
                                {member.committeeDesignation ===
                                  "Chairperson" && (
                                  <span
                                    className="px-3 py-1 rounded-full text-xs font-semibold shrink-0"
                                    style={{
                                      backgroundColor: `${committee.color}20`,
                                      color: committee.color,
                                    }}
                                  >
                                    Chairperson
                                  </span>
                                )}
                              </div>
                              <div className="space-y-1 ml-7">
                                <p
                                  className="text-sm"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  <span className="font-medium">Board: </span>
                                  {member.boardDesignation}
                                </p>
                                <p
                                  className="text-sm"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  <span className="font-medium">
                                    Committee:{" "}
                                  </span>
                                  {member.committeeDesignation}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Animated Border Glow */}
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700"
                        style={{
                          boxShadow: `inset 0 0 0 2px ${committee.color}`,
                          opacity: isHovered ? "0.3" : "0",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
