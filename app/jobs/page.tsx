"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface JobRole {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function JobsPage() {
  const [isVisible] = useState(true);
  const [expandedJobs, setExpandedJobs] = useState<Set<number>>(new Set());
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

  const toggleJob = (jobId: number) => {
    setExpandedJobs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  const jobRoles: JobRole[] = [
    {
      id: 1,
      title: "Chemical Engineer",
      department: "Engineering",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "We are seeking a skilled Chemical Engineer to join our team. You will be responsible for process optimization, quality control, and ensuring compliance with safety standards in chemical manufacturing operations.",
      requirements: [
        "Bachelor's degree in Chemical Engineering",
        "3-5 years of experience in chemical industry",
        "Strong knowledge of process design and optimization",
        "Experience with safety protocols and regulations",
        "Excellent problem-solving skills",
      ],
      icon: GraduationCap,
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Quality Control Analyst",
      department: "Quality Assurance",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Join our Quality Assurance team to ensure the highest standards of product quality. You will conduct laboratory tests, analyze chemical compositions, and maintain quality documentation.",
      requirements: [
        "Bachelor's degree in Chemistry or related field",
        "2-4 years of QC experience in chemical industry",
        "Proficiency in analytical instruments",
        "Attention to detail and accuracy",
        "Knowledge of quality standards (ISO, GMP)",
      ],
      icon: CheckCircle,
      color: "#10B981",
    },
    {
      id: 3,
      title: "Sales Manager - Chemical Products",
      department: "Sales & Marketing",
      location: "Mumbai",
      type: "Full-time",
      experience: "5-8 years",
      description:
        "Lead our sales team in expanding market reach for chemical products. Develop strategic partnerships, manage key accounts, and drive revenue growth in the chemical distribution sector.",
      requirements: [
        "MBA or Bachelor's degree in Business/Chemistry",
        "5-8 years of B2B sales experience",
        "Strong network in chemical industry",
        "Excellent communication and negotiation skills",
        "Proven track record of meeting sales targets",
      ],
      icon: TrendingUp,
      color: "#F59E0B",
    },
    {
      id: 4,
      title: "Supply Chain Coordinator",
      department: "Operations",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-6 years",
      description:
        "Manage end-to-end supply chain operations for chemical products. Coordinate with suppliers, handle logistics, inventory management, and ensure timely delivery to customers.",
      requirements: [
        "Bachelor's degree in Supply Chain/Logistics",
        "3-6 years of supply chain experience",
        "Knowledge of chemical logistics and regulations",
        "Proficiency in ERP systems",
        "Strong organizational and coordination skills",
      ],
      icon: Briefcase,
      color: "#8B5CF6",
    },
    {
      id: 5,
      title: "Research & Development Chemist",
      department: "R&D",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-5 years",
      description:
        "Work on innovative chemical formulations and product development. Conduct research, perform experiments, and contribute to new product development initiatives.",
      requirements: [
        "Master's degree in Chemistry or Chemical Engineering",
        "2-5 years of R&D experience",
        "Strong laboratory skills",
        "Knowledge of chemical synthesis",
        "Creative problem-solving abilities",
      ],
      icon: GraduationCap,
      color: "#EC4899",
    },
    {
      id: 6,
      title: "Safety Officer",
      department: "Health & Safety",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Ensure workplace safety compliance and implement safety protocols. Conduct safety audits, training programs, and maintain safety documentation for chemical operations.",
      requirements: [
        "Bachelor's degree in Safety Engineering or related field",
        "3-5 years of safety management experience",
        "Certification in industrial safety",
        "Knowledge of chemical safety regulations",
        "Strong communication and training skills",
      ],
      icon: CheckCircle,
      color: "#06B6D4",
    },
    {
      id: 7,
      title: "Business Development Executive",
      department: "Business Development",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Identify new business opportunities and build relationships with potential clients. Research market trends, develop proposals, and contribute to business growth strategies.",
      requirements: [
        "Bachelor's degree in Business/Chemistry",
        "2-4 years of business development experience",
        "Strong networking and relationship-building skills",
        "Market research and analysis capabilities",
        "Excellent presentation skills",
      ],
      icon: Users,
      color: "#6366F1",
    },
    {
      id: 8,
      title: "Warehouse Manager",
      department: "Operations",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-7 years",
      description:
        "Oversee warehouse operations for chemical storage and distribution. Manage inventory, ensure proper storage conditions, and coordinate with logistics teams.",
      requirements: [
        "Bachelor's degree in Operations/Logistics",
        "4-7 years of warehouse management experience",
        "Knowledge of chemical storage regulations",
        "Proficiency in inventory management systems",
        "Strong leadership and organizational skills",
      ],
      icon: Briefcase,
      color: "#F97316",
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
                  <Briefcase className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Career Opportunities
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Join our team and be part of India&apos;s leading chemical
                distribution company. Explore exciting career opportunities in
                the chemical industry.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
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
              className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {jobRoles.map((job, index) => {
                const isExpanded = expandedJobs.has(job.id);
                const Icon = job.icon;
                return (
                  <div
                    key={job.id}
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
                        card.style.borderColor = job.color;
                        card.style.transform = "translateY(-12px) scale(1.02)";
                        card.style.boxShadow = `0 30px 60px ${job.color}30`;

                        // Animate icon
                        const iconElement = card.querySelector(
                          ".job-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform =
                            "scale(1.2) rotate(5deg)";
                          iconElement.style.color = job.color;
                        }

                        // Animate gradient
                        const gradientElement = card.querySelector(
                          ".job-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0.15";
                        }

                        // Animate shimmer
                        const shimmerElement = card.querySelector(
                          ".job-shimmer"
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

                        // Reset icon
                        const iconElement = card.querySelector(
                          ".job-icon"
                        ) as HTMLElement;
                        if (iconElement) {
                          iconElement.style.transform = "scale(1) rotate(0deg)";
                          iconElement.style.color = "var(--primary)";
                        }

                        // Reset gradient
                        const gradientElement = card.querySelector(
                          ".job-gradient"
                        ) as HTMLElement;
                        if (gradientElement) {
                          gradientElement.style.opacity = "0";
                        }

                        // Reset shimmer
                        const shimmerElement = card.querySelector(
                          ".job-shimmer"
                        ) as HTMLElement;
                        if (shimmerElement) {
                          shimmerElement.style.animation = "none";
                        }
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div
                        className="job-shimmer absolute inset-0 pointer-events-none z-20"
                        style={{
                          background: `linear-gradient(110deg, transparent 30%, ${job.color}20 50%, transparent 70%)`,
                          transform: "translateX(-100%)",
                        }}
                      ></div>

                      {/* Background Gradient */}
                      <div
                        className="job-gradient absolute inset-0 transition-opacity duration-700"
                        style={{
                          background: `radial-gradient(circle at top right, ${job.color}20 0%, transparent 60%)`,
                          opacity: 0,
                        }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 p-6 lg:p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <div
                              className="p-3 rounded-xl transition-all duration-500"
                              style={{
                                backgroundColor: "var(--tertiary)",
                              }}
                            >
                              <Icon className="job-icon w-6 h-6 transition-all duration-500" />
                            </div>
                            <div className="flex-1">
                              <h3
                                className="text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 text-sm">
                                <span
                                  className="px-3 py-1 rounded-full"
                                  style={{
                                    backgroundColor: `${job.color}20`,
                                    color: job.color,
                                  }}
                                >
                                  {job.department}
                                </span>
                                <div
                                  className="flex items-center space-x-1"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  <MapPin className="w-4 h-4" />
                                  <span>{job.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Job Details */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                          <div
                            className="flex items-center space-x-2"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div
                            className="flex items-center space-x-2"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <Users className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {job.description}
                        </p>

                        {/* Requirements */}
                        <div
                          className={`overflow-hidden transition-all duration-700 ease-in-out ${
                            isExpanded
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="mb-4">
                            <h4
                              className="font-semibold mb-3"
                              style={{ color: "var(--text-primary)" }}
                            >
                              Requirements:
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, reqIndex) => (
                                <li
                                  key={reqIndex}
                                  className="flex items-start space-x-3"
                                  style={{
                                    color: "var(--text-secondary)",
                                    transform: isExpanded
                                      ? "translateX(0)"
                                      : "translateX(-20px)",
                                    opacity: isExpanded ? 1 : 0,
                                    transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${
                                      reqIndex * 60
                                    }ms`,
                                  }}
                                >
                                  <CheckCircle
                                    className="w-5 h-5 shrink-0 mt-0.5"
                                    style={{ color: job.color }}
                                  />
                                  <span className="text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => toggleJob(job.id)}
                          className="w-full mt-4 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden group/btn"
                          style={{
                            backgroundColor: "var(--primary)",
                            color: "var(--button-text)",
                          }}
                          onMouseEnter={(e) => {
                            const btn = e.currentTarget;
                            btn.style.backgroundColor = job.color;
                            btn.style.boxShadow = `0 8px 20px ${job.color}50`;
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget;
                            btn.style.backgroundColor = "var(--primary)";
                            btn.style.boxShadow = "none";
                          }}
                        >
                          <span className="relative z-10">
                            {isExpanded ? "Show Less" : "View Details"}
                          </span>
                          <ArrowRight
                            className={`w-5 h-5 relative z-10 transition-transform duration-500 ${
                              isExpanded ? "rotate-90" : ""
                            }`}
                          />
                          {/* Button Shine Effect */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                            }}
                          ></div>
                        </button>
                      </div>

                      {/* Animated Border Glow */}
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-700"
                        style={{
                          boxShadow: `inset 0 0 0 2px ${job.color}`,
                          opacity: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "0.3";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 lg:py-24"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-animate text-center">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Don&apos;t See Your Role?
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                We&apos;re always looking for talented individuals. Send us your
                resume and we&apos;ll keep you in mind for future opportunities.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--button-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--primary-hover)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px var(--shadow-lg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--primary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
