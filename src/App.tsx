import { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";
import ProjectsSection from "./components/ProjectsSection";
import WritingSection from "./components/WritingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
 useEffect(() => {
    const backToTopButton = document.getElementById("backToTop");
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        backToTopButton?.classList.remove("opacity-0", "invisible");
        backToTopButton?.classList.add("opacity-100", "visible");
      } else {
        backToTopButton?.classList.remove("opacity-100", "visible");
        backToTopButton?.classList.add("opacity-0", "invisible");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-dark text-light">
      {/* Paste the full HTML content inside JSX format here */}
      {/* For the sake of brevity and clarity, break into components like <Header />, <HeroSection />, <AboutSection />, etc. */}

      {/* Example placeholder for sections */}
      <Header />
      <HeroSection />
       <AboutSection />
      <SkillsSection />
      <WorkSection />
       <ProjectsSection />
      <WritingSection />
      <ContactSection />
      <Footer />

      {/* Back to Top Button */}
      <button
        id="backToTop"
        className="fixed bottom-6 right-6 w-12 h-12 bg-accent text-dark rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition opacity-0 invisible border-2 border-dark hover:scale-110"
        onClick={scrollToTop}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default App
