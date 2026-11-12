"use client";

import { motion } from "motion/react";
import { CalendarDays, Mail } from "lucide-react";
import { CALENDLY_URL, EMAIL } from "@/links";

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
            Have a new idea or a product that needs work? Let&apos;s talk it
            through and I&apos;ll put together a quote tailored to your project.
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
              <CalendarDays className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-[#264653] text-center">
              Book a Free Intro Call
            </h3>

            <p className="text-gray-600 mb-8 text-center">
              Pick a time that works for you and we&apos;ll talk through your
              project. No cost, no commitment.
            </p>

            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F4A261] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E8914A] transition-all text-base lg:text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call <CalendarDays size={20} />
            </motion.a>

            <p className="text-gray-500 mt-8 mb-2 text-sm">Prefer email?</p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-[#2A9D8F] font-semibold hover:text-[#264653] transition-colors break-all"
            >
              <Mail size={18} /> {EMAIL}
            </a>
            <p className="text-gray-500 mt-2 text-sm text-center">
              I&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                <strong>Tip:</strong> Include details about your project,
                timeline, and budget for a faster response.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
