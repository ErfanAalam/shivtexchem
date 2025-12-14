"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const [isVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about/company-profile", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/industries", label: "Industries" },
    { href: "/jobs", label: "Jobs" },
    { href: "/investors", label: "Investors" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <motion.footer
        ref={footerRef}
        className="w-full relative overflow-hidden"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-primary)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`bg-orb-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                background: `radial-gradient(circle, rgba(139, 69, 19, ${
                  0.15 - i * 0.02
                }), transparent)`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Wave decoration */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute left-0 right-0"
            style={{
              height: "2px",
              top: `${i * 30}%`,
              background: `linear-gradient(90deg, transparent, rgba(139, 69, 19, ${
                0.2 - i * 0.05
              }), transparent)`,
            }}
            animate={{
              scaleX: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Logo and Company Info */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-3 group/logo"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-12 h-12 shrink-0"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/Dabala.svg"
                    alt="Dabala Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                  {/* Rotating ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-var(--primary)"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{
                      scale: [1, 1.3],
                      opacity: [0, 0.5, 0],
                      rotate: [0, 180],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <motion.span
                    className="text-lg font-bold leading-tight"
                    style={{ color: "var(--primary)" }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(139, 69, 19, 0)",
                        "0 0 10px rgba(139, 69, 19, 0.3)",
                        "0 0 0px rgba(139, 69, 19, 0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Dabala Limited
                  </motion.span>
                  <span
                    className="text-xs leading-tight"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Formerly known as Dabala Private Limited
                  </span>
                </div>
              </motion.div>
              <motion.p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Leading the way in chemical manufacturing and distribution with
                excellence and innovation.
              </motion.p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold mb-4 relative inline-block"
                style={{ color: "var(--text-primary)" }}
              >
                Quick Links
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-var(--primary)"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
              </motion.h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Link href={link.href} className="group inline-block">
                      <motion.span
                        className="text-sm flex items-center"
                        style={{ color: "var(--text-secondary)" }}
                        whileHover={{ x: 5, color: "var(--primary)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span
                          className="h-0.5 mr-0"
                          style={{ backgroundColor: "var(--primary)" }}
                          initial={{ width: 0 }}
                          whileHover={{ width: 12, marginRight: 8 }}
                          transition={{ duration: 0.3 }}
                        />
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold mb-4 relative inline-block"
                style={{ color: "var(--text-primary)" }}
              >
                Contact Us
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-var(--primary)"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </motion.h3>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="p-2 rounded-lg shrink-0 relative overflow-hidden"
                    style={{
                      backgroundColor: "var(--tertiary)",
                      color: "var(--primary)",
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      backgroundColor: "var(--primary)",
                      color: "var(--button-text)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="w-4 h-4 relative z-10" />
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-var(--primary)"
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{
                        scale: [1, 1.5],
                        opacity: [0.5, 0],
                      }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <motion.a
                      href="tel:+912235221869"
                      className="block text-sm"
                      style={{ color: "var(--text-secondary)" }}
                      whileHover={{ color: "var(--primary)", x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      +91 22 3522 1869
                    </motion.a>
                    <motion.a
                      href="tel:+912235236213"
                      className="block text-sm"
                      style={{ color: "var(--text-secondary)" }}
                      whileHover={{ color: "var(--primary)", x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      +91 22 3523 6213
                    </motion.a>
                  </div>
                </motion.li>

                <motion.li
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="p-2 rounded-lg shrink-0 relative overflow-hidden"
                    style={{
                      backgroundColor: "var(--tertiary)",
                      color: "var(--primary)",
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      backgroundColor: "var(--primary)",
                      color: "var(--button-text)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-4 h-4 relative z-10" />
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg border-2 border-var(--primary)"
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{
                        scale: [1, 1.5],
                        opacity: [0.5, 0],
                      }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  </motion.div>
                  <motion.a
                    href="mailto:info@dabala.com"
                    className="flex-1 text-sm break-all"
                    style={{ color: "var(--text-secondary)" }}
                    whileHover={{ color: "var(--primary)" }}
                    transition={{ duration: 0.3 }}
                  >
                    info@dabala.com
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Office Addresses */}
            <motion.div variants={itemVariants}>
              <motion.h3
                className="text-lg font-semibold mb-4 relative inline-block"
                style={{ color: "var(--text-primary)" }}
              >
                Our Offices
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-var(--primary)"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
              </motion.h3>
              <div className="space-y-4">
                <motion.div
                  className="space-y-2 p-3 rounded-lg"
                  style={{
                    background: "rgba(139, 69, 19, 0.03)",
                    border: "1px solid rgba(139, 69, 19, 0.1)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(139, 69, 19, 0.3)",
                    boxShadow: "0 4px 15px rgba(139, 69, 19, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-2">
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <MapPin
                        className="w-4 h-4 shrink-0 mt-1"
                        style={{ color: "var(--primary)" }}
                      />
                    </motion.div>
                    <div>
                      <p
                        className="text-xs font-semibold mb-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Corporate Office
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        602, 6th Floor, Savoy Chambers, Hasmukh Nagar, Santacruz
                        West Mumbai 400054
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2 p-3 rounded-lg"
                  style={{
                    background: "rgba(139, 69, 19, 0.03)",
                    border: "1px solid rgba(139, 69, 19, 0.1)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(139, 69, 19, 0.3)",
                    boxShadow: "0 4px 15px rgba(139, 69, 19, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-2">
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <MapPin
                        className="w-4 h-4 shrink-0 mt-1"
                        style={{ color: "var(--primary)" }}
                      />
                    </motion.div>
                    <div>
                      <p
                        className="text-xs font-semibold mb-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Registered Office
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        216, 2nd Floor, Kamla Space, Khira Nagar, Santacruz
                        West, Mumbai 400054
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="mt-8 pt-8 border-t"
            style={{ borderColor: "var(--border-primary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg relative overflow-hidden group"
                      style={{
                        backgroundColor: "var(--tertiary)",
                        color: "var(--text-secondary)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                      whileHover={{
                        scale: 1.15,
                        y: -5,
                        backgroundColor: "var(--primary)",
                        color: "var(--button-text)",
                        boxShadow: "0 8px 20px rgba(139, 69, 19, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        <Icon className="w-5 h-5 relative z-10" />
                      </motion.div>
                      {/* Pulsing ring */}
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-var(--primary)"
                        initial={{ scale: 1, opacity: 0 }}
                        whileHover={{
                          scale: [1, 1.4],
                          opacity: [0.5, 0],
                        }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    </motion.a>
                  );
                })}
              </div>
              <motion.p
                className="text-xs text-center sm:text-right"
                style={{ color: "var(--text-tertiary)" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                © {new Date().getFullYear()} Dabala Limited. All rights
                reserved.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full overflow-hidden"
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--button-text)",
          boxShadow: "0 4px 20px rgba(139, 69, 19, 0.4)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20,
        }}
        whileHover={{
          scale: 1.15,
          boxShadow: "0 8px 30px rgba(139, 69, 19, 0.6)",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowUp className="w-5 h-5 relative z-10" />
        </motion.div>
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid rgba(255,255,255,0.3)",
            borderTopColor: "white",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.button>
    </>
  );
}
