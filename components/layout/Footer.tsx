"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const exploreLinks = [
  { label: "Resources", href: "/resources" },
  { label: "Builds", href: "/builds" },
  { label: "Reader's Corner", href: "/resources/readers-corner" },
];
const learnLinks = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
const connectLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Newsletter", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-dark-bg rounded-t-[40px] mt-20 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <ScrollReveal>
          {/* Label */}
          <p className="text-white/40 font-serif italic text-base text-center mb-4">
            Don&apos;t be a stranger
          </p>
          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl text-white text-center mb-16">
            Let&apos;s build an{" "}
            <span className="font-bold italic">Experience.</span>
          </h2>
        </ScrollReveal>

        {/* Newsletter */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-md mx-auto mb-20">
            <div className="glassmorphism-dark rounded-2xl p-1 flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white px-4 py-3 text-sm outline-none placeholder:text-white/40"
              />
              <button className="rounded-xl bg-brand-orange text-white px-5 py-3 text-sm font-medium hover:bg-brand-orange/90 transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Social icons */}
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center gap-4 mb-16">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Link columns */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4 font-sans">
                Explore
              </h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm font-sans hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4 font-sans">
                Learn
              </h4>
              <ul className="space-y-3">
                {learnLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm font-sans hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4 font-sans">
                Connect
              </h4>
              <ul className="space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm font-sans hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-xs font-sans">
            © Once Upon a Techie, 2026 | Built with love, AI, and way too much
            Canva.
          </p>
        </div>
      </div>
    </footer>
  );
}
