"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/src/components/navbar";
import Footer from "@/app/src/components/footer";
import { X } from "lucide-react";

interface Leader {
  name: string;
  position: string;
  image: string;
  description: string;
}

export default function OurLeadershipPage() {
  const [isVisible] = useState(true);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initializedRef = useRef(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent double initialization
    if (initializedRef.current) return;
    initializedRef.current = true;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            // Use requestAnimationFrame for smooth animation
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

    // Initialize elements immediately but with RAF for smoothness
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        // Only set initial state if not already animated
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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
        setTimeout(() => setSelectedLeader(null), 300);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedLeader(null), 300);
  };

  const leaders: Leader[] = [
    {
      name: "Vikas Pavankumar",
      position: "Managing Director & Chairman",
      image: "/vikasji.webp",
      description:
        "Vikas Pavankumar is the Managing Director and Chairman of our Company. He has been associated with our Company since April 14, 2021, and was appointed to his current designation pursuant to Board meeting dated July 08, 2024. He obtained his bachelor's degree in science in Industrial Engineering from Purdue University in the year 2009 and completed his graduation programme in Management from the Indian School of Business in the year 2014. Further, he was employed as a Senior Associate with the India Office of the Boston Consulting Group in the year 2014. He currently oversees the sales & marketing operations, business development and human resources in the Company. He has been instrumental in developing the business in the international as well as domestic markets.",
    },
    {
      name: "Hemanshu S Chokhani",
      position: "Chief Financial Officer & Whole Time Director",
      image: "/himanshuji.webp",
      description:
        "Hemanshu Shyamsundar Chokhani is the Whole Time Director and Chief Financial Officer of our Company. He has been associated with our Company since 19 years and was appointed to his current designation pursuant to Board meeting dated July 08, 2024. He obtained a certification in the Professional Education Examination-I held by the Institute of Chartered Accountants of India in 2005 with an All-India rank of 14 and has been awarded Ganeshmai Patni Memorial Prize for the best paper on Statistics jointly with 58 candidates by the Institute of Chartered Accountants of India in 2005. He completed his final examination in 2009 with an All-India rank of 36. Further, he obtained his Post-Graduate Diploma in Management from the Indian Institute of Management, Ahmedabad in the year 2011. Previously he has worked as a Senior Consultant in Booz & Co. India Private Limited. His professional caliber and acumen ship has been helping Company in a competitive procurement of products and availing trade finance apart from his involvement in accounts, audit, taxation, and other statutory compliances in the Company.",
    },
    {
      name: "Shyamsundar Chokhani",
      position: "Whole Time Director",
      image: "/shyamji.webp",
      description:
        "Shyamsundar Chokhani is the Whole-Time Director of our Company. He has been associated with our Company since 19 years and was appointed to his current designation pursuant to Board meeting dated July 08, 2024. He obtained his master's degree of technology in Mechanical Engineering from the Indian Institute of Technology, Bombay in the year 1973 and has completed a Middle Management Course of the 3-Tier Programme for Management Development held by the Indian Institute of Management in the year 1973. He has been guiding force behind the success of the Company and currently looks after logistics including inbound logistics, vessel chartering, local logistics and domestic banking in the Company.",
    },
    {
      name: "Neha Chokhani",
      position: "Whole Time Director",
      image: "/nehaji.webp",
      description:
        "Neha Chokhani is the Whole Time Director of our Company. She has been associated with our Company since April 14, 2021, and was appointed to her current designation pursuant to Board meeting dated July 08, 2024. She obtained her bachelor's degree in commerce from the University of Mumbai in the year 2012 and was placed in the first class. She obtained a certification in Integrated Professional Competence Examination held by the Institute of Chartered Accountants of India in the year 2012. She overseas inventory & warehousing, clearance management, custom clearance and custom compliance related matters in the Company.",
    },
    {
      name: "Girdhari Lal Kundalwal",
      position: "Independent Director",
      image: "/girdhariji.webp",
      description:
        "Girdhari Lal Kundalwal is an Independent Director of our Company and was appointed to this designation pursuant to Board meeting dated July 08, 2024. He obtained his master's degree in commerce (Accountancy and Business Statistics) in the year 1985, and a certification in the Associate Examination of the Indian Institute of Bankers in the year 1989 and his master's degree in business administration (Banking & Finance) in the year 2002 from Indira Gandhi National Open University. He has worked with the Union Bank of India for 38 years, from 1983 up until 2021, and retired as a Deputy General Manager.",
    },
    {
      name: "Sushil Kumar Relan",
      position: "Independent Director",
      image: "/sunilji.webp",
      description:
        "Sushil Kumar Relan is an Independent Director of our Company and was appointed to this designation pursuant to Board meeting dated July 08, 2024. He obtained his Master's in Arts (Economics) from Meerut University in 1986. He has worked in the State Bank of India from the year 1982, up to 2022 and retired from the position of Deputy General Manager and worked in Nido Home Finance Limited from 2022 to 2023 as a SVP – Internal Audit in the Internal Audit team in Mumbai.",
    },
    {
      name: "Rajen Gada",
      position: "Independent Director",
      image: "/rajen_gadaji.webp",
      description:
        "Rajen Gada is an Independent Director of our Company and was appointed to this designation pursuant to Board meeting dated July 2024. He obtained his bachelor's degree in commerce from the University of Bombay in 1994, his Chartered Accountancy Degree from the Institute of Chartered Accountants of India in the year 1998, his Graduation Degree as a Cost Accountant from the Institute of Cost Works Accountants of India in the year 1999, and his Limited Insolvency Examination Certificate from the Insolvency and Bankruptcy Board of India in 2017. He has previously worked as the Chief Financial Officer in BCD Travel India Pvt. Ltd.",
    },
  ];

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
              className={`text-center transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ willChange: "opacity, transform" }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Our Leadership
              </h1>
              <div
                className="w-24 h-1 mx-auto mb-8 rounded-full transition-all duration-1000 delay-300"
                style={{
                  backgroundColor: "var(--primary)",
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                }}
              ></div>
              <p
                className="text-lg sm:text-xl max-w-3xl mx-auto transition-all duration-1000 delay-200"
                style={{
                  color: "var(--text-secondary)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                }}
              >
                Meet the visionary leaders driving our company&apos;s success
                and growth
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section
          ref={sectionRef}
          className="py-16 lg:py-24"
          style={{
            backgroundColor: "var(--bg-primary)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Leaders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {leaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className="scroll-animate leader-card group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-primary)",
                    }}
                    onMouseEnter={(e) => {
                      const card = e.currentTarget;
                      card.style.borderColor = "var(--primary)";
                      card.style.transform = "translateY(-8px)";
                      card.style.boxShadow = "0 20px 40px var(--shadow-lg)";

                      // Scale image
                      const image = card.querySelector("img") as HTMLElement;
                      if (image) {
                        image.style.transform = "scale(1.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget;
                      card.style.borderColor = "var(--border-primary)";
                      card.style.transform = "translateY(0)";
                      card.style.boxShadow = "0 4px 6px var(--shadow-sm)";

                      // Reset image
                      const image = card.querySelector("img") as HTMLElement;
                      if (image) {
                        image.style.transform = "scale(1)";
                      }
                    }}
                    onClick={() => openModal(leader)}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-96 overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                        style={{
                          transform: "scale(1)",
                          transition: "transform 0.5s ease-out",
                        }}
                      />

                      {/* Hover indicator */}
                      <div
                        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          opacity: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = "0";
                        }}
                      >
                        <div
                          className="px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg"
                          style={{
                            backgroundColor: "var(--primary)",
                          }}
                        >
                          Click to view details
                        </div>
                      </div>
                    </div>

                    {/* Name and Position - Always Visible */}
                    <div className="p-6 text-center">
                      <h3
                        className="text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {leader.name}
                      </h3>
                      <div
                        className="w-16 h-0.5 mx-auto mb-3 rounded-full"
                        style={{ backgroundColor: "var(--primary)" }}
                      ></div>
                      <p
                        className="text-sm lg:text-base font-medium transition-colors duration-300"
                        style={{ color: "var(--primary)" }}
                      >
                        {leader.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedLeader && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
              isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(4px)",
            }}
            onClick={closeModal}
          >
            <div
              ref={modalRef}
              className={`relative max-w-3xl w-full rounded-2xl shadow-2xl transition-all duration-500 ${
                isModalOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              }`}
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "2px solid var(--primary)",
                maxHeight: "90vh",
                overflow: "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  color: "var(--text-primary)",
                }}
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative w-full lg:w-1/3 h-64 lg:h-auto shrink-0">
                  <Image
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {selectedLeader.name}
                  </h2>
                  <div
                    className="w-20 h-1 mb-4 rounded-full"
                    style={{ backgroundColor: "var(--primary)" }}
                  ></div>
                  <p
                    className="text-base lg:text-lg font-semibold mb-6"
                    style={{ color: "var(--primary)" }}
                  >
                    {selectedLeader.position}
                  </p>
                  <div
                    className="prose prose-sm lg:prose-base max-w-none"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <p className="text-sm lg:text-base leading-relaxed">
                      {selectedLeader.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
