"use client";

import { motion } from "motion/react";

const services = [
  {
    title: "MVP Development",
    description:
      "Transform your idea into a working product quickly. Perfect for validating concepts and securing funding.",
    icon: "⚡",
  },
  {
    title: "Web Applications",
    description:
      "Custom web apps built with modern frameworks. Scalable, secure, and designed for growth.",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using React Native. One codebase, multiple platforms.",
    icon: "📱",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-white/50 rounded-3xl my-12"
    >
      <div className="max-w-4xl mx-auto text-center px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
