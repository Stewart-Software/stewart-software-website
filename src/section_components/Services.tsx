"use client";

import { motion } from "motion/react";
import { SERVICE_GROUPS } from "@/services";

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
      <div className="max-w-6xl mx-auto text-center px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-[#264653]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What I Do
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hands-on engineering, whether you&apos;re starting from zero or
          already have a product in users&apos; hands.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8 text-left">
          {SERVICE_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
            >
              <div className="text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#F4A261]">
                  {group.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-[#264653]">
                  {group.title}
                </h3>
              </div>

              {group.services.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex-1"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#2A9D8F]/10 text-[#2A9D8F] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-[#264653]">
                      {service.title}
                    </h4>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
