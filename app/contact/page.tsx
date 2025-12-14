"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import AnimatedBackground from "@/app/src/components/AnimatedBackground";
import AnimatedHero from "@/app/src/components/AnimatedHero";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  MessageSquare,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function ContactPage() {
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
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.05,
    margin: "-100px",
  });
  const mapInView = useInView(mapRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 22 3522 1869", "+91 22 3523 6213"],
      href: "tel:+912235221869",
      color: "#3B82F6",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dabala.com"],
      href: "mailto:info@dabala.com",
      color: "#10B981",
    },
    {
      icon: MapPin,
      title: "Corporate Office",
      details: [
        "602, 6th Floor, Savoy Chambers, Hasmukh Nagar, Santacruz West Mumbai 400054",
      ],
      color: "#F59E0B",
    },
    {
      icon: MapPin,
      title: "Registered Office",
      details: [
        "216, 2nd Floor, Kamla Space, Khira Nagar, Santacruz West, Mumbai 400054",
      ],
      color: "#8B5CF6",
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
          icon={MessageSquare}
          title="Get In Touch"
          subtitle="Have questions or need assistance? We're here to help. Reach out to us and we'll get back to you as soon as possible."
        />

        {/* Contact Form and Info Section */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          <AnimatedBackground particleCount={6} shapeCount={3} opacity={0.08} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="rounded-3xl p-6 lg:p-8 relative overflow-hidden"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "2px solid var(--border-primary)",
                  }}
                  whileHover={
                    !isMobile
                      ? {
                          boxShadow: "0 20px 40px rgba(139, 69, 19, 0.2)",
                        }
                      : {}
                  }
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(139, 69, 19, 0.3), transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(139, 69, 19, 0.3), transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(139, 69, 19, 0.3), transparent 50%)",
                      ],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />

                  <motion.h2
                    className="text-2xl lg:text-3xl font-bold mb-6 relative z-10"
                    style={{ color: "var(--text-primary)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Send Us a Message
                  </motion.h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                  >
                    {/* Form Fields */}
                    {[
                      {
                        label: "Full Name *",
                        name: "fullName",
                        type: "text",
                        required: true,
                      },
                      {
                        label: "Email *",
                        name: "email",
                        type: "email",
                        required: true,
                      },
                      {
                        label: "Phone *",
                        name: "phone",
                        type: "tel",
                        required: true,
                      },
                      { label: "Product", name: "product", type: "text" },
                      { label: "Quantity", name: "quantity", type: "text" },
                      {
                        label: "Location of Plant",
                        name: "locationOfPlant",
                        type: "text",
                      },
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + index * 0.05,
                        }}
                      >
                        <label
                          htmlFor={field.name}
                          className="block text-sm font-semibold mb-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            border: "1px solid var(--border-primary)",
                            color: "var(--text-primary)",
                          }}
                          whileFocus={{
                            borderColor: "var(--primary)",
                            boxShadow: "0 0 0 3px rgba(139, 69, 19, 0.2)",
                          }}
                        />
                      </motion.div>
                    ))}

                    {/* Textarea */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label
                        htmlFor="additionalMessage"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Additional Message
                      </label>
                      <motion.textarea
                        id="additionalMessage"
                        name="additionalMessage"
                        rows={4}
                        value={formData.additionalMessage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none resize-none"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "1px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        whileFocus={{
                          borderColor: "var(--primary)",
                          boxShadow: "0 0 0 3px rgba(139, 69, 19, 0.2)",
                        }}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                      style={{
                        backgroundColor: "var(--primary)",
                        color: "var(--button-text)",
                      }}
                      whileHover={
                        !isSubmitting && !isMobile
                          ? {
                              scale: 1.02,
                              boxShadow: "0 10px 30px rgba(139, 69, 19, 0.4)",
                            }
                          : {}
                      }
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <motion.div
                        animate={isSubmitting ? { rotate: 360 } : {}}
                        transition={{
                          duration: 1,
                          repeat: isSubmitting ? Infinity : 0,
                        }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                      <span>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                        }}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="rounded-3xl p-6 lg:p-8 relative overflow-hidden"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "2px solid var(--border-primary)",
                  }}
                  whileHover={
                    !isMobile
                      ? {
                          boxShadow: "0 20px 40px rgba(139, 69, 19, 0.2)",
                        }
                      : {}
                  }
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="p-3 rounded-xl mr-4"
                      style={{
                        backgroundColor: "var(--tertiary)",
                        color: "var(--primary)",
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Building2 className="w-6 h-6" />
                    </motion.div>
                    <h2
                      className="text-2xl lg:text-3xl font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Contact Information
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 20 }
                          }
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                          }}
                          whileHover={!isMobile ? { x: 8 } : {}}
                        >
                          <motion.div
                            className="p-2 rounded-lg shrink-0 relative"
                            style={{
                              backgroundColor: "var(--tertiary)",
                              color: "var(--primary)",
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: 5,
                              backgroundColor: `${info.color}20`,
                              color: info.color,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className="w-5 h-5" />

                            {/* Pulsing ring */}
                            <motion.div
                              className="absolute inset-0 rounded-lg border-2"
                              style={{ borderColor: info.color }}
                              initial={{ opacity: 0, scale: 1 }}
                              whileHover={{
                                opacity: [0.5, 0],
                                scale: [1, 1.5],
                              }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                            />
                          </motion.div>
                          <div>
                            <h3
                              className="font-semibold mb-1"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {info.title}
                            </h3>
                            {info.details.map((detail, detailIndex) =>
                              info.href ? (
                                <motion.a
                                  key={detailIndex}
                                  href={info.href}
                                  className="block text-sm transition-colors duration-300"
                                  style={{ color: "var(--text-secondary)" }}
                                  whileHover={{
                                    color: info.color,
                                    x: 5,
                                  }}
                                >
                                  {detail}
                                </motion.a>
                              ) : (
                                <p
                                  key={detailIndex}
                                  className="text-sm leading-relaxed"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  {detail}
                                </p>
                              )
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Decorative floating elements */}
                  {!isMobile && (
                    <>
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full"
                          style={{
                            background: contactInfo[i].color,
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 15}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section
          ref={mapRef}
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <AnimatedBackground particleCount={5} shapeCount={2} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Find Us on Map
              </motion.h2>
              <motion.p
                className="text-lg"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0 }}
                animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Visit our offices in Mumbai
              </motion.p>
            </motion.div>

            {/* Google Map Embed */}
            <motion.div
              className="rounded-3xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                mapInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={
                !isMobile
                  ? {
                      scale: 1.02,
                      boxShadow: "0 30px 60px rgba(139, 69, 19, 0.3)",
                    }
                  : {}
              }
            >
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
            </motion.div>

            {/* Map Legend */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { color: "#EF4444", label: "Corporate Office" },
                { color: "#3B82F6", label: "Registered Office" },
              ].map((legend, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: legend.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {legend.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
