"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#0f2035]/95 backdrop-blur-md border-b border-[#b8943f]/20">

      {/* LOGO */}
      <div className="flex items-center gap-3">
        
        {/* Image Logo */}
        <div className="relative w-10 h-10">
          <Image
            src="/logo.png" // 👉 put your logo in /public/logo.png
            alt="Global LeadHaus Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text Logo */}
        <div className="text-white uppercase tracking-wider text-sm font-semibold leading-tight">
          Global LeadHaus
          <span className="block text-[10px] text-[#d4aa56] font-light tracking-widest">
            Consult Ltd
          </span>
        </div>
      </div>

      {/* DESKTOP LINKS */}
      <ul className="hidden md:flex gap-10 text-[12px] uppercase tracking-widest text-white/70 font-medium">
        <li><a href="#about" className="hover:text-[#d4aa56] transition">About</a></li>
        <li><a href="#services" className="hover:text-[#d4aa56] transition">Services</a></li>
        <li><a href="#framework" className="hover:text-[#d4aa56] transition">Methodology</a></li>
        <li><a href="#industries" className="hover:text-[#d4aa56] transition">Industries</a></li>
        <li><a href="#why" className="hover:text-[#d4aa56] transition">Why Us</a></li>
        <li>
          <a
            href="#contact"
            className="bg-[#b8943f] text-[#0f2035] px-5 py-2 rounded-sm font-semibold hover:bg-[#d4aa56] transition"
          >
            Get in Touch
          </a>
        </li>
      </ul>

      {/* MOBILE MENU BUTTON */}
      <div
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
        <span className="w-6 h-[2px] bg-white"></span>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-full left-0 w-full bg-[#0f2035] flex flex-col items-center gap-6 py-6 text-white uppercase tracking-widest text-sm font-medium transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#framework" onClick={() => setOpen(false)}>Methodology</a>
        <a href="#industries" onClick={() => setOpen(false)}>Industries</a>
        <a href="#why" onClick={() => setOpen(false)}>Why Us</a>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="bg-[#b8943f] text-[#0f2035] px-6 py-2 rounded-sm"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}