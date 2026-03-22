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
            {/* Rosy cheeks */}
            <circle cx="11" cy="28" r="4.5" fill="#F0A0A0" opacity="0.4" />
            <circle cx="35" cy="28" r="4.5" fill="#F0A0A0" opacity="0.4" />
            {/* Left eye - winking */}
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
            {/* Right eye */}
            <ellipse cx="31" cy="19" rx="2.8" ry="3.5" fill="#1A1A1A" />
            {/* Eye shine */}
            <circle cx="16" cy="17.5" r="1.2" fill="white" opacity="0.8" />
            <circle cx="32" cy="17.5" r="1.2" fill="white" opacity="0.8" />
            {/* Smile */}
            <path
              d="M14 30 Q23 39 32 30"
              stroke="#1A1A1A"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Glossy highlight */}
            <ellipse cx="23" cy="11" rx="12" ry="6" fill="white" opacity="0.15" />
          </svg>
        </div>
        {/* Waving Hand — bigger, more fluid, natural open palm */}
        <div className="w-[64px] h-[64px] flex items-center justify-center">
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            animate={{ rotate: [0, 18, -12, 18, -6, 14, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: "easeInOut",
            }}
            style={{ originX: "0.65", originY: "0.85" }}
          >
            {/* Palm base */}
            <path
              d="M14 34 C11 28 11 22 13 18 L14.5 15 C15 13.5 17 13 17.5 15 L17 19
                 L19 12 C19.5 10 21.5 10 21.5 12.5 L20.5 19
                 L22 11 C22.5 9 24.5 9 24.5 11.5 L23.5 19
                 L25 12 C25.5 10 27.5 10 27.5 12.5 L25.5 22
                 L29 17 C30 15.5 32 16 31 18 L25 29 C23 33 18 35 14 34 Z"
              fill="#1A1A1A"
            />
            {/* Finger highlights for depth */}
            <path
              d="M17.5 15 L17 19"
              stroke="#333"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M21.5 12.5 L20.5 19"
              stroke="#333"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M24.5 11.5 L23.5 19"
              stroke="#333"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M27.5 12.5 L25.5 22"
              stroke="#333"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.4"
            />
            {/* Subtle glossy highlight on palm */}
            <ellipse cx="22" cy="22" rx="5" ry="4" fill="white" opacity="0.06" />
            {/* Motion lines */}
            <motion.g
              animate={{ opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              <path d="M33 12 L37 9" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" opacity="0.3" />
              <path d="M34 17 L38 15" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" opacity="0.25" />
              <path d="M32 8 L34 4" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" opacity="0.2" />
            </motion.g>
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}
