"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Calculator } from "lucide-react";
import Link from "next/link";

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show the CTA only after scrolling past the initial hero section (e.g., 500px)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setIsExpanded(false); // Reset expansion when hidden
    }
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Determine if it's a touch device based on hover support
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    
    if (isTouchDevice && !isExpanded) {
      e.preventDefault(); // Prevent navigation on the first tap
      setIsExpanded(true); // Expand the CTA
    } else if (isExpanded) {
      // Allow navigation and collapse it back
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10 flex flex-col items-end"
      onMouseEnter={() => !window.matchMedia('(hover: none)').matches && setIsExpanded(true)}
      onMouseLeave={() => !window.matchMedia('(hover: none)').matches && setIsExpanded(false)}
    >
      <Link 
        href="/#quote"
        onClick={handleClick}
        className={`relative flex items-center justify-center bg-secondary hover:bg-secondary-light text-primary border border-primary/20 h-14 min-w-[3.5rem] px-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-1 overflow-hidden ${isExpanded ? 'w-[18rem]' : 'w-14'}`}
      >
        <span className={`absolute inset-0 rounded-full transition-opacity ${isExpanded ? 'bg-primary/10 opacity-100' : 'bg-transparent opacity-0'}`}></span>
        <Calculator className="w-6 h-6 text-primary shrink-0 z-10" />
        <span className={`font-serif font-bold tracking-wide overflow-hidden max-w-0 transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 uppercase text-sm z-10 ${isExpanded ? 'max-w-[15rem] ml-3 opacity-100' : ''}`}>
          Book a Consultation
        </span>
      </Link>
    </motion.div>
  );
}

