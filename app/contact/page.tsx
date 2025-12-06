"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [isVisible] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    locationOfPlant: "",
    additionalMessage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        locationOfPlant: "",
        additionalMessage: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  // Google Maps coordinates for the two locations
  const corporateOffice = {
    lat: 19.0760,
    lng: 72.8777,
    address: "602, 6th Floor, Savoy Chambers, Hasmukh Nagar, Santacruz West, Mumbai 400054",
  };

  const registeredOffice = {
    lat: 19.0760,
    lng: 72.8777,
    address: "216, 2nd Floor, Kamla Space, Khira Nagar, Santacruz West, Mumbai 400054",
  };

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
                  <MessageSquare className="w-12 h-12" />
                </div>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Get In Touch
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Have questions or need assistance? We&apos;re here to help. Reach
                out to us and we&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
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
              className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
            <div
              className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl animate-pulse"
              style={{ backgroundColor: "var(--primary)" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="scroll-animate">
                <div
                  className="rounded-3xl p-6 lg:p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "2px solid var(--border-primary)",
                  }}
                >
                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-6"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                          focusRingColor: "var(--primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--primary)20";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-primary)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--primary)20";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-primary)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--primary)20";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-primary)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Product */}
                    <div>
                      <label
                        htmlFor="product"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Product
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--primary)20";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-primary)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--primary)20";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-primary)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Location of Plant */}
                    <div>
                      <label
                        htmlFor="locationOfPlant"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Location of Plant
                      </label>
                      <input
                        type="text"
                        id="locationOfPlant"
                        name="locationOfPlant"
                        value={formData.locationOfPlant}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--primary)20";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-primary)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Additional Message */}
                    <div>
                      <label
                        htmlFor="additionalMessage"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Additional Message
                      </label>
                      <textarea
                        id="additionalMessage"
                        name="additionalMessage"
                        rows={4}
                        value={formData.additionalMessage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--primary)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 3px var(--primary)20";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--border-primary)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "var(--button-text)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor =
                            "var(--primary-hover)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 30px var(--shadow-lg)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--primary)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <Send className="w-5 h-5" />
                      <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Company Details */}
              <div className="space-y-6">
                <div className="scroll-animate">
                  <div
                    className="rounded-3xl p-6 lg:p-8 shadow-lg"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "2px solid var(--border-primary)",
                    }}
                  >
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
                        className="text-2xl lg:text-3xl font-bold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Contact Information
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-start space-x-4">
                        <div
                          className="p-2 rounded-lg shrink-0"
                          style={{
                            backgroundColor: "var(--tertiary)",
                            color: "var(--primary)",
                          }}
                        >
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <h3
                            className="font-semibold mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Phone
                          </h3>
                          <a
                            href="tel:+912235221869"
                            className="block text-sm transition-colors duration-300 hover:text-primary"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            +91 22 3522 1869
                          </a>
                          <a
                            href="tel:+912235236213"
                            className="block text-sm transition-colors duration-300 hover:text-primary"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            +91 22 3523 6213
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start space-x-4">
                        <div
                          className="p-2 rounded-lg shrink-0"
                          style={{
                            backgroundColor: "var(--tertiary)",
                            color: "var(--primary)",
                          }}
                        >
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <h3
                            className="font-semibold mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Email
                          </h3>
                          <a
                            href="mailto:info@shivtexchem.com"
                            className="block text-sm transition-colors duration-300 hover:text-primary"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            info@shivtexchem.com
                          </a>
                        </div>
                      </div>

                      {/* Corporate Office */}
                      <div className="flex items-start space-x-4">
                        <div
                          className="p-2 rounded-lg shrink-0"
                          style={{
                            backgroundColor: "var(--tertiary)",
                            color: "var(--primary)",
                          }}
                        >
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h3
                            className="font-semibold mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Corporate Office
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            602, 6th Floor, Savoy Chambers, Hasmukh Nagar,
                            Santacruz West Mumbai 400054
                          </p>
                        </div>
                      </div>

                      {/* Registered Office */}
                      <div className="flex items-start space-x-4">
                        <div
                          className="p-2 rounded-lg shrink-0"
                          style={{
                            backgroundColor: "var(--tertiary)",
                            color: "var(--primary)",
                          }}
                        >
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <h3
                            className="font-semibold mb-1"
                            style={{ color: "var(--text-primary)" }}
                          >
                            Registered Office
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
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
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section
          className="py-16 lg:py-24"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="scroll-animate text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Find Us on Map
              </h2>
              <p
                className="text-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                Visit our offices in Mumbai
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Map Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: "#EF4444" }}
                ></div>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Corporate Office
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: "#3B82F6" }}
                ></div>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Registered Office
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

