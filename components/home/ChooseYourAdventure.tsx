"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  3D Colorful SVG Icons                                              */
/* ------------------------------------------------------------------ */

function BookQuillIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Book shadow */}
      <ellipse cx="32" cy="56" rx="20" ry="4" fill="#E8703A" opacity="0.15" />
      {/* Book body — left page */}
      <path
        d="M10 14C10 12 12 10 14 10H30C31.1 10 32 10.9 32 12V48C32 48 28 46 22 46H14C12 46 10 44 10 42V14Z"
        fill="#FDE68A"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      {/* Book body — right page */}
      <path
        d="M54 14C54 12 52 10 50 10H34C32.9 10 32 10.9 32 12V48C32 48 36 46 42 46H50C52 46 54 44 54 42V14Z"
        fill="#FFF3D0"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      {/* Page lines — left */}
      <line x1="16" y1="20" x2="27" y2="20" stroke="#E8703A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="16" y1="26" x2="27" y2="26" stroke="#E8703A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="16" y1="32" x2="25" y2="32" stroke="#E8703A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Page lines — right */}
      <line x1="37" y1="20" x2="48" y2="20" stroke="#E8703A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="37" y1="26" x2="48" y2="26" stroke="#E8703A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="37" y1="32" x2="46" y2="32" stroke="#E8703A" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      {/* Spine highlight */}
      <path d="M32 12V48" stroke="#1A1A1A" strokeWidth="1.5" opacity="0.3" />
      {/* Quill pen — colorful */}
      <path
        d="M46 4C46 4 52 10 50 18C48 26 44 32 42 36L40 38"
        stroke="#4A90D9"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M46 4C46 4 48 6 47 10"
        fill="#4A90D9"
        opacity="0.3"
      />
      <path
        d="M40 38L38 44L42 40"
        stroke="#E8703A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#E8703A"
        opacity="0.8"
      />
      {/* Ink drop */}
      <circle cx="38" cy="46" r="2.5" fill="#4A90D9" />
      <circle cx="38" cy="46" r="1" fill="#fff" opacity="0.5" />
    </svg>
  );
}

function WrenchBoltIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="18" ry="3.5" fill="#B4A7D6" opacity="0.2" />
      {/* Lightning bolt — colorful */}
      <path
        d="M38 6L28 26H38L28 50"
        fill="none"
        stroke="#F5D060"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 6L28 26H38L28 50"
        fill="none"
        stroke="#E8703A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.4"
      />
      {/* Glow behind bolt */}
      <path
        d="M38 6L28 26H38L28 50"
        stroke="#F5D060"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
      />
      {/* Wrench — 3D styled */}
      <g transform="rotate(30, 32, 32)">
        {/* Handle */}
        <rect x="20" y="30" width="24" height="6" rx="3" fill="#B4A7D6" stroke="#1A1A1A" strokeWidth="1.5" />
        {/* Handle highlight */}
        <rect x="22" y="31" width="20" height="2" rx="1" fill="#D4C8EE" opacity="0.6" />
        {/* Wrench head */}
        <path
          d="M42 26C46 26 50 30 50 34C50 38 46 42 42 42L42 38C44 38 46 36 46 34C46 32 44 30 42 30L42 26Z"
          fill="#9B8EC4"
          stroke="#1A1A1A"
          strokeWidth="1.5"
        />
        {/* Wrench head inner */}
        <path
          d="M42 28C45 28 48 31 48 34C48 37 45 40 42 40"
          fill="none"
          stroke="#D4C8EE"
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
      {/* Sparkle accents */}
      <circle cx="20" cy="14" r="1.5" fill="#F5D060" />
      <circle cx="48" cy="46" r="1" fill="#B4A7D6" />
      <circle cx="14" cy="40" r="1" fill="#E8703A" opacity="0.6" />
    </svg>
  );
}

function LightbulbPlayIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="14" ry="3" fill="#2D6A4F" opacity="0.15" />
      {/* Outer glow */}
      <circle cx="32" cy="26" r="24" fill="#F5D060" opacity="0.08" />
      <circle cx="32" cy="26" r="18" fill="#F5D060" opacity="0.12" />
      {/* Bulb body */}
      <path
        d="M22 28C22 19 26 13 32 13C38 13 42 19 42 28C42 34 38 37 38 41H26C26 37 22 34 22 28Z"
        fill="#F5D060"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      {/* Bulb highlight */}
      <path
        d="M26 20C27 16 30 14 32 14"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Base */}
      <rect x="26" y="41" width="12" height="3" rx="1" fill="#E8E5DF" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="27" y="44" width="10" height="3" rx="1" fill="#D9D5CF" stroke="#1A1A1A" strokeWidth="1.5" />
      <path d="M30 47L31 51H33L34 47" fill="#B8B3AB" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Play button — colorful */}
      <path
        d="M29 23L38 28L29 33Z"
        fill="#2D6A4F"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Play button highlight */}
      <path
        d="M30 25L34 27.5L30 30Z"
        fill="#4DAF7C"
        opacity="0.5"
      />
      {/* Ray lines — colorful */}
      <line x1="32" y1="2" x2="32" y2="6" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="10" x2="47" y2="13" stroke="#E8703A" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="10" x2="17" y2="13" stroke="#E8703A" strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="28" x2="50" y2="28" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="28" x2="14" y2="28" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CompassStarIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="16" ry="3" fill="#4A90D9" opacity="0.15" />
      {/* Outer ring */}
      <circle cx="32" cy="30" r="22" fill="#E3F0FF" stroke="#4A90D9" strokeWidth="1.5" />
      {/* Inner ring */}
      <circle cx="32" cy="30" r="17" fill="#F0F7FF" stroke="#4A90D9" strokeWidth="1" opacity="0.5" />
      {/* Ring highlight */}
      <path
        d="M14 22C16 16 22 12 30 11"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Compass diamond/star */}
      <path d="M32 12L36 28L32 48L28 28Z" fill="#4A90D9" stroke="#1A1A1A" strokeWidth="1" />
      <path d="M14 30L28 26L50 30L28 34Z" fill="#5DCDF1" stroke="#1A1A1A" strokeWidth="1" />
      {/* Highlight on diamond */}
      <path d="M32 14L34 28L32 46" fill="#6BB8E8" opacity="0.4" />
      <path d="M16 30L28 27L48 30" fill="#8DD8F8" opacity="0.3" />
      {/* Center dot */}
      <circle cx="32" cy="30" r="3" fill="#E8703A" stroke="#1A1A1A" strokeWidth="1" />
      <circle cx="31" cy="29" r="1" fill="#fff" opacity="0.6" />
      {/* Cardinal sparkles */}
      <circle cx="32" cy="6" r="1.5" fill="#F5D060" />
      <circle cx="56" cy="30" r="1.5" fill="#F5D060" />
      <circle cx="8" cy="30" r="1" fill="#E8703A" opacity="0.6" />
      <circle cx="32" cy="54" r="1" fill="#B4A7D6" opacity="0.6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Hand-drawn SVG swirl through "Adventure" (Ali Abdaal style)        */
/* ------------------------------------------------------------------ */

function AdventureSwirl() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setAnimate(true), 800);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <svg
      ref={ref}
      className="absolute -inset-x-6 -inset-y-3 w-[calc(100%+48px)] h-[calc(100%+24px)] pointer-events-none"
      viewBox="0 0 240 80"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Elongated swirl that passes through the word — like Ali Abdaal's logo */}
      <path
        d="M-10 50C10 70 60 75 120 65C180 55 230 35 240 25C245 18 230 10 190 15C150 20 80 35 50 40C20 45 5 38 10 30C15 22 50 12 100 10C150 8 200 15 220 25C235 32 225 48 190 55C155 62 80 68 40 60C10 53 -5 40 -10 50Z"
        stroke="#5DCDF1"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: 900,
          strokeDashoffset: animate ? 0 : 900,
          transition: "stroke-dashoffset 0.8s ease-in-out",
        }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Card component                                                     */
/* ------------------------------------------------------------------ */

interface AdventureCard {
  icon: React.ReactNode;
  heading: string;
  body: string;
  linkText: string;
  linkHref: string;
  hoverColor: string;
  compact?: boolean;
}

function Card({ icon, heading, body, linkText, linkHref, hoverColor, compact }: AdventureCard) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? hoverColor : "#f7f3ed",
        y: hovered ? -4 : 0,
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)"
          : "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`rounded-[20px] p-9 flex flex-col ${compact ? "min-h-[160px]" : "min-h-[320px]"}`}
      style={{
        backgroundColor: "#f7f3ed",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      {/* Icon with wiggle on hover */}
      <motion.div
        animate={
          hovered
            ? {
                rotate: [0, -5, 5, -3, 3, 0],
              }
            : { rotate: 0 }
        }
        transition={{ duration: 0.4 }}
        className={compact ? "mb-3" : "mb-6"}
      >
        {icon}
      </motion.div>

      <h3 className={`font-serif leading-[1.2] text-text-primary ${compact ? "text-[22px] md:text-[24px] mb-2" : "text-[28px] md:text-[32px] mb-4"}`}>
        {heading}
      </h3>

      <p className={`font-sans text-[15px] leading-[1.7] text-text-secondary flex-grow ${compact ? "mb-3" : "mb-6"}`}>
        {body}
      </p>

      <Link
        href={linkHref}
        className="font-sans text-[15px] text-text-primary font-medium underline inline-block"
      >
        {linkText}
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

const cards: AdventureCard[] = [
  {
    icon: <BookQuillIcon />,
    heading: "Tell Better Stories",
    body: "Frameworks, resources, and builds for writers, storytellers, and anyone with something worth saying.",
    linkText: "Explore \u2192",
    linkHref: "/storyteller",
    hoverColor: "#FDE68A",
  },
  {
    icon: <WrenchBoltIcon />,
    heading: "Build a Thing",
    body: "Building in public, frontend experiments, no-code tools, and resources for people who make things.",
    linkText: "Explore \u2192",
    linkHref: "/builder",
    hoverColor: "#E9D5FF",
  },
  {
    icon: <LightbulbPlayIcon />,
    heading: "Think Like a Creator",
    body: "Insights on the creator economy, tools that work, and builds made for people who make things online.",
    linkText: "Explore \u2192",
    linkHref: "/creator",
    hoverColor: "#D5FDD8",
  },
];

const moreCard: AdventureCard = {
  icon: <CompassStarIcon />,
  heading: "And More!",
  body: "Even more stories, resources, builds, and graphics to explore across every adventure.",
  linkText: "Explore all \u2192",
  linkHref: "/explore",
  hoverColor: "#B8D8F0",
  compact: true,
};

export default function ChooseYourAdventure() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Two-column layout: title + cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div>
            {/* Section title — sits above left column only */}
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, x: -50 }}
              animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-10"
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1]">
                Choose Your{" "}
                <span className="relative inline-block italic">
                  Adventure
                  <AdventureSwirl />
                </span>
              </h2>
            </motion.div>

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card {...cards[0]} />
            </motion.div>

            {/* Card 2 — 20px gap below Card 1 */}
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card {...cards[1]} />
            </motion.div>
          </div>

          {/* RIGHT COLUMN — offset 200px down */}
          <div className="md:mt-[200px]">
            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card {...cards[2]} />
            </motion.div>

            {/* Card 4 — And More! (compact, half height) */}
            <motion.div
              className="mt-5"
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card {...moreCard} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
