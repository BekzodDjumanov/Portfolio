"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";

import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { AiFillSketchCircle } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, filter: "blur(10px)", y: -20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className="
      flex min-h-screen flex-col 
      font-sans gap-8
      bg-white text-[#121212]
      dark:bg-[#121212] dark:text-[#e3dac9]
    "
    >
      <div
        ref={headerRef}
        className="
        fixed top-6 left-1/2 -translate-x-1/2
        px-8 py-4
        rounded-full
        backdrop-blur-xl
        bg-white/5 dark:bg-[#171717]/50 
        border border-white/20 dark:border-white/10
        shadow-lg
        z-50
        text-[#121212] dark:text-[#e3dac9]
        flex items-center justify-between
        opacity-0
      "
      >
        <nav className="flex gap-8 text-sm opacity-80">
          <a
            href="/"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out flex items-center"
          >
            <RollingText className="align-middle">Home</RollingText>
          </a>

          <a
            href="#"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">About</RollingText>
          </a>
          <a
            href="#"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">Projects</RollingText>
          </a>
          <a
            href="#"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">Reviews</RollingText>
          </a>
          <a
            href="#"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">Contact</RollingText>
          </a>
        </nav>
      </div>

      <div
        className="flex items-center justify-center absolute top-10 right-10
               hover:scale-105 border border-[#e3dac9] rounded-lg p-1.5
               fade-left opacity-0 transition-all duration-300 ease-in-out cursor-pointer"
      >
        <AnimatedThemeToggler className="cursor-pointer" />
      </div>

      <div
        className="flex items-center justify-center absolute top-10 left-10
          hover:scale-110 text-4xl fade-right opacity-0 transition-all duration-300 ease-in-out cursor-pointer"
      >
        <FiGlobe />
      </div>

      <main className="flex-1 flex items-center justify-center">
        {/* whatever you want centered */}
        <div className="text-center text-sm text-[#121212] dark:text-[#e3dac9]">
          COMING SOON
        </div>
      </main>
    </div>
  );
}
