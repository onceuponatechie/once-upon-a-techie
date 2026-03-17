"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ReadersCornerPreview() {
  return (
    <section className="bg-surface-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden border border-white/40 bg-white/30 backdrop-blur-xl shadow-lg">
            <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[480px]">
              {/* Left side - info */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={18} className="text-brand-orange" />
                  <span className="text-xs font-sans uppercase tracking-wider text-text-tertiary">
                    Reader&apos;s Corner
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                  Books, <span className="italic">thoughts,</span>
                  <br />
                  and everything in between
                </h2>
                <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8 max-w-sm">
                  A curated space for books I&apos;m reading, articles that
                  caught my eye, random notes, excerpts, and whatever fits a
                  lively and aesthetic reader&apos;s corner.
                </p>
                <Link
                  href="/resources/readers-corner"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange text-white px-6 py-3 font-sans text-sm font-medium hover:bg-brand-orange/90 transition-colors w-fit"
                >
                  Explore the Corner →
                </Link>
              </div>

              {/* Right side - large image snug to container */}
              <div className="flex-1 relative min-h-[280px] md:min-h-0">
                <div
                  className="absolute inset-0 md:rounded-r-3xl overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')",
                  }}
                >
                  {/* Fallback gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-lavender/40 to-brand-blue/30 -z-10" />
                  {/* Subtle edge blend on left for desktop */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent hidden md:block" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
