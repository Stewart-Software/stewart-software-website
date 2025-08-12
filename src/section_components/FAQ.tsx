"use client";

import { motion } from "motion/react";
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
      className="py-24 bg-gray-50/50 rounded-3xl my-12"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Got questions? Here are answers to the most common questions I receive
          from clients.
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-indigo-600" size={24} />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">
            Still have questions? I'd love to hear from you.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
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
