import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const checkpoints = [
    {
      sector: "S1",
      time: "09:30 AM",
      title: "Inauguration of PROTOCOL 26E",
      location: "Library Seminar Hall"
    },
    {
      sector: "S2",
      time: "10:00 AM",
      title: "It's lights out and away we go!",
      location: "Respective Event Venues",
      description: "Event Begins"
    },
    {
      sector: "S3",
      time: "2:00 PM",
      title: "Valedictory Ceremony",
      location: "Library Seminar Hall"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-950 to-black dark:from-gray-50 dark:via-white dark:to-gray-50 py-24 overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1675962387436-73a6046907fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB0cmFjayUyMGxpZ2h0c3xlbnwxfHx8fDE3Njk0MjI3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Track"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-red-600" />
            <Clock className="w-6 h-6 text-red-600" />
            <span className="text-red-500 tracking-[0.3em] text-sm font-black">
              RACE SCHEDULE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
            LAP <span className="text-cyan-400">TRACKER</span>
          </motion.h2>
        </div>

        {/* Horizontal Scrolling Timeline */}
        <div className="relative">
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute -top-8 right-0 text-gray-600 text-xs flex items-center gap-2"
          >
            <div className="w-4 h-4 border border-gray-600 flex items-center justify-center">
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </div>
            Scroll horizontally
          </motion.div>

          <div
            ref={containerRef}
            className="overflow-x-auto overflow-y-hidden pb-8 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-red-600"
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="relative min-w-max py-12">
              {/* Main Track Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-cyan-400 to-red-600 transform -translate-y-1/2" />
              
              {/* Progress Indicator */}
              <motion.div
                className="absolute top-1/2 left-0 h-2 bg-cyan-400 transform -translate-y-1/2 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                style={{
                  width: useTransform(scrollXProgress, [0, 1], ["0%", "100%"]),
                }}
              />

              {/* Checkpoints */}
              <div className="flex gap-24 px-12 items-stretch">
                {checkpoints.map((checkpoint, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex flex-col items-center flex-1"
                  >
                    {/* Sector Number Circle */}
                    <div className="relative z-20 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-full border-4 flex items-center justify-center relative ${
                          checkpoint.sector === "F"
                            ? "border-red-600 bg-red-600/20"
                            : "border-cyan-400 bg-cyan-400/20"
                        }`}
                      >
                        <span
                          className={`text-xl font-black ${
                            checkpoint.sector === "F" ? "text-red-500" : "text-cyan-400"
                          }`}
                        >
                          {checkpoint.sector}
                        </span>
                        
                        {/* Pulse Effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-full border-2 ${
                            checkpoint.sector === "F" ? "border-red-600" : "border-cyan-400"
                          }`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.2,
                          }}
                        />
                      </motion.div>

                      {/* Connecting Line to Track */}
                      <div className="absolute top-full left-1/2 w-[2px] h-8 bg-gray-700 transform -translate-x-1/2" />
                    </div>

                    {/* Info Card */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="w-72 flex-1 bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-800 backdrop-blur-sm p-6 relative group"
                    >
                      {/* Neon Glow */}
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600/0 via-cyan-400/0 to-red-600/0 group-hover:from-red-600/30 group-hover:via-cyan-400/30 group-hover:to-red-600/30 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

                      <div className="relative z-10">
                        {/* Time Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 bg-red-600/20 border border-red-600/50 px-3 py-1">
                            <Clock className="w-3 h-3 text-red-500" />
                            <span className="text-red-500 text-sm font-black">
                              {checkpoint.time}
                            </span>
                          </div>
                          <div className="text-gray-500 text-xs font-black tracking-wider">
                            {checkpoint.date}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-white font-black text-lg mb-2 uppercase tracking-tight">
                          {checkpoint.title}
                        </h3>

                        {/* Divider */}
                        <div className="h-[2px] w-full bg-gradient-to-r from-red-600 to-cyan-400 mb-3" />

                        {/* Location */}
                        <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{checkpoint.location}</span>
                        </div>

                        {/* Description */}
                        {checkpoint.description && (
                          <p className="text-gray-500 text-sm">
                            {checkpoint.description}
                          </p>
                        )}

                        {/* Corner Accent */}
                        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan-400/30" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-red-600/30" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Finish Line */}
              <div className="absolute top-1/2 right-0 w-12 transform -translate-y-1/2">
                <div className="h-24 w-full bg-[repeating-linear-gradient(45deg,#000,#000_10px,#fff_10px,#fff_20px)]" />
              </div>
            </div>
          </div>

          {/* Custom Scrollbar Style */}
          <style>{`
            .scrollbar-thin::-webkit-scrollbar {
              height: 8px;
            }
            .scrollbar-track-gray-900::-webkit-scrollbar-track {
              background-color: #111827;
            }
            .scrollbar-thumb-red-600::-webkit-scrollbar-thumb {
              background-color: #dc2626;
              border-radius: 4px;
            }
            .scrollbar-thumb-red-600::-webkit-scrollbar-thumb:hover {
              background-color: #b91c1c;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
