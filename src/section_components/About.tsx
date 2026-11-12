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
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#264653]"
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
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#2A9D8F]/30 to-[#F4A261]/20 rounded-2xl"></div>

              {/* Photo */}
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <Image
                  src="/about_images/professional_headshot.jpeg"
                  alt="Geoffrey Stewart - Founder of Stewart Software"
                  width={1208}
                  height={1302}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#2A9D8F] rounded-full flex items-center justify-center shadow-lg">
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
              <h3 className="text-2xl font-bold text-[#264653] mb-4">
                Hi, I&apos;m Geoffrey
              </h3>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I&apos;m the founder of{" "}
                  <span className="font-semibold text-[#F4A261]">
                    Stewart Software
                  </span>
                  , where I help founders and small businesses build and improve
                  their software. Along the way I&apos;ve shipped production
                  software as an engineer at{" "}
                  <span className="font-semibold text-[#264653]">Google</span>{" "}
                  and <span className="font-semibold text-[#264653]">AIR</span>.
                </p>

                <p className="leading-relaxed">
                  With years of full-stack experience, I build MVPs, web and
                  mobile apps, and new features for products that already exist.
                  Some clients bring me a napkin sketch; others bring a codebase
                  that needs a hand. Either way, I care about clean code, clear
                  communication, and shipping software that works.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-r from-[#2A9D8F]/10 to-[#F4A261]/10 rounded-2xl p-6 border border-[#2A9D8F]/20">
              <h4 className="text-lg font-semibold text-[#264653] mb-4 text-center">
                Technologies I Work With
              </h4>
              <dl className="space-y-3">
                {STACK.map(({ category, items }, index) => (
                  <motion.div
                    key={category}
                    className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-3 sm:items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-[#264653]/70 mb-1.5 sm:mb-0 sm:pt-1.5">
                      {category}
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {items.map((tech) => (
                        <span
                          key={tech}
                          className="bg-white text-[#2A9D8F] px-2.5 py-1 rounded-full text-sm font-medium shadow-sm border border-[#2A9D8F]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
