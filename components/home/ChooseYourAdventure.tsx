"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  SVG Icons — custom illustrated style                               */
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
      {/* Open book */}
      <path
        d="M8 48V16C8 14 10 12 12 12H28C30 12 32 14 32 16V48"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M56 48V16C56 14 54 12 52 12H36C34 12 32 14 32 16V48"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Page lines — left */}
      <line x1="14" y1="20" x2="26" y2="20" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
      <line x1="14" y1="26" x2="26" y2="26" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
      <line x1="14" y1="32" x2="24" y2="32" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
      {/* Page lines — right */}
      <line x1="38" y1="20" x2="50" y2="20" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
      <line x1="38" y1="26" x2="50" y2="26" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
      <line x1="38" y1="32" x2="48" y2="32" stroke="#1A1A1A" strokeWidth="1" opacity="0.3" />
      {/* Quill pen */}
      <path
        d="M44 8C44 8 50 14 48 22C46 30 42 36 40 40L38 42"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 42L36 48L40 44"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ink drop */}
      <circle cx="36" cy="50" r="2" fill="#1A1A1A" />
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
      {/* Lightning bolt behind */}
      <path
        d="M36 8L28 28H36L28 48"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.5"
      />
      {/* Wrench at ~30deg */}
      <g transform="rotate(30, 32, 32)">
        <path
          d="M20 18C16 14 16 8 20 4C20 4 24 8 28 8L40 20V26L44 30C48 34 48 40 44 44L40 40H34L22 28C22 24 18 20 18 20Z"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          transform="translate(2,6) scale(0.8)"
        />
        {/* Wrench head */}
        <path
          d="M14 44L24 34"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M10 48L14 44L18 48L14 52Z"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Handle */}
        <path
          d="M24 34L42 16"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Wrench jaw */}
        <path
          d="M42 16L48 10M42 16L48 22"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
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
      {/* Glow */}
      <circle cx="32" cy="26" r="22" fill="#FFF7E0" opacity="0.5" />
      {/* Bulb */}
      <path
        d="M22 28C22 20 26 14 32 14C38 14 42 20 42 28C42 34 38 36 38 40H26C26 36 22 34 22 28Z"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Base */}
      <line x1="26" y1="44" x2="38" y2="44" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="48" x2="36" y2="48" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 48L31 52H33L34 48" stroke="#1A1A1A" strokeWidth="2" strokeLinejoin="round" />
      {/* Play button inside bulb */}
      <path
        d="M29 24L37 28L29 32Z"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ray lines */}
      <line x1="32" y1="4" x2="32" y2="8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="48" y1="12" x2="45" y2="15" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="16" y1="12" x2="19" y2="15" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="52" y1="28" x2="48" y2="28" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="12" y1="28" x2="16" y2="28" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Hand-drawn SVG circle around "Adventure"                           */
/* ------------------------------------------------------------------ */

function AdventureCircle() {
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
      className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none"
      viewBox="0 0 200 80"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 55C5 40 10 15 40 10C70 5 130 3 170 12C200 20 205 50 180 62C155 74 60 78 25 65C10 60 8 50 15 55Z"
        stroke="#5DCDF1"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: 600,
          strokeDashoffset: animate ? 0 : 600,
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
}

function Card({ icon, heading, body, linkText, linkHref, hoverColor }: AdventureCard) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        backgroundColor: hovered ? hoverColor : "#f7f3ed",
        y: hovered ? -4 : 0,
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.08)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="rounded-[20px] p-9 min-h-[320px] flex flex-col"
      style={{ backgroundColor: "#f7f3ed" }}
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
                  <AdventureCircle />
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

          {/* RIGHT COLUMN — offset 400px down */}
          <div className="md:mt-[400px]">
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
