"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Calculator } from "lucide-react";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Show the CTA only after scrolling past the initial hero section (e.g., 500px)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
    >
      <a 
        href="#quote"
        className="group relative flex items-center justify-center bg-secondary hover:bg-secondary-light text-primary border border-primary/20 p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-1"
      >
        <span className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        <Calculator className="w-6 h-6 mr-3 text-primary" />
        <span className="font-serif font-bold tracking-wide">Get A Quote</span>
      </a>
    </motion.div>
  );
}
