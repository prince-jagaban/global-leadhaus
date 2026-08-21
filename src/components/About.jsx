"use client";

import {
  Eye,
  Rocket,
  Building2,
  Users,
  Leaf,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

const pillars = [
  {
    icon: Building2,
    title: "Institutional Strengthening",
    text: "We support governments, corporations, and development organizations in navigating complex operational environments and improving governance frameworks.",
  },
  {
    icon: Users,
    title: "Empowering Leadership",
    text: "We believe organizations thrive when leadership is visionary. We build competencies and close capacity gaps to create enduring impact.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    text: "Our work is driven by a commitment to solutions that address immediate needs while strengthening systems for sustained success.",
  },
  {
    icon: Layers3,
    title: "Multidisciplinary Capabilities",
    text: "From corporate advisory and IT to infrastructure and governance evaluation, we deliver integrated solutions across key sectors.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-6 md:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-[420px]"
          >
            {/* Background Gold Block */}
            <div className="absolute top-10 left-10 right-0 bottom-0 bg-[#f0e2b8]" />

            {/* Main Navy Block */}
            <div className="absolute top-0 left-0 right-10 bottom-10 bg-[#0f2035] p-8 flex flex-col justify-end overflow-hidden">

              {/* Decorative Circle */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-[#b8943f]/20" />

              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full border border-[#b8943f]/10" />

              {/* Quote */}
              <p className="relative text-white italic font-poppins text-xl leading-relaxed border-l-2 border-[#b8943f] pl-4">
                "We combine global professional standards with contextual
                understanding of institutional environments."
              </p>

              <span className="text-[#b8943f] text-xs mt-4 tracking-widest uppercase">
                — Global LeadHaus Consult
              </span>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Section Label */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#b8943f]" />

              <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
                Who We Are
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light text-[#0f2035] leading-tight mb-6"
            >
              Built to Bridge
              <br />
              <span className="italic text-[#b8943f]">
                Critical Gaps
              </span>
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed mb-4"
            >
              Global LeadHaus Consult Ltd was founded with a deep passion for
              success and a clear recognition of the gaps in competencies,
              systems, and capacity development within many institutions.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-500 leading-relaxed"
            >
              We are rooted in the understanding that many organizations
              possess great potential but often struggle with structural
              inefficiencies, leadership gaps, limited technical capacity, and
              the absence of strategic systems required for sustainable growth.
            </motion.p>
          </div>
        </div>

        {/* =========================================================
            VISION & MISSION
        ========================================================= */}
        <div className="mt-24">

          {/* Section Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#b8943f]" />

              <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
                Our Direction
              </span>

              <div className="w-10 h-[1px] bg-[#b8943f]" />
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-[#0f2035]">
              Vision &{" "}
              <span className="italic text-[#b8943f]">
                Mission
              </span>
            </h3>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* VISION */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#0f2035] p-8 md:p-10 overflow-hidden transition-all duration-300"
            >
              {/* Accent */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#b8943f] group-hover:w-full transition-all duration-500" />

              {/* Decorative Circle */}
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full border border-[#b8943f]/10" />

              {/* Icon */}
              <div className="relative w-14 h-14 flex items-center justify-center rounded-full border border-[#b8943f]/30 bg-[#b8943f]/10 text-[#d4aa56] mb-6">
                <Eye size={25} strokeWidth={1.5} />
              </div>

              {/* Label */}
              <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
                Our Vision
              </span>

              {/* Statement */}
              <p className="relative text-white/80 leading-relaxed mt-4">
                To cultivate a world where purposeful leadership,
                professional excellence, and innovative solutions converge to
                inspire love for humanity, enhance the quality of life, and
                generate enduring impact across institutions, communities, and
                global systems.
              </p>
            </motion.div>

            {/* MISSION */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative bg-[#faf8f3] border border-[#b8943f]/20 p-8 md:p-10 overflow-hidden transition-all duration-300"
            >
              {/* Accent */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#b8943f] group-hover:w-full transition-all duration-500" />

              {/* Decorative Circle */}
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full border border-[#b8943f]/10" />

              {/* Icon */}
              <div className="relative w-14 h-14 flex items-center justify-center rounded-full border border-[#b8943f]/30 bg-[#b8943f]/10 text-[#b8943f] mb-6">
                <Rocket size={25} strokeWidth={1.5} />
              </div>

              {/* Label */}
              <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
                Our Mission
              </span>

              {/* Statement */}
              <p className="relative text-[#0f2035]/75 leading-relaxed mt-4">
                We exist to serve as a catalyst for purposeful leadership and
                transformative progress, advancing ideas, systems, and
                institutions that nurture human potential. Through disciplined
                professionalism, thoughtful innovation, and unwavering
                commitment to excellence in service, we partner with
                organizations to build sustainable solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            STRATEGIC PILLARS
        ========================================================= */}
        <div className="mt-24">

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#b8943f]" />

              <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
                What We Stand For
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-light text-[#0f2035]">
              Our Strategic{" "}
              <span className="italic text-[#b8943f]">
                Pillars
              </span>
            </h3>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group border border-[#b8943f]/20 p-6 bg-[#faf8f3] hover:border-[#b8943f] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0f2035] text-[#d4aa56] mb-4 group-hover:bg-[#b8943f] group-hover:text-[#0f2035] transition-all duration-300">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-[#0f2035] mb-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}