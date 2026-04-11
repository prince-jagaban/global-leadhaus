"use client";

import Image from "next/image";
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

const services = [
  {
    title: "Consulting & Corporate Advisory",
    description:
      "Strategic planning, governance, risk management, and organizational restructuring for complex institutional needs.",
    tags: ["Strategic Planning", "Governance", "Risk Management"],
    image: "/images/services/consulting.jpg",
  },
  {
    title: "Training & Professional Development",
    description:
      "Executive leadership programs, skills acquisition, and institutional capacity building for public and private sectors.",
    tags: ["Leadership Programs", "Capacity Building", "LMS"],
    image: "/images/services/training.jpg",
  },
  {
    title: "Construction & Infrastructure",
    description:
      "Project management, feasibility analysis, real estate advisory, and development support for large-scale infrastructure.",
    tags: ["Project Management", "Feasibility", "Real Estate"],
    image: "/images/services/infrastructure.jpg",
  },
  {
    title: "Telecommunications & IT",
    description:
      "Digital transformation, data analytics, network solutions, cybersecurity, and IT systems advisory.",
    tags: ["Digital Transformation", "Data Analytics", "Network Design"],
    image: "/images/services/it.jpg",
  },
  {
    title: "Oil & Gas Advisory",
    description:
      "Regulatory compliance, investment feasibility, infrastructure support, and policy advisory for the energy sector.",
    tags: ["Regulatory Compliance", "ESIA", "Investment Analysis"],
    image: "/images/services/oil-gas.jpg",
  },
  {
    title: "Auditing & Governance",
    description:
      "Financial auditing, board evaluation, corporate governance assessment, and comprehensive ESG reporting.",
    tags: ["Financial Audit", "ESG", "Board Evaluation"],
    image: "/images/services/audit.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#faf8f3] py-24 px-6 md:px-12 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
                Our Services
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-[#0f2035] leading-tight">
              Comprehensive Solutions for{" "}
              <span className="italic text-[#b8943f]">
                Sustainable Growth
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed"
          >
            From corporate advisory to oil & gas governance, we deliver
            integrated, expert-led services across all sectors where strong
            institutions and capable leadership matter most.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0f2035]/70 group-hover:bg-[#0f2035]/6 transition duration-300" />
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#b8943f] transition-all duration-300 group-hover:w-full z-10" />

              {/* Content */}
              <div className="relative p-8">
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#0f2035] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#faf8f3] border border-[#b8943f]/20 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}