"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Michael Chen",
      role: "Homeowner",
      content: "Absolutely transformed our house. The soft wash removed years of green algae that I thought was permanent. Professional, punctual, and worth every penny.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      role: "Local Business Owner",
      content: "They handled our commercial storefront and the sidewalk out front. The difference is night and day. The team was incredibly respectful of our property.",
      rating: 5,
    },
    {
      name: "David & Emma Thompson",
      role: "Homeowners",
      content: "We hired them for a full package: roof, gutters, and siding. The crew was meticulous. Our roof looks brand new again. Highly recommend their premium service.",
      rating: 5,
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-sky-400/5 blur-[100px] rounded-full transform -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-6 tracking-tight"
          >
            Trusted by Hundreds of Local Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            Don't just take our word for it. See what our valued clients have to say about our premium exterior restoration services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-secondary-light/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative group hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 transform -rotate-12 group-hover:text-primary/10 transition-colors duration-500" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 italic">
                "{review.content}"
              </p>
              
              <div>
                <h4 className="text-white font-bold font-serif text-lg">{review.name}</h4>
                <p className="text-primary text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
