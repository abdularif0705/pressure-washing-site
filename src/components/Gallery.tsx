"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

export default function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = "touches" in event ? event.touches[0].clientX - rect.left : event.nativeEvent.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4"
          >
            Real Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 tracking-tight"
          >
            The Difference is Night and Day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Don't just take our word for it. See how we've restored properties across Windsor and LaSalle with our soft washing and pressure washing techniques.
          </motion.p>
        </div>

        {/* Before / After Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Dirty Image (Background - Simulated with filters for perfect alignment) */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* We use the exact same image but apply CSS filters to make it look aged and dirty */}
            <div className="w-full h-full relative" style={{ filter: 'brightness(0.6) sepia(0.6) hue-rotate(-20deg) contrast(1.1) saturate(0.8)' }}>
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" 
                alt="Dirty Home Exterior" 
                className="w-full h-full object-cover"
                draggable="false"
              />
              {/* Add a subtle grunge overlay to enhance the dirty effect */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-60 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#3a2e24] mix-blend-color-burn opacity-40" />
            </div>
          </div>
          
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold text-sm z-10 pointer-events-none">
            Before
          </div>

          {/* Clean Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 bg-sky-100 flex items-center justify-center overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" 
              alt="Clean Home Exterior" 
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
          
          <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-full font-semibold text-sm z-10 pointer-events-none">
            After
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary text-primary">
              <ArrowLeftRight size={20} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
