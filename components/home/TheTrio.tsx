"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StorytellingIcon from "@/components/icons/StorytellingIcon";
import BuildIcon from "@/components/icons/BuildIcon";
import CreatorIcon from "@/components/icons/CreatorIcon";

const cards = [
  {
    title: "Tell Better Stories",
    description: "Discover how storytelling transforms products, brands, and ideas into things people care about.",
    href: "/blog",
    hoverBg: "hover:bg-butterYellow",
    icon: StorytellingIcon,
    align: "self-start" as const,
  },
  {
    title: "Build a Thing",
    description: "Explore real builds — from MVPs to polished products — and learn the process behind each one.",
    href: "/builds",
    hoverBg: "hover:bg-lavender",
    icon: BuildIcon,
    align: "self-end" as const,
  },
  {
    title: "Think Like a Creator",
    description: "Resources, frameworks, and mental models for creators who want to think differently.",
    href: "/resources",
    hoverBg: "hover:bg-lightGreen",
    icon: CreatorIcon,
    align: "self-start" as const,
  },
];

export default function TheTrio() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="font-display text-4xl md:text-5xl text-center mb-20"
        >
          Choose Your{" "}
          <span className="italic text-cursorBlue">Adventure?</span>
        </motion.h2>

        <div className="flex flex-col gap-8 items-center">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`w-full max-w-[600px] ${card.align}`}
            >
              <Link href={card.href} className="block">
                <div
                  className={`p-8 md:p-10 rounded-3xl border border-gray-100 bg-white transition-all duration-500 group ${card.hoverBg} hover:-translate-y-2`}
                >
                  <div className="mb-6">
                    <card.icon className="w-12 h-12" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-md">
                    {card.description}
                  </p>
                  <span className="inline-block mt-6 text-sm font-sans font-medium text-brandOrange group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
