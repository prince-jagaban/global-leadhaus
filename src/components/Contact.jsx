"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0f2035] py-24 px-6 md:px-12">
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
              Contact Us
            </span>
            <div className="w-10 h-[1px] bg-[#b8943f]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-white">
            Let’s Start a{" "}
            <span className="italic text-[#d4aa56]">Conversation</span>
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed">
            Reach out to us for professional consulting services, partnerships,
            or inquiries. Our team is ready to assist you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Contact Information
              </h3>
              <p className="text-white/70">
                We'd love to hear from you. Connect with us through any of the
                following channels.
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem
                icon="📍"
                title="Our Office"
                detail="Abuja, Federal Capital Territory, Nigeria"
              />
              <ContactItem
                icon="📧"
                title="Email Us"
                detail="info@globalleadhaus.com"
              />
              <ContactItem
                icon="📞"
                title="Call Us"
                detail="+234 800 000 0000"
              />
              <ContactItem
                icon="⏰"
                title="Working Hours"
                detail="Monday – Friday: 9:00 AM – 5:00 PM"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#0f2035] mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <InputField
                label="Full Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b8943f]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b8943f] text-[#0f2035] py-3 font-semibold uppercase tracking-wider hover:bg-[#d4aa56] transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Abuja%2C%20Nigeria&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

/* Reusable Contact Item */
function ContactItem({ icon, title, detail }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl text-[#d4aa56]">{icon}</div>
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-white/70 text-sm">{detail}</p>
      </div>
    </div>
  );
}

/* Reusable Input Field */
function InputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b8943f]"
      />
    </div>
  );
}