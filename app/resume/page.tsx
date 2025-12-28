"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaChevronDown } from "react-icons/fa6";

import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { AiFillSketchCircle } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, filter: "blur(10px)", y: -10 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (!chevronRef.current) return;

    gsap.to(chevronRef.current, {
      rotate: isOpen ? 180 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll(".fade-in"),
      { opacity: 0, y: -10, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      }
    );
  }, []);

  const timeline = [
    {
      date: "Jan 2020 - Present",
      role: "Entrepreneur",
      company: "eBay Enterprise",
      logo: "/images/ebay.png",
      description:
        "Pursuing a B.S. in Computer Engineering with a focus on embedded systems and software architecture.",
    },
    {
      date: "May 2026 — UNKNOWN",
      role: "Cloud Software Developer Intern",
      company: "CACI International",
      logo: "/images/caci.png",
      description:
        "Worked on frontend systems, internal tooling, and performance optimizations.",
    },
    {
      date: "May 2025 — Sep 2025",
      role: "Software Engineer Intern",
      company: "Cummings & Co. Realtors",
      logo: "/images/cummings.png",
      description:
        "Built internal dashboards and supported legacy systems during migration.",
    },
    {
      date: "Jan 2024 — May 2024",
      role: "IT Administrator Intern",
      company: "First Financial Federal Credit Union",
      logo: "/images/fffcu.png",
      description:
        "Built internal dashboards and supported legacy systems during migration.",
    },
  ];

  return (
    <div
      className="
    flex min-h-screen flex-col 
    font-sans gap-8
    bg-white text-[#000000]
    dark:bg-[#000000] dark:text-[#ffffff]
  "
    >
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40
      bg-black/20 backdrop-blur-sm
      transition-opacity duration-300
      animate-in fade-in"
        />
      )}
      <div
        ref={headerRef}
        className={`fixed top-6 inset-x-0 mx-auto
    px-6 py-3 lg:px-8 lg:py-4
    rounded-[2rem]
    backdrop-blur-xl
    bg-white/5 dark:bg-[#171717]/50
    border border-white/20 dark:border-white/10
    shadow-lg z-50 opacity-0
    text-[#000000] dark:text-[#ffffff]
    flex flex-col items-center
    ${isOpen ? "w-[90%] md:w-[400px]" : "w-fit"}
  `}
      >
        <div className="flex items-center w-full justify-center lg:justify-center">
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden items-center gap-2 text-sm z-50 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <span>Menu</span>
            <div ref={chevronRef} className="flex items-center justify-center">
              <FaChevronDown size={12} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 text-sm opacity-80">
            <Link
              href="/"
              className="transition-all duration-300 flex items-center"
            >
              <RollingText>Home</RollingText>
            </Link>
            <Link href="/resume" className="transition-all duration-300">
              <RollingText>Resume</RollingText>
            </Link>
            <Link href="/projects" className="transition-all duration-300">
              <RollingText>Projects</RollingText>
            </Link>
            <Link href="/reviews" className="transition-all duration-300">
              <RollingText>Reviews</RollingText>
            </Link>
            <Link href="/contact" className="transition-all duration-300">
              <RollingText>Contact</RollingText>
            </Link>
          </nav>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center w-full mt-4 pt-4 mb-2 border-t border-white/10 gap-6 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center gap-5 text-base">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="transition-colors"
              >
                <RollingText>Home</RollingText>
              </Link>
              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="transition-colors"
              >
                <RollingText>Resume</RollingText>
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="transition-colors"
              >
                <RollingText>Projects</RollingText>
              </Link>
              <Link
                href="/reviews"
                onClick={() => setIsOpen(false)}
                className="transition-colors"
              >
                <RollingText>Reviews</RollingText>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="transition-colors"
              >
                <RollingText>Contact</RollingText>
              </Link>
            </nav>
          </div>
        )}
      </div>

      <div
        className="flex fixed items-center justify-center absolute top-10 right-10
        hover:scale-130
        rounded-full p-1.5 fade-left opacity-0 transition-all scale-120
        duration-300 ease-in-out cursor-pointer
        shadow-md z-50 backdrop-blur"
      >
        <AnimatedThemeToggler className="cursor-pointer" />
      </div>

      <div
        className="flex fixed items-center justify-center absolute top-8 left-10
        hover:scale-105 shadow-md rounded-full backdrop-blur p-1.5 text-4xl fade-right opacity-0 transition-all duration-300 ease-in-out cursor-pointer z-50"
      >
        <FiGlobe />
      </div>

      {/* MAIN CONTENT HERE */}
      <main
        ref={containerRef}
        className="flex-1 flex flex-col items-center gap- mt-10 px-4 py-1 m-auto"
      >
        <section className="opacity-0 fade-in w-full max-w-6xl mx-auto flex flex-col py-20 md:py-32 px-4">
          <div className="w-full flex flex-col gap-4">
            {/* Heading Logic: Kept the dot-indicator style */}
            <h1 className="flex items-center gap-3 text-3xl">
              <span className="w-[4px] h-8 dark:bg-white bg-black rounded-full inline-block" />
              resume & roadmap
            </h1>

            {/* Subtext Logic: Kept your specific alignment and opacity */}
            <p className="text-md text-zinc-500 max-w-prose">
              My journey through employment and each role I had the pleasure of
              taking, where I had the opportunity to contribute to innovative
              projects and designs.
            </p>
          </div>

          <div className="relative max-w-4xl py-12 md:mx-0">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 mb-16 group"
              >
                {/* Logo / Node (Left) */}
                <div
                  className="relative z-10 flex items-center justify-center
                w-14 h-14 md:w-16 md:h-16 shrink-0
                rounded-full bg-white dark:bg-[#0A0A0B]
                border-[3px] border-zinc-200 dark:border-zinc-800
                group-hover:border-purple-500/50 transition-all duration-500
                shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]
                overflow-hidden p-2"
                >
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                {/* Stacked Content (Right) */}
                <div className="flex flex-col gap-1 text-left max-w-md">
                  <span className="text-xs font-medium opacity-40 whitespace-nowrap">
                    {item.date}
                  </span>

                  <h3 className="text-lg dark:text-white">{item.role}</h3>

                  <p className="text-xs font-medium whitespace-nowrap dark:text-purple-300 dark:bg-white/5 inline-block w-fit px-2 py-0.5 rounded-md">
                    {item.company}
                  </p>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        className="dark:bg-[#000000] dark:text-[#ffffff] px-8 py-12 md:py-16 flex flex-wrap justify-between items-start gap-y-8 w-full relative 
  shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-none -mt-25"
      >
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="mt-2 flex gap-2 items-center">
            <ShinyButton className="flex items-center gap-2">
              <AiFillSketchCircle className="text-2xl" />
              <span className="inline-block">Sustainable Solutions</span>
            </ShinyButton>
          </div>

          <div className="rights text-sm text-[#7b7c8c] absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            © Bekzod Djumanov | All rights reserved.
          </div>
        </div>

        {/* Navigation Section */}
        <div className="footer-nav flex flex-wrap gap-6 items-center mt-2 mr-22.5 text-sm">
          {["Home", "Resume", "Projects", "Reviews", "Contacts"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className="relative inline-block pb-1 dark:text-[#ffffff] dark:hover:text-purple-400 hover:text-purple-400 transition-colors duration-300 ease-in-out"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Social Section */}
        <div className="footer-social flex flex-wrap gap-6 items-center mt-2 text-lg dark:text-[#ffffff]">
          <a
            href="#"
            className="hover:text-purple-400 transition-colors duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="hover:text-purple-400 transition-colors duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Line */}
        <div className="footer-line w-full h-[1px] bg-white/10 my-4"></div>

        {/* Ending Credit */}
        <div className="ending-credit w-full text-center text-[#7b7c8c] text-xs">
          Curated with Next.js, React, Tailwind CSS, Framer Motion, GSAP, &
          Figma.
        </div>
      </footer>
    </div>
  );
}
