"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  SVG Icons — colorful 3D illustrated style                          */
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
      <ellipse cx="32" cy="52" rx="22" ry="3" fill="#E8703A" opacity="0.12" />
      {/* Left page fill */}
      <path
        d="M8 48V16C8 14 10 12 12 12H28C30 12 32 14 32 16V48H8Z"
        fill="#FFF5ED"
      />
      {/* Right page fill */}
      <path
        d="M56 48V16C56 14 54 12 52 12H36C34 12 32 14 32 16V48H56Z"
        fill="#FFEEDD"
      />
      {/* Open book outlines */}
      <path
        d="M8 48V16C8 14 10 12 12 12H28C30 12 32 14 32 16V48"
        stroke="#E8703A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M56 48V16C56 14 54 12 52 12H36C34 12 32 14 32 16V48"
        stroke="#E8703A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Spine */}
      <line x1="32" y1="14" x2="32" y2="48" stroke="#D4612E" strokeWidth="1.5" />
      {/* Page lines — left */}
      <line x1="14" y1="20" x2="26" y2="20" stroke="#E8703A" strokeWidth="1" opacity="0.35" />
      <line x1="14" y1="26" x2="26" y2="26" stroke="#E8703A" strokeWidth="1" opacity="0.35" />
      <line x1="14" y1="32" x2="24" y2="32" stroke="#E8703A" strokeWidth="1" opacity="0.35" />
      {/* Page lines — right */}
      <line x1="38" y1="20" x2="50" y2="20" stroke="#E8703A" strokeWidth="1" opacity="0.35" />
      <line x1="38" y1="26" x2="50" y2="26" stroke="#E8703A" strokeWidth="1" opacity="0.35" />
      <line x1="38" y1="32" x2="48" y2="32" stroke="#E8703A" strokeWidth="1" opacity="0.35" />
      {/* Quill pen — feather */}
      <path
        d="M44 6C44 6 52 12 50 20C48 28 44 34 42 38L40 40"
        stroke="#2D6A4F"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M44 6C44 6 48 8 50 12"
        fill="#A7D9B8"
        stroke="#2D6A4F"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Quill nib */}
      <path
        d="M40 40L38 46L42 42"
        stroke="#8B6914"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#D4A030"
      />
      {/* Ink drop */}
      <circle cx="37" cy="48" r="2.5" fill="#4A90D9" />
      <circle cx="37" cy="48" r="1" fill="#6DB3F0" />
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
      <ellipse cx="32" cy="56" rx="18" ry="3" fill="#B4A7D6" opacity="0.15" />
      {/* Lightning bolt — filled with gradient feel */}
      <path
        d="M38 6L28 26H37L27 50"
        stroke="#F5D060"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M36 10L29 24H36L30 42"
        stroke="#FBE89A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />
      {/* Wrench body */}
      <g transform="rotate(25, 32, 32)">
        {/* Handle */}
        <rect x="18" y="30" width="28" height="6" rx="3" fill="#C4B5E3" stroke="#9B8BBF" strokeWidth="1.5" />
        {/* Handle shine */}
        <rect x="20" y="31" width="24" height="2" rx="1" fill="#DDD3F0" opacity="0.7" />
        {/* Head top jaw */}
        <path
          d="M46 28L52 22C53 21 53 19 52 18L50 16L46 20V28Z"
          fill="#B4A7D6"
          stroke="#9B8BBF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Head bottom jaw */}
        <path
          d="M46 38L52 44C53 45 53 47 52 48L50 50L46 46V38Z"
          fill="#B4A7D6"
          stroke="#9B8BBF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Head inner */}
        <path
          d="M47 24L50 20"
          stroke="#DDD3F0"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
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
      {/* Outer glow */}
      <circle cx="32" cy="26" r="24" fill="#FFF7E0" opacity="0.4" />
      <circle cx="32" cy="26" r="18" fill="#FFFBEF" opacity="0.5" />
      {/* Bulb fill */}
      <path
        d="M22 28C22 20 26 14 32 14C38 14 42 20 42 28C42 34 38 36 38 40H26C26 36 22 34 22 28Z"
        fill="#FFF9E6"
        stroke="#2D6A4F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bulb glass shine */}
      <path
        d="M26 22C26 18 28 16 30 15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Base rings */}
      <rect x="26" y="40" width="12" height="3" rx="1" fill="#4A90D9" stroke="#3A7ABD" strokeWidth="1" />
      <rect x="27" y="44" width="10" height="3" rx="1" fill="#5DAAE8" stroke="#4A90D9" strokeWidth="1" />
      {/* Base tip */}
      <path d="M30 47L31 52H33L34 47" fill="#6DB8F0" stroke="#4A90D9" strokeWidth="1" strokeLinejoin="round" />
      {/* Play button inside bulb — filled */}
      <path
        d="M29 23L38 28L29 33Z"
        fill="#E8703A"
        stroke="#D4612E"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Play button shine */}
      <path d="M30 25L34 27.5L30 28Z" fill="#F0915E" opacity="0.5" />
      {/* Ray lines */}
      <line x1="32" y1="2" x2="32" y2="7" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="10" x2="46" y2="14" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="10" x2="18" y2="14" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
      <line x1="54" y1="28" x2="49" y2="28" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="28" x2="15" y2="28" stroke="#F5D060" strokeWidth="2" strokeLinecap="round" />
      {/* Small sparkle dots */}
      <circle cx="48" cy="18" r="1.5" fill="#FBE89A" />
      <circle cx="16" cy="20" r="1" fill="#FBE89A" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Hand-drawn SVG swirl across "Adventure" — Ali Abdaal logo style    */
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
      className="absolute pointer-events-none"
      style={{
        left: "-12%",
        top: "10%",
        width: "124%",
        height: "100%",
      }}
      viewBox="0 0 240 80"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Elongated oval/swirl that passes across and through the text,
          entering from bottom-left, sweeping up and right across the word,
          looping over the top and back around — like Ali Abdaal's logo */}
      <path
        d="M8 58C20 68 55 72 100 62C145 52 190 30 210 18C225 8 230 14 220 26C205 42 160 58 110 62C60 66 20 56 10 44C2 34 12 20 40 16C68 12 130 10 180 18"
        stroke="#5DCDF1"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: 700,
          strokeDashoffset: animate ? 0 : 700,
          transition: "stroke-dashoffset 1s ease-in-out",
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
  linkHref: string;
  hoverColor: string;
}

function Card({ icon, heading, body, linkHref, hoverColor }: AdventureCard) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? hoverColor : "#FDFCFA",
        y: hovered ? -4 : 0,
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.08)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-[20px] p-9 min-h-[480px] flex flex-col border-2"
      style={{
        backgroundColor: "#FDFCFA",
        borderColor: "rgba(255,255,255,0.7)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 0 0 1px rgba(255,255,255,0.4)",
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
        className="mb-6"
      >
        {icon}
      </motion.div>

      <h3 className="font-serif text-[28px] md:text-[32px] leading-[1.2] text-text-primary mb-4">
        {heading}
      </h3>

      <p className="font-sans text-[15px] leading-[1.7] text-text-secondary mb-6 flex-grow">
        {body}
      </p>

      <Link
        href={linkHref}
        className="font-sans text-[15px] text-text-primary font-medium underline inline-block"
      >
        Explore &rarr;
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
    linkHref: "/storyteller",
    hoverColor: "#FDE68A",
  },
  {
    icon: <WrenchBoltIcon />,
    heading: "Build a Thing",
    body: "Building in public, frontend experiments, no-code tools, and resources for people who make things.",
    linkHref: "/builder",
    hoverColor: "#E9D5FF",
  },
  {
    icon: <LightbulbPlayIcon />,
    heading: "Think Like a Creator",
    body: "Insights on the creator economy, tools that work, and builds made for people who make things online.",
    linkHref: "/creator",
    hoverColor: "#D5FDD8",
  },
];

export default function ChooseYourAdventure() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Two-column layout: title + cards */}
        <div className="grid grid-cols-1 md:grid-cols-[46%_46%] justify-between gap-6">
          {/* LEFT COLUMN */}
          <div>
            {/* Section label */}
            <ScrollReveal className="mb-4">
              <p className="font-serif italic text-text-tertiary text-base">
                What to Do?
              </p>
            </ScrollReveal>

            {/* Section title — one line, "Adventure" italicized with swirl */}
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, x: -50 }}
              animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-10"
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] whitespace-nowrap">
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

          {/* RIGHT COLUMN — offset 500px down (original 200px + 150%) */}
          <div className="md:mt-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card {...cards[2]} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
