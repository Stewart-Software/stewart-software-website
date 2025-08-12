"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  const navItems = [
    "About",
    "Services",
    "Process",
    "Projects",
    "FAQ",
    "Contact",
  ];

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // DESKTOP ONLY animations
  const maxWidth = useTransform(scrollY, [0, 300], ["50vw", "100%"]);
  const paddingX = useTransform(scrollY, [0, 300], [20, 16]);
  const marginTop = useTransform(scrollY, [0, 300], [12, 0]);
  const borderRadius = useTransform(scrollY, [0, 300], [16, 12]);
  const paddingLeft = useTransform(scrollY, [0, 300], [20, 28]);
  const paddingRight = useTransform(scrollY, [0, 300], [20, 28]);
  const paddingTop = useTransform(scrollY, [0, 300], [12, 15]);
  const paddingBottom = useTransform(scrollY, [0, 300], [12, 15]);
  const fontSize = useTransform(scrollY, [0, 300], [18, 20]);
  const logoScale = useTransform(scrollY, [0, 300], [0.9, 1]);

  const backgroundColor = useTransform(
    scrollY,
    [0, 300],
    ["rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 0.95)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 300],
    ["rgba(99, 102, 241, 0.2)", "rgba(229, 231, 235, 1)"]
  );

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{
          // Mobile: static values, Desktop: animated values
          maxWidth: isMobile ? "100%" : maxWidth,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: isMobile ? "16px" : paddingX,
          paddingRight: isMobile ? "16px" : paddingX,
          marginTop: isMobile ? "0px" : marginTop,
        }}
      >
        <motion.div
          className="flex justify-between items-center backdrop-blur-lg border shadow-lg"
          style={{
            // Mobile: static values, Desktop: animated values
            backgroundColor: isMobile
              ? "rgba(255, 255, 255, 0.95)"
              : backgroundColor,
            borderRadius: isMobile ? "12px" : borderRadius,
            borderColor: isMobile ? "rgba(229, 231, 235, 1)" : borderColor,
            paddingLeft: isMobile ? "20px" : paddingLeft,
            paddingRight: isMobile ? "20px" : paddingRight,
            paddingTop: isMobile ? "14px" : paddingTop,
            paddingBottom: isMobile ? "14px" : paddingBottom,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-gray-900 flex items-center space-x-2"
          >
            <motion.div
              className="relative"
              style={{ scale: isMobile ? 1 : logoScale }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                <Image
                  src="/logos/stewartSoftwareLogoSmall.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </div>
              {!isMobile && (
                <motion.div
                  className="absolute -inset-1 rounded-xl blur opacity-20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
            <motion.span style={{ fontSize: isMobile ? "18px" : fontSize }}>
              Stewart Software
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-600 hover:text-indigo-600 transition-colors font-medium group text-sm"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-xl"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(99, 102, 241, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            style={{
              marginLeft: "16px", // Match navbar padding
              marginRight: "16px",
              marginTop: "8px",
            }}
          >
            <div className="bg-white/95 backdrop-blur-lg shadow-xl border border-indigo-100 rounded-xl overflow-hidden">
              <div className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-600 hover:text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all font-medium py-3 px-4 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
