import { motion } from "motion/react";
import { Gauge, Zap, Trophy, Users } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Trophy,
        title: "Win Exciting Cash Prize",
        description: "Prize Pool Worth",
        info: "25k+"
    },
    {
      icon: Users,
        title: "Participants",
        description: "500+",
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
            className="max-w-5xl"
          >
            <p className="text-gray-400 dark:text-gray-600 text-lg leading-relaxed mb-4 text-justify">
              The Department of Information Technology, Sri Venkateswara College of Engineering presents, <span className="text-7sm font-black text-white dark:text-gray-900 uppercase tracking-tight">Protocol </span><span className="text-red-600 font-bold">26E</span> is AIT's premier technical symposium, designed to accelerate innovation
              and technical excellence. Like a Formula 1 race weekend, we bring together the best
              minds to compete, collaborate, and push the limits of what's possible.
            </p>
           
          </motion.div>
        </div>



        {/* Large Stats Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border-l-4 border-red-600 pl-8 py-6 bg-gradient-to-r from-red-600/10 to-transparent backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-5xl font-black text-cyan-400 mb-2">500+</div>
              <div className="text-gray-500 dark:text-gray-600 text-sm tracking-wide">PARTICIPANTS EXPECTED</div>
            </div>
            <div>
              <div className="text-5xl font-black text-red-600 mb-2">₹25k+</div>
              <div className="text-gray-500 dark:text-gray-600 text-sm tracking-wide">PRIZE POOL</div>
            </div>
          </div>

          {/* Racing Stripe Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-cyan-400 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
