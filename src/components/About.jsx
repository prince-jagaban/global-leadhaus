"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Rocket,
  Leaf,
  Settings,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const pillars = [
  {
    icon: Landmark,
    title: "Institutional Strengthening",
    text: "We support governments, corporations, and development organizations in navigating complex operational environments and improving governance frameworks.",
  },
  {
    icon: Rocket,
    title: "Empowering Leadership",
    text: "We believe organizations thrive when leadership is visionary. We build competencies and close capacity gaps to create enduring impact.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    text: "Our work is driven by a commitment to solutions that address immediate needs while strengthening systems for sustained success.",
  },
  {
    icon: Settings,
    title: "Multidisciplinary Capabilities",
    text: "From corporate advisory and IT to infrastructure and governance evaluation, we deliver integrated solutions across key sectors.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT VISUAL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative h-[420px]"
        >
          {/* Background block */}
          <div className="absolute top-10 left-10 right-0 bottom-0 bg-[#f0e2b8]" />

          {/* Main block */}
          <div className="absolute top-0 left-0 right-10 bottom-10 bg-[#0f2035] p-8 flex flex-col justify-end overflow-hidden">
            <p className="text-white italic text-xl border-l-2 border-[#b8943f] pl-4">
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
          {/* Label */}
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

          {/* Title */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light leading-tight mb-6 text-[#0f2035]"
          >
            Built to Bridge <br />
            <span className="italic text-[#b8943f]">
              Critical Gaps
            </span>
          </motion.h2>

          {/* Text */}
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

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-500 leading-relaxed mb-8"
          >
            We are rooted in the understanding that many organizations possess
            great potential but often struggle with structural inefficiencies,
            leadership gaps, limited technical capacity, and the absence of
            strategic systems required for sustainable growth.
          </motion.p>

          {/* PILLARS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  custom={i + 4}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="border border-[#b8943f]/20 p-4 bg-[#faf8f3] hover:border-[#b8943f] hover:-translate-y-1 transition duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b8943f]/10 text-[#b8943f] mb-3">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-[#0f2035] mb-1">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-gray-500">
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