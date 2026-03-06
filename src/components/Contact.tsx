"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, Sparkles, Loader2, Check } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    details: "",
  });

  const validateForm = () => {
    const newErrors = [];

    // Phone validation (strip non-digits and check if at least 10)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      newErrors.push("Please enter a valid 10-digit phone number.");
    }

    if (!formData.address) {
      newErrors.push("Please enter your property address.");
    }

    // Security check: Timing validation (>3 seconds)
    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 3000) {
      newErrors.push("Please take a moment to fill out the form completely.");
    }

    if (newErrors.length > 0) {
      setError(newErrors.join('\n'));
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Open the security modal instead of submitting directly
    setShowSecurityModal(true);
  };

  const submitToAPI = async (token: string) => {
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        }),
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Something went wrong sending your request. Please call us directly.");
        setShowSecurityModal(false);
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected network error occurred. Please try again.");
      setShowSecurityModal(false);
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
              Let&apos;s restore your property&apos;s <span className="text-primary italic font-light">brilliance.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 mb-12 max-w-md leading-relaxed"
            >
              Fill out the form to receive a complimentary, no-obligation estimate within 24 hours. Prefer to speak directly? We&apos;re available Monday through Saturday.
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
              {/* Error Message Display */}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-200 flex items-start gap-3"
                >
                  <div className="mt-0.5 whitespace-pre-line">{error}</div>
                </motion.div>
              )}

              <input type="hidden" id="formLoadTime" value={formLoadTime} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name <span className="text-red-400">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, name: e.target.value })
                    }}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone <span className="text-red-400">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={(e) => {
                      setError(null);
                      setFormData({ ...formData, phone: e.target.value })
                    }}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                    placeholder="(555) 000-0000" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Address <span className="text-red-400">*</span></label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  required 
                  value={formData.address}
                  onChange={(e) => {
                    setError(null);
                    setFormData({ ...formData, address: e.target.value })
                  }}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                  placeholder="123 Property Ave, City" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Service <span className="text-red-400">*</span></label>
                <select 
                  id="service" 
                  name="service" 
                  required 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 appearance-none cursor-pointer"
                >
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
                <textarea 
                  id="details" 
                  name="details" 
                  rows={3} 
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400 resize-none" 
                  placeholder="Any specific areas of concern..."
                ></textarea>
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

      {/* Security/reCAPTCHA & Success Modal Overlay */}
      <AnimatePresence>
        {showSecurityModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             {/* Backdrop */}
             <motion.div 
               initial={{opacity: 0}} 
               animate={{opacity: 1}} 
               exit={{opacity: 0}} 
               className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" 
               onClick={() => {
                 if (!isSubmitting && !isSuccess) setShowSecurityModal(false);
               }} 
             />
            
            {/* Modal Content */}
            <motion.div 
              initial={{opacity: 0, scale: 0.95, y: 20}} 
              animate={{opacity: 1, scale: 1, y: 0}} 
              exit={{opacity: 0, scale: 0.95, y: 20}} 
              className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full text-center border border-white/10"
            >
              {!isSuccess && !isSubmitting && (
                <>
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">One Last Step</h3>
                  <p className="text-slate-600 mb-8">Please confirm you are human to send your request.</p>
                  <div className="flex justify-center mb-8 overflow-hidden rounded-xl">
                     <ReCAPTCHA
                       ref={recaptchaRef}
                       sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LdEgYEsAAAAAE3RNvvGJksJ1RoRw920QXUIUODQ"}
                       onChange={(token) => {
                         if (token) submitToAPI(token);
                       }}
                     />
                  </div>
                  <button 
                    onClick={() => setShowSecurityModal(false)} 
                    className="text-slate-500 hover:text-slate-800 font-medium pb-1 border-b border-transparent hover:border-slate-800 transition-all"
                  >
                    Cancel
                  </button>
                </>
              )}

              {isSubmitting && (
                <div className="py-12 flex flex-col items-center">
                  <Loader2 size={48} className="animate-spin text-primary mb-6" />
                  <p className="font-medium text-slate-800 text-lg">Sending your request...</p>
                </div>
              )}

              {isSuccess && (
                 <div className="py-6">
                   <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center animate-[scaleIn_0.5s_ease]">
                      <Check size={48} className="text-green-600" strokeWidth={3} />
                   </div>
                   <h3 className="text-2xl font-bold mb-2 text-slate-800">Request Sent!</h3>
                    <p className="text-slate-600 mb-8">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                   <button 
                     onClick={() => {
                       setShowSecurityModal(false);
                       setIsSuccess(false);
                       setFormLoadTime(Date.now());
                       setFormData({
                         name: "",
                         phone: "",
                         address: "",
                         service: "",
                         details: "",
                       });
                     }}
                     className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wide py-3 px-10 rounded-full shadow-lg transition-all active:scale-[0.98]"
                   >
                     Done
                   </button>
                 </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
