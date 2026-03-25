"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const footerLinks = {
  Navigate: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Stories", href: "/blog" },
    { label: "Builds", href: "/builds" },
  ],
  Resources: [
    { label: "Creative Vault", href: "/resources" },
    { label: "Freebies", href: "/resources" },
    { label: "Reader's Corner", href: "/resources/readers-corner" },
  ],
  Connect: [
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "GitHub", href: "#", icon: Github },
  ],
  Brand: [
    { label: "Press Kit", href: "#" },
    { label: "Style Guide", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#111] text-white pt-32 pb-10 px-6 mt-20 rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/20">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Big headline */}
        <ScrollReveal>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight text-center mb-16">
            Let&apos;s build
            <br />
            something{" "}
            <span className="italic">real.</span>
          </h2>
        </ScrollReveal>

        {/* Glassmorphic CTA */}
        <ScrollReveal delay={0.1} className="flex justify-center mb-24">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-brandOrange text-white px-8 py-4 font-sans text-sm font-medium hover:bg-brandOrange/90 transition-colors"
            >
              Build With Me →
            </Link>
          </div>
        </ScrollReveal>

        {/* Footer link grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-sans font-medium text-white/30 uppercase tracking-wider mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-sans text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/25 text-xs font-sans">
            © Once Upon a Techie, 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
