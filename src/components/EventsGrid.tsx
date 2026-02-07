import { motion } from "motion/react";
import { Lock, Flag } from "lucide-react";

export function EventsGrid() {
  const events = [
    { code: "E01", position: 1 },
    { code: "E02", position: 2 },
    { code: "E03", position: 3 },
    { code: "E04", position: 4 },
    { code: "E05", position: 5 },
    { code: "E06", position: 6 },
    { code: "E07", position: 7 },
    { code: "E08", position: 8 },
  ];

  return (
    <section className="relative bg-black dark:bg-gray-50 py-24 px-4 overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[120px]" />
      </div>

      {/* Track Lines Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{ top: `${20 + i * 20}%` }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-red-600" />
            <Flag className="w-6 h-6 text-red-600" />
            <span className="text-red-500 tracking-[0.3em] text-sm font-black">
              STARTING GRID
            </span>
            <Flag className="w-6 h-6 text-cyan-400" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white dark:text-gray-900 uppercase tracking-tight mb-4"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
            THE <span className="text-red-600">GRID</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-cyan-400 text-lg tracking-wide"
          >
            8 Events • 8 Challenges • 1 Champion
          </motion.p>
        </div>

        {/* Events Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <motion.div
              key={event.code}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-[3/4] cursor-pointer"
            >
              {/* Card Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-white dark:via-gray-100 dark:to-white border border-gray-800 dark:border-gray-300 overflow-hidden">
                {/* Position Number (Large Background) */}
                <div className="absolute top-4 right-4 text-[120px] font-black text-gray-900/50 dark:text-gray-300/30 leading-none select-none">
                  {event.position}
                </div>

                {/* Scan Lines Effect */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="h-[1px] bg-cyan-400/30 mb-4"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Blurred Content Area */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black/40 dark:bg-white/40 group-hover:backdrop-blur-md group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-all duration-300" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 z-10">
                  {/* Header */}
                  <div>
                    {/* Event Code Badge */}
                    <div className="inline-block mb-4">
                      <div className="flex items-center gap-2 border-2 border-red-600 px-3 py-1 bg-red-600/20">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                        <span className="text-red-500 font-black tracking-wider text-sm">
                          {event.code}
                        </span>
                      </div>
                    </div>

                    {/* Event Title */}
                    <h3 className="text-2xl font-black text-white dark:text-gray-900 uppercase tracking-tight mb-3">
                      EVENT TO BE
                      <span className="block text-cyan-400">REVEALED</span>
                    </h3>

                    {/* Divider */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-red-600 to-cyan-400 mb-4" />
                  </div>

                  {/* Center Lock Icon */}
                  <div className="flex-1 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Lock className="w-16 h-16 text-cyan-400/30 group-hover:text-cyan-400/50 transition-colors" strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center justify-between">
                      <div className="inline-block border border-cyan-400/30 px-3 py-1 bg-cyan-400/10 backdrop-blur-sm">
                        <span className="text-cyan-400/70 text-xs font-black tracking-wider uppercase">
                          LOCKED
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-500 text-xs font-black tracking-wider">
                        POS {event.position}
                      </div>
                    </div>

                    {/* Hover Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-3 text-center"
                    >
                      <p className="text-gray-500 dark:text-gray-600 text-xs italic">
                        Awaiting Green Flag...
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Neon Border Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-red-600/0 via-cyan-400/0 to-red-600/0 group-hover:from-red-600/30 group-hover:via-cyan-400/30 group-hover:to-red-600/30 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-red-600/50 group-hover:border-red-600 transition-colors" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-red-600/50 group-hover:border-red-600 transition-colors" />
              </div>

              {/* Grid Position Indicator */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-black dark:bg-white border-2 border-red-600 dark:border-red-500 flex items-center justify-center z-20">
                <span className="text-red-500 text-sm font-black">{event.position}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border-l-4 border-red-600 pl-6 text-left">
            <p className="text-gray-500 dark:text-gray-600 text-sm mb-2">
              <span className="text-cyan-400 font-black">LIGHTS OUT:</span> Events unlock sequentially
            </p>
            <p className="text-gray-600 dark:text-gray-500 text-xs">
              Registration opens soon. Stay tuned for the green flag.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
