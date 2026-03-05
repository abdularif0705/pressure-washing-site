"use client";

import { motion } from "framer-motion";
import { Droplet, Shield, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Eco-Safe Prep",
    desc: "We secure your property and apply our specialized, 100% biodegradable formula to begin breaking down years of organic growth.",
    icon: <Droplet className="w-8 h-8 text-primary" />
  },
  {
    num: "02",
    title: "Precision Wash",
    desc: "Using calibrated pressure (or soft wash for delicate surfaces), we safely extract embedded grime without damaging your exterior.",
    icon: <Shield className="w-8 h-8 text-primary" />
  },
  {
    num: "03",
    title: "Final Protect",
    desc: "A final rinse and protective treatment ensures your home isn't just clean, but actively resists future mold and algae.",
    icon: <Sparkles className="w-8 h-8 text-primary" />
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6"
          >
            Our Proven Method
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We don't just blast water. We use a controlled, scientific approach to restore and protect your investment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Massive faded number */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-serif font-black text-slate-50 transition-colors duration-500 group-hover:text-primary/5 select-none -z-10">
                {step.num}
              </div>
              
              <div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:border-primary/20">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-secondary mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
