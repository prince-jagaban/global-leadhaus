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
      "We deliver strategic planning, institutional transformation, governance advisory, and risk management solutions. Our expertise spans business expansion, investment feasibility, and performance optimization for organizations operating in complex environments.",
    tags: [
      "Strategic Planning",
      "Governance",
      "Risk Management",
      "Feasibility Studies",
    ],
    tools: [
      "SWOT & PESTLE",
      "Balanced Scorecard",
      "Process Mapping",
      "Power BI & Tableau",
    ],
    image: "/images/services/consulting.jpg",
  },
  {
    title: "Training & Professional Development",
    description:
      "We provide executive leadership training, workforce development, and institutional capacity building programs. Our solutions enhance professional competencies across public, private, and academic sectors.",
    tags: [
      "Leadership Programs",
      "Capacity Building",
      "Research & Policy",
      "Digital Skills",
    ],
    tools: ["LMS", "TNA", "ADDIE Model", "SPSS"],
    image: "/images/services/training.jpg",
  },
  {
    title: "Construction & Infrastructure",
    description:
      "We support infrastructure development through project management, feasibility analysis, and regulatory advisory. Our services ensure efficient execution and sustainable outcomes for large-scale developments.",
    tags: [
      "Project Management",
      "Feasibility",
      "Real Estate",
      "Policy Advisory",
    ],
    tools: ["MS Project", "Primavera", "GIS", "Financial Modeling"],
    image: "/images/services/infrastructure.jpg",
  },
  {
    title: "Telecommunications & IT",
    description:
      "We drive digital transformation through IT advisory, data analytics, and network infrastructure solutions. Our expertise includes cybersecurity, cloud platforms, and advanced data management systems.",
    tags: [
      "Digital Transformation",
      "Data Analytics",
      "Cybersecurity",
      "Network Design",
    ],
    tools: ["Python", "SQL", "Power BI", "Cloud Platforms"],
    image: "/images/services/it.jpg",
  },
  {
    title: "Oil & Gas Advisory",
    description:
      "We provide strategic advisory across project development, regulatory compliance, and investment feasibility within the energy sector, supporting sustainable and efficient operations.",
    tags: [
      "Regulatory Compliance",
      "Investment Analysis",
      "ESIA",
      "Policy Advisory",
    ],
    tools: [
      "Energy Models",
      "ESIA Frameworks",
      "Financial Modeling",
      "Project Evaluation",
    ],
    image: "/images/services/oil-gas.jpg",
  },
  {
    title: "Auditing, Governance & Election Audit",
    description:
      "We deliver comprehensive auditing services including financial audits, system evaluations, governance assessments, and electoral auditing to ensure transparency, accountability, and institutional integrity.",
    tags: [
      "Financial Audit",
      "Governance",
      "Election Audit",
      "ESG",
    ],
    tools: ["ISA Standards", "COSO Framework", "ACL Analytics", "IDEA"],
    image: "/images/services/audit.jpg",
  },
  {
    title: "Logistics & Procurement",
    description:
      "We provide procurement advisory, supply chain optimization, vendor management, and logistics planning services. Our solutions enhance efficiency, ensure compliance, and reduce operational costs.",
    tags: [
      "Procurement",
      "Supply Chain",
      "Vendor Management",
      "Logistics",
    ],
    tools: [
      "ERP Systems",
      "SCM Platforms",
      "Procurement Analytics",
      "Inventory Systems",
    ],
    image: "/images/services/procurement.jpg",
  },
  {
    title: "Strategic Communications & Public Relations",
    description:
      "We provide strategic communication and public relations advisory to help organizations manage reputation, engage stakeholders, and communicate effectively across platforms.",
    tags: [
      "Media Relations",
      "Corporate Communication",
      "Crisis Communication",
      "Stakeholder Engagement",
      "Digital Communication Strategy",
      "Content Development & Messaging",
    ],
    tools: [
      "Stakeholder Mapping",
      "Crisis Communication Frameworks",
      "Media Monitoring Tools",
      "Brand Positioning Models",
    ],
      image: "/images/services/pr.jpg",
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
            We provide integrated consulting, training, infrastructure, technology,
            auditing, and procurement solutions designed to strengthen institutions
            and deliver measurable impact across sectors.
          </motion.p>
        </div>

        {/* Grid */}
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
                <div className="absolute inset-0 bg-[#0f2035]/ group-hover:bg-[#0f2035]/ transition duration-300" />
              </div>

              {/* Accent */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-[#b8943f] group-hover:w-full transition-all duration-300 z-10" />

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0f2035] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#b8943f] border border-[#b8943f]/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tools */}
                <div className="text-xs text-gray-500">
                  <span className="font-semibold text-[#b8943f]">
                    Tools:
                  </span>{" "}
                  {service.tools.join(", ")}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}