import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black dark:bg-white">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40 dark:opacity-60"
          onError={(e) => {
            console.error("Video failed to load, using fallback image");
            const video = e.currentTarget;
            const img = document.createElement('img');
            img.src = "https://images.unsplash.com/photo-1614949194403-9602bdc14a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMGNhciUyMGRhcmt8ZW58MXx8fHwxNzY5NDIyNzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
            img.className = "h-full w-full object-cover";
            img.alt = "F1 Car";
            video.parentNode?.replaceChild(img, video);
          }}
        >
          {/* Vercel serves files from the root /public folder at /hero-video.mp4 */}
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1614949194403-9602bdc14a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMGNhciUyMGRhcmt8ZW58MXx8fHwxNzY5NDIyNzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="F1 Car"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black dark:from-white/60 dark:via-white/40 dark:to-white/80" />
      </div>

      {/* Animated Speed Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: "-100%",
              width: `${200 + Math.random() * 400}px`,
            }}
            animate={{
              left: ["0%", "150%"],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Glowing Track Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M 0 200 Q 400 100 800 200 T 1600 200"
            fill="none"
            stroke="url(#trackGradient)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <div className="inline-block border-2 border-red-600 px-4 py-1 mb-6 bg-red-600/10 backdrop-blur-sm">
            <span className="text-red-500 tracking-[0.3em] text-sm font-bold">
              A NATIONAL-LEVEL TECHNICAL SYMPOSIUM
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-7xl md:text-9xl font-black tracking-tighter text-white dark:text-gray-900 uppercase"
          style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
        >
          PROTOCOL
          <span className="block text-red-600 mt-2 relative">
            26<span className="text-cyan-400">e</span>
            <motion.div
              className="absolute -right-4 top-0 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 text-xl md:text-2xl text-gray-400 dark:text-gray-600 tracking-wide max-w-2xl"
        >
          Where Innovation Meets Velocity
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-8 py-4 bg-red-600 text-white overflow-hidden font-black tracking-wider uppercase cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700 bg-[length:200%_100%] animate-[shimmer_2s_infinite]" />
          <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-2">
            Enter the Circuit
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
        </motion.button>

        {/* Race Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8 md:gap-16"
        >
          {[
            { label: "EVENTS", value: "06" },
            { label: "INNOVATION", value: "∞" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-600 tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-red-600" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan-400" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan-400" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-red-600" />

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
