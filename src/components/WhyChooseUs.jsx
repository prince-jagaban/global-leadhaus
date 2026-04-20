"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Target,
  Handshake,
  BarChart3,
  Scale,
  Rocket,
} from "lucide-react";

// Animation Variants
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Reasons Data with Lucide Icons
const reasons = [
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We deliver solutions aligned with international best practices and industry benchmarks.",
  },
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Our strategies are tailored to produce measurable and sustainable outcomes.",
  },
  {
    icon: Handshake,
    title: "Client-Centric Solutions",
    description:
      "We prioritize client needs and develop customized solutions that drive success.",
  },
  {
    icon: BarChart3,
    title: "Multidisciplinary Expertise",
    description:
      "Our team combines expertise across governance, infrastructure, ICT, and capacity development.",
  },
  {
    icon: Scale,
    title: "Integrity & Professionalism",
    description:
      "We uphold the highest ethical standards in all engagements and partnerships.",
  },
  {
    icon: Rocket,
    title: "Innovation & Excellence",
    description:
      "We leverage modern technologies and forward-thinking strategies to deliver excellence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="bg-navy text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold uppercase tracking-[0.2em] text-xs">
              Why Choose Us
            </span>
            <div className="w-10 h-px bg-gold" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Your Trusted Partner for{" "}
            <span className="italic text-gold-light">
              Sustainable Growth
            </span>
          </h2>

          <p className="text-white/60 mt-4 leading-relaxed">
            We combine expertise, innovation, and integrity to deliver
            transformative solutions that strengthen institutions and empower
            leadership across diverse sectors.
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
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-navy-card border border-gold/20 p-8 rounded-lg hover:border-gold/40 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gold/10 text-gold mb-6">
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}