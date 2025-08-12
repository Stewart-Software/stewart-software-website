"use client";

import { motion } from "motion/react";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We discuss your idea, goals, target audience, and technical requirements to ensure we're aligned.",
    icon: "💡",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "I create a detailed roadmap, wireframes, and timeline with clear milestones and deliverables.",
    icon: "📋",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Regular updates and demos as I build your solution using modern, scalable technologies.",
    icon: "⚡",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Deploy your application and provide ongoing support to ensure everything runs smoothly.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <motion.section
      id="process"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          How We Work Together
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A streamlined process designed to deliver results efficiently while
          keeping you informed every step of the way.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Connection line (hidden on mobile) */}
              {index < processSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-indigo-300 to-transparent z-0"
                  style={{ width: "calc(100% - 3rem)" }}
                />
              )}

              <motion.div
                className="relative z-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-600 text-white rounded-full font-bold text-xl mx-auto mb-4 relative">
                  {item.step}
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 p-6 bg-indigo-50 rounded-2xl border border-indigo-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-indigo-800 font-medium">
            ⏱️ <strong>Timeline:</strong> Most projects are completed within 4-8
            weeks, depending on scope and complexity.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
