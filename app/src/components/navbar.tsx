"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, startTransition } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

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
    <nav
      className="w-full shadow-sm border-b transition-colors duration-300"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--navbar-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-3 group/logo">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover/logo:scale-105 shrink-0">
              <Image
                src="/logo_shivtexchem.webp"
                alt="Shiv Texchem Limited Logo"
                fill
                sizes="(max-width: 640px) 40px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className="text-base sm:text-xl font-bold leading-tight transition-colors duration-300 truncate"
                style={{ color: "var(--primary)" }}
              >
                Shiv Texchem Limited
              </span>
              <span
                className="text-xs leading-tight hidden sm:block"
                style={{ color: "var(--text-tertiary)" }}
              >
                Formerly known as Shiv Texchem Private Limited
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItem href="/" label="HOME" />

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
              />
              <DropdownMenu
                isOpen={hoveredDropdown === "about"}
                items={aboutUsItems}
              />
            </div>

            <NavItem href="/products" label="PRODUCTS" />
            <NavItem href="/industries" label="INDUSTRIES" />
            <NavItem href="/jobs" label="JOBS" />

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
              />
              <DropdownMenu
                isOpen={hoveredDropdown === "investors"}
                items={investorsItems}
              />
            </div>

            <NavItem href="/contact" label="CONTACT US" />
          </div>

          {/* Theme Toggle Button */}
          <div className="hidden md:flex items-center ml-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
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
          </div>

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

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 shadow-2xl transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: "var(--navbar-bg)",
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
                src="/logo_shivtexchem.webp"
                alt="Shiv Texchem Limited Logo"
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
              Shiv Texchem Limited
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
        <div className="overflow-y-auto h-[calc(100vh-5rem)] px-4 py-6">
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
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={closeMobileMenu}
      ></div>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

function NavItem({ href, label, hasDropdown = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-sm font-semibold transition-all duration-300 group"
      style={{
        color: "var(--text-primary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text-primary)";
      }}
    >
      <span className="relative z-10 flex items-center">
        {label}
        {hasDropdown && (
          <svg
            className="inline-block ml-1.5 w-3 h-3 transition-transform duration-300 ease-out group-hover:rotate-180"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        )}
      </span>
      <span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 ease-out group-hover:w-3/4"
        style={{ backgroundColor: "var(--primary)" }}
      ></span>
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
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-4 text-base font-semibold rounded-lg transition-all duration-200"
      style={{
        color: "var(--text-primary)",
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
    <div className="mb-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-base font-semibold rounded-lg transition-all duration-200"
        style={{
          color: "var(--text-primary)",
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
    </div>
  );
}
