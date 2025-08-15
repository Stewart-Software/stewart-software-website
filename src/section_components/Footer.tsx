"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#264653] text-white py-12">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">Stewart Software</h3>
          <p className="text-gray-300 mb-6">
            Turning ideas into launch-ready apps
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/ivangeoffreystewart"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4A261] p-3 rounded-full hover:bg-[#E8914A] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://github.com/ivanstewart2001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2A9D8F] p-3 rounded-full hover:bg-[#1F7A6B] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="mailto:geoffrey@stewartsoftware.dev"
              className="bg-[#E9C46A] p-3 rounded-full hover:bg-[#D4B341] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 Stewart Software. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
