import { motion } from "motion/react";
import {
  ArrowLeft,
  Users,
  MapPin,
  User,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

interface Event {
  code: string;
  position: number;
  title: string;
  subtitle: string;
  description: string;
  teamSize: string;
  venue: string;
  coordinators: {
    name: string;
    phone: string;
  }[];
  registerLink: string;
}

interface EventDetailsProps {
  event: Event;
  onBack: () => void;
}

export function EventDetails({ event, onBack }: EventDetailsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll the inner container to top
    scrollRef.current?.scrollTo(0, 0);
  }, [event]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: "#000000",
        isolation: "isolate",
      }}
    >
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          overflowX: "hidden",
          backgroundColor: "#000000",
        }}
      >

      {/* Top Navigation Bar */}
      <div
        className="sticky top-0 z-20 border-b border-gray-800/60"
        style={{ backgroundColor: "#000000", position: "relative" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-cyan-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">
              Back to Events
            </span>
          </button>

          <div className="flex items-center gap-2 border border-red-600/60 px-2 sm:px-3 py-1 bg-red-600/10">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-red-500 font-black tracking-wider text-xs sm:text-sm">
              {event.code}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 sm:mb-8"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-xs mb-3 sm:mb-4">
            <span className="hover:text-cyan-400 cursor-pointer" onClick={onBack}>
              Events
            </span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-red-500">{event.code}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white dark:text-gray-900 truncate">
              {event.title}
            </span>
          </div>

          {/* Position Number Background */}
          <div className="relative">
            <div className="absolute -top-4 -right-2 sm:right-0 text-[100px] sm:text-[160px] md:text-[200px] font-black text-gray-900/30 dark:text-gray-200/40 leading-none select-none pointer-events-none">
              {event.position}
            </div>

            <div className="relative">
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white dark:text-gray-900 uppercase tracking-tight leading-none mb-3 sm:mb-4"
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
              >
                {event.title}
              </motion.h1>

              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-cyan-400 dark:text-cyan-600 text-sm sm:text-lg md:text-xl font-medium"
              >
                {event.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Gradient Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="h-[3px] w-full bg-gradient-to-r from-red-600 via-cyan-400 to-transparent mt-4 sm:mt-6 origin-left"
          />
        </motion.div>

        {/* Info Cards Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {/* Team Size */}
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 bg-gradient-to-br from-cyan-950 to-gray-950 border border-cyan-400/20 overflow-hidden">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <span className="text-gray-500 text-[10px] sm:text-xs block uppercase tracking-wider">
                Team Size
              </span>
              <span className="text-cyan-400 font-black tracking-wider text-sm sm:text-base">
                {event.teamSize}
              </span>
            </div>
          </div>

          {/* Venue */}
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 bg-gradient-to-br from-red-950 to-gray-950 border border-red-600/20 overflow-hidden">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            </div>
            <div className="min-w-0">
              <span className="text-gray-500 text-[10px] sm:text-xs block uppercase tracking-wider">
                Venue
              </span>
              <span className="text-red-500 font-black tracking-wider text-sm sm:text-base">
                {event.venue}
              </span>
            </div>
          </div>

          {/* Coordinator */}
          <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 bg-gradient-to-br from-orange-900/60 to-gray-900 border border-orange-500/40 overflow-hidden">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 border border-orange-400/50 flex items-center justify-center shrink-0">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
            </div>
            <div className="min-w-0">
              <span className="text-gray-400 text-[10px] sm:text-xs block uppercase tracking-wider">
                Coordinator
              </span>
              <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.coordinators.map((coordinator) => (
                  <div
                    key={`${coordinator.name}-${coordinator.phone}`}
                    className="flex flex-col text-white font-black tracking-wider text-sm sm:text-base break-words"
                  >
                    <span>{coordinator.name}</span>
                    <span className="text-gray-300 text-xs sm:text-sm">
                      {coordinator.phone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="h-5 sm:h-6 w-1 bg-red-600" />
            <h2 className="text-red-500 font-black tracking-wider text-sm sm:text-base uppercase">
              Event Description
            </h2>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-6 sm:p-8 md:p-10 border-l-2 border-l-red-600">
            <p className="text-white text-sm sm:text-base leading-relaxed break-words">
              {event.description}
            </p>
          </div>
        </motion.div>

        {/* Register CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10"
        >
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full sm:w-auto sm:inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-red-500/50 text-white font-black tracking-widest text-sm sm:text-base uppercase transition-all duration-300 text-center overflow-hidden"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center justify-center gap-2">
              REGISTER NOW
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          {/* Bottom Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-red-600 via-cyan-400 to-transparent mt-8 sm:mt-10" />
        </motion.div>

        {/* Corner Brackets (decorative) */}
        <div className="absolute top-4 left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-red-600/30 pointer-events-none" />
        <div className="absolute top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-cyan-400/30 pointer-events-none" />
      </div>
      </div>
    </div>
  );
}
