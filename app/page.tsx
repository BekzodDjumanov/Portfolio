"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Skiper47 } from "@/components/ui/skiper-ui/skiper47";
import { ShineBorder } from "@/components/ui/shine-border";
import { Marquee } from "@/components/ui/marquee";
import { IoIosArrowDropright } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

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
  const [showToast, setShowToast] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

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
    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowToast(true);

    // Wait for toast to mount, then animate IN
    requestAnimationFrame(() => {
      if (toastRef.current) {
        gsap.fromTo(
          toastRef.current,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          }
        );
      }
    });

    // Hold, then animate OUT
    setTimeout(() => {
      if (toastRef.current) {
        gsap.to(toastRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => setShowToast(false),
        });
      }
    }, 3000);
  };
  gsap.killTweensOf(toastRef.current);

  return (
    <div
      className="
    flex min-h-screen flex-col 
    font-sans gap-8
    bg-white text-[#121212]
    dark:bg-[#121212] dark:text-[#e3dac9]
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
    shadow-lg z-50
    text-[#121212] dark:text-[#e3dac9]
    flex flex-col items-center
    transition-all duration-300
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
              className="hover:text-[#e3dac9] dark:hover:text-white transition-all duration-300 flex items-center"
            >
              <RollingText>Home</RollingText>
            </Link>
            <Link
              href="/about"
              className="hover:text-[#e3dac9] dark:hover:text-white transition-all duration-300"
            >
              <RollingText>About</RollingText>
            </Link>
            <Link
              href="/projects"
              className="hover:text-[#e3dac9] dark:hover:text-white transition-all duration-300"
            >
              <RollingText>Projects</RollingText>
            </Link>
            <Link
              href="/reviews"
              className="hover:text-[#e3dac9] dark:hover:text-white transition-all duration-300"
            >
              <RollingText>Reviews</RollingText>
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#e3dac9] dark:hover:text-white transition-all duration-300"
            >
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
                className="hover:text-[#e3dac9] transition-colors"
              >
                <RollingText>Home</RollingText>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#e3dac9] transition-colors"
              >
                <RollingText>About</RollingText>
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#e3dac9] transition-colors"
              >
                <RollingText>Projects</RollingText>
              </Link>
              <Link
                href="/reviews"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#e3dac9] transition-colors"
              >
                <RollingText>Reviews</RollingText>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#e3dac9] transition-colors"
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
        <section className="opacity-0 fade-in w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20 md:py-32 px-4">
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
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2 -mt-4">
              {["Frontend Developer", "UI/UX Specialist", "Full Ride"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="px-5 py-2 rounded-full dark:bg-[#171717]/50 border border-white/20 dark:border-white/10 text-[10px] font-bold tracking-widest uppercase bg-white/5 backdrop-blur-md shadow-sm"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-center md:justify-center lg:justify-start gap-4 w-full pt-4 -mt-4">
              <div
                className="group flex items-center justify-center w-11 h-11 
    rounded-full bg-white/5 dark:bg-[#171717]/40 
    backdrop-blur-md border border-white/20 dark:border-white/10 
    shadow-lg transition-all duration-500 ease-out hover:border-black/40
    hover:-translate-y-1 dark:hover:border-white/40 dark:hover:border-white/30 
    hover:shadow-black/10 cursor-pointer"
              >
                <FaGithub
                  size={20}
                  className="text-black dark:text-[#e3dac9] opacity-70 
    transition-all duration-300 
    group-hover:text-black dark:group-hover:text-white 
    group-hover:opacity-100 group-hover:scale-110"
                />
              </div>

              <div
                className="group flex items-center justify-center w-11 h-11 
    rounded-full bg-white/5 dark:bg-[#171717]/40 
    backdrop-blur-md border border-white/20 dark:border-white/10 
    shadow-lg transition-all duration-500 ease-out dark:hover:border-white/40
    hover:-translate-y-1 hover:border-[#0077b5]/50 dark:hover:shadow-none hover:shadow-[#0077b5]/20 cursor-pointer"
              >
                <FaLinkedin
                  size={20}
                  className="text-black dark:text-[#e3dac9] opacity-70 
    transition-all duration-300 dark:group-hover:text-white 
    group-hover:text-[#0077b5] group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end w-full">
            {/* 1. Ensure overflow-visible so the badge can 'hang' outside the box */}
            <div className="relative group w-[90%] sm:w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px] transition-all duration-700 ease-in-out overflow-visible">
              <div className="absolute -inset-4 bg-[#e3dac9]/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <Skiper47 />
              <div className="absolute -bottom-6 -right-4 z-50 bg-white/90 dark:bg-[#0d0d0d]/90 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-3 rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 block transform transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1">
                <div className="flex flex-col gap-1">
                  <ShineBorder
                    shineColor={["#e3dac9", "#ffffff", "#c9bda3"]}
                    duration={20}
                    borderWidth={2}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] opacity-40 font-black dark:text-white">
                    Currently
                  </p>
                  <p className="text-xs sm:text-sm text-[#121212] dark:text-[#e3dac9] whitespace-nowrap">
                    working. 🤫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 className="flex items-center gap-3 text-2xl">
          <span className="w-[4px] h-8 dark:bg-[#e3dac9] bg-[#121212] rounded-full inline-block" />
          Articles & Posts
        </h1>
        <p className="opacity-40 uppercase tracking-[.1em] text-sm mt-1 -mb-3">
          Up to date info
        </p>
      </main>
      <div className="relative w-full">
        {/* Black bar */}
        <div className="w-full h-40 dark:bg-[#e3dac9] bg-[#121212]"></div>

        {/* Marquee content */}
        <Marquee className="absolute top-0 left-0 w-full h-full flex items-center gap-4 px-4">
          {/* Example articles */}
          {[
            {
              date: "COMING SOON",
              title: "COMING SOON",
              description: "COMING SOON",
              link: "#",
            },
            {
              date: "COMING SOON",
              title: "COMING SOON",
              description: "COMING SOON",
              link: "#",
            },
            {
              date: "COMING SOON",
              title: "COMING SOON",
              description: "COMING SOON",
              link: "#",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-32 p-4 bg-white dark:bg-[#171717] rounded-xl shadow-lg flex flex-col justify-between"
            >
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {article.date}
              </span>
              <h2 className="text-sm text-[#121212] dark:text-[#e3dac9]">
                {article.title}
              </h2>
              <p className="text-[10px] text-gray-700 dark:text-gray-300">
                {article.description}
              </p>
              <a
                href={article.link}
                className="relative group/link w-fit text-xs font-bold text-[#121212] dark:text-white mt-2 flex items-center gap-1 transition-all duration-500 ease-in-out hover:gap-2"
              >
                {/* The Text */}
                <span className="relative">
                  Read Article
                  {/* The Animated Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#121212] dark:bg-white transition-all duration-500 ease-in-out group-hover/link:w-full"></span>
                </span>

                {/* The Animated Arrow (Elite touch) */}
                <IoIosArrowDropright />
              </a>
            </div>
          ))}
        </Marquee>
      </div>

      <main>
        <section className="w-full max-w-6xl mx-auto flex flex-col py-12 px-4">
          {/* SECTION HEADER - Now inside the section */}
          <div className="w-full flex justify-start text-left text-3xl mb-12">
            <h1 className="flex items-center gap-3">
              <span className="w-[4px] h-8 dark:bg-[#e3dac9] bg-[#121212] rounded-full inline-block" />
              Experience & Skills
            </h1>
          </div>

          {/* CONTENT GRID */}
          <div className="flex flex-col lg:flex-row gap-16">
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
                    "Python",
                    "Java",
                    "SQL",
                    "C++",
                    "React / Next.js",
                    "Tailwind CSS",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "GSAP",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-lg dark:bg-[#171717]/50 border border-black/10 dark:border-white/10 text-sm font-medium hover:border-[#e3dac9]/50 transition-colors"
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
                    "Data Structures & Algorithms",
                    "UI/UX Design",
                    "Leadership",
                    "Communication",
                    "Critical Thinking",
                    "CI/CD Workflows",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 rounded-lg dark:bg-[#171717]/50 border border-black/10 dark:border-white/10 text-sm font-medium hover:border-[#e3dac9]/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: WORK HISTORY */}
            <div className="flex-1 space-y-10 dark:bg-[#171717] border border-black/10 dark:border-white/10 px-5 py-5 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">
                  Work History
                </h2>
              </div>

              <div className="space-y-10">
                {/* Experience Item 1 */}
                <div className="flex justify-between items-start group">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/caci.png"
                        alt="icon"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg leading-none">
                        Cloud Software Developer Intern
                      </h3>
                      <p className="text-sm opacity-60 mt-2">
                        CACI International
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium opacity-40 pt-1 whitespace-nowrap">
                    Dec 2025 — Present
                  </span>
                </div>

                {/* Experience Item 2 */}
                <div className="flex justify-between items-start group">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/cummings.png"
                        alt="icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg leading-none">
                        Software Engineer Intern
                      </h3>
                      <p className="text-sm opacity-60 mt-2">
                        Cummings & Co. Realtors
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium opacity-40 pt-1 whitespace-nowrap">
                    May 2025 — Sep 2025
                  </span>
                </div>

                <div className="flex justify-between items-start group">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <img
                        src="/images/fffcu.png"
                        alt="icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg leading-none">
                        IT Administrator Intern
                      </h3>
                      <p className="text-sm opacity-60 mt-2">
                        First Financial Federal Credit Union
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium opacity-40 pt-1 whitespace-nowrap">
                    Jan 2024 — May 2024
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 px-4 rounded-xl bg-white/5 border border-black/10 dark:border-white/10 text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#e3dac9] hover:text-[#121212] transition-all duration-300 ease-in-out cursor-pointer">
                A more detailed look <IoIosArrowForward />
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="w-full dark:bg-[#020403] bg-[#F2F3F4] py-20 border-t border-b border-black/5 dark:border-white/20 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1),0_-4px_6px_-2px_rgba(0,0,0,0.1)]">
        {showToast && (
          <div
            ref={toastRef}
            className="fixed bottom-10 right-10 z-[100] flex items-center gap-3 px-6 py-4
      backdrop-blur-xl rounded-lg bg-white/10 dark:bg-[#171717]/50
      border border-black/10 dark:border-white/10
      shadow-[0_20px_50px_rgba(0,0,0,0.3)]
      opacity-0"
          >
            <div className="flex flex-col">
              <p className="text-xs font-bold text-[#121212] dark:text-[#e3dac9] flex items-center gap-2 whitespace-nowrap uppercase tracking-[0.1em]">
                Message Sent <FaCheck className="text-emerald-500" />
              </p>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="w-full flex justify-start text-left text-3xl mb-12">
            <h1 className="flex items-center gap-3 dark:text-[#e3dac9] text-[#121212]">
              <span className="w-[4px] h-8 dark:bg-[#e3dac9] bg-[#121212] rounded-full inline-block" />
              Contact
            </h1>
          </div>
          {/* Content Wrapper - Using Form as the grid container */}
          <form
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            onSubmit={handleFormSubmit}
          >
            {/* LEFT — Form Fields */}
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest dark:text-[#e3dac9]/60 text-black/50 mb-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg rounded-xl px-4 py-3
              text-zinc-800 dark:text-[#e3dac9] placeholder-zinc-400 dark:placeholder-[#e3dac9]/40
              focus:outline-none focus:border-[#121212] dark:focus:border-[#e3dac9]/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-widest dark:text-[#e3dac9]/60 text-black/50 mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg rounded-xl px-4 py-3
              text-zinc-800 dark:text-[#e3dac9] placeholder-zinc-400 dark:placeholder-[#e3dac9]/40
              focus:outline-none focus:border-[#121212] dark:focus:border-[#e3dac9]/60 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs uppercase tracking-widest dark:text-[#e3dac9]/60 text-black/50 mb-2">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg rounded-xl px-4 py-3
              text-zinc-800 dark:text-[#e3dac9] placeholder-zinc-400 dark:placeholder-[#e3dac9]/40
              focus:outline-none focus:border-[#121212] dark:focus:border-[#e3dac9]/60 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-widest dark:text-[#e3dac9]/60 text-black/50 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg rounded-xl px-4 py-3
              text-zinc-800 dark:text-[#e3dac9] placeholder-zinc-400 dark:placeholder-[#e3dac9]/40
              focus:outline-none focus:border-[#121212] dark:focus:border-[#e3dac9]/60 transition-colors"
                />
              </div>
            </div>

            {/* RIGHT — Message Textarea + Submit */}
            <div className="flex flex-col justify-between gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest dark:text-[#e3dac9]/60 text-black/50 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={10}
                  placeholder="Write your message here..."
                  className="w-full bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg rounded-xl px-4 py-3
              text-zinc-800 dark:text-[#e3dac9] placeholder-zinc-400 dark:placeholder-[#e3dac9]/40
              focus:outline-none focus:border-[#121212] dark:focus:border-[#e3dac9]/60 transition-colors resize-none"
                />
              </div>

              <button
                className="group relative flex flex-col items-center justify-center w-[180px] h-[50px] transition-transform active:scale-95 cursor-pointer outline-none rounded-lg bg-black/5 dark:bg-white/5 border-none p-0"
                type="submit"
              >
                {/* Animated Layers (Same as before) */}
                <div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg blur-[15px] bg-[radial-gradient(15%_50%_at_50%_100%,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(15%_50%_at_50%_100%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0)_100%)]"></div>
                <div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg blur-[18px] bg-[radial-gradient(60.6%_50%_at_50%_100%,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(60.6%_50%_at_50%_100%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0)_100%)]"></div>
                <div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-100 group-hover:opacity-0 rounded-lg bg-[radial-gradient(10.7%_50%_at_50%_100%,_rgba(0,0,0,0.3)_0%,_rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(10.7%_50%_at_50%_100%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0)_100%)]"></div>
                <div className="absolute inset-0 pointer-events-none transition-opacity ease-in-out duration-[1200ms] opacity-0 group-hover:opacity-100 rounded-lg bg-[radial-gradient(60.1%_50%_at_50%_100%,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(60.1%_50%_at_50%_100%,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0)_100%)]"></div>

                <div className="absolute inset-[1px] pointer-events-none z-10 rounded-lg bg-white dark:bg-black shadow-lg border border-black/5 dark:border-white/10"></div>

                <div className="relative z-20 flex flex-col items-center justify-center">
                  <p className="m-0 p-0 font-sans text-[15px] font-medium text-black dark:text-white tracking-wide antialiased transition-colors duration-300">
                    Submit
                  </p>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>

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
