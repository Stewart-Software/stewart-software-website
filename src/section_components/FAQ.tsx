"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it typically take to build an MVP?",
    answer:
      "Most MVPs are completed within 4-8 weeks, depending on the complexity and scope of features. I provide a detailed timeline during the planning phase so you know exactly what to expect.",
  },
  {
    question: "What's included in your development services?",
    answer:
      "I provide end-to-end development including planning, design, development, testing, deployment, and 30 days of post-launch support. You'll also receive regular progress updates and demos throughout the process.",
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Absolutely! I specialize in working with non-technical founders and entrepreneurs. I'll guide you through the technical decisions and explain everything in plain English so you're always informed.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I primarily work with modern, proven technologies like Next.js, React Native, TypeScript, Node.js, and cloud platforms like AWS and Firebase. I choose the best tech stack based on your specific needs and goals.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "I provide regular updates through your preferred communication method (email, Slack, etc.) and schedule weekly check-ins. You'll also have access to view progress through development demos and staging environments.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "I provide 30 days of complimentary post-launch support to ensure everything runs smoothly. After that, I offer ongoing maintenance and feature development services if needed.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, I'm happy to sign Non-Disclosure Agreements before we discuss your project details. Protecting your intellectual property and maintaining confidentiality is a priority.",
  },
  {
    question: "How do you handle project changes or new requirements?",
    answer:
      "Small adjustments are part of the development process and are included. For significant scope changes, I'll provide a clear estimate and timeline adjustment so there are no surprises.",
  },
  {
    question: "What does a project typically cost?",
    answer:
      "Project costs vary based on scope, complexity, and timeline. I provide detailed quotes after our discovery call so you know exactly what to expect with no surprises.",
  },
];

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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#2A9D8F]/5 transition-colors"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "rgba(42, 157, 143, 0.05)" }}
              >
                <h3 className="text-lg font-semibold text-[#264653] pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`w-6 h-6 ${
                      openIndex === index ? "text-[#2A9D8F]" : "text-gray-400"
                    }`}
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 border-t border-[#2A9D8F]/10">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
