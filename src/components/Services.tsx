"use client";

import { motion } from "framer-motion";
import { Sparkles, Home as HomeIcon, Waves, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Soft Washing",
      description: "Gentle on siding and stucco, tough on grime. Our low-pressure soft wash eliminates algae and mold without damaging your home's exterior.",
      icon: <Sparkles size={24} className="text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      delay: 0.1
    },
    {
      title: "Roof Tanking",
      description: "Extend the life of your roof. We safely remove black streaks and lichen using specialized solutions that won't void your shingle warranty.",
      icon: <HomeIcon size={24} className="text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      delay: 0.2
    },
    {
      title: "Gutter Clearance",
      description: "Inside clearing to prevent water damage to your foundation, and outside brightening to remove 'tiger stripes' and restore that crisp look.",
      icon: <Waves size={24} className="text-primary mb-4" />,
      image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=800",
      delay: 0.3
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-4"
          >
            Elite Exterior Care
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-secondary mb-6 tracking-tight"
          >
            Premium Solutions For Your Valued Property
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We deploy precision techniques and biodegradable treatments to restore and protect your home's exterior surfaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.6 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Initial Gradient Overlay (Darker at bottom for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
              
              {/* Hover Overlay (Full dark for text reveal) */}
              <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Always Visible Title/Icon */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">{service.title}</h3>
                  <div className="h-1 w-12 bg-primary rounded-full transform origin-left transition-all duration-500 group-hover:w-full group-hover:bg-primary" />
                </div>

                {/* Reveal on Hover Description */}
                <div className="overflow-hidden">
                  <div className="transform translate-y-[120%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 mt-6">
                    <p className="text-slate-200 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <a href="#quote" className="inline-flex items-center text-primary font-bold hover:text-white transition-colors">
                      Request Estimate
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
