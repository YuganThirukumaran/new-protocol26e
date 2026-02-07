import { motion } from "motion/react";
import { Trophy, Zap, Award } from "lucide-react";

export function Sponsors() {
  const sponsorTiers = [
    {
      tier: "Title Sponsor",
      icon: Trophy,
      color: "red",
      spots: 1,
      description: "Primary Racing Partner",
    },
    {
      tier: "Platinum Partners",
      icon: Award,
      color: "cyan",
      spots: 3,
      description: "Premium Technical Sponsors",
    },
    {
      tier: "Gold Partners",
      icon: Zap,
      color: "red",
      spots: 5,
      description: "Associate Sponsors",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-950 to-black py-24 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[150px]" />
      </div>

      {/* Carbon Fiber Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)`,
          }}
        />
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
            <Trophy className="w-6 h-6 text-red-600" />
            <span className="text-red-500 tracking-[0.3em] text-sm font-black">
              LIVERY PARTNERS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
            OUR <span className="text-cyan-400">SPONSORS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Powered by industry leaders who fuel innovation and excellence
          </motion.p>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, tierIdx) => (
            <motion.div
              key={tierIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tierIdx * 0.2 }}
            >
              {/* Tier Header */}
              <div className="flex items-center gap-4 mb-6">
                <tier.icon
                  className={`w-8 h-8 ${
                    tier.color === "red" ? "text-red-600" : "text-cyan-400"
                  }`}
                />
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    {tier.tier}
                  </h3>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>
                <div
                  className={`ml-auto h-[2px] flex-1 max-w-md bg-gradient-to-r ${
                    tier.color === "red"
                      ? "from-red-600 to-transparent"
                      : "from-cyan-400 to-transparent"
                  }`}
                />
              </div>

              {/* Sponsor Slots */}
              <div
                className={`grid gap-6 ${
                  tier.spots === 1
                    ? "grid-cols-1"
                    : tier.spots === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                }`}
              >
                {[...Array(tier.spots)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    {/* Sponsor Card with Livery-Style Layout */}
                    <div
                      className={`relative overflow-hidden border-2 bg-gradient-to-br from-gray-900 to-black ${
                        tier.color === "red"
                          ? "border-red-600/30 group-hover:border-red-600"
                          : "border-cyan-400/30 group-hover:border-cyan-400"
                      } transition-all duration-300 ${
                        tier.spots === 1 ? "aspect-[16/6]" : "aspect-square"
                      }`}
                    >
                      {/* Angled Background Stripe */}
                      <div
                        className={`absolute inset-0 opacity-10 ${
                          tier.color === "red" ? "bg-red-600" : "bg-cyan-400"
                        }`}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 h-full flex items-center justify-center p-8">
                        {/* Placeholder Logo Area */}
                        <div className="text-center">
                          <div
                            className={`inline-flex items-center justify-center w-20 h-20 border-2 rounded-full mb-3 ${
                              tier.color === "red"
                                ? "border-red-600/50 bg-red-600/10"
                                : "border-cyan-400/50 bg-cyan-400/10"
                            } group-hover:scale-110 transition-transform duration-300`}
                          >
                            <tier.icon
                              className={`w-10 h-10 ${
                                tier.color === "red" ? "text-red-600/50" : "text-cyan-400/50"
                              }`}
                            />
                          </div>
                          <div className="text-gray-600 text-sm font-black tracking-wider">
                            SPONSOR SLOT
                          </div>
                          <div className="text-gray-700 text-xs mt-1">Available</div>
                        </div>

                        {/* Corner Numbers */}
                        <div
                          className={`absolute top-2 left-2 w-8 h-8 border-2 flex items-center justify-center ${
                            tier.color === "red"
                              ? "border-red-600/50 text-red-600"
                              : "border-cyan-400/50 text-cyan-400"
                          }`}
                        >
                          <span className="text-xs font-black">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Neon Glow Effect */}
                      <div
                        className={`absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md ${
                          tier.color === "red" ? "bg-red-600/30" : "bg-cyan-400/30"
                        } pointer-events-none`}
                      />

                      {/* Racing Stripes */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                        <div
                          className={`flex-1 ${
                            tier.color === "red" ? "bg-red-600" : "bg-cyan-400"
                          }`}
                        />
                        <div className="flex-1 bg-black" />
                        <div
                          className={`flex-1 ${
                            tier.color === "red" ? "bg-red-600" : "bg-cyan-400"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-cyan-400 blur-xl opacity-50" />
            <div className="relative bg-black border-2 border-gray-800 px-8 py-6">
              <h3 className="text-xl font-black text-white uppercase mb-2 tracking-tight">
                Interested in Sponsoring?
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Join the grid and power the future of technical innovation
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-black uppercase tracking-wider overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Contact Us</span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.button>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
