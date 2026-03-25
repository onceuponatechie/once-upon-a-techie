"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/builds", label: "Builds" },
  { href: "/blog", label: "Stories" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-4xl">
        <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-full pl-8 pr-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-medium text-lg tracking-tight text-text-primary whitespace-nowrap flex-shrink-0"
          >
            Once Upon a Techie
          </Link>

          {/* Desktop Links - centered */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-sans text-sm font-medium text-gray-800 hover:text-text-primary transition-colors py-1"
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brandOrange rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA - snugged to the right */}
          <Link
            href="/contact"
            className="hidden md:flex rounded-full bg-brandOrange text-white px-6 py-2.5 text-sm font-medium hover:scale-105 transition-transform flex-shrink-0"
          >
            Build With Me
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden bg-white/70 backdrop-blur-xl border border-white/40 rounded-full w-10 h-10 flex items-center justify-center ml-auto"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#f9f6f3]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl text-text-primary hover:text-brandOrange transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-brandOrange text-white px-8 py-3 text-base font-medium"
                >
                  Build With Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
