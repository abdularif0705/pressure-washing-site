"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee({ items }: { items: React.ReactNode[] }) {
  // Duplicate the array to ensure seamless infinite looping without gaps
  const doubledItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-secondary relative py-8 border-t border-b border-white/5">
      {/* Edge Gradients for smooth fading in/out */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Extremely slow, smooth, premium scroll speed
        }}
      >
        {doubledItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 px-8 sm:px-16 flex items-center justify-center">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
