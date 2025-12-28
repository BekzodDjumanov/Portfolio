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
import { IoMdStar } from "react-icons/io";

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

  const testimonials = [
    {
      name: "huizheng1029 (134076)",
      image: "/images/ebay.png",
      review:
        "Thank you for an easy, pleasant transaction. Best seller. A++++++.",
    },
    {
      name: "mathers0125 (116830)",
      image: "/images/ebay.png",
      review: "Patient, Excellent seller.",
    },
    { name: "sells5555 (651)", image: "/images/ebay.png", review: "Thanks!" },
    {
      name: "vollanodevee (3128)",
      image: "/images/ebay.png",
      review: "Awesome seller! Thanks for your business.",
    },
    {
      name: "mrfledermaus (873)",
      image: "/images/ebay.png",
      review: "Fast shipping. In great condition. RECOMMENDED!",
    },
    {
      name: "boweage3015 (54)",
      image: "/images/ebay.png",
      review:
        "Great job in communicating. Received in the amount of time that was described.",
    },
    {
      name: "eliwill-28 (46)",
      image: "/images/ebay.png",
      review: "Everything is great thank you",
    },
    {
      name: "scohar83 (81)",
      image: "/images/ebay.png",
      review: "Good purchase.... 🔥",
    },
    {
      name: "sngarmstrong (669)",
      image: "/images/ebay.png",
      review: "Great service",
    },
    {
      name: "jofigu-13 (50)",
      image: "/images/ebay.png",
      review: "Sick shoes for a great price thank you!",
    },
    {
      name: "chal5200 (2007)",
      image: "/images/ebay.png",
      review: "Everything is perfect!",
    },
    {
      name: "thatrobotguy (9)",
      image: "/images/ebay.png",
      review:
        "Item was as described, works great, VERY FAST shipping, great communication!",
    },
    {
      name: "sidelines01 (7643)",
      image: "/images/ebay.png",
      review: "Quick response Perfect! THANKS!!",
    },
    {
      name: "pokemondadofcrazykids (3327)",
      image: "/images/ebay.png",
      review: "Awesome card, well packaged, fast shipping. Thank you!",
    },
    {
      name: "broy-93 (208)",
      image: "/images/ebay.png",
      review: "Great seller",
    },
    {
      name: "ezjimbo1 (2050)",
      image: "/images/ebay.png",
      review: "Fast shipping; well-packaged. Thanks a bunch!!",
    },
    {
      name: "gbrotherssurplus (945)",
      image: "/images/ebay.png",
      review: "Great Seller! Solid communication- I will buy again!",
    },
    {
      name: "elnene517 (74)",
      image: "/images/ebay.png",
      review: "Fast shipper!",
    },
    {
      name: "crystal_key_store (1080)",
      image: "/images/ebay.png",
      review: "Smooth transaction. Outstanding buyer. Highly recommend!",
    },
    {
      name: "howkra-72 (4)",
      image: "/images/ebay.png",
      review:
        "very polite and quick communication, very fast shipping as well, along with a good description of the product. have no complaints at all.",
    },
    {
      name: "ymishtal (2975)",
      image: "/images/ebay.png",
      review: "Fast shipping! Thx",
    },
    {
      name: "sweetdealz24-7-365 (2083)",
      image: "/images/ebay.png",
      review: "great",
    },
    {
      name: "mirpa-29 (6209)",
      image: "/images/ebay.png",
      review: "thank you very much",
    },
    {
      name: "minifi33 (101)",
      image: "/images/ebay.png",
      review: "Excellent!!!",
    },
    {
      name: "larausacorp (1117)",
      image: "/images/ebay.png",
      review:
        "Thank you for answering my questions, very patient and likeable.",
    },
    {
      name: "tonel-678 (2)",
      image: "/images/ebay.png",
      review:
        "Seller was honest with extremely fast communication! The GPU is exactly as described and was shipped immediately. Thanks!",
    },
    {
      name: "dxandbatista (1132)",
      image: "/images/ebay.png",
      review: "Hope to deal with you again. Thank you.",
    },
    {
      name: "gemsbox20162 (2610)",
      image: "/images/ebay.png",
      review: "Valued seller",
    },
    {
      name: "minifi33 (101)",
      image: "/images/ebay.png",
      review: "Excellent!!!",
    },
    {
      name: "throwindownink1 (248)",
      image: "/images/ebay.png",
      review: "Item arrived as described, fast and easy.",
    },
    {
      name: "redsguy14 (2101)",
      image: "/images/ebay.png",
      review: "Very well versed, thank you.",
    },
    {
      name: "toyboxtoybox (3071)",
      image: "/images/ebay.png",
      review: "I will support this store",
    },
    {
      name: "168sta.japan (102)",
      image: "/images/ebay.png",
      review:
        "Had questions and was answered, excellent seller prompt responses.",
    },
    {
      name: "angel81200909 (72628)",
      image: "/images/ebay.png",
      review: "Thank you for an easy, pleasant transaction.",
    },
    {
      name: "ddog2995 (80)",
      image: "/images/ebay.png",
      review: "Item as described worked great. Also great communication.",
    },
    {
      name: "reliantdatasolutions (225)",
      image: "/images/ebay.png",
      review:
        "Fast shipment and arrived as described would do business with again!",
    },
    {
      name: "drublade (71)",
      image: "/images/ebay.png",
      review:
        "Christmas Miracle. Came in today the 24th right before Christmas Eve. Very happy with communication and was lucky enough to get this to me super fast!! Can't wait to deal with seller again.",
    },
    {
      name: "alejandrpere-452 (112)",
      image: "/images/ebay.png",
      review: "Very good 👍🏽",
    },
    {
      name: "blind212 (556)",
      image: "/images/ebay.png",
      review: "pleasure to do business with!",
    },
    {
      name: "o_jeremy (8)",
      image: "/images/ebay.png",
      review: "Fast shipping and product received as described",
    },
    {
      name: "mrdiron_2 (28)",
      image: "/images/ebay.png",
      review:
        "Item shipped promptly, received ahead of schedule, and is as described! A+ seller!",
    },
    {
      name: "thepgung (34)",
      image: "/images/ebay.png",
      review: "AAA+ Seller, Ship very fast",
    },
    {
      name: "lselighting (132034)",
      image: "/images/ebay.png",
      review: "Thank you",
    },
    {
      name: "deepsixdiesel (866)",
      image: "/images/ebay.png",
      review: "Excellent seller! A++!! Thank you very much!!!",
    },
    {
      name: "hiphopheadjoe_3 (84)",
      image: "/images/ebay.png",
      review: "Perfect",
    },
    { name: "gdc1119 (500)", image: "/images/ebay.png", review: "a++" },
    {
      name: "therealpedrosanchez (44)",
      image: "/images/ebay.png",
      review:
        "Great price for item, communication was great. package was bare not stuffed with filler still 5 stars.",
    },
    {
      name: "discount-gifts (6275)",
      image: "/images/ebay.png",
      review:
        "Good buyer, prompt payment, valued customer, highly recommended.",
    },
    {
      name: "irishgale (418)",
      image: "/images/ebay.png",
      review: "Perfect. Thank you!",
    },
    {
      name: "buffakickz (293)",
      image: "/images/ebay.png",
      review: "Great communication. A pleasure to do business with.",
    },
    {
      name: "manny_svt (230)",
      image: "/images/ebay.png",
      review: "Awesome seller! Thanks!! A++",
    },
    {
      name: "koreanbombs (73)",
      image: "/images/ebay.png",
      review: "It's a really good seller Delivery is fast",
    },
    {
      name: "shoe_boss3 (342)",
      image: "/images/ebay.png",
      review: "Great seller super fast 💨 shipping A++++++",
    },
    {
      name: "cvos2218 (389)",
      image: "/images/ebay.png",
      review: "Great seller fast shipment",
    },
    {
      name: "j4v4n91 (11)",
      image: "/images/ebay.png",
      review: "Great and fast shipping would buy again",
    },
    {
      name: "papayaseller04 (410)",
      image: "/images/ebay.png",
      review: "Perfect! Thanks.",
    },
    {
      name: "discountboardshop (18644)",
      image: "/images/ebay.png",
      review: "Hope to deal with you again. Thank you.",
    },
    {
      name: "imjinnx (67)",
      image: "/images/ebay.png",
      review: "Smooth transaction! Made payment FAST! Phenomenal seller A++",
    },
    {
      name: "playarules (1613)",
      image: "/images/ebay.png",
      review: "product arrived as advertised",
    },
    {
      name: "hus6267 (130)",
      image: "/images/ebay.png",
      review:
        "great phone. Excellent camera and easy to use. Big screen for easier visibility as well!",
    },
    {
      name: "lowjlo-bxoihj (33)",
      image: "/images/ebay.png",
      review:
        "Minor concern and seller was able to address and fix. Busy time of year caused a delay in communication. Good customer service!",
    },
    {
      name: "vauus-aao3f4cxn (405)",
      image: "/images/ebay.png",
      review:
        "Super fast shipping! Quality seller! 5 stars  ! Highest recommendations!",
    },
    {
      name: "jintie-16 (55)",
      image: "/images/ebay.png",
      review: "great!!! A++++++++++++",
    },
    {
      name: "ustho_fohmc (27)",
      image: "/images/ebay.png",
      review:
        "Amazingly fast shipping, item received in perfect condition, exactly as expected. Very reasonable price for this hard-to-find scanner.",
    },
    {
      name: "thoclve27 (24)",
      image: "/images/ebay.png",
      review:
        "Received my order fast and in good condition love my new scanner great place to order from.",
    },
    {
      name: "manchego7 (132)",
      image: "/images/ebay.png",
      review:
        "Excellent seller. Great communication. Item arrived as described.",
    },
    {
      name: "bengalibabu2 (1805)",
      image: "/images/ebay.png",
      review: "HIGHLY RECOMMENDED!! EXACTLY AS DESCRIBED!!!!!!!!!",
    },
    {
      name: "master65 (1472)",
      image: "/images/ebay.png",
      review:
        "Fast shipment; good price; outstanding seller!! I would definitively do business again!!",
    },
    {
      name: "bigdog3030 (903)",
      image: "/images/ebay.png",
      review: "Good product",
    },
    {
      name: "fl-cardz (2616)",
      image: "/images/ebay.png",
      review: "Excellent product at a great price. Fast shipping too!",
    },
    {
      name: "kyamaguchi310 (22)",
      image: "/images/ebay.png",
      review: "Fast shipping and item perfect condition",
    },
    {
      name: "crell20 (263)",
      image: "/images/ebay.png",
      review: "Very good 😊",
    },
    {
      name: "jonjack1875 (4696)",
      image: "/images/ebay.png",
      review: "Excellent item.",
    },
    {
      name: "playarules (1617)",
      image: "/images/ebay.png",
      review: "product arrived as advertised",
    },
    {
      name: "katiem-4003 (2)",
      image: "/images/ebay.png",
      review:
        "Overall very pleased! Seller had good communication answering all of my questions and Was willing to negotiate a deal to worked for the both of us! I Ordered and the seller wasted no time getting the item shipped out. 10/10 recommended.",
    },
    {
      name: "manchego7 (132)",
      image: "/images/ebay.png",
      review:
        "Awesome seller. This is my second purchase and item is just as described and quish shipping and great communication. Thanks again!",
    },
    {
      name: "mrzen66sd (372)",
      image: "/images/ebay.png",
      review: "Excellent and new and as described",
    },
    {
      name: "mcdukelee (1075)",
      image: "/images/ebay.png",
      review:
        "Thanks for a pleasant transaction - will definitely do business with you again! A+",
    },
    {
      name: "dirtdobber37766 (1009)",
      image: "/images/ebay.png",
      review:
        "As described. Fast Shipping. Could have been packed better but they were undamaged.",
    },
    {
      name: "kashe-2575 (443)",
      image: "/images/ebay.png",
      review: "Bag arrived in perfect condition. A+++ Ebayer and Seller 👍🏾👍🏾👍🏾",
    },
    {
      name: "roberfouque-0 (33)",
      image: "/images/ebay.png",
      review: "Great experience. Quality luggage",
    },
    {
      name: "viziomas6633 (88)",
      image: "/images/ebay.png",
      review: "Aguante Maradona!",
    },
    {
      name: "j7ke",
      image: "/images/ebay.png",
      review:
        "Been buying for a year now, never had a single problem in items or shipping. We are always able to negotiate a price and strike a deal. I cannot recommend someone more.",
    },
    {
      name: "mattypork",
      image: "/images/ebay.png",
      review:
        "Owner of Spiff Cashouts. Good seller, easy negotiation and sale.",
    },
    {
      name: "_es.",
      image: "/images/ebay.png",
      review: "Owner of ES Cashouts. Valued seller.",
    },
    {
      name: "owencooks",
      image: "/images/ebay.png",
      review: "Bought four shoes, all is well.",
    },
    {
      name: "teos.",
      image: "/images/ebay.png",
      review: "Local meetup went very well. Cool guy and good Supreme shoes.",
    },
    {
      name: "dreamzsociety",
      image: "/images/ebay.png",
      review: "Bought SB Dunks, went well and shoes were as described.",
    },
    {
      name: "walladopekicks",
      image: "/images/ebay.png",
      review: "I fuck with this guy, he my slime",
    },
    {
      name: "authoritygoods",
      image: "/images/ebay.png",
      review:
        "Owner of Authority Goods Cashout. Good seller and communication.",
    },
    {
      name: "pinky2819",
      image: "/images/ebay.png",
      review: "Dunks go crazy!! I love these shoes, thank you",
    },
    {
      name: "nico9325",
      image: "/images/ebay.png",
      review: "Bought 25+ PS5's and Xbox's all at a fair price",
    },
    {
      name: "thecashoutking",
      image: "/images/ebay.png",
      review:
        "bought items and were all sealed and never had a problem. Communication was excellent.",
    },
    {
      name: "rgsneakz",
      image: "/images/ebay.png",
      review: "lended him bread and shipped next day. Vouch",
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
        <section className="opacity-0 fade-in w-full max-w-6xl mx-auto flex flex-col items-center gap-12 py-20 md:py-32 px-4">
          <div className="w-full flex flex-col gap-4 ml-8">
            {/* Heading Logic: Kept the dot-indicator style */}
            <h1 className="flex items-center gap-3 text-3xl">
              <span className="w-[4px] h-8 dark:bg-white bg-black rounded-full inline-block" />
              reviews & references
            </h1>

            {/* Subtext Logic: Kept your specific alignment and opacity */}
            <p className="text-md text-zinc-500 max-w-prose">
              A comprehensive list of buyers who have engaged in business
              exchanges throughout my time as an entrepreneur. I've had the
              absolute pleasure to maintain a five star rating with over 100+
              reviews.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div
              className="grid gap-4 place-items-stretch
                          grid-cols-1
                          sm:grid-cols-2
                          md:grid-cols-3
                          lg:grid-cols-4
                        "
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="
                  flex flex-col justify-between
                  lg:px-3 lg:py-4 py-5 px-4 rounded-3xl
                  text-zinc-500 dark:text-zinc-400
                  bg-zinc-100/50 dark:bg-white/[0.03]
                  border border-black/5 dark:border-white/10
                  text-sm font-medium
                  dark:hover:border-[#7c3aed]/40
                  dark:hover:text-[#c084fc]
                  dark:hover:bg-[#7c3aed]/5
                  transition-all duration-300 ease-in-out
                  lg:max-w-[260px] w-full
                "
                >
                  {/* Avatar */}
                  <div className="flex flex-col items-center text-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-black/10"
                    />

                    {/* Name */}
                    <h4 className="text-sm dark:text-[#ffffff] text-[#000000]">
                      {item.name}
                    </h4>

                    {/* Stars */}
                    <div className="flex gap-1 text-[#f5c26b]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IoMdStar key={i} className="w-4 h-4" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-xs leading-relaxed pt-2 font-normal">
                      {item.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        className="dark:bg-[#000000] dark:text-[#ffffff] px-8 py-12 md:py-16 flex flex-wrap justify-between items-start gap-y-8 w-full relative 
  shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] dark:shadow-none -mt-5"
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
