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

export default function Footer() {
  const [isVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <>
      <footer
        className={`w-full transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--border-primary)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group/logo">
                <div className="relative w-12 h-12 transition-transform duration-300 group-hover/logo:scale-110 shrink-0">
                  <Image
                    src="/logo_shivtexchem.webp"
                    alt="Shiv Texchem Limited Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-lg font-bold leading-tight"
                    style={{ color: "var(--primary)" }}
                  >
                    Shiv Texchem Limited
                  </span>
                  <span
                    className="text-xs leading-tight"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Formerly known as Shiv Texchem Private Limited
                  </span>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Leading the way in chemical manufacturing and distribution with
                excellence and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className="opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm transition-all duration-300 hover:translate-x-1 inline-block group"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      <span className="flex items-center">
                        <span
                          className="w-0 h-0.5 transition-all duration-300 group-hover:w-3 mr-0 group-hover:mr-2"
                          style={{ backgroundColor: "var(--primary)" }}
                        ></span>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <div
                    className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0"
                    style={{
                      backgroundColor: "var(--tertiary)",
                      color: "var(--primary)",
                    }}
                  >
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <a
                      href="tel:+912235221869"
                      className="block text-sm transition-colors duration-300"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      +91 22 3522 1869
                    </a>
                    <a
                      href="tel:+912235236213"
                      className="block text-sm transition-colors duration-300"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      +91 22 3523 6213
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3 group">
                  <div
                    className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shrink-0"
                    style={{
                      backgroundColor: "var(--tertiary)",
                      color: "var(--primary)",
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:info@shivtexchem.com"
                    className="flex-1 text-sm transition-colors duration-300 break-all"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    info@shivtexchem.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Addresses */}
            <div>
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Our Offices
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin
                      className="w-4 h-4 shrink-0 mt-1"
                      style={{ color: "var(--primary)" }}
                    />
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
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin
                      className="w-4 h-4 shrink-0 mt-1"
                      style={{ color: "var(--primary)" }}
                    />
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
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div
            className="mt-8 pt-8 border-t"
            style={{ borderColor: "var(--border-primary)" }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                      style={{
                        backgroundColor: "var(--tertiary)",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--primary)";
                        e.currentTarget.style.color = "var(--button-text)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--tertiary)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              <p
                className="text-xs text-center sm:text-right"
                style={{ color: "var(--text-tertiary)" }}
              >
                © {new Date().getFullYear()} Shiv Texchem Limited. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "var(--primary)",
          color: "var(--button-text)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--primary-hover)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--primary)";
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
