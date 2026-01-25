"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaChevronDown } from "react-icons/fa6";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";

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
              className="transition-all duration-300 flex items-center"
            >
              <RollingText>Home</RollingText>
            </Link>
            <Link href="/about" className="transition-all duration-300">
              <RollingText>About</RollingText>
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
                href="/about"
                onClick={() => setIsOpen(false)}
                className="transition-colors"
              >
                <RollingText>About</RollingText>
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
            <h1 className="flex items-stretch gap-3 text-2xl sm:text-3xl">
              <span className="w-[4px] dark:bg-white bg-black rounded-full" />
              <span>Purpose & Reason in Traditional Work</span>
            </h1>

            <h3 className="text-sm uppercase tracking-[0.3em] font-bold opacity-40">
              Insight 01 - 4 Minute read
            </h3>
            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Purpose is rarely found in comfort. Historically, the most
                prominent inventions and discoveries have been marked by
                obligation, resistance, and sustained confrontation. With the
                prevalence of traditional work and its compulsory tasks, it
                becomes apparent that the axioms stemming from labour compel
                individuals toward a sense of urgency, strengthening their
                knowledge and tolerance for adversity.
              </p>

              <p>
                <br />
                Traditional work, with all its constraints and demands, becomes
                one of the few remaining structures through which individuals
                are compelled to act, persist, and assert agency against
                entropy.
              </p>

              <p>
                <br />A seemingly obscure truth emerges: without work, how else
                would individuals replicate this sense of hardship and
                resistance?
              </p>
            </div>

            <h2 className="text-2xl">
              <br /> A World Without Work
            </h2>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Suppose an artificial agent were to deem all notions of
                traditional work obsolete.
              </p>

              <p>
                <br />
                It's a completely plausible assertion that this hypothetical
                reality would in some ways be advantageous for the general
                public. Paradigms such as higher overall happiness, cultural
                shifts in creativity, and increased emphasis on personal
                endeavors would be adopted.
              </p>

              <p>
                <br />
                However, there's a nuance that has yet to be addressed.
              </p>
            </div>

            <h2 className="text-2xl">
              <br /> Obligatory vs. Voluntary Work
            </h2>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Without a sense of urgency, what compels one toward performing
                an action or a favor that displaces them from their comfort?
              </p>

              <p>
                <br />
                Under traditional conceptions of work, individuals are compelled
                toward action and subsequently removed from comfort. This
                imposed necessity creates conditions that voluntary work
                struggles to replicate.
              </p>

              <p>
                <br />
                Voluntary engagement, while valuable, is inherently conditional.
                Because it can be withdrawn at will, it lacks the coercive
                continuity that obligates sustained effort through difficulty.
                In contrast, compulsory work enforces persistence beyond initial
                motivation, exposing individuals to prolonged resistance, the
                very condition under which discipline, competence, and purpose
                are formed.
              </p>

              <p>
                {" "}
                <br />
                Anything beyond force is simply volition. When action is left
                entirely to choice, it becomes contingent on mood, desire, and
                convenience. What distinguishes obligatory work is not merely
                that it demands effort, but that it removes the option of
                retreat, compelling persistence even when motivation collapses.
              </p>

              <p>
                <br />
                The following is structured in premise-conclusion form.
              </p>

              <p className="ml-5">
                <br />
                P1: Resistance, hardship, and conflict of one’s character
                cultivates a higher tolerance for suffering, thereby promoting
                growth and tenacity.
              </p>

              <p className="ml-5">
                <br />
                P2: Traditional work compels one toward action and intentionally
                manifests an enduring and difficult environment, directly
                promoting suffering.
              </p>

              <p className="ml-5">
                <br />
                C: Traditional work fosters growth, tenacity, and refining the
                character in its adaptations to discomfort.
              </p>
            </div>

            <h2 className="text-2xl">
              <br />
              An Uncertain Landscape
            </h2>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                With the prevalence of artificial intelligence, civilization
                must keep this ideology close and seek to adapt when necessary.
              </p>

              <p>
                <br />
                This article does not undermine free will, rather it affirms
                that it is through traditional work that individuals flourish
                and adapt when motivation fails (which it inevitably does).
              </p>
            </div>
            <blockquote className="text-sm max-w-prose dark:text-zinc-400 border-l-2 border-zinc-800 pl-4 mt-4 italic">
              <p>
                "Invention is the most important product of man's creative
                brain. The ultimate purpose is the complete mastery of mind over
                the material world, the harnessing of human nature to human
                needs."
              </p>
              <cite className="block mt-2 text-xs not-italic text-zinc-500 dark:text-purple-400">
                — Nikola Tesla
              </cite>
            </blockquote>
          </div>
        </section>
      </main>

      <footer
        className="dark:bg-[#000000] dark:text-[#ffffff] px-8 py-12 md:py-16 flex flex-col md:flex-row flex-wrap justify-between items-start gap-y-8 w-full relative 
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
