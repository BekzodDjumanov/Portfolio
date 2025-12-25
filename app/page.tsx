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
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

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
        className="
    fixed top-6 left-1/2 -translate-x-1/2
    px-6 py-3 lg:px-8 lg:py-4
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm lg:hidden opacity-80 dark:hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer hover:text-[#e3dac9]"
        >
          <span>Menu</span>
          <div ref={chevronRef} className="flex items-center justify-center">
            <FaChevronDown size={12} />
          </div>
        </button>

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
        hover:scale-105 border border-[#121212] dark:border-[#e3dac9]
        rounded-lg p-1.5 fade-left opacity-0 transition-all 
        duration-300 ease-in-out cursor-pointer
        shadow-md dark:shadow-none"
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
      ></main>

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
