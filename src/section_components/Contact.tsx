"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 mb-16"
    >
      <div className="text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Have a project in mind? I'd love to hear about it. Let's discuss how
          we can bring your ideas to life.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="mailto:geoffrey@stewartsoftware.dev"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            whileHover={{ y: -5 }}
          >
            <Mail
              className="text-indigo-600 group-hover:scale-110 transition-transform mb-3"
              size={32}
            />
            <span className="text-gray-900 font-semibold">Email</span>
            <span className="text-gray-600 text-sm">
              geoffrey@stewartsoftware.dev
            </span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ivangeoffreystewart"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            whileHover={{ y: -5 }}
          >
            <Linkedin
              className="text-indigo-600 group-hover:scale-110 transition-transform mb-3"
              size={32}
            />
            <span className="text-gray-900 font-semibold">LinkedIn</span>
            <span className="text-gray-600 text-sm">Connect with me</span>
          </motion.a>

          <motion.a
            href="https://github.com/ivanstewart2001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            whileHover={{ y: -5 }}
          >
            <Github
              className="text-indigo-600 group-hover:scale-110 transition-transform mb-3"
              size={32}
            />
            <span className="text-gray-900 font-semibold">GitHub</span>
            <span className="text-gray-600 text-sm">View my code</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
