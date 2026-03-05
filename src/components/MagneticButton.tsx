"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, left, top } = boundingRect;
      // Calculate the distance from the center of the element
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      // Scale the movement down slightly for a smooth pull effect
      setPosition({ x: x * 0.3, y: y * 0.3 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block p-1 ${className}`} // p-1 provides a slightly larger "magnetic hover" area
    >
      {children}
    </motion.div>
  );
}
