"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SoftWashingService() {
  const benefits = [
    "No risk of high-pressure damage to siding or stucco",
    "Eradicates mold, mildew, and algae at the root",
    "Uses 100% biodegradable, pet-safe detergents",
    "Results last 4-6 times longer than standard pressure washing",
    "Restores the original color and luster of your exterior"
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-secondary leading-tight mb-6"
            >
              Premium House <span className="text-primary italic font-light">Soft Washing</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              High pressure is the enemy of modern home exteriors. Traditional pressure washing can blast water behind siding, strip paint, and permanently scar delicate stucco or brick. Our modern Soft Washing approach is the luxury standard for exterior sanitization.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-12 leading-relaxed"
            >
              We apply a proprietary, low-pressure chemical foam that gently lifts away years of dirt, algae, pollen, and spider webs. Once the foam has neutralized the organic growth, we rinse the property down with a gentle flow of water—leaving it sparkling clean, deeply sanitized, and completely undamaged.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
            >
               <Link href="/#quote" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-secondary hover:bg-secondary-light text-primary font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1">
                 Request House Washing Estimate
               </Link>
            </motion.div>
          </div>
          
          <div className="relative">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 relative z-10 overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
               
               <h3 className="text-2xl font-serif font-bold text-secondary mb-8">The Soft Wash Difference</h3>
               <ul className="space-y-5">
                 {benefits.map((benefit, index) => (
                   <motion.li 
                     key={index}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.4 + (index * 0.1) }}
                     className="flex items-start gap-4"
                   >
                     <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                       <CheckCircle2 size={14} className="text-primary" />
                     </div>
                     <span className="text-slate-600 leading-relaxed font-medium">{benefit}</span>
                   </motion.li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
