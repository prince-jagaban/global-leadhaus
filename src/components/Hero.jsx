"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0f2035] flex items-center overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(184,148,63,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(184,148,63,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow Effects */}
      <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(184,148,63,0.12),transparent_70%)] top-[-200px] right-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(26,51,80,0.8),transparent_70%)] bottom-[-100px] left-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center pt-32">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-[#b8943f]" />
            <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
              Established for Excellence
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white font-serif font-light leading-tight text-4xl md:text-6xl mb-6">
            Strengthening <br />
            <span className="italic text-[#d4aa56]">Institutions,</span> <br />
            Empowering Leadership
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 max-w-lg leading-relaxed mb-8">
            A multidisciplinary consulting and advisory firm dedicated to delivering sustainable solutions across governance, infrastructure, capacity development, and beyond.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a className="bg-[#b8943f] text-[#0f2035] px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-[#d4aa56] transition">
              Explore Our Services
            </a>

            <a className="border border-white/30 text-white/80 px-6 py-3 uppercase text-sm tracking-wider hover:border-[#b8943f] hover:text-[#d4aa56] transition">
              Schedule a Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mt-10 pt-6 border-t border-[#b8943f]/20">
            {[
              { num: "7+", label: "Service Verticals" },
              { num: "8", label: "Strategic Pillars" },
              { num: "5", label: "Stage Methodology" },
              { num: "∞", label: "Enduring Impact" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-[#d4aa56] text-3xl font-serif">
                  {item.num}
                </h3>
                <p className="text-white/40 text-xs tracking-wider mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FLOATING CARDS */}
        <div className="relative hidden md:block h-[500px]">

          {/* Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 left-0 right-12 bg-[#1a3350] border border-[#b8943f]/20 p-6 rounded"
          >
            <div className="mb-3 text-xl">🏛️</div>
            <h4 className="text-white font-semibold mb-1">
              Institutional Strengthening
            </h4>
            <p className="text-white/50 text-sm">
              Navigating complex governance frameworks to drive lasting reform
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, delay: 2, repeat: Infinity }}
            className="absolute top-32 left-12 right-0 bg-gradient-to-br from-[#1a3350] to-[#243f60] border border-[#b8943f]/20 p-6 rounded"
          >
            <div className="mb-3 text-xl">📊</div>
            <h4 className="text-white font-semibold mb-1">
              Data-Driven Advisory
            </h4>
            <p className="text-white/50 text-sm">
              Evidence-based insights using analytics tools
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, delay: 4, repeat: Infinity }}
            className="absolute bottom-0 left-6 right-10 bg-[#1a3350] border border-[#b8943f]/20 p-6 rounded"
          >
            <div className="mb-3 text-xl">🌱</div>
            <h4 className="text-white font-semibold mb-1">
              Sustainable Impact
            </h4>
            <p className="text-white/50 text-sm">
              ESG-integrated strategies for long-term value
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}