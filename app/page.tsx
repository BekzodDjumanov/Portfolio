"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";

import Link from "next/link";

import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { AiFillSketchCircle } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!dropdownRef.current) return;
    if (typeof window === "undefined") return;

    if (isOpen) {
      // DROP DOWN
      gsap.fromTo(
        dropdownRef.current,
        { y: -24, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        }
      );
    } else {
      // LIFT UP
      gsap.to(dropdownRef.current, {
        y: -24,
        opacity: 0,
        scale: 0.98,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll(".fade-in"),
      { opacity: 0, y: -20, filter: "blur(10px)" },
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

  useEffect(() => {
    if (!chevronRef.current) return;

    gsap.to(chevronRef.current, {
      rotate: isOpen ? 180 : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  useEffect(() => {
    if (!containerRef2.current) return;

    gsap.fromTo(
      containerRef2.current.querySelectorAll(".fade-in"),
      { opacity: 0, y: -20, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
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
        className="fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 lg:px-8 lg:py-4 rounded-full backdrop-blur-xl bg-white/5 dark:bg-[#171717]/50 border border-white/20 dark:border-white/10 shadow-lg z-50 text-[#121212] dark:text-[#e3dac9] flex items-center justify-between opacity-0"
      >
        {/* --- FULL SCREEN BLUR OVERLAY --- */}
        {isOpen && (
          <div
            className="fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-md"
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "100vh",
              zIndex: -10,
            }}
            onClick={() => setIsOpen(false)}
          />
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm lg:hidden z-50 opacity-80 dark:hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer hover:text-[#e3dac9]"
        >
          <span>Menu</span>
          <div ref={chevronRef} className="flex items-center justify-center">
            <FaChevronDown size={12} />
          </div>
        </button>

        {/* --- FULL WIDTH MOBILE DROPDOWN --- */}
        <div
          ref={dropdownRef}
          className="absolute top-[140%] lg:hidden opacity-0"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100vw - 2rem)",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <div className="bg-white/90 dark:bg-[#0d0d0d]/95 border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mb-2">
              Navigation
            </span>

            <div className="flex flex-col gap-5">
              <Link
                href="/"
                className="text-2xl font-medium hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-2xl font-medium hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-2xl font-medium hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/reviews"
                className="text-2xl font-medium hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="text-2xl font-medium hover:translate-x-2 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex gap-8 text-sm opacity-80">
          <Link
            href="/"
            className="hover:text-[#e3dac9] hover:opacity-100 dark:hover:text-white transition-all duration-300 ease-in-out flex items-center hover:text-[#121212]"
          >
            <RollingText className="align-middle">Home</RollingText>
          </Link>
          <Link
            href="/about"
            className="hover:text-[#e3dac9] hover:opacity-100 dark:hover:text-white transition-all duration-300 ease-in-out hover:text-[#121212]"
          >
            <RollingText className="align-middle">About</RollingText>
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#e3dac9] hover:opacity-100 dark:hover:text-white transition-all duration-300 ease-in-out hover:text-[#121212]"
          >
            <RollingText className="align-middle">Projects</RollingText>
          </Link>
          <Link
            href="/reviews"
            className="hover:text-[#e3dac9] hover:opacity-100 dark:hover:text-white transition-all duration-300 ease-in-out hover:text-[#121212]"
          >
            <RollingText className="align-middle">Reviews</RollingText>
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#e3dac9] hover:opacity-100 dark:hover:text-white transition-all duration-300 ease-in-out hover:text-[#121212]"
          >
            <RollingText className="align-middle">Contact</RollingText>
          </Link>
        </nav>
      </div>

      <div
        className="flex fixed items-center justify-center absolute top-10 right-10
        hover:scale-105 border border-[#121212] dark:border-white/20
        rounded-lg p-1.5 fade-left opacity-0 transition-all 
        duration-300 ease-in-out cursor-pointer
        shadow-md dark:shadow-none z-50"
      >
        <AnimatedThemeToggler className="cursor-pointer" />
      </div>

      <div
        className="flex fixed items-center justify-center absolute top-10 left-10
        hover:scale-110 text-4xl fade-right opacity-0 transition-all duration-300 ease-in-out cursor-pointer"
      >
        <FiGlobe />
      </div>

      {/* MAIN CONTENT HERE */}

      <main
        ref={containerRef}
        className="flex-1 flex flex-col items-center gap- mt-10 px-4 py-1 m-auto"
      >
        <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20 md:py-32 px-4">
          {/* Left Column: Text Content */}
          <div className="flex-[1.5] space-y-8 order-2 md:order-1 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-medium tracking-[0.2em] uppercase opacity-60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Washington, DC
              </div>

              {/* Forced to one line with whitespace-nowrap */}
              <div className="text-4xl">
                <h1>Full Stack Developer.</h1>
              </div>
            </div>

            <div className="space-y-4 max-w-xl mx-auto md:mx-0">
              <p className="text-lg md:text-xl leading-relaxed opacity-90 -mt-2">
                Current student at the University of Maryland, specializing in
                Computer Engineering.
              </p>
              <p className="text-sm md:text-base opacity-60 leading-relaxed">
                Carroll Community College Summa Cum Laude Alumni,{" "}
                <br className="hidden md:block" /> holding an Associate of Arts
                in Computer Science.
              </p>
            </div>

            {/* Luxury Style Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              {["Frontend Developer", "UI/UX Specialist", "Full Ride"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-5 py-2 rounded-full border border-[#121212]/10 dark:border-white/10 text-[10px] font-bold tracking-widest uppercase bg-white/5 backdrop-blur-md shadow-sm"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-center md:justify-center lg:justify-start gap-4 w-full pt-4">
              <div
                className="group flex items-center justify-center w-11 h-11 
    rounded-full bg-white/5 dark:bg-[#171717]/40
    backdrop-blur-md border border-white/20 dark:border-white/10 
    shadow-lg transition-all duration-300 ease-in-out
    hover:text-white cursor-pointer"
              >
                <FaGithub
                  size={20}
                  className="text-black dark:hover:text-white dark:text-[#e3dac9] opacity-70 transition-all duration-300 ease-in-out hover:text-[#e3dac9]"
                />
              </div>

              <div
                className="group flex items-center justify-center w-11 h-11 
    rounded-full bg-white/5 dark:bg-[#171717]/40 
    backdrop-blur-md border border-white/20 dark:border-white/10 
    shadow-lg transition-all duration-300 
    hover:text-white cursor-pointer"
              >
                <FaLinkedin
                  size={20}
                  className="text-black dark:hover:text-white dark:text-[#e3dac9] opacity-70 transition-all duration-300 ease-in-out hover:text-[#e3dac9]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end w-full">
            <div className="relative group">
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-full blur opacity-20 transition duration-1000 bg-white/10"></div>

              {/* Circular Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border border-white/20 dark:border-white/10 shadow-2xl">
                <img
                  src="/images/bateman.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 -right-4 bg-white dark:bg-[#0d0d0d] px-4 py-3 rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 hidden sm:block">
                <p className="text-[9px] uppercase tracking-widest opacity-40 font-black">
                  Currently
                </p>
                <p className="text-xs font-bold text-[#121212] dark:text-[#e3dac9]">
                  Curating Solutions 🤫
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-start text-left text-3xl mb-5">
          <h1 className="flex items-center gap-3">
            <span className="w-[4px] h-8 bg-[#e3dac9] rounded-full inline-block" />
            Experience & Skills
          </h1>
        </div>

        <section className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 py-12 px-4 border-t border-[#121212]/5 dark:border-white/5">
          {/* LEFT SIDE: STACKED SECTIONS */}
          <div className="flex-1 flex flex-col gap-12">
            {/* Technical Skills Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">
                  ● Technical Skills
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React / Next.js",
                  "TypeScript",
                  "Python",
                  "C++",
                  "Tailwind CSS",
                  "GSAP",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-[#121212]/5 dark:border-white/10 text-sm font-medium hover:border-[#e3dac9]/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Block */}
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">
                ● Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Agile Workflow",
                  "UI/UX Design",
                  "System Architecture",
                  "Public Speaking",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-[#121212]/5 dark:border-white/10 text-sm font-medium hover:border-[#e3dac9]/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: WORK HISTORY (Minimal List Style) */}
          <div className="flex-1 space-y-10 border border-white/20 px-5 py-5 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">
                Work History
              </h2>
            </div>

            <div className="space-y-10">
              {/* Experience Item 1 */}
              <div className="flex justify-between items-start group">
                <div className="flex gap-4">
                  {/* Mock Logo / Icon Placeholder matching your image */}
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold">FS</span>
                  </div>
                  <div>
                    <h3 className="text-lg leading-none">
                      Full Stack Developer
                    </h3>
                    <p className="text-sm opacity-60 mt-2">
                      Freelance & Open Source
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium opacity-40 pt-1 whitespace-nowrap">
                  Dec 2024 — Present
                </span>
              </div>

              {/* Experience Item 2 */}
              <div className="flex justify-between items-start group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold">CC</span>
                  </div>
                  <div>
                    <h3 className="text-lg leading-none">
                      Computer Science Associate
                    </h3>
                    <p className="text-sm opacity-60 mt-2">
                      Carroll Community College
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium opacity-40 pt-1 whitespace-nowrap">
                  Aug 2021 — May 2024
                </span>
              </div>
            </div>

            {/* Resume Button matching the screenshot style */}
            <button className="w-full mt-6 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              A more detailed look <IoIosArrowForward />
            </button>
          </div>
        </section>
      </main>

      <footer
        className="dark:bg-[#0d0d0d] dark:text-[#e3dac9] px-8 py-12 md:py-16 flex flex-wrap justify-between items-start gap-y-8 w-full relative 
  shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-none"
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
          {["Home", "About", "Projects", "Reviews", "Contacts"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className="relative inline-block pb-1 dark:text-[#e3dac9] dark:hover:text-white transition-colors duration-300 ease-in-out hover:text-[#e3dac9]"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Social Section */}
        <div className="footer-social flex flex-wrap gap-6 items-center mt-2 text-lg dark:text-[#e3dac9]">
          <a
            href="#"
            className="dark:hover:text-white transition-colors duration-300 ease-in-out hover:text-[#e3dac9]"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="dark:hover:text-white transition-colors duration-300 ease-in-out hover:text-[#e3dac9]"
          >
            <FaDiscord />
          </a>
          <a
            href="https://www.instagram.com/projectlift.umd/"
            className="dark:hover:text-white transition-colors duration-300 ease-in-out hover:text-[#e3dac9]"
          >
            <FaInstagram />
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
