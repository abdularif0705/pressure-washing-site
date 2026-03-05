"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Sparkles, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData from the event target
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      service: formData.get("service"),
      details: formData.get("details"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong.');
      }

      toast.success("Estimate request sent successfully! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset(); // Clear form
    } catch (error: any) {
      toast.error(error.message || "Failed to send request. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-24 bg-white relative overflow-hidden">
      {/* Premium Minimalist Background Lines */}
      <div className="absolute inset-0 pointer-events-none border-x border-slate-100 max-w-7xl mx-auto -z-10 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Elegant Text Side */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 max-w-fit"
            >
              <Sparkles size={14} />
              Book Your Service
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-secondary leading-[1.1] mb-6 tracking-tight"
            >
              Let's restore your property's <span className="text-primary italic font-light">brilliance.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed"
            >
              Fill out the form to receive a complimentary, no-obligation estimate within 24 hours. Prefer to speak directly? We're available Monday through Saturday.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="space-y-6"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm transition-transform hover:scale-105">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Direct Line</p>
                  <a href="tel:5551234567" className="text-xl font-bold text-secondary hover:text-primary transition-colors">(555) 123-4567</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm transition-transform hover:scale-105">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Support</p>
                  <a href="mailto:hello@pressurepro.com" className="text-xl font-bold text-secondary hover:text-primary transition-colors">hello@pressurepro.com</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Minimalist Premium Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.06)] border border-slate-100 relative"
          >
            {/* Subtle Gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 rounded-b-full"></div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name <span className="text-red-400">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone <span className="text-red-400">*</span></label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Address <span className="text-red-400">*</span></label>
                <input type="text" id="address" name="address" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" placeholder="123 Property Ave, City" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service <span className="text-red-400">*</span></label>
                <select id="service" name="service" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 appearance-none cursor-pointer">
                  <option value="">Select Primary Service...</option>
                  <option value="softwashing">House Soft Washing</option>
                  <option value="roof">Roof Cleaning</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="driveway">Driveway & Concrete</option>
                  <option value="multiple">Multiple / Full Property</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Details (Optional)</label>
                <textarea id="details" name="details" rows={3} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="Any specific areas of concern..."></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group bg-secondary hover:bg-secondary-light disabled:bg-slate-300 disabled:cursor-not-allowed text-primary disabled:text-slate-500 font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 overflow-hidden mt-8"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending</span>
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Request Estimate</span>
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
