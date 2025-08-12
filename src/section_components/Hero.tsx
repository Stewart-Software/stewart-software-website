"use client";

import { motion, MotionValue } from "motion/react";
import { Mail, ExternalLink, ArrowDown } from "lucide-react";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-blue-800 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Geoffrey Stewart
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Founder & Software Engineer at{" "}
          <span className="text-indigo-600 font-semibold">
            Stewart Software
          </span>
        </motion.p>

        <motion.p
          className="text-lg text-indigo-600 font-medium mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Turning ideas into launch-ready apps
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.a
            href="#contact"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch <Mail size={18} />
          </motion.a>
          <motion.a
            href="#projects"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors flex items-center gap-2"
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
        <ArrowDown className="text-indigo-600" size={24} />
      </motion.div>
    </motion.section>
  );
}
