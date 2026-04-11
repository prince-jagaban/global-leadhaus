"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// LEADHAUS Strategic Pillars
const pillars = [
  { letter: "L", title: "Leadership & Governance" },
  { letter: "E", title: "Economic & Policy Advisory" },
  { letter: "A", title: "Advisory & Institutional Strengthening" },
  { letter: "D", title: "Digital Transformation & Innovation" },
  { letter: "H", title: "Human Capital Development" },
  { letter: "A", title: "Audit, Risk & Compliance" },
  { letter: "U", title: "Urban Development & Infrastructure" },
  { letter: "S", title: "Sustainability & ESG Solutions" },
];

// 5-Stage Methodology
const methodology = [
  {
    step: "01",
    title: "Diagnose",
    description: "Assess institutional gaps, challenges, and opportunities through research and stakeholder engagement.",
  },
  {
    step: "02",
    title: "Design",
    description: "Develop tailored, data-driven strategies aligned with organizational goals and global standards.",
  },
  {
    step: "03",
    title: "Develop",
    description: "Create actionable frameworks, systems, and capacity-building programs.",
  },
  {
    step: "04",
    title: "Deploy",
    description: "Implement solutions effectively with measurable milestones and stakeholder collaboration.",
  },
  {
    step: "05",
    title: "Drive Impact",
    description: "Monitor, evaluate, and optimize outcomes to ensure sustainable success and long-term value.",
  },
];

export default function Framework() {
  return (
    <section id="framework" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#b8943f]" />
            <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
              Our Framework
            </span>
            <div className="w-10 h-[1px] bg-[#b8943f]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-[#0f2035]">
            The <span className="italic text-[#b8943f]">LEADHAUS</span> Model
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Our integrated framework combines strategic insight, institutional expertise,
            and innovative solutions to deliver measurable and sustainable impact.
          </p>
        </motion.div>

        {/* STRATEGIC PILLARS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-center text-[#0f2035] mb-10">
            Strategic Pillars
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#faf8f3] border border-[#b8943f]/20 p-6 text-center hover:shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl font-light text-[#b8943f] mb-2">
                  {pillar.letter}
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {pillar.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* METHODOLOGY */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center text-[#0f2035] mb-12">
            Our 5-Stage Delivery Methodology
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {methodology.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative bg-[#0f2035] text-white p-6 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-[#d4aa56] text-3xl font-light mb-3">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#b8943f]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}