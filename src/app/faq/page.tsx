"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is soft washing vs. pressure washing?",
    answer: "Pressure washing uses high-pressure water to blast away dirt, which is great for concrete but can damage delicate surfaces like siding and asphalt shingles. Soft washing uses a specialized, eco-friendly chemical treatment applied at low pressure (similar to a garden hose) to kill root-level algae, mold, and bacteria, restoring the surface without risking damage."
  },
  {
    question: "Will your cleaning chemicals harm my plants or pets?",
    answer: "No. We use 100% biodegradable, eco-friendly cleaning solutions. As a standard part of our luxury service, we pre-water all surrounding vegetation, cover sensitive plants if necessary, and thoroughly rinse the area down afterward to ensure complete safety for your landscaping and pets."
  },
  {
    question: "Do I need to be home for the service?",
    answer: "Not at all. As long as we have access to a working exterior water spigot and all windows/doors are securely closed, our technicians can complete the exact scope of work while you are away. We will leave a detailed service completion report."
  },
  {
    question: "How long will my roof stay clean after a treatment?",
    answer: "Our proprietary roof soft washing process eradicates Gloeocapsa Magma (the bacteria that causes black streaks) at the root level. Because of this thorough sanitization, roofs typically stay completely streak-free for 3 to 5 years following our treatment."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes, absolutely. We carry comprehensive liability insurance and workers' compensation. We are happy to provide our certificate of insurance upon request to give you complete peace of mind."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-secondary leading-tight mb-6"
          >
            Frequently Asked <span className="text-primary italic font-light">Questions</span>
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Clear answers to common questions about our premium exterior cleaning processes.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-serif font-bold text-lg md:text-xl text-secondary pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-secondary' : 'bg-slate-100 text-slate-400'}`}>
                  <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={18} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-50 mx-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8 }}
           className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6">Still have questions? We're here to help.</p>
          <Link href="/#quote" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-secondary font-bold text-lg transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1">
             Contact Our Team
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
