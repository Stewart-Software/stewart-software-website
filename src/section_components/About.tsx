"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { STACK } from "@/stack";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-indigo-200/50 to-blue-200/50 rounded-2xl"></div>

              {/* Photo */}
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <Image
                  src="/about_images/profilePicture.jpg" // Add your photo to public folder
                  alt="Geoffrey Stewart - Founder of Stewart Software"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hi, I&apos;m Geoffrey 👨‍💻
              </h3>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I&apos;m the founder of{" "}
                  <span className="font-semibold text-indigo-600">
                    Stewart Software
                  </span>
                  , where I help startups and small businesses turn their ideas
                  into reality.
                </p>

                <p className="leading-relaxed">
                  With years of experience in full-stack development, I
                  specialize in building high-quality MVPs and custom
                  applications that not only look great but perform
                  exceptionally. I believe in clean code, clear communication,
                  and delivering results that exceed expectations.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Technologies I Love Working With
              </h4>
              <div className="flex flex-wrap justify-center gap-2">
                {STACK.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="bg-white text-indigo-700 px-3 py-2 rounded-full text-sm font-medium shadow-sm border border-indigo-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
