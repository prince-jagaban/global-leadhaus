"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Methodology", href: "#framework" },
    { label: "Industries", href: "#industries" },
    { label: "Why Us", href: "#why" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/40" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image
              src="/logo1.png"
              alt="Global LeadHaus Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <div className="text-white uppercase tracking-wider text-sm font-semibold leading-tight">
            Global LeadHaus
            <span className="block text-[10px] text-gold-light font-light tracking-widest group-hover:text-gold-lighter transition-colors duration-200">
              Consult Ltd
            </span>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-[12px] uppercase tracking-widest text-white/70 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative hover:text-gold-light transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-light group-hover:w-full transition-all duration-300 block" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-gold text-navy px-5 py-2 rounded-sm font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-white transition-all duration-300 block ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 block ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-white transition-all duration-300 block ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-6 border-t border-gold/20 bg-navy-deep">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-gold-light uppercase tracking-widest text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold text-navy px-8 py-2.5 rounded-sm font-semibold hover:bg-gold-light transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}