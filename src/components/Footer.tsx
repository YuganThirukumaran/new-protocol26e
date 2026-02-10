import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "mailto:ait@svce.ac.in" },
    { icon: Mail, label: "Email", href: "ait@svce.ac.in" },
  ];

  return (
    <footer className="relative bg-black dark:bg-gray-50 border-t border-gray-900 dark:border-gray-300 overflow-hidden transition-colors duration-300">
      {/* Track Map Inspired Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <motion.path
            d="M 0 200 Q 150 100 300 200 T 600 200 Q 750 100 900 200 L 1000 200"
            fill="none"
            stroke="#dc2626"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0 250 Q 200 150 400 250 T 800 250 L 1000 250"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="text-4xl font-black text-white dark:text-gray-900 uppercase tracking-tight mb-2"
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
              >
                PROTOCOL
                <span className="block text-red-600">
                  26<span className="text-cyan-400">e</span>
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-500 text-sm mb-4 italic">
                Designed for Speed. Built for Innovation.
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-cyan-400" />
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white dark:text-gray-900 font-black text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Events", "Schedule", "Team", "Sponsors"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-cyan-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-cyan-400 group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white dark:text-gray-900 font-black text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-500 dark:text-gray-600 text-sm">
                <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <span>
                  svce
                  <br />
                 chennai(30km away), tamilnadu
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 dark:text-gray-600 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>ait@svce.ac.in</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 dark:text-gray-600 text-sm">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white dark:text-gray-900 font-black text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-12 h-12 border-2 border-gray-800 dark:border-gray-300 hover:border-cyan-400 dark:hover:border-cyan-500 bg-gray-900/50 dark:bg-white/80 hover:bg-cyan-400/10 dark:hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-700 group-hover:text-cyan-400 dark:group-hover:text-cyan-500 transition-colors" />
                  <div className="absolute -inset-[2px] bg-cyan-400/0 group-hover:bg-cyan-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Divider with Racing Stripe */}
        <div className="relative mb-8">
          <div className="h-[2px] bg-gradient-to-r from-red-600 via-cyan-400 to-red-600" />
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-white"
            animate={{
              left: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "20px" }}
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 dark:text-gray-500 text-sm"
          >
            © 2026 Protocol 26e - AIT Technical Symposium. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 text-gray-600 dark:text-gray-500 text-xs"
          >
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <span className="w-1 h-1 bg-gray-800 rounded-full" />
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Code of Conduct
            </a>
          </motion.div>
        </div>

        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 border border-gray-900 dark:border-gray-300 bg-gray-900/50 dark:bg-white/80 px-4 py-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-gray-700 dark:text-gray-600 text-xs font-black tracking-wider">
              PROTOCOL v26e.2026
            </span>
          </div>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-red-600/20" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/20" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/20" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-red-600/20" />
    </footer>
  );
}
