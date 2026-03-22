"use client";

import { motion } from "framer-motion";

export default function SmileyGreeting() {
  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{ width: 64, height: 64, backgroundColor: "#FFEDAB" }}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: [0, 0, -64, -64] }}
        transition={{
          duration: 3.8,
          times: [0, 0.395, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Smiley Face */}
        <div className="w-[64px] h-[64px] flex items-center justify-center">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
            <circle cx="23" cy="23" r="21" fill="#FFEDAB" />
            <circle cx="11" cy="28" r="4.5" fill="#F0A0A0" opacity="0.4" />
            <circle cx="35" cy="28" r="4.5" fill="#F0A0A0" opacity="0.4" />
            <motion.ellipse
              cx="15"
              cy="19"
              rx="2.8"
              ry="3.5"
              fill="#1A1A1A"
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{
                duration: 1.5,
                times: [0, 0.5, 0.55, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 2.3,
              }}
            />
            <ellipse cx="31" cy="19" rx="2.8" ry="3.5" fill="#1A1A1A" />
            <circle cx="16" cy="17.5" r="1.2" fill="white" opacity="0.8" />
            <circle cx="32" cy="17.5" r="1.2" fill="white" opacity="0.8" />
            <path d="M14 30 Q23 39 32 30" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <ellipse cx="23" cy="11" rx="12" ry="6" fill="white" opacity="0.15" />
          </svg>
        </div>
        {/* Waving Hand — large, fluid, open palm like reference */}
        <div className="w-[64px] h-[64px] flex items-center justify-center">
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            animate={{ rotate: [0, 20, -14, 20, -8, 16, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: "easeInOut",
            }}
            style={{ originX: "0.6", originY: "0.85" }}
          >
            {/* Open palm with spread fingers */}
            <path
              d="M16 36 C13 30 12 24 13.5 19
                 L15 15 C15.5 13.5 17.5 13.5 17.5 15.5 L17 20
                 L19 12 C19.5 10 21.5 10.5 21.5 13 L20.5 20
                 L22.5 11 C23 9 25 9.5 25 12 L24 20
                 L26 12.5 C26.5 10.5 28.5 11 28.5 13.5 L26.5 23
                 L30 18 C31 16.5 33 17 32 19 L26 30 C24 34 20 37 16 36 Z"
              fill="#1A1A1A"
            />
            {/* Subtle finger separations */}
            <path d="M17.5 15.5 L17 20" stroke="#333" strokeWidth="0.5" opacity="0.3" />
            <path d="M21.5 13 L20.5 20" stroke="#333" strokeWidth="0.5" opacity="0.3" />
            <path d="M25 12 L24 20" stroke="#333" strokeWidth="0.5" opacity="0.3" />
            <path d="M28.5 13.5 L26.5 23" stroke="#333" strokeWidth="0.5" opacity="0.3" />
            {/* Palm highlight */}
            <ellipse cx="23" cy="24" rx="5" ry="4" fill="white" opacity="0.06" />
            {/* Motion lines */}
            <motion.g animate={{ opacity: [0.35, 0.12, 0.35] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <path d="M35 12 L38 9" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
              <path d="M36 18 L39 16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
              <path d="M34 8 L36 4" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
            </motion.g>
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}
