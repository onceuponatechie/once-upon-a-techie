"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const navLinks = [
  { label: "FREEBIES", href: "/resources" },
  { label: "BLOG", href: "/blog" },
  { label: "READER'S CORNER", href: "/resources/readers-corner" },
  { label: "APPS", href: "/builds" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="px-4 md:px-6 pb-4 md:pb-6 mt-20">
      <div className="bg-dark-bg rounded-3xl overflow-hidden relative">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">
          {/* Label */}
          <ScrollReveal>
            <p className="text-white/40 font-serif italic text-base text-center mb-4">
              Don&apos;t be a stranger
            </p>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white/50 mb-1">
                Let&apos;s <span className="font-bold text-white/70">build</span> an
              </h2>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight">
                Experience
              </h2>
            </div>
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-md mx-auto mb-16">
              <div className="rounded-full p-1 flex items-center border border-white/15" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-white px-5 py-3 text-sm outline-none placeholder:text-white/35"
                />
                <button className="rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-medium hover:bg-brand-orange/90 transition-colors flex-shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Social icons + nav links row */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
              {/* Social icons */}
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>

              {/* Nav links */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/50 text-xs font-sans tracking-wider hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Divider + copyright */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/25 text-xs font-sans">
              © Once Upon a Techie, 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
