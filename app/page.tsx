import Navbar from "./src/components/navbar";
import Footer from "./src/components/footer";
import HeroSection from "./src/components/home/HeroSection";
import CompanyDescription from "./src/components/home/CompanyDescription";
import StatsSection from "./src/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="transition-colors duration-300"
        style={{
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          paddingTop: "0",
        }}
      >
        <HeroSection />
        <CompanyDescription />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
