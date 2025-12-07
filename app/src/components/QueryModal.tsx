"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, Phone, User, MessageSquare } from "lucide-react";

export default function QueryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add focus styles
  const inputFocusStyle = {
    "--focus-ring": "0 0 0 3px rgba(139, 69, 19, 0.2)",
  } as React.CSSProperties;

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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          >
            {/* Blurred Backdrop */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Modal Container */}
            <motion.div
              className="relative w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative"
                style={{
                  background: "var(--bg-secondary)",
                  border: "2px solid var(--border-primary)",
                  boxShadow: "0 20px 60px rgba(139, 69, 19, 0.3)",
                }}
              >
                {/* Simple Background Gradient */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(139, 69, 19, 0.4), transparent 70%)",
                  }}
                />

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full transition-all hover:scale-110"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "2px solid var(--border-primary)",
                  }}
                >
                  <X
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: "var(--text-primary)" }}
                  />
                </button>

                <div className="relative z-10 p-5 sm:p-8">
                  {/* Header with Icon */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="flex justify-center mb-4">
                      <div
                        className="p-4 rounded-2xl"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--primary), #F59E0B)",
                          boxShadow: "0 10px 30px rgba(139, 69, 19, 0.3)",
                        }}
                      >
                        <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                    </div>

                    <h2
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Get in Touch!
                    </h2>

                    <p
                      className="text-sm sm:text-base"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Have questions about our products? We&apos;re here to
                      help!
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
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
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all focus:outline-none"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "2px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Email & Phone - Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
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
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all focus:outline-none"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            border: "2px solid var(--border-primary)",
                            color: "var(--text-primary)",
                          }}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
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
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all focus:outline-none"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            border: "2px solid var(--border-primary)",
                            color: "var(--text-primary)",
                          }}
                          placeholder="+91 12345 67890"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
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
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all focus:outline-none resize-none"
                        style={{
                          backgroundColor: "var(--bg-primary)",
                          border: "2px solid var(--border-primary)",
                          color: "var(--text-primary)",
                        }}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 px-6 py-3 sm:py-3.5 rounded-xl font-bold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary), #F59E0B)",
                        color: "white",
                        boxShadow: "0 4px 15px rgba(139, 69, 19, 0.3)",
                      }}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      <span>
                        {isSubmitting ? "Sending..." : "Send Inquiry"}
                      </span>
                    </button>

                    {/* Privacy Note */}
                    <p
                      className="text-xs text-center mt-3"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      🔒 Your information is safe with us. We respect your
                      privacy.
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
