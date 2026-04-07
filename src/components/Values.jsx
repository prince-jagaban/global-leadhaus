"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  {
    letter: "P",
    title: "Professionalism",
    desc: "Upholding the highest standards of competence, discipline, and ethical conduct.",
  },
  {
    letter: "O",
    title: "Ownership",
    desc: "Taking full responsibility for commitments with accountability and dedication.",
  },
  {
    letter: "R",
    title: "Results Orientation",
    desc: "Delivering measurable outcomes that create real and lasting value.",
  },
  {
    letter: "S",
    title: "Service Excellence",
    desc: "Providing responsive, high-quality, client-centered services.",
  },
  {
    letter: "C",
    title: "Collaboration",
    desc: "Driving impact through partnerships and shared expertise.",
  },
  {
    letter: "H",
    title: "Human-Centered Impact",
    desc: "Ensuring solutions improve lives and advance development.",
  },
  {
    letter: "E",
    title: "Excellence & Innovation",
    desc: "Continuous improvement through forward-thinking strategies.",
    span: true, // last card spans 2 columns
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-[#0f2035] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#b8943f]" />
              <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
                Core Values
              </span>
            </div>

            <h2 className="text-white text-3xl md:text-5xl font-light leading-tight">
              The <span className="text-[#d4aa56] italic">PORSCHE</span> Principles
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/60 leading-relaxed"
          >
            Our corporate philosophy is anchored on seven enduring ideals that guide our conduct and service delivery.
          </motion.p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#b8943f]/20"
        >
          {values.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative group bg-[#0f2035] p-8 ${
                item.span ? "lg:col-span-2" : ""
              }`}
            >
              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#b8943f] group-hover:w-full transition-all duration-300" />

              {/* Big Letter */}
              <div className="text-5xl font-light text-[#b8943f]/20 mb-4 group-hover:text-[#b8943f]/40 transition">
                {item.letter}
              </div>

              {/* Title */}
              <h3 className="text-[#d4aa56] text-sm uppercase tracking-widest font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}