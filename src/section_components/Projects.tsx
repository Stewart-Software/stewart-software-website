"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PROJECTS } from "@/projects";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#264653]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map(({ title, description, industry, image }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={600}
                height={350}
                className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#264653] group-hover:text-[#2A9D8F] transition-colors">
                  {title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
              </p>

              <motion.span
                className="inline-flex items-center bg-gradient-to-r from-[#2A9D8F]/20 to-[#F4A261]/20 text-[#264653] px-4 py-2 rounded-full text-sm font-semibold border border-[#2A9D8F]/30"
                whileHover={{ scale: 1.05 }}
              >
                {industry}
              </motion.span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
