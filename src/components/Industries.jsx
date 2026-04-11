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

const industries = [
  {
    icon: "🏛️",
    title: "Government & Public Sector",
    description:
      "Strengthening governance, policy development, and institutional reforms.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure & Construction",
    description:
      "Driving sustainable infrastructure development and project delivery.",
  },
  {
    icon: "💻",
    title: "Technology & Telecommunications",
    description:
      "Empowering digital transformation and innovative ICT solutions.",
  },
  {
    icon: "⚡",
    title: "Energy & Natural Resources",
    description:
      "Providing strategic advisory across oil, gas, and renewable energy sectors.",
  },
  {
    icon: "🎓",
    title: "Education & Capacity Development",
    description:
      "Enhancing human capital through training and institutional development.",
  },
  {
    icon: "💰",
    title: "Financial Services",
    description:
      "Supporting financial governance, risk management, and regulatory compliance.",
  },
  {
    icon: "🌍",
    title: "Development & NGOs",
    description:
      "Collaborating with international organizations to deliver impactful solutions.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Social Services",
    description:
      "Improving healthcare systems and social impact initiatives.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-[#0f2035] py-24 px-6 md:px-12">
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
              Industries We Serve
            </span>
            <div className="w-10 h-[1px] bg-[#b8943f]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white">
            Delivering Impact Across{" "}
            <span className="italic text-[#d4aa56]">Diverse Sectors</span>
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed">
            Our multidisciplinary expertise enables us to provide tailored
            solutions across key industries, fostering sustainable growth and
            institutional excellence.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group bg-[#1a3350] border border-[#b8943f]/20 p-6 rounded-sm hover:border-[#b8943f]/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 text-[#d4aa56]">
                {industry.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed">
                {industry.description}
              </p>

              {/* Hover Accent */}
              <div className="mt-4 h-[2px] w-0 bg-[#b8943f] transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}