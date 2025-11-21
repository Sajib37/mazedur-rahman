"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navlinks } from "./Sidebar";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // Detect which section is currently in view
      let current = "";
      Navlinks.forEach((section) => {
        const id = section.toLowerCase().replace(/\s+/g, "-");
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 ${
        scrolled ? "backdrop-blur-md bg-white/50 shadow-sm" : "bg-transparent"
      } w-full z-50 transition-all hidden lg:block`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-1 items-center">
          <Image
            src="/profile.png"
            alt="Mazedur Rahman"
            width={40}
            height={40}
            className="rounded-full border-2 border-accent"
          />
          <p className="text-3xl font-bold font-serif text-[#D7B196] italic">MR</p>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-8">
          {Navlinks.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");
            const isActive = activeSection === id;
            return (
              <li key={item} className="relative">
                <a
                  href={`#${id}`}
                  className={`px-3 py-2 rounded-full font-medium transition-all duration-300 ease-in-out ${
                    isActive
                      ? "bg-accent/80 text-white scale-105 shadow-md"
                      : "text-gray-900 hover:text-accent hover:scale-105"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
