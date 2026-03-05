"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import CompareSlider from "@/components/CompareSlider";

export default function Results() {
  const resultPairs = [
    {
      title: "Full Exterior Restoration",
      description: "A complete soft wash revealing the true color and beauty of this property.",
      before: "/images/results/house-before.jpg",
      after: "/images/results/house-after.jpg"
    },
    {
      title: "Siding Rejuvenation",
      description: "Safely removing years of organic growth without applying damaging high pressure.",
      before: "/images/results/siding-before.jpg",
      after: "/images/results/siding-after.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-secondary leading-tight mb-6"
          >
            Real <span className="text-primary italic font-light">Results.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            Explore our curated gallery of success stories. See exactly how our low-pressure soft wash system safely eradicates years of dirt, algae, and mold from delicate residential surfaces.
          </motion.p>
        </div>

        <div className="space-y-24">
          {resultPairs.map((pair, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="grid lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100"
             >
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Transformation 0{idx + 1}</div>
                  <h2 className="text-3xl font-serif font-bold text-secondary mb-4">{pair.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{pair.description}</p>
                </div>
                
                <div className="lg:col-span-8">
                  <CompareSlider beforeImage={pair.before} afterImage={pair.after} />
                </div>
             </motion.div>
          ))}
        </div>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 text-center"
        >
           <h3 className="text-3xl font-serif font-bold text-secondary mb-6">Ready for your own transformation?</h3>
           <Link href="/#quote" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-secondary font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1">
             Get a Free Estimate
           </Link>
        </motion.div>
      </div>
    </main>
  );
}
