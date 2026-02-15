import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { EventDetails } from "./EventDetails";
import { events, type Event } from "../data/events";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Timeline", href: "#timeline" },
  // { label: "Sponsors", href: "#sponsors" },
  { label: "Team", href: "#team" },
];

const studentCoordinators = [
  { name: "Madhumitha R", phone: "+91 9498330139" },
  { name: "Sanjeev Kumar", phone: "+91 7358646539" },
  { name: "Swathi A", phone: "+91 7358665496" },
  { name: "Iyappan N", phone: "+91 9344025755" },
];

const socialLinks = [
  { icon: Instagram, label: "AIT Instagram", handle: "@ait_svce", href: "https://www.instagram.com/ait_svce/?hl=en" },
  { icon: Instagram, label: "CSI Instagram", handle: "@svce_csi", href: "https://www.instagram.com/svce_csi/" },
  { icon: Instagram, label: "CyberNova Instagram", handle: "@cybernova_svce", href: "https://www.instagram.com/cybernova_svce" },
  { icon: Linkedin, label: "LinkedIn", handle: "AIT LinkedIn", href: "https://www.linkedin.com/company/association-of-information-technologists/" },
  { icon: Mail, label: "Email", handle: "ait@svce.ac.in", href: "mailto:ait@svce.ac.in" },
];

interface FooterProps {
  onEventDetailsOpen?: () => void;
  onEventDetailsClose?: () => void;
}

export function Footer({ onEventDetailsOpen, onEventDetailsClose }: FooterProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <>
      <footer className="relative overflow-hidden border-t border-gray-900 bg-black transition-colors duration-300 dark:border-gray-300 dark:bg-gray-50">
        {/* Track Map Inspired Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
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

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="mb-2 text-4xl font-black uppercase tracking-tight text-white dark:text-gray-900"
              style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
            >
              PROTOCOL
              <span className="block text-red-600">
                26<span className="text-cyan-400">e</span>
              </span>
            </h3>
            <p className="mb-4 text-sm italic text-gray-500 dark:text-gray-600">
              National-level technical symposium by the Department of Information Technology.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-cyan-400" />

            <div className="mt-6 overflow-hidden rounded-[24px] border border-gray-800/70 bg-black/40 p-1 dark:border-gray-300 dark:bg-white/70">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7633829245924!2d79.9720389!3d12.986980299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd0cfb6e7ab%3A0x3294da3faad96a9!2sSri%20Venkateswara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1770950893666!5m2!1sen!2sin"
                className="h-36 w-full rounded-[20px] border-0 lg:h-40"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Sri Venkateswara College of Engineering location"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white dark:text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-cyan-400 dark:text-gray-600 dark:hover:text-cyan-500"
                  >
                    <span className="h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white dark:text-gray-900">
              Events
            </h4>
            <ul className="space-y-2">
              {events.map((event) => (
                <li key={event.code}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEvent(event);
                      onEventDetailsOpen?.();
                    }}
                    className="group flex items-center gap-2 text-left text-sm text-gray-500 transition-colors hover:text-red-500 dark:text-gray-600 dark:hover:text-red-600"
                  >
                    <span className="h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-4" />
                    {event.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white dark:text-gray-900">
              Contact Us
            </h4>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <span>
                  Sri Venkateswara College of Engineering
                  <br />
                  Post Bag No.1, Pennalur Village
                  <br />
                  Chennai - Bengaluru Highway
                  <br />
                  Sriperumbudur Tk., Tamil Nadu - 602117
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-600">
                <Mail className="h-4 w-4 shrink-0 text-cyan-400" />
                <a href="mailto:ait@svce.ac.in" className="transition-colors hover:text-cyan-400">
                  ait@svce.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-600">
                <Phone className="h-4 w-4 shrink-0 text-red-600" />
                <span>+91 9498330139</span>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="mb-3 text-xs font-black uppercase tracking-wider text-cyan-400 dark:text-cyan-600">
                Follow Us
              </h5>
              <div className="flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center gap-3 rounded px-2 py-1.5 transition-all duration-300 hover:bg-gray-900/60 dark:hover:bg-gray-200/60"
                    aria-label={social.label}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-gray-800 bg-gray-900/50 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/10 dark:border-gray-300 dark:bg-white/80 dark:group-hover:border-cyan-500">
                      <social.icon className="h-4 w-4 text-gray-600 transition-colors group-hover:text-cyan-400 dark:text-gray-700 dark:group-hover:text-cyan-500" />
                    </div>
                    <span className="text-xs text-gray-500 transition-colors group-hover:text-cyan-400 dark:text-gray-600 dark:group-hover:text-cyan-500">
                      {social.handle}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider with Racing Stripe */}
        <div className="relative mb-8">
          <div className="h-[2px] bg-gradient-to-r from-red-600 via-cyan-400 to-red-600" />
          <motion.div
            className="absolute left-0 top-0 h-[2px] bg-white"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ width: "20px" }}
          />
        </div>

        {/* Student Coordinators
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 border border-gray-800/60 bg-gray-950/50 p-6 dark:border-gray-300 dark:bg-white/70"
        >
          <h4
            className="mb-4 text-2xl font-black uppercase tracking-tight text-white dark:text-gray-900"
            style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
          >
            Student Coordinators
          </h4>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {studentCoordinators.map((coordinator) => (
              <div
                key={coordinator.name}
                className="rounded-md border border-gray-800/80 bg-black/60 px-3 py-2 dark:border-gray-300 dark:bg-white/80"
              >
                <p className="text-sm font-semibold text-white dark:text-gray-900">{coordinator.name}</p>
                <p className="mt-1 text-sm font-black text-cyan-400 dark:text-cyan-600">{coordinator.phone}</p>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-600 dark:text-gray-500"
          >
            (c) 2026 Protocol 26e - AIT Technical Symposium. All rights reserved.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 text-xs text-gray-600 dark:text-gray-500"
          >
            <a href="#" className="transition-colors hover:text-cyan-400">
              Privacy Policy
            </a>
            <span className="h-1 w-1 rounded-full bg-gray-800" />
            <a href="#" className="transition-colors hover:text-cyan-400">
              Terms of Service
            </a>
            <span className="h-1 w-1 rounded-full bg-gray-800" />
            <a href="#" className="transition-colors hover:text-cyan-400">
              Code of Conduct
            </a>
          </motion.div> */}
        </div>

        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 border border-gray-900 bg-gray-900/50 px-4 py-2 dark:border-gray-300 dark:bg-white/80">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-xs font-black tracking-wider text-gray-700 dark:text-gray-600">
              PROTOCOL v26e.2026
            </span>
          </div>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-red-600/20" />
      <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-cyan-400/20" />
      <div className="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 border-cyan-400/20" />
      <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-red-600/20" />
      </footer>

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
