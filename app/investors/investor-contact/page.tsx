"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  User,
  Building2,
  FileText,
  ExternalLink,
} from "lucide-react";

export default function InvestorContactPage() {
  const [isVisible] = useState(true);
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
                  <Phone className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Investor Contact
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Get in touch with our investor relations team for queries and
                support
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards Section */}
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
              {/* Link Intime Card */}
              <div className="scroll-animate">
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
                    card.style.borderColor = "#3B82F6";
                    card.style.transform = "translateY(-12px) scale(1.02)";
                    card.style.boxShadow = "0 30px 60px #3B82F630";
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.borderColor = "var(--border-primary)";
                    card.style.transform = "translateY(0) scale(1)";
                    card.style.boxShadow = "0 8px 24px var(--shadow-sm)";
                  }}
                >
                  <div className="relative z-10 p-6 lg:p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className="p-3 rounded-xl mr-4"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                      >
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h2
                        className="text-2xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Link Intime India Private Limited
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start space-x-3">
                        <MapPin
                          className="w-5 h-5 shrink-0 mt-1"
                          style={{ color: "var(--primary)" }}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          C 101, 247 Park, Lal Bahadur Shastri Marg, Surya
                          Nagar, Gandhi Nagar, Vikhroli West, Mumbai,
                          Maharashtra 400083
                        </p>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center space-x-3">
                        <Phone
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <a
                          href="tel:+918108114949"
                          className="text-sm transition-colors duration-300 hover:text-primary"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          +91 810 811 4949
                        </a>
                      </div>

                      {/* Website */}
                      <div className="flex items-center space-x-3">
                        <Globe
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <a
                          href="https://www.linkintime.co.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors duration-300 hover:text-primary flex items-center space-x-1"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span>www.linkintime.co.in</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {/* Email */}
                      <div className="flex items-center space-x-3">
                        <Mail
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <a
                          href="mailto:shivtexchem.smeipo@linkintime.co.in"
                          className="text-sm transition-colors duration-300 hover:text-primary"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          shivtexchem.smeipo@linkintime.co.in
                        </a>
                      </div>

                      {/* Grievance ID */}
                      <div className="flex items-center space-x-3">
                        <FileText
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <div>
                          <p
                            className="text-xs font-semibold mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Investor Grievance ID:
                          </p>
                          <a
                            href="mailto:shivtexchem.smeipo@linkintime.co.in"
                            className="text-sm transition-colors duration-300 hover:text-primary"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            shivtexchem.smeipo@linkintime.co.in
                          </a>
                        </div>
                      </div>

                      {/* Contact Person */}
                      <div className="flex items-center space-x-3">
                        <User
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <p
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span className="font-semibold">Contact Person: </span>
                          Shanti Gopalkrishna
                        </p>
                      </div>

                      {/* SEBI Registration */}
                      <div className="pt-4 border-t" style={{ borderColor: "var(--border-primary)" }}>
                        <p
                          className="text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span className="font-semibold">SEBI Registration No.: </span>
                          INR000004058
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Officer Card */}
              <div className="scroll-animate">
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
                    card.style.borderColor = "#10B981";
                    card.style.transform = "translateY(-12px) scale(1.02)";
                    card.style.boxShadow = "0 30px 60px #10B98130";
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.borderColor = "var(--border-primary)";
                    card.style.transform = "translateY(0) scale(1)";
                    card.style.boxShadow = "0 8px 24px var(--shadow-sm)";
                  }}
                >
                  <div className="relative z-10 p-6 lg:p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className="p-3 rounded-xl mr-4"
                        style={{
                          backgroundColor: "var(--tertiary)",
                          color: "var(--primary)",
                        }}
                      >
                        <User className="w-6 h-6" />
                      </div>
                      <div>
                        <h2
                          className="text-xl font-bold mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          For Shareholders / Investors
                        </h2>
                        <p
                          className="text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Compliance matters
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Name */}
                      <div className="flex items-center space-x-3">
                        <User
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <div>
                          <p
                            className="text-xs font-semibold mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Company Secretary & Compliance Officer
                          </p>
                          <p
                            className="text-sm font-semibold"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Dinky Jain
                          </p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start space-x-3">
                        <MapPin
                          className="w-5 h-5 shrink-0 mt-1"
                          style={{ color: "var(--primary)" }}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          602, 6th Floor, Savoy Chambers, Hasmukh Nagar,
                          Santacruz West Mumbai 400054
                        </p>
                      </div>

                      {/* Phone */}
                      <div className="flex items-center space-x-3">
                        <Phone
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <a
                          href="tel:+919619511788"
                          className="text-sm transition-colors duration-300 hover:text-primary"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          +91 96195 11788
                        </a>
                      </div>

                      {/* Email */}
                      <div className="flex items-center space-x-3">
                        <Mail
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <a
                          href="mailto:cs@shivtexchem.com"
                          className="text-sm transition-colors duration-300 hover:text-primary"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          cs@shivtexchem.com
                        </a>
                      </div>

                      {/* Website */}
                      <div className="flex items-center space-x-3">
                        <Globe
                          className="w-5 h-5 shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <a
                          href="https://shivtexchem.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors duration-300 hover:text-primary flex items-center space-x-1"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span>https://shivtexchem.com/</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

