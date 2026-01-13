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
          {/* Heading & Subtext - Using ml-8 to match your Reviews style */}
          <div className="w-full flex flex-col gap-4 ml-8 mb-12">
            <h1 className="flex items-stretch gap-3 text-2xl sm:text-3xl">
              <span className="w-[4px] dark:bg-white bg-black rounded-full" />
              <span>AI Interpretability and Trustworthiness</span>
            </h1>

            <h3 className="text-sm uppercase tracking-[0.3em] font-bold opacity-40">
              Insight 02 - 3 Minute read
            </h3>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                <br />
                When attempting to define trust within AI models, there are many
                differing stances within the field.
              </p>

              <p>
                <br />
                As artificial intelligence becomes increasingly prolific in many
                systems that once relied on human judgement, it's important to
                examine its decision making and performance throughout its
                processes. Accuracy is a critical factor when emphasizing AI
                capabilities, as it serves as a benchmark for future use,
                whether through correlation with human judgment or prior trials.
                However, accuracy alone is insufficient when models operate as
                opaque mechanisms, producing outcomes without intelligible
                reasoning. For example, in medical diagnosis systems, a model
                that predicts disease with high accuracy but cannot explain
                which clinical features influenced its decision limits a
                clinician’s ability to validate, trust, and safely act on its
                output. Interpretability becomes not a supplementary feature,
                but a prerequisite for responsible deployment.
              </p>
            </div>

            <h2 className="text-2xl">
              <br /> The Black Box Problem
            </h2>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Black Box models are those whose internal decision-making
                processes are obscured or incomprehensible to humans. Though
                their deep and complex neural networks offer high accuracy,
                which is objectively quite rewarding, it lacks a fundamental
                component aforementioned.
              </p>

              <p>
                <br />
                Below is a figure that highlights the importance of transparency
                within artificial agents.
              </p>

              <figure className="mt-10 max-w-4xl mx-auto">
                <div className="rounded-xl overflow-hidden border border-zinc-800 dark:border-zinc-700">
                  <img
                    src="/images/fig1-interpretability-joyplot.png"
                    alt="Joyplot showing distributions of interpretability importance ratings across AI applications"
                    className="w-full object-contain bg-zinc-950"
                  />
                </div>

                <figcaption className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  <span className="font-medium dark:text-zinc-300">
                    Fig. 1: Attitudes towards interpretability across real-world
                    AI applications.
                  </span>{" "}
                  Joyplot visualizes the distributions of interpretability
                  ratings, averaged across recommend and decide versions.
                  Participants (N = 170) responded to the question “How
                  important is it that the AI in this application is
                  explainable, even if it performs accurately?” on a 5-point
                  rating scale (1 = not at all important, 5 = extremely
                  important).
                  <br />
                  <span className="italic">
                    Source: Nussberger et al., Nature Communications (2022).
                  </span>
                </figcaption>
              </figure>

              <p>
                <br />
                When analyzing the data, a prominent question emerges.
              </p>

              <p>
                <br />
                How can reliable behavior be differentiated from coincidental
                correlation?
              </p>
            </div>

            <h2 className="text-2xl">
              <br />
              Transparency as a Form of Epistemology
            </h2>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Transparency and trust become key factors for dismantling the
                black box system, a way for practitioners in the field of
                machine learning to gain a deeper understanding for an AI's
                decision making. Often implemented through post-hoc
                explanations, methods that illuminate an agent’s internal
                structure are essential for future development.
              </p>

              <p>
                <br />
                Without causal insight, errors remain unexplained, biases
                undetected, and failures unpredictable. Interpretability seeks
                to recover this missing structure by revealing how inputs
                influence outcomes, restoring a degree of epistemic
                accountability to algorithmic decision-making.
              </p>
            </div>

            <h2 className="text-2xl">
              <br />
              Interpretability as a Catalyst for Modern AI Agents
            </h2>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Interpretability is not a solution, but a critical component
                when identifying a machine’s inner workings; a necessary
                condition for trust.
              </p>

              <p>
                <br />A system that cannot justify its decisions cannot be fully
                trusted, regardless of its empirical performance.
              </p>

              <p>
                <br />
                The framework of trust within machine learning is an ever
                expanding field. When machines are embedded in domains where
                error carries irreversible consequences, interpretability
                becomes a primary focus when separating accuracy to coincidental
                correlation.
              </p>
            </div>
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
