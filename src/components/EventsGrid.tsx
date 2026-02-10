import { motion, AnimatePresence } from "motion/react";
import { X, Users, MapPin, User, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Event {
  code: string;
  position: number;
  title: string;
  subtitle: string;
  description: string;
  teamSize: string;
  venue: string;
  coordinator: string;
  registerLink: string;
}

export function EventsGrid() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    { 
      code: "E01", 
      position: 1,
      title: "Grand Prix of Code",
      subtitle: "A Competitive Coding Challenge",
      description: "A high-energy, battle-royale–style coding competition where teams of 3-4 compete through multiple elimination rounds. All teams begin together in Round 1 (The Drop), solving basic coding and debugging tasks, with the weakest and slowest teams eliminated. Round 2 (The Shrinking Zone) increases time pressure and focuses on logic-heavy and moderate algorithmic problems like sorting, searching, and classic LeetCode-style challenges, allowing only the top half to advance. In the Final Showdown, remaining teams face advanced problem-solving under extreme time constraints, with teams eliminated one by one as others finish correct solutions—crowning the last team standing as the winner and the second-last as runner-up.",
      teamSize: "3-4 members",
      venue: "TBD",
      coordinator: "TBD",
      registerLink: "https://forms.gle/a4qS4rVqWXjGPKpz6"
    },
    { 
      code: "E02", 
      position: 2,
      title: "Final Lap Escape",
      subtitle: "Tech Puzzle Challenge",
      description: "Participants compete in teams through a sequence of interconnected tech puzzles, where solving one challenge unlocks the next clue or digital access toward the final escape. The challenges include debugging buggy code snippets (in C, Python, Java, or JavaScript) to uncover passwords or keys, decrypting messages using ciphers like Caesar, substitution, binary, or Base64 to reveal locations or locks, and solving logic puzzles that gradually increase in technical complexity—keeping the experience engaging for both beginners and experienced coders.",
      teamSize: "2-3 members",
      venue: "TBD",
      coordinator: "TBD",
      registerLink: "https://docs.google.com/forms/d/1996xTndjfdsVX5S7GSTarGK8IQEh2k8Qf9ssUn8cD9A/edit?pli=1"
    },
    { 
      code: "E03", 
      position: 3,
      title: "Fuel the Link",
      subtitle: "Visual Connection Challenge",
      description: "This event is conducted for a maximum duration of two hours in the afternoon session and involves teams of 2–3 participants competing through multiple rounds of increasing difficulty. In each round, teams are presented with 2–4 images or visual clues that represent technical ideas, functions, or references. By logically connecting all the clues, teams must identify a single technical term, concept, or technology within a strict time limit of 30–60 seconds. Scoring is based on correctness and speed, with bonus points for the fastest valid responses. After each question, the correct connection is revealed with a brief technical explanation, and audience participation is allowed once teams have submitted their answers.",
      teamSize: "2-3 members",
      venue: "TBD",
      coordinator: "TBD",
      registerLink: "https://forms.google.com"
    },
    { 
      code: "E04", 
      position: 4,
      title: "The Podium Pitch",
      subtitle: "Poster Presentation Event",
      description: "The poster presentation event provides participants with an opportunity to present their technical ideas and solutions for a given problem statement through a well-structured poster. Participants are required to clearly explain the problem, their proposed approach, methodology, and expected outcomes using visual and technical content. Evaluation is based on clarity of concept, technical depth, innovation, and the effectiveness of the poster in communicating the solution.",
      teamSize: "2-3 members",
      venue: "TBD",
      coordinator: "TBD",
      registerLink: "https://forms.gle/7XzSmhZKHBVPPvVz9"
    },
    { 
      code: "E05", 
      position: 5,
      title: "Capture the Flag",
      subtitle: "Cybersecurity Challenge",
      description: "The Capture the Flag (CTF) event consists of a series of cybersecurity challenges where participants analyze problems, identify vulnerabilities, and solve puzzles to uncover hidden \"flags.\" Each challenge represents a real-world scenario involving cryptography, web applications, forensics, or networking. Participants earn points for every flag they capture, with increasing difficulty levels testing their analytical thinking, technical skills, and ability to apply cybersecurity concepts under time constraints.",
      teamSize: "2 members",
      venue: "TBD",
      coordinator: "TBD",
      registerLink: "https://forms.google.com"
    },
    { 
      code: "E06", 
      position: 6,
      title: "Code to the Upside-Down",
      subtitle: "Board Game Challenge",
      description: "Code to the Upside Down begins with teams of one to three participants assembling on the board, with multiple teams playing at the same time. The game starts as teams take turns rolling the dice, and each roll moves the team forward by the corresponding number of tiles. Once a team lands on a tile, they must answer the technical question placed on that tile, which may be based on programming basics, logical reasoning, computer science fundamentals, or current technology trends. If the team answers correctly, they remain on that tile and wait for their next turn. If the answer is incorrect, the team moves back to its previous position. At this point, the question is opened to all other teams, and the first team to buzz in gets a chance to answer; a correct buzzer answer allows that team to move two steps forward. If a team rolls a five, they immediately receive an extra turn. This sequence continues as teams progress across the board, moving deeper into the Upside Down with every roll, until one team reaches the final tile and successfully escapes, winning the game.",
      teamSize: "2-3 members",
      venue: "TBD",
      coordinator: "TBD",
      registerLink: "https://forms.google.com"
    },
  ];

  return (
    <section id="events" className="relative bg-black dark:bg-gray-50 py-24 px-4 overflow-hidden transition-colors duration-300">
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
            6 Events
          </motion.p>
        </div>

        {/* Events Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <motion.div
              key={event.code}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-white dark:via-gray-100 dark:to-white border border-gray-800 dark:border-gray-300 overflow-hidden">
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
                <div className="relative flex flex-col gap-6 p-6 z-10">
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
                      {event.title}
                    </h3>

                    {/* Event Subtitle */}
                    <p className="text-cyan-400 dark:text-cyan-600 text-sm mb-3 font-medium">
                      {event.subtitle}
                    </p>

                    {/* Team Size */}
                    <div className="flex items-center gap-2 text-gray-400 dark:text-gray-600 text-xs mb-3">
                      <Users className="w-4 h-4" />
                      <span>{event.teamSize}</span>
                    </div>

                    {/* Divider */}
                    <div className="h-[2px] w-full bg-gradient-to-r from-red-600 to-cyan-400 mb-4" />
                  </div>

                  {/* Footer */}
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center justify-between">
                      <div className="inline-block border border-cyan-400/30 px-3 py-1 bg-cyan-400/10 backdrop-blur-sm group-hover:bg-cyan-400/20 transition-colors">
                        <span className="text-cyan-400/70 group-hover:text-cyan-400 text-xs font-black tracking-wider uppercase transition-colors">
                          VIEW DETAILS
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-500 text-xs font-black tracking-wider">
                        POS {event.position}
                      </div>
                    </div>
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

        
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-white dark:via-gray-100 dark:to-white border border-gray-800 dark:border-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-black/90 dark:bg-white/90 backdrop-blur-sm border-b border-gray-800 dark:border-gray-300 p-6 z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Event Code Badge */}
                    <div className="inline-block mb-3">
                      <div className="flex items-center gap-2 border-2 border-red-600 px-3 py-1 bg-red-600/20">
                        <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                        <span className="text-red-500 font-black tracking-wider text-sm">
                          {selectedEvent.code}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-white dark:text-gray-900 uppercase tracking-tight">
                      {selectedEvent.title}
                    </h3>
                    <p className="text-cyan-400 text-sm mt-1 font-medium">
                      {selectedEvent.subtitle}
                    </p>
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 border border-gray-700 dark:border-gray-400 hover:border-red-600 dark:hover:border-red-500 hover:bg-red-600/10 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400 dark:text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Divider */}
                <div className="h-[2px] w-full bg-gradient-to-r from-red-600 to-cyan-400 mb-6" />

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Team Size */}
                  <div className="flex items-center gap-3 px-4 py-4 bg-cyan-400/10 border border-cyan-400/30">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <div>
                      <span className="text-gray-500 text-xs block">Team Size</span>
                      <span className="text-cyan-400 font-black tracking-wider text-sm">
                        {selectedEvent.teamSize}
                      </span>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-center gap-3 px-4 py-4 bg-red-600/10 border border-red-600/30">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <div>
                      <span className="text-gray-500 text-xs block">Venue</span>
                      <span className="text-red-500 font-black tracking-wider text-sm">
                        {selectedEvent.venue}
                      </span>
                    </div>
                  </div>

                  {/* Coordinator */}
                  <div className="flex items-center gap-3 px-4 py-4 bg-gray-800/50 dark:bg-gray-200/50 border border-gray-700 dark:border-gray-400">
                    <User className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                    <div>
                      <span className="text-gray-500 text-xs block">Coordinator</span>
                      <span className="text-white dark:text-gray-900 font-black tracking-wider text-sm">
                        {selectedEvent.coordinator}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-red-500 font-black tracking-wider text-sm mb-3 uppercase">
                    Event Description
                  </h4>
                  <p className="text-gray-400 dark:text-gray-600 text-base leading-relaxed text-justify">
                    {selectedEvent.description}
                  </p>
                </div>

                {/* Register Button */}
                <a
                  href={selectedEvent.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 border border-red-500 text-white font-black tracking-wider uppercase transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    REGISTER NOW
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                {/* Racing Stripe Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-red-600 via-cyan-400 to-transparent mt-6" />
              </div>

              {/* Corner Brackets */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-red-600/50" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-red-600/50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
