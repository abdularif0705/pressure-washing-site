"use client";

import { motion } from "framer-motion";
import { Sparkles, Home as HomeIcon, Waves } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Soft Washing",
      description: "Gentle on your siding and stucco, tough on grime. Our low-pressure soft wash eliminates algae, mold, and mildew without damaging your home's exterior.",
      icon: <Sparkles size={32} className="text-white" />,
      color: "bg-primary",
      delay: 0.1
    },
    {
      title: "Roof Cleaning",
      description: "Extend the life of your roof. We safely remove black streaks, moss, and lichen using specialized solutions that won't void your shingle warranty.",
      icon: <HomeIcon size={32} className="text-white" />,
      color: "bg-sky-500",
      delay: 0.2
    },
    {
      title: "Gutter Cleaning",
      description: "Inside clearing to prevent water damage to your foundation, and outside brightening to remove 'tiger stripes' and restore that crisp, clean look.",
      icon: <Waves size={32} className="text-white" />,
      color: "bg-blue-600",
      delay: 0.3
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4"
          >
            Our Core Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 tracking-tight"
          >
            Premium Care For Your Most Valuable Asset
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We use industry-leading techniques and eco-friendly solutions to deliver stunning results safely and effectively.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 transition-all hover:shadow-2xl group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-lg transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <a href="#quote" className="inline-flex items-center text-primary font-bold hover:text-primary-hover transition-colors">
                Get a quote
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
