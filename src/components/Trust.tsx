"use client";

import { motion } from "framer-motion";
import { Award, ThumbsUp, Leaf } from "lucide-react";

export default function Trust() {
  const features = [
    {
      icon: <Award className="text-primary" size={32} />,
      title: "100% Satisfaction Guarantee",
      description: "We don't leave until you're completely thrilled with the results. Your home is treated like our own.",
    },
    {
      icon: <ThumbsUp className="text-primary" size={32} />,
      title: "Licensed & Fully Insured",
      description: "Peace of mind comes standard. We carry $2M in liability insurance to protect your most valuable asset.",
    },
    {
      icon: <Leaf className="text-primary" size={32} />,
      title: "Eco-Friendly Solutions",
      description: "Our proprietary biodegradable cleaning solutions are tough on algae but safe for your pets, plants, and family.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight font-serif"
          >
            Why Choose Pressure Pro?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300"
          >
            We're not just a guy with a truck. We're exterior cleaning specialists dedicated to delivering premium, long-lasting results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
