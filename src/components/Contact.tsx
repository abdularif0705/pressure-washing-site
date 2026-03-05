"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="quote" className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden shadow-primary/5 flex flex-col md:flex-row border border-gray-100">
          
          {/* Contact Info Side */}
          <div className="md:w-2/5 md:min-w-[400px] bg-secondary p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">Get Your Free Quote</h3>
              <p className="text-slate-300 mb-12 leading-relaxed">
                Fill out the form with details about your property, and we'll get back to you within 24 hours with a custom estimate.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us Directly</h4>
                    <p className="text-slate-400 mt-1">(555) 123-4567</p>
                    <p className="text-slate-400 text-sm">Mon-Sat, 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-slate-400 mt-1">hello@pressurepro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-sky-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Service Area</h4>
                    <p className="text-slate-400 mt-1">Serving Metro City & Surrounding Counties</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10 text-sm text-slate-400">
               Fully licensed and insured for $2,000,000.
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-6 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-semibold text-gray-700">Property Address</label>
                <input type="text" id="address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="123 Main St, City, State" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-gray-700">Primary Service Needed</label>
                <select id="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white text-gray-700">
                  <option value="">Select a service...</option>
                  <option value="softwashing">House Soft Washing</option>
                  <option value="roof">Roof Cleaning</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="driveway">Driveway / Concrete Cleaning</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-sm font-semibold text-gray-700">Additional Details</label>
                <textarea id="details" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 resize-none" placeholder="Tell us about the size of your home, specific stains, or areas of concern..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary-hover text-secondary font-extrabold text-lg py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2 transition-colors mt-4"
              >
                <Send size={20} />
                Send Request
              </motion.button>
              
              <p className="text-xs text-center text-gray-400 mt-4">We respect your privacy. Your information is never shared or sold.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
