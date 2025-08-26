// pages/index.js
// One-file drop-in with nav upgrades, motion polish, and small UI fixes.
// Requires: framer-motion, next/link, next/image, Tailwind CSS.
//   npm install framer-motion
// Notes:
// - Replaces the previous AnimatedSection with a flexible variant-based version.
// - Adds a premium Header (sticky, scroll progress, active link highlight, mobile drawer).
// - Swaps portfolio to aspect-square + tasteful hover motion.
// - Adds a gentle parallax on the hero side image (desktop + mobile).
// - Accessibility: skip link, focus-visible rings, reduced-motion support.
// - Text fix: "Airbnb Luxe Home Consultant" in About section.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* --------------------------------- ICONS --------------------------------- */
const CheckIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

/* --------------------------- ANIMATION WRAPPERS -------------------------- */
const AnimatedSection = ({
  children,
  delay = 0,
  variant = "rise", // "rise" | "slideLeft" | "slideRight" | "scale"
  once = true,
}) => {
  const shouldReduce = useReducedMotion();
  const variants = {
    rise: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
    slideLeft: { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
    slideRight: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
  };
  const transition = shouldReduce ? { duration: 0 } : { duration: 0.6, delay, ease: "easeOut" };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={transition}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------------- NAV ---------------------------------- */
const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const shouldReduce = useReducedMotion();

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });

  // Active section highlighting
  useEffect(() => {
    const ids = NAV.map(n => n.href.replace("#", ""));
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Close on Esc, and when resizing up to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      {/* Tiny progress bar */}
      {!shouldReduce && (
        <motion.div
          className="fixed top-0 inset-x-0 z-[60] h-1 bg-[#D36D47] origin-left"
          style={{ scaleX }}
        />
      )}

      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[80]
                   bg-white text-black rounded px-3 py-2 shadow"
      >
        Skip to content
      </a>

      {/* Sticky bar (solid) */}
      <header
        id="site-header"
        className="sticky top-0 z-50 bg-[#F9F6F0] ring-1 ring-black/5 shadow-sm relative"
        role="banner"
      >
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl md:text-3xl font-bold text-[#2C4A3F]" aria-label="YiMera Home">
            YiMera
          </Link>

          {/* Desktop nav with underline-on-active */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary">
            {NAV.map(item => {
              const isActive = active === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative text-sm font-medium transition",
                    "text-[#2C4A3F]/80 hover:text-[#2C4A3F]",
                    isActive ? "text-[#2C4A3F]" : ""
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  <span
                    className={[
                      "pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full transition-all",
                      isActive ? "w-full bg-[#D36D47]" : "w-0 bg-transparent group-hover:w-full"
                    ].join(" ")}
                  />
                </Link>
              );
            })}
            <Link
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-[#D36D47] text-white
                         text-sm font-semibold px-5 py-2.5 shadow hover:opacity-90
                         focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D36D47]/30"
            >
              Let's Chat
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg
                       ring-1 ring-black/10 bg-white text-[#2C4A3F]
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D36D47]/30"
          >
            <span className="sr-only">Menu</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown (solid bg, centered text) */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              className="absolute top-full left-0 right-0 md:hidden bg-[#F9F6F0] ring-1 ring-black/5 shadow-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.22, ease: "easeOut" }}
              aria-label="Mobile"
            >
              <ul className="py-3 flex flex-col items-center text-center">
                {NAV.map(item => {
                  const isActive = active === item.href.slice(1);
                  return (
                    <li key={item.href} className="w-full">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "block w-full px-4 py-3 text-base font-medium",
                          "text-[#2C4A3F]/90 hover:bg-[#DDE5DB]",
                          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D36D47]/20",
                          isActive ? "underline decoration-[#D36D47] underline-offset-4" : ""
                        ].join(" ")}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="px-4 pb-5 flex justify-center">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-xl bg-[#D36D47] text-white
                             text-base font-semibold px-5 py-3 shadow hover:opacity-90
                             focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D36D47]/30"
                >
                  Start the Conversation
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}


/* ------------------------------ PAGE CONTENT ----------------------------- */
export default function YiMeraHome() {
  // Parallax hooks MUST be inside the component
  const heroRef = useRef(null);
  const shouldReduce = useReducedMotion();

  // Local scroll progress for the hero only
  // Track scroll while the hero is passing the top of the viewport.
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // start when hero hits top, end when hero passes top
  });
  // Stronger offset = more visible parallax (tweak these numbers to taste)
  const yDesktop = useTransform(heroProgress, [0, 1], [0, -160]);
  const yMobile = useTransform(heroProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#F9F6F0] text-[#2C4A3F]">
      <Header />

      <main id="main">
        {/* HERO — split on desktop, stacked on mobile, with local parallax */}
        <section ref={heroRef} className="relative overflow-hidden md:h-[88vh] md:min-h-[680px]">
          {/* MOBILE: top banner image with parallax */}
          <div className="relative h-[42vh] min-h-[260px] w-full md:hidden">
            <motion.div style={{ y: shouldReduce ? 0 : yMobile }} className="absolute inset-0 will-change-transform">
              <Image
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80"
                alt="Beautifully designed modern living room"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="100vw"
              />
            </motion.div>
          </div>

          {/* DESKTOP: right-side image with parallax */}
          <div className="hidden md:block absolute top-0 right-0 w-5/12 h-full overflow-hidden">
            <motion.div
              style={{ y: shouldReduce ? 0 : yDesktop }}
              className="absolute inset-0 will-change-transform"
            >
              <Image
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80"
                alt="Beautifully designed modern living room"
                fill
                priority
                className="object-cover object-center"
                sizes="(min-width: 768px) 41.6667vw, 100vw"
              />
            </motion.div>
          </div>

          {/* CONTENT: white panel that overlaps image */}
          <div className="container mx-auto">
            <div className="relative z-10 w-full md:w-9/12 flex flex-col justify-center">
              {/* On mobile we pull the panel up over the banner; on desktop it sits normally */}
              <div
                className="bg-[#F9F6F0]/95 backdrop-blur-sm rounded-xl shadow md:shadow-none
                           px-6 py-6 md:p-8 md:pr-12 mx-4 md:mx-0 -mt-10 md:mt-24"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6"
                >
                  Turn Short Term Rentals into Long Term Assets.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="text-lg md:text-2xl max-w-xl text-[#6E8C7D] mb-6 md:mb-8"
                >
                  A platform agnostic consultancy for short-term rental owners who think like investors.
                  We turn good listings into great businesses.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <Link
                    href="#contact"
                    className="inline-block bg-[#D36D47] text-white font-bold py-3.5 px-8 rounded-xl
                               hover:opacity-90 transition shadow-lg text-lg
                               focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D36D47]/30"
                  >
                    Start the Conversation
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services (equal-height, capped width, higher contrast + enticing hover) */}
        <section id="services" className="scroll-mt-28 py-20 md:py-32 bg-[#DDE5DB]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl md:max-w-7xl mx-auto">
              <AnimatedSection variant="rise">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                  It&apos;s a journey. We&apos;re your guide.
                </h3>
                <p className="text-lg md:text-xl text-[#5D7B6C] max-w-2xl">
                  Whether you&apos;re starting from scratch or know there&apos;s another gear, we have a playbook for your next move.
                </p>
              </AnimatedSection>

              <div className="mt-12 grid gap-8 md:grid-cols-3 items-stretch">
                {/* 01 - Launch */}
                <AnimatedSection delay={0.05} variant="rise">
                  <Link
                    href="/pricing#launch"
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl
                       bg-gradient-to-br from-white to-[#FBF7F1]
                       p-8 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(44,74,63,0.06)]
                       transition-all duration-300 hover:-translate-y-1.5
                       hover:shadow-[0_18px_40px_rgba(44,74,63,0.15)]
                       hover:ring-[#D36D47]/40 focus-visible:outline-none
                       focus-visible:ring-4 focus-visible:ring-[#D36D47]/30 cursor-pointer"
                  >
                    {/* subtle warm halo + corner glow */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl
                             before:absolute before:-inset-px before:rounded-2xl
                             before:bg-gradient-to-br before:from-[#D36D47]/18 before:via-transparent before:to-transparent
                             before:opacity-0 group-hover:before:opacity-100 transition-opacity duration-300
                             after:absolute after:inset-0 after:rounded-2xl
                             after:bg-[radial-gradient(220px_160px_at_100%_0%,rgba(211,109,71,0.18),transparent_60%)]
                             after:opacity-0 group-hover:after:opacity-100" />

                    {/* ghost number */}
                    <span className="pointer-events-none select-none absolute -top-3 -left-1 text-8xl font-black text-[#2C4A3F]/7 z-0
                             transition-transform duration-300 group-hover:translate-y-1">01</span>

                    <div className="relative z-10">
                      <h4 className="font-serif text-3xl font-bold mb-3">Nail Your Launch</h4>
                      <p className="text-[#6E8C7D] mb-6">
                        For the ambitious host starting from scratch. Sidestep the rookie mistakes and launch a listing that&apos;s profitable from day one.
                      </p>

                      <ul className="space-y-3">
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Market &amp; Yield Analysis</span></li>
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Brand &amp; Listing Creation</span></li>
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Professional Media Production</span></li>
                      </ul>

                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 font-semibold text-[#2C4A3F] group-hover:text-[#D36D47] transition-colors">
                          See the launch playbook
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>

                {/* 02 - Boost */}
                <AnimatedSection delay={0.1} variant="rise">
                  <Link
                    href="/pricing#boost"
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl
                       bg-gradient-to-br from-white to-[#FBF7F1]
                       p-8 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(44,74,63,0.06)]
                       transition-all duration-300 hover:-translate-y-1.5
                       hover:shadow-[0_18px_40px_rgba(44,74,63,0.15)]
                       hover:ring-[#D36D47]/40 focus-visible:outline-none
                       focus-visible:ring-4 focus-visible:ring-[#D36D47]/30 cursor-pointer"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-2xl
                             before:absolute before:-inset-px before:rounded-2xl
                             before:bg-gradient-to-br before:from-[#D36D47]/18 before:via-transparent before:to-transparent
                             before:opacity-0 group-hover:before:opacity-100 transition-opacity duration-300
                             after:absolute after:inset-0 after:rounded-2xl
                             after:bg-[radial-gradient(220px_160px_at_100%_0%,rgba(211,109,71,0.18),transparent_60%)]
                             after:opacity-0 group-hover:after:opacity-100" />
                    <span className="pointer-events-none select-none absolute -top-3 -left-1 text-8xl font-black text-[#2C4A3F]/7 z-0
                             transition-transform duration-300 group-hover:translate-y-1">02</span>

                    <div className="relative z-10">
                      <h4 className="font-serif text-3xl font-bold mb-3">Boost Your Bookings</h4>
                      <p className="text-[#6E8C7D] mb-6">
                        For the seasoned host who&apos;s ready for more. We&apos;ll audit your operations and fine-tune your marketing to unlock true earning potential.
                      </p>

                      <ul className="space-y-3">
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>100-Point Listing Audit</span></li>
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Dynamic Pricing Strategy</span></li>
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Direct Booking &amp; Social Growth</span></li>
                      </ul>

                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 font-semibold text-[#2C4A3F] group-hover:text-[#D36D47] transition-colors">
                          View the audit
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>

                {/* 03 - Brand */}
                <AnimatedSection delay={0.15} variant="rise">
                  <Link
                    href="/pricing#brand"
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl
                       bg-gradient-to-br from-white to-[#FBF7F1]
                       p-8 ring-1 ring-black/5 shadow-[0_10px_30px_rgba(44,74,63,0.06)]
                       transition-all duration-300 hover:-translate-y-1.5
                       hover:shadow-[0_18px_40px_rgba(44,74,63,0.15)]
                       hover:ring-[#D36D47]/40 focus-visible:outline-none
                       focus-visible:ring-4 focus-visible:ring-[#D36D47]/30 cursor-pointer"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-2xl
                             before:absolute before:-inset-px before:rounded-2xl
                             before:bg-gradient-to-br before:from-[#D36D47]/18 before:via-transparent before:to-transparent
                             before:opacity-0 group-hover:before:opacity-100 transition-opacity duration-300
                             after:absolute after:inset-0 after:rounded-2xl
                             after:bg-[radial-gradient(220px_160px_at_100%_0%,rgba(211,109,71,0.18),transparent_60%)]
                             after:opacity-0 group-hover:after:opacity-100" />
                    <span className="pointer-events-none select-none absolute -top-3 -left-1 text-8xl font-black text-[#2C4A3F]/7 z-0
                             transition-transform duration-300 group-hover:translate-y-1">03</span>

                    <div className="relative z-10">
                      <h4 className="font-serif text-3xl font-bold mb-3">Build Your Brand</h4>
                      <p className="text-[#6E8C7D] mb-6">
                        For the visionary ready to scale. Grow from a single listing into a scalable hospitality brand with a life of its own.
                      </p>

                      <ul className="space-y-3">
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Multi-Unit Operational Systems</span></li>
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Portfolio &amp; Brand Expansion</span></li>
                        <li className="flex items-start"><CheckIcon className="w-6 h-6 text-[#88A096] mr-3 mt-0.5 transition-colors duration-300 group-hover:text-[#D36D47]" /><span>Business Valuation &amp; Exit Plan</span></li>
                      </ul>

                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 font-semibold text-[#2C4A3F] group-hover:text-[#D36D47] transition-colors">
                          Explore brand building
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>



        {/* About Us Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <AnimatedSection variant="slideLeft">
              <div className="text-left">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">Where the Left Brain Meets the Right Brain.</h3>
                <p className="text-lg text-[#6E8C7D] mb-4">
                  Fuse data with creative magic, local market insights and business acumen.
                </p>
                <p className="text-lg">
                  YiMera was founded on a simple idea: what if you combined a{" "}
                  <span className="font-bold text-[#D36D47]">
                    top real estate photographer</span>{" and "}
                  <span className="font-bold text-[#D36D47]">
                    Airbnb Luxe Home Consultant&apos;s keen eyes{" "}
                  </span>
                  with a{" "}
                  <span className="font-bold text-[#D36D47]">
                    seasoned business executive</span>{" and "}
                    <span className="font-bold text-[#D36D47]">marketing professor&apos;s strategic mind?
                  </span>{" "}
                  You get us — savvy strategy with epic storytelling.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} variant="slideRight">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Two founders collaborating"
                className="rounded-lg shadow-xl w-full h-full object-cover"
                width={800}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </AnimatedSection>
          </div>
        </section>

        {/* Sample Projects Section */}
        <section id="portfolio" className="py-20 md:py-32 bg-[#F9F6F0]">
          <div className="container mx-auto text-center px-4">
            <AnimatedSection>
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Spaces transformed. Stories told.</h3>
              <p className="text-lg md:text-xl text-[#6E8C7D] max-w-2xl mx-auto mb-16">
                A few of our favorite projects that went from &quot;nice&quot; to &quot;booked solid&quot;.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-4">
              <AnimatedSection delay={0.1} variant="rise">
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <motion.div whileHover={{ scale: 1.04, rotate: -0.2 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
                    <Image
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
                      alt="The Hudson Hideaway project"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                    <h4 className="text-white font-bold text-xl">The Hudson Hideaway</h4>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} variant="rise">
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <motion.div whileHover={{ scale: 1.04, rotate: -0.2 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
                    <Image
                      src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80"
                      alt="Poconos Modern Cabin project"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                    <h4 className="text-white font-bold text-xl">Poconos Modern Cabin</h4>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} variant="rise">
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <motion.div whileHover={{ scale: 1.04, rotate: -0.2 }} transition={{ type: "spring", stiffness: 220, damping: 20 }}>
                    <Image
                      src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
                      alt="Brooklyn Brownstone project"
                      className="w-full h-full object-cover"
                      width={1200}
                      height={1200}
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                    <h4 className="text-white font-bold text-xl">Brooklyn Brownstone</h4>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 md:py-32 bg-[#DDE5DB]">
          <div className="container mx-auto text-center max-w-3xl px-4">
            <AnimatedSection>
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8">
                &quot;Working with YiMera was the single best investment we&apos;ve made for our rental.&quot;
              </h3>
              <p className="text-lg font-semibold">- Sarah L., Host in Montauk, NY</p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto text-center max-w-3xl px-4">
            <AnimatedSection>
              <h3 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ready to get serious?</h3>
              <p className="text-lg md:text-xl text-[#6E8C7D] mb-8">
                We&apos;d love to hear about your property. Drop us a line, and let&apos;s see if we&apos;re a good fit. No pressure, just a conversation.
              </p>
              <Link
                href="mailto:hello@yimera.com"
                className="inline-block bg-[#D36D47] text-white font-bold py-3.5 px-8 rounded-xl hover:opacity-90 transition shadow-lg text-lg
                           focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D36D47]/30"
              >
                hello@yimera.com
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C4A3F] text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h3 className="font-serif text-3xl font-bold mb-4">YiMera</h3>
          <p className="text-[#DDE5DB]">A consultancy for hosts who mean business.</p>
          <p className="text-[#88A096] text-sm mt-8">© 2025 YiMera. All Rights Reserved. | Serving NY, NJ, PA, &amp; CT</p>
        </div>
      </footer>
    </div>
  );
}
