import { motion } from "motion/react";
import { Mail, Phone, Users } from "lucide-react";

export function Coordinators() {
  const coordinators = [
    {
      number: "01",
      name: "MADHUMITHA R",
      role: "PRESIDENT",
      department: "placeholder",
      email: "placeholder",
      phone: "+91 9498330139",
    },
    {
        number: "02",
        name: "SANJEEV KUMAR",
        role: "VICE-PRESIDENT",
        department: "placeholder",
        email: "placeholder",
        phone: "+91 7358646539",
    },
    {
        number: "03",
        name: "Swathi",
        role: "General Secretary",
        department: "placeholder",
        email: "placeholder",
        phone: "+91 7358665496",
    },
    {
        number: "04",
        name: "Iyappan",
        role: "Joint-Secretary",
        department: "placeholder",
        email: "placeholder",
        phone: "+91 9344025755",
    },
  ];

  return (
    <section className="relative bg-black py-24 px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
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
            <Users className="w-6 h-6 text-red-600" />
            <span className="text-red-500 tracking-[0.3em] text-sm font-black">
              PIT CREW
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
            TEAM <span className="text-cyan-400">COORDINATORS</span>
          </motion.h2>
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coordinators.map((coordinator, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 overflow-hidden">
                {/* Driver Number (Large Background) */}
                <div className="absolute -top-8 -right-8 text-[180px] font-black text-red-600/10 leading-none select-none">
                  {coordinator.number}
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-cyan-400/0 group-hover:from-red-600/10 group-hover:to-cyan-400/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative p-6 z-10">
                  {/* Driver Number Badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-3">
                      <div className="w-12 h-12 border-2 border-red-600 bg-red-600/20 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-black">
                          {coordinator.number}
                        </span>
                      </div>
                      <div className="h-12 w-[2px] bg-gradient-to-b from-red-600 to-cyan-400" />
                    </div>
                  </div>

                  {/* Profile Image Placeholder */}
                  <div className="mb-4 relative">
                    <div className="w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-700 group-hover:text-cyan-400/50 transition-colors" />
                    </div>
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-600" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-600" />
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-black text-xl uppercase tracking-tight mb-1">
                    {coordinator.name}
                  </h3>

                  {/* Role */}
                  <p className="text-cyan-400 text-sm font-black uppercase tracking-wide mb-1">
                    {coordinator.role}
                  </p>

                  {/* Divider */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-red-600 via-cyan-400 to-transparent mb-4" />

                  {/* Contact Info */}
                  <div className="space-y-2"> 
                    <div className="flex items-center gap-2 text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                      <Phone className="w-3 h-3 text-cyan-400" />
                      <span>{coordinator.phone}</span>
                    </div>
                  </div>

                  {/* Racing Stripe at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Neon Border Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-red-600/0 via-cyan-400/0 to-red-600/0 group-hover:from-red-600/30 group-hover:via-cyan-400/30 group-hover:to-red-600/30 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Need assistance?{" "}
            <span className="text-cyan-400 font-black">Contact our pit crew</span> for any queries
          </p>
        </motion.div>
      </div>
    </section>
  );
}
