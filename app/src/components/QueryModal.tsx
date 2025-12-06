"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Sparkles,
  Mail,
  Phone,
  User,
  MessageSquare,
  Zap,
} from "lucide-react";

export default function QueryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate stable particle positions
  const particles = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      opacity: 0.3 + (i % 5) * 0.1,
      left: (i * 37) % 100,
      top: (i * 53) % 100,
      duration: 3 + (i % 3),
      delay: (i % 3) * 0.7,
    }))
  )[0];

  useEffect(() => {
    // Check if modal has been shown before
    const hasShownModal = sessionStorage.getItem("queryModalShown");

    if (!hasShownModal) {
      // Show modal after 12 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("queryModalShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

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
      alert("Thank you for your interest! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
      handleClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Blurred Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Floating Particles in Background */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: `rgba(139, 69, 19, ${particle.opacity})`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  boxShadow: "0 0 10px rgba(139, 69, 19, 0.5)",
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}

            {/* Modal Container */}
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0, rotateX: -20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateX: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="rounded-3xl shadow-2xl overflow-hidden relative"
                style={{
                  background: "var(--bg-secondary)",
                  border: "2px solid var(--border-primary)",
                }}
                animate={{
                  boxShadow: [
                    "0 20px 60px rgba(139, 69, 19, 0.3)",
                    "0 30px 80px rgba(139, 69, 19, 0.6)",
                    "0 20px 60px rgba(139, 69, 19, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(139, 69, 19, 0.4), transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(139, 69, 19, 0.4), transparent 50%)",
                      "radial-gradient(circle at 0% 100%, rgba(139, 69, 19, 0.4), transparent 50%)",
                      "radial-gradient(circle at 100% 0%, rgba(139, 69, 19, 0.4), transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(139, 69, 19, 0.4), transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />

                {/* Orbiting Sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: [
                        Math.cos((i * Math.PI * 2) / 8) * 200,
                        Math.cos(((i + 1) * Math.PI * 2) / 8) * 200,
                      ],
                      y: [
                        Math.sin((i * Math.PI * 2) / 8) * 150,
                        Math.sin(((i + 1) * Math.PI * 2) / 8) * 150,
                      ],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles
                      className="w-6 h-6"
                      style={{ color: "var(--primary)" }}
                    />
                  </motion.div>
                ))}

                {/* Close Button */}
                <motion.button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "2px solid var(--border-primary)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                    backgroundColor: "var(--primary)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(139, 69, 19, 0.4)",
                      "0 0 0 10px rgba(139, 69, 19, 0)",
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 1.5, repeat: Infinity },
                  }}
                >
                  <X
                    className="w-6 h-6"
                    style={{ color: "var(--text-primary)" }}
                  />
                </motion.button>

                <div className="relative z-10 p-8 sm:p-10">
                  {/* Header with Icon */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.2,
                        bounce: 0.6,
                      }}
                    >
                      <motion.div
                        className="relative p-5 rounded-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--primary), #F59E0B)",
                          boxShadow: "0 10px 40px rgba(139, 69, 19, 0.4)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 10px 40px rgba(139, 69, 19, 0.4)",
                            "0 15px 60px rgba(139, 69, 19, 0.7)",
                            "0 10px 40px rgba(139, 69, 19, 0.4)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <MessageSquare className="w-12 h-12 text-white" />
                        </motion.div>

                        {/* Pulsing Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-4 border-var(--primary)"
                          animate={{
                            scale: [1, 1.3],
                            opacity: [0.6, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ color: "var(--text-primary)" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.span
                        style={{
                          background:
                            "linear-gradient(90deg, var(--primary), #F59E0B, var(--primary))",
                          backgroundSize: "200% auto",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                        animate={{
                          backgroundPosition: [
                            "0% center",
                            "200% center",
                            "0% center",
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        Get in Touch!
                      </motion.span>
                    </motion.h2>

                    <motion.p
                      className="text-base sm:text-lg"
                      style={{ color: "var(--text-secondary)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Have questions about our products? We&apos;re here to
                      help!
                    </motion.p>

                    {/* Decorative Zap Icons */}
                    <div className="flex justify-center gap-4 mt-4">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 15, -15, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        >
                          <Zap
                            className="w-5 h-5"
                            style={{
                              color: "var(--primary)",
                              filter:
                                "drop-shadow(0 0 8px rgba(139, 69, 19, 0.6))",
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Form */}
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {/* Name Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold mb-2 flex items-center gap-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        <User
                          className="w-4 h-4"
                          style={{ color: "var(--primary)" }}
                        />
                        Your Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "2px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        whileFocus={{
                          scale: 1.02,
                          borderColor: "var(--primary)",
                          boxShadow: "0 0 0 4px rgba(139, 69, 19, 0.1)",
                        }}
                        placeholder="Enter your name"
                      />
                    </motion.div>

                    {/* Email & Phone - Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold mb-2 flex items-center gap-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          <Mail
                            className="w-4 h-4"
                            style={{ color: "var(--primary)" }}
                          />
                          Email *
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            border: "2px solid var(--border-primary)",
                            color: "var(--text-primary)",
                          }}
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "var(--primary)",
                            boxShadow: "0 0 0 4px rgba(139, 69, 19, 0.1)",
                          }}
                          placeholder="your@email.com"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold mb-2 flex items-center gap-2"
                          style={{ color: "var(--text-primary)" }}
                        >
                          <Phone
                            className="w-4 h-4"
                            style={{ color: "var(--primary)" }}
                          />
                          Phone *
                        </label>
                        <motion.input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            border: "2px solid var(--border-primary)",
                            color: "var(--text-primary)",
                          }}
                          whileFocus={{
                            scale: 1.02,
                            borderColor: "var(--primary)",
                            boxShadow: "0 0 0 4px rgba(139, 69, 19, 0.1)",
                          }}
                          placeholder="+91 12345 67890"
                        />
                      </motion.div>
                    </div>

                    {/* Message Field */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold mb-2 flex items-center gap-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        <MessageSquare
                          className="w-4 h-4"
                          style={{ color: "var(--primary)" }}
                        />
                        Your Message
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none resize-none"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "2px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        whileFocus={{
                          scale: 1.02,
                          borderColor: "var(--primary)",
                          boxShadow: "0 0 0 4px rgba(139, 69, 19, 0.1)",
                        }}
                        placeholder="Tell us about your requirements..."
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary), #F59E0B)",
                        color: "white",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      whileHover={
                        !isSubmitting
                          ? {
                              scale: 1.05,
                              boxShadow: "0 15px 40px rgba(139, 69, 19, 0.5)",
                            }
                          : {}
                      }
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    >
                      <motion.div
                        animate={isSubmitting ? { rotate: 360 } : {}}
                        transition={{
                          duration: 1,
                          repeat: isSubmitting ? Infinity : 0,
                          ease: "linear",
                        }}
                      >
                        <Send className="w-6 h-6" />
                      </motion.div>
                      <span>
                        {isSubmitting ? "Sending..." : "Send Inquiry"}
                      </span>

                      {/* Shine Effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                        }}
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    </motion.button>

                    {/* Privacy Note */}
                    <motion.p
                      className="text-xs text-center"
                      style={{ color: "var(--text-secondary)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      🔒 Your information is safe with us. We respect your
                      privacy.
                    </motion.p>
                  </motion.form>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
