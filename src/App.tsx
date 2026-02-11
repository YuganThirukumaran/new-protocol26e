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
      </div>
    </div>
    </ThemeProvider>
  );
}
