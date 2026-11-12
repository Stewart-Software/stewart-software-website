"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/testimonials";

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#264653]">
        What Clients Say
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {TESTIMONIALS.map(({ quote, name, role }, index) => (
          <motion.figure
            key={name}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <Quote className="w-8 h-8 text-[#F4A261] mb-4" aria-hidden />
            <blockquote className="text-gray-700 leading-relaxed mb-6">
              {quote}
            </blockquote>
            <figcaption>
              <p className="font-bold text-[#264653]">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}
