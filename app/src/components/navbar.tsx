"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, startTransition } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (
      pathname &&
      prevPathnameRef.current &&
      prevPathnameRef.current !== pathname
    ) {
      if (isMobileMenuOpen || openMobileDropdown) {
        startTransition(() => {
          setIsMobileMenuOpen(false);
          setOpenMobileDropdown(null);
        });
      }
    }
    prevPathnameRef.current = pathname;
  }, [pathname, isMobileMenuOpen, openMobileDropdown]);

  const aboutUsItems = [
    "Company Profile",
    "Company History",
    "Mission & Vision",
    "Our Leadership",
  ];

  const investorsItems = [
    "Disclousre under Regulation",
    "Committees",
    "Financial Reports",
    "Issue Documents",
    "Shareholding Pattern",
    "Credit Rating",
    "Investor Contact",
    "Announcements",
  ];

  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className="w-full fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--navbar-border)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(139, 69, 19, 0.1), transparent)`,
              left: `${20 + i * 30}%`,
              top: "-50%",
            }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.2, 0.5, 0.2],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3 group/logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Dabala.svg"
                alt="Dabala Logo"
                fill
                sizes="(max-width: 640px) 40px, 48px"
                className="object-contain"
                priority
              />
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(139, 69, 19, 0.4), transparent)",
                  filter: "blur(8px)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="flex flex-col min-w-0">
              <motion.span
                className="text-base sm:text-xl font-bold leading-tight transition-colors duration-300 truncate"
                style={{ color: "var(--primary)" }}
                animate={{
                  textShadow: scrolled
                    ? "0 0 10px rgba(139, 69, 19, 0.3)"
                    : "none",
                }}
              >
                DABALA All Chem LLP
              </motion.span>
              {/* <span
                className="text-xs leading-tight hidden sm:block"
                style={{ color: "var(--text-tertiary)" }}
              >
                Formerly known as Dabala Private Limited
              </span> */}
            </div>
          </motion.div>

          {/* Navigation Items */}
          <motion.div
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
          >
            <NavItem href="/" label="HOME" pathname={pathname} />

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("about")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <NavItem
                href="/about/company-profile"
                label="ABOUT US"
                hasDropdown
                pathname={pathname}
              />
              <DropdownMenu
                isOpen={hoveredDropdown === "about"}
                items={aboutUsItems}
              />
            </div>

            <NavItem href="/products" label="PRODUCTS" pathname={pathname} />
            <NavItem
              href="/industries"
              label="INDUSTRIES"
              pathname={pathname}
            />
            <NavItem href="/jobs" label="JOBS" pathname={pathname} />

            {/* Investors Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("investors")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <NavItem
                href="/investors/disclosure-under-regulation"
                label="INVESTORS"
                hasDropdown
                pathname={pathname}
              />
              <DropdownMenu
                isOpen={hoveredDropdown === "investors"}
                items={investorsItems}
              />
            </div>

            <NavItem href="/contact" label="CONTACT US" pathname={pathname} />
          </motion.div>

          {/* Theme Toggle Button */}
          <motion.div
            className="hidden md:flex items-center ml-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-lg relative overflow-hidden"
                style={{
                  backgroundColor: "var(--tertiary)",
                  color: "var(--text-primary)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                <AnimatePresence mode="wait">
                  {theme === "light" ? (
                    <motion.svg
                      key="moon"
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="sun"
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </motion.svg>
                  )}
                </AnimatePresence>
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button for Mobile */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: "var(--tertiary)",
                  color: "var(--text-primary)",
                }}
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                {theme === "light" ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-colors duration-200 p-2"
              style={{
                color: "var(--text-primary)",
              }}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2.5"
                      : "translate-y-0"
                  }`}
                ></span>
                <span
                  className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-2.5"
                      : "translate-y-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--primary), transparent)",
        }}
        animate={{
          scaleX: scrolled ? 1 : 0,
          opacity: scrolled ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 shadow-2xl"
        initial={{ x: "100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          backgroundColor: "var(--navbar-bg)",
          boxShadow: "-4px 0 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Mobile Menu Header */}
        <div
          className="flex items-center justify-between h-20 px-4 sm:px-6 border-b transition-colors duration-300"
          style={{
            borderColor: "var(--navbar-border)",
            backgroundColor: "var(--navbar-bg)",
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/Dabala.svg"
                alt="Dabala Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span
              className="text-lg font-bold"
              style={{ color: "var(--primary)" }}
            >
              Dabala All Chem LLP
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-2 transition-colors duration-200"
            style={{
              color: "var(--text-primary)",
            }}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div
          className="overflow-y-auto h-[calc(100vh-5rem)] px-4 py-6"
          style={{
            backgroundColor: "var(--navbar-bg)",
          }}
        >
          <MobileNavItem href="/" label="HOME" onClick={closeMobileMenu} />

          {/* About Us Mobile Dropdown */}
          <MobileDropdownItem
            label="ABOUT US"
            items={aboutUsItems}
            isOpen={openMobileDropdown === "about"}
            onToggle={() => toggleMobileDropdown("about")}
            onClick={closeMobileMenu}
          />

          <MobileNavItem
            href="/products"
            label="PRODUCTS"
            onClick={closeMobileMenu}
          />
          <MobileNavItem
            href="/industries"
            label="INDUSTRIES"
            onClick={closeMobileMenu}
          />
          <MobileNavItem href="/jobs" label="JOBS" onClick={closeMobileMenu} />

          {/* Investors Mobile Dropdown */}
          <MobileDropdownItem
            label="INVESTORS"
            items={investorsItems}
            isOpen={openMobileDropdown === "investors"}
            onToggle={() => toggleMobileDropdown("investors")}
            onClick={closeMobileMenu}
          />

          <MobileNavItem
            href="/contact"
            label="CONTACT US"
            onClick={closeMobileMenu}
          />
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="md:hidden fixed inset-0 z-40"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={closeMobileMenu}
      />
    </motion.nav>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  hasDropdown?: boolean;
  pathname?: string;
}

function NavItem({ href, label, hasDropdown = false, pathname }: NavItemProps) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-semibold group"
    >
      <motion.span
        className="relative z-10 flex items-center"
        style={{
          color: isActive ? "var(--primary)" : "var(--text-primary)",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {label}
        {hasDropdown && (
          <motion.svg
            className="inline-block ml-1.5 w-3 h-3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M19 9l-7 7-7-7"></path>
          </motion.svg>
        )}
      </motion.span>

      {/* Animated underline */}
      <motion.span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5"
        style={{ backgroundColor: "var(--primary)" }}
        initial={{ width: isActive ? "75%" : 0 }}
        whileHover={{ width: "75%" }}
        transition={{ duration: 0.3 }}
      />

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 69, 19, 0.15), transparent)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
}

interface DropdownMenuProps {
  isOpen: boolean;
  items: string[];
}

function DropdownMenu({ isOpen, items }: DropdownMenuProps) {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-64 rounded-md shadow-2xl border overflow-hidden z-50 transition-colors duration-300 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-3 pointer-events-none"
      }`}
      style={{
        backgroundColor: "var(--dropdown-bg)",
        borderColor: "var(--dropdown-border)",
        transform: isOpen
          ? "translateY(0) scale(1)"
          : "translateY(-12px) scale(0.95)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "top center",
      }}
    >
      <div className="py-1.5">
        {items.map((item, index) => {
          // Map specific items to their routes
          const getHref = (itemName: string) => {
            if (itemName === "Company Profile") {
              return "/about/company-profile";
            }
            if (itemName === "Company History") {
              return "/about/company-history";
            }
            if (itemName === "Mission & Vision") {
              return "/about/mission-vision";
            }
            if (itemName === "Our Leadership") {
              return "/about/our-leadership";
            }
            if (itemName === "Disclousre under Regulation") {
              return "/investors/disclosure-under-regulation";
            }
            if (itemName === "Committees") {
              return "/investors/committees";
            }
            if (itemName === "Financial Reports") {
              return "/investors/financial-reports";
            }
            if (itemName === "Issue Documents") {
              return "/investors/issue-documents";
            }
            if (itemName === "Investor Contact") {
              return "/investors/investor-contact";
            }
            return `#${itemName.toLowerCase().replace(/\s+/g, "-")}`;
          };

          const href = getHref(item);
          const isExternal = href.startsWith("#");

          return isExternal ? (
            <a
              key={index}
              href={href}
              className="block px-4 py-2.5 text-sm relative group overflow-hidden transition-colors duration-200"
              style={{
                color: "var(--text-secondary)",
                transform: isOpen ? "translateX(0)" : "translateX(-15px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${
                  isOpen ? index * 40 : 0
                }ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--dropdown-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              <span className="relative z-10 flex items-center">
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
                <span>{item}</span>
              </span>
            </a>
          ) : (
            <Link
              key={index}
              href={href}
              className="block px-4 py-2.5 text-sm relative group overflow-hidden transition-colors duration-200"
              style={{
                color: "var(--text-secondary)",
                transform: isOpen ? "translateX(0)" : "translateX(-15px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${
                  isOpen ? index * 40 : 0
                }ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--dropdown-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              <span className="relative z-10 flex items-center">
                <span
                  className="w-1.5 h-1.5 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: "var(--primary)" }}
                ></span>
                <span>{item}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

interface MobileNavItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

function MobileNavItem({ href, label, onClick }: MobileNavItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block px-4 py-4 text-base font-semibold rounded-lg transition-all duration-200"
        style={{
          color: "var(--text-primary)",
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--navbar-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        {label}
      </Link>
    </motion.div>
  );
}

interface MobileDropdownItemProps {
  label: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
  onClick: () => void;
}

function MobileDropdownItem({
  label,
  items,
  isOpen,
  onToggle,
  onClick,
}: MobileDropdownItemProps) {
  return (
    <motion.div
      className="mb-1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-base font-semibold rounded-lg transition-all duration-200"
        style={{
          color: "var(--text-primary)",
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--navbar-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        <span>{label}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transition:
            "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out",
        }}
      >
        <div className="pl-4 pr-2 py-2 space-y-1">
          {items.map((item, index) => {
            // Map specific items to their routes
            const getHref = (itemName: string) => {
              if (itemName === "Company Profile") {
                return "/about/company-profile";
              }
              if (itemName === "Company History") {
                return "/about/company-history";
              }
              if (itemName === "Mission & Vision") {
                return "/about/mission-vision";
              }
              if (itemName === "Our Leadership") {
                return "/about/our-leadership";
              }
              if (itemName === "Disclousre under Regulation") {
                return "/investors/disclosure-under-regulation";
              }
              if (itemName === "Committees") {
                return "/investors/committees";
              }
              if (itemName === "Financial Reports") {
                return "/investors/financial-reports";
              }
              if (itemName === "Issue Documents") {
                return "/investors/issue-documents";
              }
              if (itemName === "Investor Contact") {
                return "/investors/investor-contact";
              }
              return `#${itemName.toLowerCase().replace(/\s+/g, "-")}`;
            };

            const href = getHref(item);
            const isExternal = href.startsWith("#");

            return isExternal ? (
              <a
                key={index}
                href={href}
                onClick={onClick}
                className="block px-4 py-3 text-sm rounded-lg transition-all duration-200 relative"
                style={{
                  color: "var(--text-secondary)",
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${
                    isOpen ? index * 50 : 0
                  }ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--navbar-hover)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <span className="flex items-center">
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-3"
                    style={{ backgroundColor: "var(--primary)" }}
                  ></span>
                  <span>{item}</span>
                </span>
              </a>
            ) : (
              <Link
                key={index}
                href={href}
                onClick={onClick}
                className="block px-4 py-3 text-sm rounded-lg transition-all duration-200 relative"
                style={{
                  color: "var(--text-secondary)",
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1) ${
                    isOpen ? index * 50 : 0
                  }ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--navbar-hover)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <span className="flex items-center">
                  <span
                    className="w-1.5 h-1.5 rounded-full mr-3"
                    style={{ backgroundColor: "var(--primary)" }}
                  ></span>
                  <span>{item}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
