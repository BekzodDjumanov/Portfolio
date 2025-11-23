"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { RollingText } from "@/components/ui/skiper-ui/skiper58";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Skiper25 } from "@/components/ui/skiper-ui/skiper25";

import Link from "next/link";

import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";
import { AiFillSketchCircle } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          <Link
            href="/"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out flex items-center"
          >
            <RollingText className="align-middle">Home</RollingText>
          </Link>

          <Link
            href="/projects"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">About</RollingText>
          </Link>
          <Link
            href="/projects"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">Projects</RollingText>
          </Link>
          <Link
            href="/projects"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">Reviews</RollingText>
          </Link>
          <Link
            href="/projects"
            className="hover:opacity-100 hover:text-white transition-all duration-300 ease-in-out"
          >
            <RollingText className="align-middle">Contact</RollingText>
          </Link>
        </nav>
      </div>

      <div
        className="flex fixed items-center justify-center absolute top-10 right-10
             hover:scale-105 border border-[#e3dac9] rounded-lg p-1.5
             fade-left opacity-0 transition-all duration-300 ease-in-out cursor-pointer"
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
        className="flex-1 flex flex-col items-center gap-5 mt-20 px-4 py-1 m-auto"
      >
        <div className="fade-in opacity-0 shiny-pill text-center mt-10 rounded-full bg-[#171717] px-4 py-1 border flex items-center gap-1 border-[#e3dac9] text-white dark:text-[#e3dac9] shadow-lg">
          🤫 Curating Solutions
        </div>
        <section
          ref={containerRef}
          className="flex items-center px-4 py-10 -mt-5"
        >
          <div className="flex mt-10 gap-20">
            <div className="flex flex-col gap-2 left">
              <h1 className="text-4xl fade-in opacity-0">Bekzod Djumanov</h1>
              <h2 className="flex items-center gap-1 mt-2 fade-in opacity-0">
                <FaLocationDot /> Washington, DC
              </h2>
              <p className="max-w-sm text-sm -mt-1 fade-in opacity-0">
                Current student at the University of Maryland, with a Computer
                Engineering focus. Carroll Community College Summa Cum Laude
                Alumni, holding an AA in CS.
              </p>
              <div className="mt-1 flex gap-4 text-xl fade-in opacity-0">
                <a
                  className="flex items-center justify-center size-10 rounded-full p-2
                             bg-white/5 dark:bg-[#171717]/50
                             border border-[#171717] dark:border-white/10
                             transition-all duration-300 ease-in-out
                             hover:scale-110 hover:border-white/40 hover:text-white"
                  href="https://github.com/yourte-github-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="flex items-center justify-center size-10 rounded-full p-2
                             bg-white/5 dark:bg-[#171717]/50
                             border border-[#171717] dark:border-white/10
                             transition-all duration-300 ease-in-out
                             hover:scale-110 hover:border-white/40 hover:text-white"
                  href="https://linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="flex items-center justify-center size-10 rounded-full p-2
                             bg-white/5 dark:bg-[#171717]/50
                             border border-[#171717] dark:border-white/10
                             transition-all duration-300 ease-in-out
                             hover:scale-110 hover:border-white/40 hover:text-white"
                  href="mailto:your-email@example.com"
                >
                  <AiFillMessage />
                </a>
              </div>
              <div className="fade-in opacity-0">
                <div className="mt-2 transition-all duration-300 ease-in-out">
                  <ShimmerButton>Contact</ShimmerButton>
                </div>
              </div>
            </div>

            <div className="justify-center items-center">
              <img
                src="/hero.png"
                className="w-[250px] rounded-3xl  shadow-lg border-[#e3dac9] border-2 fade-left-png opacity-0"
              ></img>
            </div>
          </div>
        </section>

        <div ref={containerRef}>
          <div className="flex gap-4">
            <p className="bg-white/5 dark:bg-[#171717]/50 border border-black/20 dark:border-white/10 rounded-full px-4 py-2 text-white dark:text-[#e3dac9] fade-in opacity-0">
              Frontend Developer
            </p>
            <p className="bg-white/5 dark:bg-[#171717]/50 border border-black/20 dark:border-white/10 rounded-full px-4 py-2 text-white dark:text-[#e3dac9] fade-in opacity-0">
              UI/UX Advocate
            </p>
            <p className="bg-white/5 dark:bg-[#171717]/50 border border-black/20 dark:border-white/10 rounded-full px-4 py-2 text-white dark:text-[#e3dac9] fade-in opacity-0">
              Full Ride @ UMD
            </p>
          </div>
        </div>

        {/* <div className="align-center justify-center">
          <Skiper25></Skiper25>
        </div> */}

        {/* NEW SECTION: About / Features */}
        <section
          ref={containerRef} // reusing your existing containerRef for stagger
          className="flex flex-col items-center gap-12 mt-20 px-4 py-10 w-full max-w-5xl"
        >
          <h2 className="text-3xl font-bold fade-in opacity-0">What I Do</h2>
          <p className="text-center max-w-2xl text-[#7b7c8c] fade-in opacity-0">
            I specialize in creating efficient, scalable, and visually appealing
            solutions using modern technologies like Next.js, React, Tailwind
            CSS, and GSAP.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="fade-in opacity-0 p-6 bg-white/5 dark:bg-[#171717]/50 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-[#7b7c8c]">
                Building responsive, fast, and modern web applications using
                React and Next.js.
              </p>
            </div>
            <div className="fade-in opacity-0 p-6 bg-white/5 dark:bg-[#171717]/50 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/10">
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-sm text-[#7b7c8c]">
                Designing intuitive and visually appealing interfaces to enhance
                user experience.
              </p>
            </div>
            <div className="fade-in opacity-0 p-6 bg-white/5 dark:bg-[#171717]/50 rounded-xl shadow-lg flex flex-col items-center text-center border border-white/10">
              <h3 className="text-xl font-semibold mb-2">Project Management</h3>
              <p className="text-sm text-[#7b7c8c]">
                Organizing and managing projects efficiently to deliver
                high-quality solutions on time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d0d0d] text-[#e3dac9] px-8 py-12 md:py-16 flex flex-wrap justify-between items-start gap-y-8 w-full relative">
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
                className="relative inline-block pb-1 text-[#e3dac9] hover:text-white transition-colors duration-300 ease-in-out"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-current transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Social Section */}
        <div className="footer-social flex flex-wrap gap-6 items-center mt-2 text-lg text-[#e3dac9]">
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300 ease-in-out"
          >
            <FaDiscord />
          </a>
          <a
            href="https://www.instagram.com/projectlift.umd/"
            className="hover:text-white transition-colors duration-300 ease-in-out"
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
