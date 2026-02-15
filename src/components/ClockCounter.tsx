import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

/* ════════════════════════════════════════════════════════════
   🎯 SET YOUR TARGET DATE HERE
   ════════════════════════════════════════════════════════════ */
const TARGET_DATE = new Date("2026-02-21T09:00:00");
/* ════════════════════════════════════════════════════════════ */

/* ── Rotation map ── */
const rotation: Record<string, [number, number]> = {
  " ": [135, 135],
  "┘": [180, 270],
  "└": [0, 270],
  "┐": [90, 180],
  "┌": [0, 90],
  "-": [0, 180],
  "|": [90, 270],
};

/* ── Digit shapes (4×6 grid of symbols) ── */
const digitShapes: Record<string, string[]> = {
  "0": ["┌","-","-","┐", "|","┌","┐","|", "|","|","|","|", "|","|","|","|", "|","└","┘","|", "└","-","-","┘"],
  "1": ["┌","-","┐"," ", "└","┐","|"," ", " ","|","|"," ", " ","|","|"," ", "┌","┘","└","┐", "└","-","-","┘"],
  "2": ["┌","-","-","┐", "└","-","┐","|", "┌","-","┘","|", "|","┌","-","┘", "|","└","-","┐", "└","-","-","┘"],
  "3": ["┌","-","-","┐", "└","-","┐","|", " ","┌","┘","|", " ","└","┐","|", "┌","-","┘","|", "└","-","-","┘"],
  "4": ["┌","┐","┌","┐", "|","|","|","|", "|","└","┘","|", "└","-","┐","|", " "," ","|","|", " "," ","└","┘"],
  "5": ["┌","-","-","┐", "|","┌","-","┘", "|","└","-","┐", "└","-","┐","|", "┌","-","┘","|", "└","-","-","┘"],
  "6": ["┌","-","-","┐", "|","┌","-","┘", "|","└","-","┐", "|","┌","┐","|", "|","└","┘","|", "└","-","-","┘"],
  "7": ["┌","-","-","┐", "└","-","┐","|", " "," ","|","|", " "," ","|","|", " "," ","|","|", " "," ","└","┘"],
  "8": ["┌","-","-","┐", "|","┌","┐","|", "|","└","┘","|", "|","┌","┐","|", "|","└","┘","|", "└","-","-","┘"],
  "9": ["┌","-","-","┐", "|","┌","┐","|", "|","└","┘","|", "└","-","┐","|", "┌","-","┘","|", "└","-","-","┘"],
};

const getRotation = (digitChar: string, cellIndex: number): [number, number] => {
  const shape = digitShapes[digitChar];
  if (shape) {
    const pair = rotation[shape[cellIndex]];
    if (pair) return pair;
  }
  return rotation[" "];
};

/* ── Countdown helper ── */
const getCountdown = (): { days: string; hours: string; minutes: string; seconds: string } => {
  const now = new Date();
  const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime());

  const totalSeconds = Math.floor(diff / 1000);
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return {
    days: String(d).padStart(2, "0"),
    hours: String(h).padStart(2, "0"),
    minutes: String(m).padStart(2, "0"),
    seconds: String(s).padStart(2, "0"),
  };
};

/* ── Sizing uses CSS vars set per breakpoint ── */
const CELL_SIZE = "var(--coc-cell)";
const BORDER_SIZE = "var(--coc-border)";
const GAP = "var(--coc-gap)";
const FIELD_GAP = "var(--coc-field-gap)";

/* Injected once via <style> in the component */
const COC_STYLES = `
  .coc-root {
    --coc-cell: clamp(1.6rem, 5vw, 2.2rem);
    --coc-border: max(1.5px, calc(var(--coc-cell) / 14));
    --coc-gap: 2px;
    --coc-field-gap: 0.75rem;
  }
  @media (min-width: 768px) {
    .coc-root {
      --coc-cell: clamp(1rem, 2.2vw, 2.8rem);
      --coc-border: max(1.5px, calc(var(--coc-cell) / 14));
      --coc-gap: clamp(1px, 0.15vw, 2px);
      --coc-field-gap: clamp(0.5rem, 1.2vw, 1.5rem);
    }
  }
`;

/* ── Theme colors (cyan + white, red accent) ── */
const HAND_COLOR = "#06b6d4";        /* cyan-400 — primary hands */
const CELL_BG = "#0c1222";           /* deep navy */
const CELL_BORDER_COLOR = "#0c1222"; /* blue-tinted border */
const DOT_COLOR = "#ffffff";          /* white center dot */

/* ── Hand sub-component ── */
function Hand({ angle }: { angle: number }) {
  return (
    <div
      style={{
        width: "50%",
        height: BORDER_SIZE,
        backgroundColor: HAND_COLOR,
        position: "absolute",
        transformOrigin: "center left",
        top: "50%",
        left: "50%",
        translate: "0% -50%",
        rotate: `${angle}deg`,
        transition: "rotate 300ms ease-in-out",
        borderRadius: "9999px",
      }}
    />
  );
}

/* ── Cell = 2 hands + 1 center dot ── */
function Cell({ rotations }: { rotations: [number, number] }) {
  return (
    <div
      style={{
        height: CELL_SIZE,
        width: CELL_SIZE,
        position: "relative",
        backgroundColor: CELL_BG,
        border: `${BORDER_SIZE} solid ${CELL_BORDER_COLOR}`,
        borderRadius: "1000px",
      }}
    >
      <Hand angle={rotations[0]} />
      <Hand angle={rotations[1]} />
      <div
        style={{
          width: BORDER_SIZE,
          height: BORDER_SIZE,
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          backgroundColor: DOT_COLOR,
          borderRadius: "1000px",
        }}
      />
    </div>
  );
}

/* ── Digit = 4×6 grid of cells ── */
function DigitGrid({ char }: { char: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(6, 1fr)",
        gap: GAP,
      }}
    >
      {Array.from({ length: 24 }, (_, i) => (
        <Cell key={i} rotations={getRotation(char, i)} />
      ))}
    </div>
  );
}

/* ── Pair = two digits side by side with label ── */
function CountdownField({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(0.25rem, 0.6vw, 0.75rem)" }}>
      <div style={{ display: "flex", gap: GAP }}>
        <DigitGrid char={value[0]} />
        <DigitGrid char={value[1]} />
      </div>
      <span
        style={{
          fontSize: "clamp(0.65rem, 1.2vw, 0.875rem)",
          letterSpacing: "0.15em",
          fontWeight: 700,
          color: "#9ca3af",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Separator colon centered vertically with digit grids ── */
function Separator() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(0.3rem, 1.2vw, 1.5rem)",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        paddingBottom: "clamp(0.8rem, 1.4vw, 1.75rem)", /* offset for label below */
      }}
    >
      <div
        style={{
          width: "clamp(3px, 0.6vw, 10px)",
          height: "clamp(3px, 0.6vw, 10px)",
          borderRadius: "50%",
          backgroundColor: "#06b6d4",
          boxShadow: "0 0 10px rgba(6, 182, 212, 0.6)",
        }}
      />
      <div
        style={{
          width: "clamp(3px, 0.6vw, 10px)",
          height: "clamp(3px, 0.6vw, 10px)",
          borderRadius: "50%",
          backgroundColor: "#06b6d4",
          boxShadow: "0 0 10px rgba(6, 182, 212, 0.6)",
        }}
      />
    </div>
  );
}

/* ── Main export ── */
export function ClockCounter() {
  const [countdown, setCountdown] = useState(getCountdown);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCountdown(getCountdown());

    intervalRef.current = setInterval(() => {
      setCountdown(getCountdown());
    }, 200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="coc-root relative bg-black dark:bg-gray-50 py-8 md:py-12 overflow-hidden transition-colors duration-300">
      <style>{COC_STYLES}</style>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-cyan-400" />
          <span className="text-red-500 tracking-[0.3em] text-sm font-black">
            COUNTDOWN
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black text-white dark:text-gray-900 uppercase tracking-tight mb-6"
          style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
        >
          RACE STARTS<span className="text-red-600"> IN</span>
        </motion.h2>

        {/* Countdown Clock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          {/* Mobile: stacked column | md+: single row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center" style={{ gap: FIELD_GAP }}>
            <CountdownField value={countdown.days} label="DAYS" />
            <CountdownField value={countdown.hours} label="HOURS" />
            <CountdownField value={countdown.minutes} label="MINUTES" />
            <CountdownField value={countdown.seconds} label="SECONDS" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
