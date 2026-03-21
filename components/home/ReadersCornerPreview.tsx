"use client";

import Link from "next/link";
import { BookOpen, Award, Globe } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const highlights = [
  { icon: BookOpen, title: "Curated Collection", desc: "Books, articles, and notes that shape my thinking" },
  { icon: Award, title: "Personal Notes", desc: "Key takeaways and highlights from each read" },
  { icon: Globe, title: "Visual Stories", desc: "Photo journals and creative explorations" },
];

export default function ReadersCornerPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Left side - image */}
          <ScrollReveal direction="left" className="flex-1 w-full">
            <div className="rounded-2xl overflow-hidden min-h-[400px] md:min-h-[500px]">
              <div
                className="w-full h-[400px] md:h-[500px] bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')",
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right side - text */}
          <ScrollReveal direction="right" className="flex-1">
            <span className="inline-block text-[11px] font-sans font-medium uppercase tracking-wider text-text-tertiary border border-surface-muted/60 rounded-full px-4 py-1.5 mb-6">
              Reader&apos;s Corner
            </span>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
              Books, thoughts, and everything in between.
            </h2>

            <p className="font-sans text-sm text-text-secondary leading-relaxed mb-8 max-w-md">
              A curated space for books I&apos;m reading, articles that caught
              my eye, random notes, excerpts, and whatever fits a lively and
              aesthetic reader&apos;s corner.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={16} className="text-text-secondary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-text-primary">
                      {item.title}
                    </p>
                    <p className="font-sans text-xs text-text-tertiary">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/resources/readers-corner"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-medium text-text-primary transition-colors"
              style={{ backgroundColor: "#c8e636" }}
            >
              Explore the Corner →
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
