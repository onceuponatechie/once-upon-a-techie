"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { href: "/builds", label: "Builds" },
      { href: "/blog", label: "Stories" },
      { href: "/resources", label: "Resources" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/resources", label: "Templates" },
      { href: "/resources", label: "Guides" },
      { href: "/resources", label: "Freebies" },
      { href: "/resources/readers-corner", label: "Reader's Corner" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: "/contact", label: "Build With Me" },
      { href: "#", label: "Twitter / X" },
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "GitHub" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
    ],
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="relative mt-12 bg-[#111] text-white rounded-t-[3rem] md:rounded-t-[4rem] overflow-hidden"
    >
      {/* Large reveal text */}
      <div className="px-6 pt-20 pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl mx-auto leading-tight"
        >
          Let&apos;s build something real.
        </motion.h2>
      </div>

      {/* Glassmorphic CTA shell */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center pb-16"
      >
        <Link
          href="/contact"
          className="glass-dark rounded-full px-8 py-4 text-lg font-semibold hover:bg-white/20 transition-colors"
        >
          Start a Conversation →
        </Link>
      </motion.div>

      {/* 4-column link grid */}
      <div className="border-t border-white/10 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.heading}>
              <h4 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-4">
                {section.heading}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Once Upon a Techie. All rights reserved.
          </p>
          <Link
            href="/"
            className="font-display text-lg font-bold text-white/60 hover:text-white transition-colors"
          >
            OUaT
          </Link>
        </div>
      </div>
    </footer>
  );
}
