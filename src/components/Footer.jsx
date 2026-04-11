"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/global-leadhaus",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      href: "https://x.com/globalleadhaus",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com/globalleadhaus",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com/globalleadhaus",
    },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Framework", href: "#framework" },
    { name: "Industries", href: "#industries" },
    { name: "Why Choose Us", href: "#why" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Corporate Advisory",
    "Training & Development",
    "Digital Transformation",
    "Infrastructure Consulting",
    "Oil & Gas Advisory",
    "Audit & Governance",
  ];

  return (
    <footer className="bg-[#0a1a2f] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo1.png"
                alt="Global LeadHaus Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Global LeadHaus
                </h3>
                <p className="text-xs text-[#d4aa56] tracking-widest">
                  Consult Ltd
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A multidisciplinary consulting and advisory firm committed to
              strengthening institutions, empowering leadership, and delivering
              sustainable solutions across sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#d4aa56] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-[#d4aa56] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#d4aa56] mb-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-[#d4aa56] transition"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#d4aa56] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#d4aa56]" />
                Abuja, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#d4aa56]" />
                info@globalleadhaus.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#d4aa56]" />
                +234 800 000 0000
              </li>
              <li>🕒 Mon – Fri: 9:00 AM – 5:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-white/60 text-center md:text-left">
            © {year} Global LeadHaus Consult Ltd. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60 hidden sm:block">
              Follow Us:
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 flex items-center justify-center border border-[#d4aa56]/40 rounded-full text-white hover:bg-[#d4aa56] hover:text-[#0a1a2f] transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}