"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Droplet, Clock } from "lucide-react";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import InfiniteMarquee from "./InfiniteMarquee";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Parallax translation for the background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center pt-32 md:pt-40 pb-24 overflow-hidden bg-secondary">
      {/* Background Image / Overlay - Now with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Home Exterior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-slate-900/90 z-10" />
        {/* Decorative elements representing water/cleaning */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/4 z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-sky-400/10 blur-[100px] rounded-full transform -translate-x-1/4 translate-y-1/4 z-10 pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm text-sm font-medium text-primary mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            Setting the Standard in Windsor & LaSalle
          </motion.div>
          
          {/* V3 Epic UI: Staggered Text Reveal */}
          <TextReveal 
            text="Your property, restored to its original glory." 
            className="text-5xl md:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            delay={0.1}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10"
          >
            Professional pressure washing, soft washing, and roof cleaning services. We safely remove years of algae, mold, and grime in a single day.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a href="#quote" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-slate-900 font-medium text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-primary/20 border border-primary/20">
              Get Your Free Quote
            </a>
            <a href="#services" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-normal text-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-white/30">
              View Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* V3 Epic UI: Infinite Trust Marquee positioned at the bottom inner edge of the Hero */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <InfiniteMarquee items={[
          <div key="1" className="flex items-center gap-3 text-slate-300 font-serif text-lg">
            <ShieldCheck className="text-primary" size={24} />
            <span>Fully Licensed & $2M Insured</span>
          </div>,
          <div key="2" className="flex items-center gap-3 text-slate-300 font-serif text-lg">
            <Droplet className="text-primary" size={24} />
            <span>100% Eco-Friendly Solutions</span>
          </div>,
          <div key="3" className="flex items-center gap-3 text-slate-300 font-serif text-lg">
            <Clock className="text-primary" size={24} />
            <span>Fast, 1-Day Premium Service</span>
          </div>,
          <div key="4" className="flex items-center gap-3 text-slate-300 font-serif text-lg">
            <span className="text-primary font-bold">5.0 ★</span>
            <span>Over 200+ Satisfied Locals</span>
          </div>
        ]} />
      </div>

    </section>
  );
}
