import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EventsGrid } from "./components/EventsGrid";
import { Timeline } from "./components/Timeline";
import { Coordinators } from "./components/Coordinators";
import { Sponsors } from "./components/Sponsors";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./hooks/useTheme";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative bg-black dark:bg-white min-h-screen overflow-x-hidden transition-colors duration-300">
      {/* Global Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 dark:bg-red-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsGrid />
        <Timeline />
        <Coordinators />
        <Sponsors />
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center group transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <div className="absolute -inset-[2px] bg-red-600 blur-md opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
      </button>
    </div>
    </ThemeProvider>
  );
}
