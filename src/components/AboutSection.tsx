import { motion } from "motion/react";
import { Gauge, Zap, Trophy, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Gauge,
      title: "xyz",
      description: "abc abc",
    },
    {
      icon: Zap,
        title: "xyz",
        description: "abc abc",
    },
    {
      icon: Trophy,
        title: "xyz",
        description: "abc abc",
    },
    {
      icon: Users,
        title: "xyz",
        description: "abc abc",
    },
  ];

  return (
    <section className="relative bg-black dark:bg-gray-50 py-24 px-4 overflow-hidden transition-colors duration-300">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Carbon Fiber Texture */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1758563920442-280b4e7afe7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMHRleHR1cmV8ZW58MXx8fHwxNzY5MzQ2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Carbon Fiber"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-cyan-400" />
            <span className="text-red-500 tracking-[0.3em] text-sm font-black">
              RACE BRIEFING
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white dark:text-gray-900 uppercase tracking-tight mb-6"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
            ABOUT THE
            <span className="text-red-600"> SYMPOSIUM</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl"
          >
            <p className="text-gray-400 dark:text-gray-600 text-lg leading-relaxed mb-4">
              Protocol 26e is AIT's premier technical symposium, designed to accelerate innovation
              and technical excellence. Like a Formula 1 race weekend, we bring together the best
              minds to compete, collaborate, and push the limits of what's possible.
            </p>
            <p className="text-gray-500 dark:text-gray-700 text-base leading-relaxed">
              Experience cutting-edge technical challenges, workshops, and competitions that will
              test your skills under pressure. This is where champions are made.
            </p>
          </motion.div>
        </div>

        {/* Telemetry-Style Stats Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80 dark:from-white/90 dark:to-gray-100/90 backdrop-blur-xl border border-gray-800 dark:border-gray-300 group-hover:border-cyan-500/50 dark:group-hover:border-cyan-400/70 transition-all duration-300" />
              
              {/* Neon Glow on Hover */}
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-all duration-300" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-red-600/0 via-cyan-400/0 to-red-600/0 group-hover:from-red-600/20 group-hover:via-cyan-400/20 group-hover:to-red-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="relative p-6 z-10">
                {/* Icon */}
                <div className="mb-4 relative">
                  <feature.icon className="w-10 h-10 text-red-600 group-hover:text-cyan-400 transition-colors duration-300" strokeWidth={1.5} />
                  <div className="absolute top-0 left-0 w-10 h-10 border border-red-600/30 group-hover:border-cyan-400/30 transform rotate-45 transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-white dark:text-gray-900 font-black tracking-tight text-sm mb-2 uppercase">
                  {feature.title}
                </h3>

                {/* Divider */}
                <div className="h-[2px] w-full bg-gradient-to-r from-red-600/50 to-transparent mb-3" />

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Stats Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border-l-4 border-red-600 pl-8 py-6 bg-gradient-to-r from-red-600/10 to-transparent backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl font-black text-cyan-400 mb-2">500+</div>
              <div className="text-gray-500 dark:text-gray-600 text-sm tracking-wide">PARTICIPANTS EXPECTED</div>
            </div>
            <div>
              <div className="text-5xl font-black text-red-600 mb-2">₹99+</div>
              <div className="text-gray-500 dark:text-gray-600 text-sm tracking-wide">PRIZE POOL</div>
            </div>
            <div>
              <div className="text-5xl font-black text-cyan-400 mb-2">48HR</div>
              <div className="text-gray-500 dark:text-gray-600 text-sm tracking-wide">NON-STOP INNOVATION</div>
            </div>
          </div>

          {/* Racing Stripe Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-cyan-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
