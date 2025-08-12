"use client";

import { useScroll, useTransform } from "motion/react";
import Navigation from "@/section_components/Navigation";
import Hero from "@/section_components/Hero";
import About from "@/section_components/About";
import Services from "@/section_components/Services";
import Projects from "@/section_components/Projects";
import Contact from "@/section_components/Contact";
import Footer from "@/section_components/Footer";
import Process from "@/section_components/Process";
import FAQ from "@/section_components/FAQ";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFCF7] via-white to-[#2A9D8F]/10"></div>

        {/* Animated mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              linear-gradient(-45deg, 
                rgba(244, 162, 97, 0.1), 
                rgba(42, 157, 143, 0.08), 
                rgba(233, 196, 106, 0.06), 
                rgba(38, 70, 83, 0.1)
              )`,
            backgroundSize: "400% 400%",
            animation: "meshGradient 15s ease infinite",
          }}
        ></div>

        {/* Bold geometric patterns */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="bold-waves"
              x="0"
              y="0"
              width="50"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,15 Q12.5,5 25,15 T50,15 L50,25 L0,25 Z"
                fill="rgba(42, 157, 143, 0.15)"
              />
              <path
                d="M0,8 Q12.5,18 25,8 T50,8 L50,0 L0,0 Z"
                fill="rgba(38, 70, 83, 0.12)"
              />
            </pattern>

            <pattern
              id="dots"
              x="0"
              y="0"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="4" cy="4" r="1.5" fill="rgba(233, 196, 106, 0.4)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bold-waves)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Large floating accent shapes - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-[#2A9D8F]/25 to-[#264653]/15 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-l from-[#2A9D8F]/25 to-[#F4A261]/30 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-[#264653]/20 to-[#2A9D8F]/25 rounded-full blur-2xl"></div>
        <div className="hidden md:block absolute top-2/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-[#F4A261]/35 to-[#2A9D8F]/20 rounded-full blur-2xl"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#2A9D8F] rounded-full animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#2A9D8F] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-[#E9C46A] rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Navigation />

      <main className="max-w-4xl mx-auto px-6 pt-24 relative z-10">
        <Hero heroY={heroY} />
        <About />
        <Services />
        <Process />
        <Projects />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
