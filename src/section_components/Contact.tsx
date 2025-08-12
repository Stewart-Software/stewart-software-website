"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24"
    >
      <div className="max-w-4xl mx-auto text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#264653]">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to turn your idea into reality? I&apos;d love to hear about
            your project and discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-12 bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#F4A261] rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[#264653]">
              Get In Touch
            </h3>

            <p className="text-gray-600 mb-8">
              Send me a detailed message about your project and I&apos;ll get
              back to you within 24 hours.
            </p>

            <motion.a
              href="mailto:geoffrey@stewartsoftware.dev"
              className="inline-block bg-[#F4A261] text-white px-4 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-[#E8914A] transition-all text-sm md:text-base lg:text-lg break-all text-center max-w-full"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="block sm:hidden">Email Me</span>
              <span className="hidden sm:block md:hidden">
                geoffrey@stewartsoftware.dev
              </span>
              <span className="hidden md:block">
                geoffrey@stewartsoftware.dev
              </span>
            </motion.a>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                💡 <strong>Pro tip:</strong> Include details about your project,
                timeline, and budget for a faster response.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
