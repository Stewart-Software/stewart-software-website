"use client";

import { motion, MotionValue } from "motion/react";
import { CalendarDays, ExternalLink, ArrowDown } from "lucide-react";
import { CALENDLY_URL } from "@/links";

interface HeroProps {
  heroY: MotionValue<number>;
}

export default function Hero({ heroY }: HeroProps) {
  return (
    <motion.section
      id="hero"
      style={{ y: heroY }}
      className="min-h-screen flex flex-col justify-center text-center relative"
    >
      <motion.div>
        <motion.h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#264653] via-[#2A9D8F] to-[#F4A261] bg-clip-text text-transparent mb-6">
          Geoffrey Stewart
        </motion.h1>

        <motion.div className="mb-8">
          <p className="text-2xl md:text-3xl text-[#264653] font-semibold mb-3">
            Senior software engineering, on demand.
          </p>
          <p className="text-lg text-[#2A9D8F] font-medium max-w-2xl mx-auto">
            I build MVPs from scratch and help founders and small businesses
            ship, scale, and fix the software they already have.
          </p>
        </motion.div>

        <motion.ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-gray-500 font-medium mb-10">
          <li>Engineer at Google &amp; AIR</li>
          <li aria-hidden className="text-[#2A9D8F]">
            ·
          </li>
          <li>Web, mobile &amp; backend</li>
          <li aria-hidden className="text-[#2A9D8F]">
            ·
          </li>
          <li>Free intro call</li>
        </motion.ul>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F4A261] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E8914A] transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Call <CalendarDays size={18} />
          </motion.a>
          <motion.a
            href="#projects"
            className="border-2 border-[#2A9D8F] text-[#2A9D8F] px-8 py-3 rounded-full font-semibold hover:bg-[#2A9D8F]/10 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-[#2A9D8F]" size={24} />
      </motion.div>
    </motion.section>
  );
}
