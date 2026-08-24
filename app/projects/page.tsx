"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaChevronDown } from "react-icons/fa6";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";
import { TbPointFilled } from "react-icons/tb";
import { FaGithubAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Code } from "lucide-react";

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

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Resume", href: "/resume" },
    { label: "Projects", href: "/projects" },
    { label: "Reviews", href: "/reviews" },
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
              className="transition-all duration-300 dark:hover:text-purple-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="transition-all duration-300 dark:hover:text-purple-300"
            >
              About
            </Link>
            <Link
              href="/resume"
              className="transition-all duration-300 dark:hover:text-purple-300"
            >
              Resume
            </Link>
            <Link
              href="/projects"
              className="transition-all duration-300 dark:hover:text-purple-300"
            >
              Projects
            </Link>
            <Link
              href="/reviews"
              className="transition-all duration-300 dark:hover:text-purple-300"
            >
              Reviews
            </Link>
          </nav>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center w-full mt-4 pt-4 mb-2 border-t border-white/10 gap-6 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col items-center gap-2 text-base">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 dark:hover:text-purple-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 dark:hover:text-purple-300"
              >
                About
              </Link>
              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 dark:hover:text-purple-300"
              >
                Resume
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 dark:hover:text-purple-300"
              >
                Projects
              </Link>
              <Link
                href="/reviews"
                onClick={() => setIsOpen(false)}
                className="transition-all duration-300 dark:hover:text-purple-300"
              >
                Reviews
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

      <Link
        href="/"
        className="flex fixed items-center justify-center absolute top-8 left-10
        hover:scale-105 shadow-md rounded-full backdrop-blur p-1.5 text-4xl fade-right opacity-0 transition-all duration-300 ease-in-out cursor-pointer z-50"
      >
        <FiGlobe />
      </Link>

      {/* MAIN CONTENT HERE */}
      <main
        ref={containerRef}
        className="flex-1 flex flex-col items-center mt-10 px-4 py-1"
      >
        <section className="opacity-0 fade-in w-full max-w-6xl mx-auto flex flex-col items-center py-20 md:py-32 px-4">
          <div className="w-full flex flex-col gap-4 ml-8 mb-12">
            <h1 className="flex items-center gap-3 text-3xl">
              <span className="w-[4px] h-8 dark:bg-white bg-black rounded-full inline-block" />
              projects
            </h1>

            <p className="text-md text-zinc-500 max-w-prose">
              The projects that I have orchestrated and developed through
              meticulous planning, seeking to emphasize real-world applicability
              rather than commonly exhausted ideas.
            </p>
          </div>

          {/* FIRST PROJECT */}

          <div className="w-full max-w-5xl mx-auto lg:ml-8 flex items-center gap-4 mb-5 opacity-50">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-500 whitespace-nowrap">
              Project 1 — AI & Machine Learning
            </span>
          </div>

          <div
            className="
              group relative flex flex-col lg:flex-row gap-8 
              p-5 md:p-8 rounded-[2rem]
              bg-zinc-100/50 dark:bg-white/[0.03]
              border border-black/5 dark:border-white/10
              transition-all duration-500 ease-in-out
              w-full max-w-5xl mx-auto lg:ml-4 shadow-lg
          "
          >
            <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900">
              <video
                src="/videos/project2.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="flex flex-col justify-between w-full lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl text-[#000000] dark:text-[#ffffff] lg:text-left text-center">
                  AI Speech-to-Text Converter
                </h3>

                <ul className="mt-4 space-y-3">
                  {[
                    "Architected a Flask REST API utilizing OpenAI’s Whisper models to deliver high-accuracy transcription across 99+ languages",
                    "Integrated JavaScript fetch and async handlers to enable real-time file processing and seamless client-server interaction",
                    "Designed a high-performance frontend pipeline for uninterrupted user sessions and optimized audio data handling",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      <div className="dark:text-[#ffffff] text-[#000000]">
                        <TbPointFilled />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 lg:justify-start justify-center">
                  {[
                    "Python",
                    "Flask",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "Whisper AI",
                    "FFmpeg",
                    "MongoDB",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full dark:text-purple-300
                      text-zinc-500 dark:text-zinc-400 
                      
                      bg-zinc-100/50 dark:bg-white/[0.03] 
                      
                      border border-black/5 dark:border-white/10 
                      
                      text-sm font-medium 

                      transition-all duration-300 ease-in-out
                      
                      dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 lg:justify-start justify-center">
                <button
                  className="
                  group/btn flex items-center justify-center gap-2 
                  w-fit px-4 py-2 rounded-xl
                  text-zinc-400 dark:text-zinc-400 
                  bg-zinc-100/50 dark:bg-white/[0.02] 
                  border border-black/5 dark:border-white/10 
                  text-sm font-medium transition-all duration-300
                  
                  /* Vampire Purple Hover State */
                  dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5
                  transition-all duration-300 ease-in-out
                  
                  hover:scale-[1.02] active:scale-95
                  cursor-pointer
                "
                >
                  <FaGithubAlt className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <Link href="https://github.com/BekzodDjumanov/SpeechToText">
                    Source Code
                  </Link>
                </button>

                <button
                  className="
                    group/btn flex items-center justify-center gap-2 
                    w-fit px-4 py-2 rounded-xl
                    
                    text-violet-600 dark:text-violet-400

                    bg-violet-100/70 dark:bg-violet-500/10

                    border border-violet-300/60 dark:border-violet-400/30

                    text-xs font-medium md:text-sm
                    whitespace-nowrap

                    hover:bg-violet-200/70 dark:hover:bg-violet-500/20
                    hover:border-violet-400 dark:hover:border-violet-400
                    transition-all duration-300 ease-in-out
      
                    hover:scale-[1.05] active:scale-95
                    cursor-pointer
    "
                >
                  <FaArrowUpRightFromSquare className="text-xs group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  <Link href="https://speechtotext.up.railway.app/">
                    Live Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* SECOND PROJECT */}

          <div className="w-full max-w-5xl mx-auto lg:ml-8 flex items-center gap-4 my-12 translate-y-7 opacity-50">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-500 whitespace-nowrap">
              Project 2 — Frontend
            </span>
          </div>

          <div
            className="
            group relative flex flex-col lg:flex-row gap-8 
            p-5 md:p-8 rounded-[2rem]
            bg-zinc-100/50 dark:bg-white/[0.03]
            border border-black/5 dark:border-white/10
            transition-all duration-500 ease-in-out
            w-full max-w-5xl mx-auto lg:ml-4 shadow-lg
"
          >
            <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900">
              <video
                src="/videos/project4.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            <div className="flex flex-col justify-between w-full lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl text-[#000000] dark:text-[#ffffff] lg:text-left text-center">
                  GitLearn | Git & GitHub Academy
                </h3>

                <ul className="mt-4 space-y-3">
                  {[
                    "Deployed a fully responsive educational platform focused on Git and GitHub fundamentals, with purpose-driven, curated learning modules",
                    "Engineered a scalable front end using HTML, CSS, and JavaScript to support high-traffic user requests",
                    "Crafted a modern, intuitive UI/UX to enhance site appeal and drive learner engagement and content growth",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      <div className="dark:text-[#ffffff] text-[#000000]">
                        <TbPointFilled />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 lg:justify-start justify-center">
                  {["HTML", "CSS", "JavaScript", "GSAP", "Figma"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full dark:text-purple-300
                      text-zinc-500 dark:text-zinc-400 
                      
                      bg-zinc-100/50 dark:bg-white/[0.03] 
                      
                      border border-black/5 dark:border-white/10 
                      
                      text-sm font-medium 
                      
                      transition-all duration-300 ease-in-out
                      
                      dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex gap-3 lg:justify-start justify-center">
                <button
                  className="
                  group/btn flex items-center justify-center gap-2 
                  w-fit px-4 py-2 rounded-xl
                  text-zinc-400 dark:text-zinc-400 
                  bg-zinc-100/50 dark:bg-white/[0.02] 
                  border border-black/5 dark:border-white/10 
                  text-sm font-medium transition-all duration-300
                  
                  /* Vampire Purple Hover State */
                  dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5
                  transition-all duration-300 ease-in-out
                  
                  hover:scale-[1.02] active:scale-95
                  cursor-pointer
                "
                >
                  <FaGithubAlt className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <Link href="https://github.com/BekzodDjumanov/GitLearn">
                    Source Code
                  </Link>
                </button>

                <button
                  className="
                    group/btn flex items-center justify-center gap-2 
                    w-fit px-4 py-2 rounded-xl
                    
                    text-violet-600 dark:text-violet-400

                    bg-violet-100/70 dark:bg-violet-500/10

                    border border-violet-300/60 dark:border-violet-400/30

                    text-xs font-medium md:text-sm
                    whitespace-nowrap

                    hover:bg-violet-200/70 dark:hover:bg-violet-500/20
                    hover:border-violet-400 dark:hover:border-violet-400
                    transition-all duration-300 ease-in-out
      
                    hover:scale-[1.05] active:scale-95
                    cursor-pointer
    "
                >
                  <FaArrowUpRightFromSquare className="text-xs group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  <Link href="https://gitlearn.org/">Live Demo</Link>
                </button>
              </div>
            </div>
          </div>

          {/* THIRD PROJECT */}

          <div className="w-full max-w-5xl mx-auto lg:ml-8 flex items-center gap-4 my-12 translate-y-7 opacity-50">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-500 whitespace-nowrap">
              Project 3 — Backend
            </span>
          </div>

          <div
            className="
            group relative flex flex-col lg:flex-row gap-8 
            p-5 md:p-8 rounded-[2rem]
            bg-zinc-100/50 dark:bg-white/[0.03]
            border border-black/5 dark:border-white/10
            transition-all duration-500 ease-in-out
            w-full max-w-5xl mx-auto lg:ml-4 shadow-lg
"
          >
            <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900">
              <video
                src="/videos/project3.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            <div className="flex flex-col justify-between w-full lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl text-[#000000] dark:text-[#ffffff] lg:text-left text-center">
                  Online IDE Compiler
                </h3>

                <ul className="mt-4 space-y-3">
                  {[
                    "Architected a real-time IDE using Flask and JavaScript, enabling seamless server-side execution of Python code",
                    "Optimized request handling to deliver instantaneous, 100% accurate code-to-output conversion",
                    "Engineered a modern, high-performance interface focused on developer productivity and low-latency interactions",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      <div className="dark:text-[#ffffff] text-[#000000]">
                        <TbPointFilled />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6 lg:justify-start justify-center">
                  {[
                    "Python",
                    "Flask",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "GSAP",
                    "Docker",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full dark:text-purple-300
                      text-zinc-500 dark:text-zinc-400 
                      
                      bg-zinc-100/50 dark:bg-white/[0.03] 
                      
                      border border-black/5 dark:border-white/10 
                      
                      text-sm font-medium 

                      transition-all duration-300 ease-in-out
                      
                      dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 lg:justify-start justify-center">
                <button
                  className="
                  group/btn flex items-center justify-center gap-2 
                  w-fit px-4 py-2 rounded-xl
                  text-zinc-400 dark:text-zinc-400 
                  bg-zinc-100/50 dark:bg-white/[0.02] 
                  border border-black/5 dark:border-white/10 
                  text-sm font-medium transition-all duration-300
                  
                  /* Vampire Purple Hover State */
                  dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5
                  transition-all duration-300 ease-in-out
                  
                  hover:scale-[1.02] active:scale-95
                  cursor-pointer
                "
                >
                  <FaGithubAlt className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <Link href="https://github.com/BekzodDjumanov/OnlineIDE">
                    Source Code
                  </Link>
                </button>

                <button
                  className="
                    group/btn flex items-center justify-center gap-2 
                    w-fit px-4 py-2 rounded-xl
                    
                    text-violet-600 dark:text-violet-400

                    bg-violet-100/70 dark:bg-violet-500/10

                    border border-violet-300/60 dark:border-violet-400/30

                    text-xs font-medium md:text-sm
                    whitespace-nowrap

                    hover:bg-violet-200/70 dark:hover:bg-violet-500/20
                    hover:border-violet-400 dark:hover:border-violet-400
                    transition-all duration-300 ease-in-out
      
                    hover:scale-[1.05] active:scale-95
                    cursor-pointer
    "
                >
                  <FaArrowUpRightFromSquare className="text-xs group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                  <Link href="https://onlineide-main.onrender.com/">
                    Live Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto lg:ml-8 flex items-center gap-4 my-12 translate-y-7 opacity-50">
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-zinc-500">
              Project 4 — Machine Learning & Reinforcement Learning
            </span>
          </div>

          <div
            className="
            group relative flex flex-col lg:flex-row gap-8 
            p-5 md:p-8 rounded-[2rem]
            bg-zinc-100/50 dark:bg-white/[0.03]
            border border-black/5 dark:border-white/10
            transition-all duration-500 ease-in-out
            w-full max-w-5xl mx-auto lg:ml-4 shadow-lg
"
          >
            <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-200 dark:bg-zinc-900">
              <video
                src="/videos/project1.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* FOURTH PROJECT */}

            <div className="flex flex-col justify-between w-full lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl text-[#000000] dark:text-[#ffffff] lg:text-left text-center">
                  EPL Football Match Predictor
                </h3>

                <ul className="mt-4 space-y-3">
                  {[
                    "Engineered an ML pipeline to forecast EPL outcomes using team metrics and schedule dynamics",
                    "Achieved 91% precision and 81% accuracy through feature engineering and threshold optimization",
                    "Refined classification thresholds to minimize false positives and enhance model reliability",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      <div className="dark:text-[#ffffff] text-[#000000]">
                        <TbPointFilled />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 lg:justify-start justify-center">
                  {[
                    "Python",
                    "Jupyter",
                    "scikit-learn",
                    "pandas",
                    "BeautifulSoup",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full dark:text-purple-300
                      text-zinc-500 dark:text-zinc-400 
                      
                      bg-zinc-100/50 dark:bg-white/[0.03] 
                      
                      border border-black/5 dark:border-white/10 
                      
                      text-sm font-medium 

                      transition-all duration-300 ease-in-out
                      
                      dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex gap-3 lg:justify-start justify-center">
                {/* Source Code Button */}
                <button
                  className="
                  group/btn flex items-center justify-center gap-2 
                  w-fit px-4 py-2 rounded-xl
                  text-zinc-400 dark:text-zinc-400 
                  bg-zinc-100/50 dark:bg-white/[0.02] 
                  border border-black/5 dark:border-white/10 
                  text-sm font-medium transition-all duration-300
                  
                  /* Vampire Purple Hover State */
                  dark:hover:border-[#7c3aed]/40 dark:hover:text-[#c084fc] dark:hover:dark:bg-[#7c3aed]/5
                  transition-all duration-300 ease-in-out
                  
                  hover:scale-[1.02] active:scale-95
                  cursor-pointer
                "
                >
                  <FaGithubAlt className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <Link href="https://github.com/BekzodDjumanov/ML-EPL">
                    Source Code
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="dark:bg-[#000000] dark:text-[#ffffff] px-8 py-12 md:py-16 flex flex-col md:flex-row flex-wrap justify-between items-start gap-y-8 w-full relative 
  shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-none mt-5"
      >
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="mt-2 flex gap-2 items-center">
            <ShinyButton className="flex items-center gap-2">
              <AiFillSketchCircle className="text-2xl" />
              <span className="inline-block">Curating Solutions</span>
            </ShinyButton>
          </div>

          <div className="rights text-sm text-[#7b7c8c] absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            © Bekzod Djumanov | All rights reserved.
          </div>
        </div>

        {/* Navigation Section */}
        <div
          className="footer-nav flex flex-nowrap gap-4 items-center mt-2 text-sm
          justify-center
          overflow-x-auto
          md:overflow-visible
          md:gap-6
          md:justify-start
          md:flex-wrap
          md:mr-37"
        >
          {footerLinks.map((link, i) => (
            <Link001
              key={i}
              href={link.href}
              className="dark:text-white dark:hover:text-purple-400 hover:text-purple-400"
            >
              {link.label}
            </Link001>
          ))}
        </div>

        {/* Social Section */}
        <div className="footer-social flex flex-wrap gap-6 items-center mt-2 text-lg dark:text-[#ffffff]">
          <Link
            href="https://github.com/BekzodDjumanov"
            className="hover:text-purple-400 transition-colors duration-300 ease-in-out"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/bekzod-djumanov/"
            className="hover:text-purple-400 transition-colors duration-300 ease-in-out"
          >
            <FaLinkedin />
          </Link>
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
