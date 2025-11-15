"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const SmallNav = () => {
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 h-12 ${
        scrolled ? "backdrop-blur-md bg-white/20 shadow-sm" : "bg-transparent"
      } w-full z-50 transition-all lg:hidden block`}>
      <span className="flex items-center justify-end h-full px-4">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
      </span>
    </nav>
  );
};

export default SmallNav;