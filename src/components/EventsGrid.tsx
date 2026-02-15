import { motion } from "motion/react";
import { Users } from "lucide-react";
import { useState } from "react";
import { EventDetails } from "./EventDetails";
import { events, type Event } from "../data/events";

interface EventsGridProps {
  onEventDetailsOpen?: () => void;
  onEventDetailsClose?: () => void;
}

export function EventsGrid({
  onEventDetailsOpen,
  onEventDetailsClose,
}: EventsGridProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <>
      <section
        id="events"
        className="relative overflow-hidden bg-black px-4 py-24 transition-colors duration-300 dark:bg-gray-50"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-red-600 blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-[120px]" />
        </div>

        {/* Track Lines Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              style={{ top: `${20 + i * 20}%` }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-5xl font-black uppercase tracking-tight text-white dark:text-gray-900 md:text-7xl"
              style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
            >
              THE <span className="text-red-600">GRID</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg tracking-wide text-cyan-400"
            >
              6 Events
            </motion.p>
          </div>

          {/* Events Grid Layout */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {events.map((event, idx) => (
              <motion.div
                key={event.code}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => {
                  setSelectedEvent(event);
                  onEventDetailsOpen?.();
                }}
              >
                {/* Card Container */}
                <div className="relative overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:border-gray-300 dark:from-white dark:via-gray-100 dark:to-white">
                  {/* Position Number (Large Background) */}
                  <div className="absolute right-4 top-4 select-none text-[120px] leading-none font-black text-gray-900/50 dark:text-gray-300/30">
                    {event.position}
                  </div>

                  {/* Scan Lines Effect */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="mb-4 h-[1px] bg-cyan-400/30"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Blurred Content Area */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/60 group-hover:backdrop-blur-md dark:bg-white/40 dark:group-hover:bg-white/60" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-6 p-6">
                    {/* Header */}
                    <div>
                      {/* Event Code Badge */}
                      <div className="mb-4 inline-block">
                        <div className="flex items-center gap-2 border-2 border-red-600 bg-red-600/20 px-3 py-1">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
                          <span className="text-sm font-black tracking-wider text-red-500">
                            {event.code}
                          </span>
                        </div>
                      </div>

                      {/* Event Title */}
                      <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-white dark:text-gray-900">
                        {event.title}
                      </h3>

                      {/* Event Subtitle */}
                      <p className="mb-3 text-sm font-medium text-cyan-400 dark:text-cyan-600">
                        {event.subtitle}
                      </p>

                      {/* Team Size */}
                      <div className="mb-3 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{event.teamSize}</span>
                      </div>

                      {/* Divider */}
                      <div className="mb-4 h-[2px] w-full bg-gradient-to-r from-red-600 to-cyan-400" />
                    </div>

                    {/* Footer */}
                    <div>
                      {/* Status Badge */}
                      <div className="flex items-center justify-between">
                        <div className="inline-block border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 backdrop-blur-sm transition-colors group-hover:bg-cyan-400/20">
                          <span className="text-xs font-black uppercase tracking-wider text-cyan-400/70 transition-colors group-hover:text-cyan-400">
                            VIEW DETAILS
                          </span>
                        </div>
                        <div className="text-xs font-black tracking-wider text-gray-600 dark:text-gray-500">
                          POS {event.position}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Neon Border Glow */}
                  <div className="pointer-events-none absolute -inset-[1px] opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 bg-gradient-to-br from-red-600/0 via-cyan-400/0 to-red-600/0 group-hover:from-red-600/30 group-hover:via-cyan-400/30 group-hover:to-red-600/30" />

                  {/* Corner Brackets */}
                  <div className="absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-red-600/50 transition-colors group-hover:border-red-600" />
                  <div className="absolute right-2 top-2 h-6 w-6 border-r-2 border-t-2 border-cyan-400/50 transition-colors group-hover:border-cyan-400" />
                  <div className="absolute bottom-2 left-2 h-6 w-6 border-b-2 border-l-2 border-cyan-400/50 transition-colors group-hover:border-cyan-400" />
                  <div className="absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-red-600/50 transition-colors group-hover:border-red-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Page Event Details */}
      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onBack={() => {
            setSelectedEvent(null);
            onEventDetailsClose?.();
          }}
        />
      )}
    </>
  );
}
