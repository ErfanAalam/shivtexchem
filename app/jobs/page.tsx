"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import AnimatedBackground from "@/app/src/components/AnimatedBackground";
import AnimatedHero from "@/app/src/components/AnimatedHero";
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
import { motion, useInView, AnimatePresence } from "framer-motion";

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
  const [expandedJobs, setExpandedJobs] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
        className="min-h-screen transition-colors duration-300 pt-20"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
        }}
      >
        <AnimatedHero
          icon={Briefcase}
          title="Career Opportunities"
          subtitle="Join our team and be part of India's leading chemical distribution company. Explore exciting career opportunities in the chemical industry."
        />

        {/* Jobs Section */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          <AnimatedBackground particleCount={6} shapeCount={3} opacity={0.08} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {jobRoles.map((job, index) => {
                const isExpanded = expandedJobs.has(job.id);
                const Icon = job.icon;
                
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="relative group rounded-3xl overflow-hidden h-full"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        border: "2px solid var(--border-primary)",
                      }}
                      whileHover={!isMobile ? {
                        y: -12,
                        scale: 1.02,
                        borderColor: job.color,
                        boxShadow: `0 30px 60px ${job.color}30`,
                      } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none z-20"
                        style={{
                          background: `linear-gradient(110deg, transparent 30%, ${job.color}20 50%, transparent 70%)`,
                        }}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 1.5 }}
                      />

                      {/* Background Gradient */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(circle at top right, ${job.color}20 0%, transparent 60%)`,
                        }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Content */}
                      <div className="relative z-10 p-6 lg:p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <motion.div
                              className="p-3 rounded-xl"
                              style={{
                                backgroundColor: "var(--tertiary)",
                                color: "var(--primary)",
                              }}
                              whileHover={!isMobile ? {
                                scale: 1.2,
                                rotate: 5,
                                backgroundColor: `${job.color}20`,
                                color: job.color,
                              } : {}}
                              transition={{ duration: 0.3 }}
                            >
                              <Icon className="w-6 h-6" />
                            </motion.div>
                            <div className="flex-1">
                              <h3
                                className="text-xl lg:text-2xl font-bold mb-2"
                                style={{ color: "var(--text-primary)" }}
                              >
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 text-sm">
                                <motion.span
                                  className="px-3 py-1 rounded-full font-semibold"
                                  style={{
                                    backgroundColor: `${job.color}20`,
                                    color: job.color,
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {job.department}
                                </motion.span>
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
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="overflow-hidden mb-4"
                            >
                              <h4
                                className="font-semibold mb-3"
                                style={{ color: "var(--text-primary)" }}
                              >
                                Requirements:
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, reqIndex) => (
                                  <motion.li
                                    key={reqIndex}
                                    className="flex items-start space-x-3"
                                    style={{
                                      color: "var(--text-secondary)",
                                    }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: reqIndex * 0.05,
                                    }}
                                  >
                                    <motion.div
                                      whileHover={{ scale: 1.2, rotate: 360 }}
                                      transition={{ duration: 0.5 }}
                                    >
                                      <CheckCircle
                                        className="w-5 h-5 shrink-0 mt-0.5"
                                        style={{ color: job.color }}
                                      />
                                    </motion.div>
                                    <span className="text-sm">{req}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Action Button */}
                        <motion.button
                          onClick={() => toggleJob(job.id)}
                          className="w-full mt-4 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl font-semibold relative overflow-hidden"
                          style={{
                            backgroundColor: "var(--primary)",
                            color: "var(--button-text)",
                          }}
                          whileHover={{
                            backgroundColor: job.color,
                            boxShadow: `0 8px 20px ${job.color}50`,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10">
                            {isExpanded ? "Show Less" : "View Details"}
                          </span>
                          <motion.div
                            className="relative z-10"
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                          {/* Button Shine Effect */}
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                            }}
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                        </motion.button>
                      </div>

                      {/* Animated Border Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          border: `2px solid ${job.color}`,
                        }}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Floating particles on hover */}
                      {!isMobile && (
                        <>
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 rounded-full pointer-events-none"
                              style={{
                                background: job.color,
                                boxShadow: `0 0 10px ${job.color}`,
                                left: `${25 + i * 20}%`,
                                top: "50%",
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
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <AnimatedBackground particleCount={5} shapeCount={2} opacity={0.06} />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Don&apos;t See Your Role?
              </motion.h2>
              <motion.p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We&apos;re always looking for talented individuals. Send us your
                resume and we&apos;ll keep you in mind for future opportunities.
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--button-text)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 69, 19, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Us</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
