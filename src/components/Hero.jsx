"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,148,63,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(184,148,63,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow Top Right */}
      <div
        className="absolute w-[700px] h-[700px] -top-52 -right-52 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,63,0.12), transparent 70%)",
        }}
      />

      {/* Glow Bottom Left */}
      <div
        className="absolute w-[500px] h-[500px] -bottom-28 -left-28 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(26,51,80,0.8), transparent 70%)",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center pt-32 pb-20">
        
        {/* ── LEFT CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold uppercase tracking-[0.2em] text-xs">
              Established for Excellence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-light leading-tight text-4xl md:text-6xl mb-6">
            Strengthening <br />
            <span className="italic text-gold-light">Institutions,</span> <br />
            Empowering Leadership
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 max-w-lg leading-relaxed mb-8">
            A multidisciplinary consulting and advisory firm dedicated to
            delivering sustainable solutions across governance, infrastructure,
            capacity development, and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#services"
              className="bg-gold text-navy px-6 py-3 uppercase text-sm tracking-wider font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Explore Our Services
            </a>

            <a
              href="#contact"
              className="border border-white/30 text-white/80 px-6 py-3 uppercase text-sm tracking-wider hover:border-gold hover:text-gold-light transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 gap-6 mt-10 pt-6"
            style={{ borderTop: "1px solid rgba(184,148,63,0.2)" }}
          >
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
                transition={{ delay: 0.4 + i * 0.15 }}
              >
                <h3 className="text-gold-light text-3xl font-light">
                  {item.num}
                </h3>
                <p className="text-white/40 text-xs tracking-wider mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT FLOATING CARDS ── */}
        <div className="relative hidden md:block h-[500px]">
          
          {/* Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-12 p-6 rounded"
            style={{
              backgroundColor: "#1a3350",
              border: "1px solid rgba(184,148,63,0.2)",
            }}
          >
            <div className="mb-3 text-xl">🏛️</div>
            <h4 className="text-white font-semibold mb-1">
              Institutional Strengthening
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Navigating complex governance frameworks to drive lasting reform
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              delay: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-44 left-12 right-0 p-6 rounded"
            style={{
              background: "linear-gradient(135deg, #1a3350, #243f60)",
              border: "1px solid rgba(184,148,63,0.2)",
            }}
          >
            <div className="mb-3 text-xl">📊</div>
            <h4 className="text-white font-semibold mb-1">
              Data-Driven Advisory
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Evidence-based insights using advanced analytics tools
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              delay: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-6 right-10 p-6 rounded"
            style={{
              backgroundColor: "#1a3350",
              border: "1px solid rgba(184,148,63,0.2)",
            }}
          >
            <div className="mb-3 text-xl">🌱</div>
            <h4 className="text-white font-semibold mb-1">
              Sustainable Impact
            </h4>
            <p className="text-white/50 text-sm leading-relaxed">
              ESG-integrated strategies for long-term value creation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}