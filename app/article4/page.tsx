"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";
import { FaChevronDown } from "react-icons/fa6";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";
import { Layers, GitBranch, ArrowDown, Repeat, TrendingUp } from "lucide-react";

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
            <h1 className="flex items-stretch gap-3 text-2xl sm:text-3xl">
              <span className="w-[4px] dark:bg-white bg-black rounded-full" />
              <span>The Constraints of AI in Transformational Creativity</span>
            </h1>

            <h3 className="text-sm uppercase tracking-[0.3em] font-bold opacity-40">
              Insight 04 - 5 Minute read
            </h3>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Creativity is often characterized by qualities such as surprise,
                value, novelty, and individual expression. Although not as
                subjective as consciousness, creativity has transformed
                throughout history, bringing about flourishing ideas that still
                exist within the present day.
              </p>

              <p>
                <br />
                Understanding creativity requires a nuanced account of how ideas
                are conceived and how creative processes unfold.
              </p>

              <p>
                <br /> This article is an analysis of AI’s limitations in
                transformational creativity and its inability to transcend
                predefined conceptual spaces.
              </p>
            </div>

            <h3 className="text-2xl">
              <br />
              The Three Constructs of Creativity
            </h3>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Margaret Boden provides a framework that ascribes different
                forms of creativity: combinational, exploratory, and
                transformational creativity to contrast forms of creative
                processes and the different ways novel ideas can emerge
              </p>

              <p>
                <br /> When discussing how an artificial agent can be creative,
                it certainly can fulfill these criteria, but to a partial or
                limited extent.
              </p>
            </div>

            <h3 className="text-2xl">
              <br />
              Combinational Creativity
            </h3>
            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Combinational creativity is deriving a central idea based upon
                familiar concepts. This is often illustrated by AI, connecting
                multiple pieces of literature to form a seemingly new literary
                composition learned from different authors, recombining familiar
                elements that fit in an existing conceptual space. In
                computational terms, combinational creativity can often be
                implemented through algorithms that recombine stored elements
                according to syntactic or semantic rules.
              </p>

              <p>
                <br />
                It's important to emphasize that contemporary AI agents can
                embody this form of creativity, as it simply requires two
                converging ideas and a set of instructions. This allows agents
                to generate novel combinations, though not ideas that depart
                from the underlying conceptual framework.
              </p>
            </div>

            <h3 className="text-2xl">
              <br />
              Exploratory Creativity
            </h3>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Exploratory creativity explains that ideas can be created by
                systematically searching through conceptual spaces defined by
                limitations, boundaries, and existing ideals. An agent displays
                creativity in this sense by contriving postulates in a
                structured, organized manner, seeking to explore possibilities
                within its confined space. This is exemplified in AI by creating
                new novel routes by searching within a structured map defined by
                coordinates and traversal rules, generating new solutions within
                a problem space.
              </p>

              <p>
                <br />
                Once again, current AI models possess the capability of
                exploring conceptual spaces, locating the desired route or
                location dependent on a prompt. Below are instances of how AI
                encapsulates exploratory capabilities, thereby exemplifying
                creativity in defining new or valuable routes.
              </p>

              <ul className="space-y-3">
                <br />
                <li className="flex gap-3 items-start">
                  <Layers className="w-6 h-6 mt-1 text-zinc-500 dark:text-zinc-400" />
                  <span>
                    <strong>Breadth-First Search (BFS):</strong> Explores the
                    search space level by level; complete and optimal when step
                    costs are uniform.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <GitBranch className="w-6 h-6 mt-1 text-zinc-500 dark:text-zinc-400" />
                  <span>
                    <strong>Depth-First Search (DFS):</strong> Explores a single
                    branch to its deepest point before backtracking; not
                    guaranteed to be optimal.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <ArrowDown className="w-6 h-6 mt-1 text-zinc-500 dark:text-zinc-400" />
                  <span>
                    <strong>Depth-Limited Search (DLS):</strong> A depth-first
                    strategy with a predefined cutoff to prevent unbounded
                    exploration.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <Repeat className="w-6 h-6 mt-1 text-zinc-500 dark:text-zinc-400" />
                  <span>
                    <strong>Iterative Deepening DFS (IDDFS):</strong> Repeatedly
                    applies depth-limited search with increasing limits,
                    combining DFS memory efficiency with BFS completeness.
                  </span>
                </li>

                <li className="flex gap-3 items-start">
                  <TrendingUp className="w-6 h-6 mt-1 text-zinc-500 dark:text-zinc-400" />
                  <span>
                    <strong>Uniform-Cost Search (UCS):</strong> Expands nodes in
                    order of lowest cumulative path cost, guaranteeing optimal
                    solutions when costs are non-negative.
                  </span>
                </li>
              </ul>

              <p>
                <br />
                While these algorithms can discover optimal or unexpected
                solutions, they remain confined to the predefined structure of
                the search space itself.
              </p>
            </div>

            <h3 className="text-2xl">
              <br />
              Transformational Creativity
            </h3>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Transformational creativity involves altering the structure of a
                conceptual space, pursuing new ideas that have not arisen
                before. This connotation requires an agent to traverse beyond a
                given constraint or boundary. Rather than merely exploring or
                combining ideas, it requires modifying the underlying rules,
                constraints, or generative principles that determine what kinds
                of ideas are possible in the first place.
              </p>

              <p>
                <br />
                When applying this form of creativity, a critical discrepancy
                arises.
              </p>
            </div>

            <h3 className="text-2xl">
              <br />
              Why Contemporary AI Lacks Transformational Creativity
            </h3>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                Contemporary AI systems satisfy only two of the three criteria
                commonly associated with creativity, rendering them insufficient
                to be considered fully creative, under the aforementioned
                guidelines. While such systems may exhibit combinational or
                exploratory creativity within constrained frameworks, they fail
                to achieve transformational creativity, an essential condition
                for originality and the ascription of individual authorship.
              </p>

              <p>
                <br />
                When searching through a defined conceptual space, humans
                possess the ability to alter that dimension, reformulating its
                boundaries to create novel or unexpected ideas. When an
                artificial agent performs an exploratory or combinatory search,
                it references a finite conceptual space predetermined by
                previous inputs (statistical data); therefore, it can only be
                limited to generating outputs that simply represent rules
                defined by its inner workings. From this perspective,
                transformational creativity is not merely difficult for AI; it
                is effectively precluded by the architecture of current systems,
                highlighting the fundamental gap between human-like innovation
                and machine creativity.
              </p>

              <p>
                <br />
                The following premise-conclusion argument emerges.
              </p>

              <p className="ml-5">
                <br />
                P1: Transformational creativity is the ability to change rules
                and constraints that define a given conceptual space.
              </p>

              <p className="ml-5">
                <br />
                P2: Current AI systems operate by searching within a conceptual
                space whose rules and structures are fixed prior to the search.
              </p>

              <p className="ml-5">
                <br />
                P3: A system that cannot change the rules of its conceptual
                space cannot engage in transformational creativity.
              </p>

              <p className="ml-5">
                <br />
                C: Therefore, current AI systems cannot reach transformational
                creativity.
              </p>
            </div>

            <h3 className="text-2xl">
              <br />
              Artificial Intelligence's Route Toward Creativity
            </h3>

            <div className="max-w-3xl dark:text-zinc-300">
              <p>
                While this article outlines many discrepancies of AI and its
                ability to be creative, many techniques like meta-learning and
                recursive self-improvement allow agents to dynamically redefine
                their conceptual spaces. Meta-learning implies that the
                conceptual space is the learning strategies themselves, rather
                than the outputs given by the space. If an agent were to
                recursively self-improve and dynamically alter its
                self-modifying constraints, an AI agent would theoretically
                attain transformational creativity, bridging the gap between
                computational power and human-directed intelligence.
              </p>

              <p>
                <br />
                Such a development, however, remains speculative. Until
                artificial systems demonstrate the capacity to originate and
                revise the conceptual frameworks that govern their own learning,
                independent of human design, their creativity remains an
                extension of human intention rather than an autonomous faculty.
                What may emerge is not machine creativity in the human sense,
                but an increasingly sophisticated amplification of
                human-directed intelligence.
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
