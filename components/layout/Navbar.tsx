"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/builds", label: "Builds" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-4 z-50 mx-auto max-w-4xl px-4">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-full pl-6 pr-2 py-2 shadow-sm flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-base font-medium text-text-primary whitespace-nowrap mr-auto"
          >
            Once Upon a Techie
          </Link>

          {/* Desktop Links - centered */}
          <div className="hidden md:flex items-center gap-6 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-sans text-[13px] text-text-secondary hover:text-text-primary transition-colors py-1"
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-brand-orange rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA - snugged to the right */}
          <Link
            href="/contact"
            className="hidden md:flex rounded-full bg-brand-orange text-white px-5 py-2.5 text-[13px] font-medium hover:bg-brand-orange/90 transition-colors ml-auto"
          >
            Build With Me
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden bg-white/70 backdrop-blur-xl border border-white/40 rounded-full w-10 h-10 flex items-center justify-center ml-2"
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
            className="fixed inset-0 z-[100] bg-[#f5f0ef]/95 backdrop-blur-xl flex flex-col items-center justify-center"
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
                    className="font-serif text-3xl text-text-primary hover:text-brand-orange transition-colors"
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
                  className="rounded-full bg-brand-orange text-white px-8 py-3 text-base font-medium"
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
