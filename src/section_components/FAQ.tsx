"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-white/50 rounded-3xl my-12"
    >
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#264653]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? I&apos;ve got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>
                <button
                  type="button"
                  id={`faq-q-${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-a-${index}`}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#2A9D8F]/5 transition-colors text-lg font-semibold text-[#264653]"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-8">{faq.question}</span>
                  <ChevronDown
                    aria-hidden
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-[#2A9D8F]"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </h3>

              {/* Answer always rendered so search engines can index it */}
              <div
                id={`faq-a-${index}`}
                role="region"
                aria-labelledby={`faq-q-${index}`}
                aria-hidden={openIndex !== index}
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-8 pb-6 border-t border-[#2A9D8F]/10">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            className="inline-block bg-[#F4A261] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E8914A] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
