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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const reasons = [
  {
    icon: "🌍",
    title: "Global Standards",
    description:
      "We deliver solutions aligned with international best practices and industry benchmarks.",
  },
  {
    icon: "🎯",
    title: "Results-Driven Approach",
    description:
      "Our strategies are tailored to produce measurable and sustainable outcomes.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Solutions",
    description:
      "We prioritize client needs and develop customized solutions that drive success.",
  },
  {
    icon: "📊",
    title: "Multidisciplinary Expertise",
    description:
      "Our team combines expertise across governance, infrastructure, ICT, and capacity development.",
  },
  {
    icon: "⚖️",
    title: "Integrity & Professionalism",
    description:
      "We uphold the highest ethical standards in all engagements and partnerships.",
  },
  {
    icon: "🚀",
    title: "Innovation & Excellence",
    description:
      "We leverage modern technologies and forward-thinking strategies to deliver excellence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-[#faf8f3] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#b8943f]" />
            <span className="text-[#b8943f] uppercase tracking-[0.2em] text-xs">
              Why Choose Us
            </span>
            <div className="w-10 h-[1px] bg-[#b8943f]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-[#0f2035]">
            Your Trusted Partner for{" "}
            <span className="italic text-[#b8943f]">
              Sustainable Success
            </span>
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            We combine expertise, innovation, and integrity to deliver
            transformative solutions that empower institutions and drive
            meaningful impact.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group bg-white border border-[#b8943f]/20 p-8 rounded-sm shadow-sm hover:shadow-xl hover:border-[#b8943f]/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 text-[#b8943f]">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0f2035] mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Hover Accent Line */}
              <div className="mt-4 h-[2px] w-0 bg-[#b8943f] transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-[#b8943f] text-[#0f2035] px-8 py-3 text-sm uppercase tracking-wider font-semibold hover:bg-[#d4aa56] transition"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}