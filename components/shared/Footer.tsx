"use client";
import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import logo from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "#",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:mazedurrahmantalib1998@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Learning Journey", href: "#learning-journey" },
    { name: "Experiences", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "mazedurrahmantalib1998@gmail.com",
      href: "mailto:mazedurrahmantalib1998@gmail.com",
    },
    {
      icon: FaPhone,
      text: "01856344178",
      href: "tel:01856344178",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Beaumont, Texas, United States",
      href: "https://maps.app.goo.gl/ZXbAJZHJE1tf5NWG7"
    },
  ];

  return (
    <footer className=" bg-purple-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-8 py-8 md:py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-violet-500 rounded-xl flex items-center justify-center">
                <Image
                  src={logo}
                  height={20}
                  width={20}
                  alt="Mazedur Rahman Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Md. Mazedur Rahman</h3>
            </div>

            <p className="text-slate-100 leading-relaxed mb-4 md:mb-6">
              Business Graduate from University of Dhaka.  
              HR Intern and MTO – Marketing HR with hands-on experience in 
              recruitment, onboarding, employee development, and administrative operations.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-800/60 border border-slate-700/50 rounded-xl flex items-center justify-center text-white transition-all duration-200 ${social.color} hover:bg-slate-700/60 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 md:mb-6">
              Quick Links
            </h4>
            <ul className="md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-100 hover:text-slate-200 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 md:mb-6">
              Get In Touch
            </h4>
            <ul className="md:space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 text-slate-100 hover:text-slate-300 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-slate-800/70 border border-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-700/50 transition-colors duration-300">
                      <info.icon className="text-sm" />
                    </div>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-100 text-sm flex items-center gap-2">
              © {currentYear} Md. Mazedur Rahman. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
