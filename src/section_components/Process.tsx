"use client";

import { motion } from "motion/react";
import { CALENDLY_URL } from "@/links";
import { Code2, MessageCircle, ClipboardList, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We talk through your goals, whether it's a brand-new idea or an existing product, and figure out what's worth building.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Plan & Quote",
    description:
      "You get a clear scope, timeline, and quote with defined milestones. No surprises.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Build",
    description:
      "I build in short cycles with regular updates and demos, so you always see real progress.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We ship it, and I stick around to support, maintain, and keep improving it.",
    icon: Rocket,
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
          className="text-4xl md:text-5xl font-bold mb-8 text-[#264653]"
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
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
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
                    className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-[#2A9D8F]/50 to-transparent z-0"
                    style={{ width: "calc(100% - 3rem)" }}
                  />
                )}

                <motion.div
                  className="relative z-10 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#F4A261] text-white rounded-full font-bold text-xl mx-auto mb-4 relative">
                    {item.step}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-[#2A9D8F] rounded-full shadow flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[#264653]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 p-6 bg-[#2A9D8F]/10 rounded-2xl border border-[#2A9D8F]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[#264653] font-medium">
            <strong>Timeline:</strong> New MVPs typically launch in 4-8 weeks.
            Work on existing products is scoped to fit. Every project gets a
            quote up front after a{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#2A9D8F] hover:text-[#264653]"
            >
              free discovery call
            </a>
            .
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
