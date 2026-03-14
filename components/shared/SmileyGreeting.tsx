"use client";

import { motion } from "framer-motion";

export default function SmileyGreeting() {
  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{ width: 56, height: 56, backgroundColor: "#F5D060" }}
    >
      <motion.div
        className="flex flex-col"
        animate={{ y: [0, 0, -56, -56] }}
        transition={{
          duration: 3.8,
          times: [0, 0.395, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {/* Smiley Face */}
        <div className="w-[56px] h-[56px] flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="#F5D060" />
            {/* Rosy cheeks */}
            <circle cx="10" cy="24" r="4" fill="#F0A0A0" opacity="0.4" />
            <circle cx="30" cy="24" r="4" fill="#F0A0A0" opacity="0.4" />
            {/* Left eye - winking */}
            <motion.ellipse
              cx="13"
              cy="17"
              rx="2.5"
              ry="3"
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
            <ellipse cx="27" cy="17" rx="2.5" ry="3" fill="#1A1A1A" />
            {/* Eye shine */}
            <circle cx="14" cy="15.5" r="1" fill="white" opacity="0.8" />
            <circle cx="28" cy="15.5" r="1" fill="white" opacity="0.8" />
            {/* Smile */}
            <path
              d="M12 26 Q20 34 28 26"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Glossy highlight */}
            <ellipse cx="20" cy="10" rx="10" ry="5" fill="white" opacity="0.15" />
          </svg>
        </div>
        {/* Waving Hand */}
        <div className="w-[56px] h-[56px] flex items-center justify-center">
          <motion.svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
            style={{ originX: "0.7", originY: "0.8" }}
          >
            {/* Hand */}
            <path
              d="M8 22 C6 18 7 14 9 12 L11 10 C12 9 14 10 13 12 L12 15 L14 9 C15 7 17 8 16 10 L15 14 L17 8 C18 6 20 7 19 9 L18 14 L20 9 C21 7 23 8 22 10 L20 17 L23 14 C24.5 12.5 26 13.5 25 15 L19 24 C17 27 13 28 10 26 Z"
              fill="#F5D060"
              stroke="#E8C840"
              strokeWidth="0.5"
            />
            {/* Glossy highlight */}
            <ellipse cx="16" cy="14" rx="4" ry="3" fill="white" opacity="0.15" />
            {/* Motion lines */}
            <path d="M27 10 L30 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <path d="M28 14 L31 13" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            <path d="M26 7 L28 4" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}
