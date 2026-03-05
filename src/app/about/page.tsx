"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Clock, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Licensed & Insured", value: "100%", icon: <ShieldCheck className="text-primary w-6 h-6 mb-3" /> },
    { label: "Service Standard", value: "5-Star", icon: <Award className="text-primary w-6 h-6 mb-3" /> },
    { label: "Satisfaction Guarantee", value: "100%", icon: <Users className="text-primary w-6 h-6 mb-3" /> },
    { label: "Eco-Friendly", value: "100%", icon: <ShieldCheck className="text-primary w-6 h-6 mb-3" /> },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-secondary leading-tight mb-6"
            >
              Excellence in <span className="text-primary italic font-light">exterior</span> care.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              At Pressure Pro, we believe that your home is more than just a building—it's your sanctuary, your investment, and your pride. As Windsor and LaSalle's dedicated exterior specialists, our mission is to deliver an unparalleled level of care, precision, and luxury service.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-12 leading-relaxed"
            >
              We combine state-of-the-art soft washing technology with environmentally safe, biodegradable treatments to gently but effectively eradicate years of embedded dirt, algae, and mold. Our meticulous attention to detail ensures that every surface—from delicate stucco to rugged concrete—is restored to its original glory without the risk of high-pressure damage.
            </motion.p>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
            >
               <Link href="/#quote" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-secondary hover:bg-secondary-light text-primary font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1">
                 Request Your Estimate
               </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />

            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center"
              >
                {stat.icon}
                <div className="text-3xl font-serif font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founders Story Section */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col md:flex-row gap-8 lg:gap-20 items-center relative overflow-hidden"
          >
            {/* Soft gold glow inside the light card */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="w-full md:w-1/2 relative z-10">
               <div className="aspect-[4/3] md:aspect-square bg-slate-50 rounded-[2rem] overflow-hidden relative shadow-xl">
                  {/* Premium Unsplash placeholder for the founders */}
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Abdul Rahman Arif and Umer Shahzad" className="object-cover w-full h-full opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 ease-out grayscale hover:grayscale-0" />
                  <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
               </div>
               
               {/* Elegant gold accent badge */}
               <div className="absolute -bottom-6 -right-2 md:-right-8 bg-primary text-secondary p-6 rounded-3xl shadow-xl backdrop-blur-md hidden sm:block border-4 border-white">
                 <div className="text-4xl font-serif font-bold mb-1">3+</div>
                 <div className="text-sm font-bold uppercase tracking-wider opacity-90">Years Together</div>
               </div>
            </div>

            <div className="w-full md:w-1/2 z-10 md:pr-4">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">Built on <span className="text-primary italic font-light">Happiness.</span></h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
                Pressure Pro wasn't just born out of a desire to clean houses; it was founded on the radical idea that a pristine environment fundamentally shifts your daily happiness. 
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                When childhood friends <strong className="text-secondary font-medium">Abdul Rahman Arif</strong> and <strong className="text-secondary font-medium">Umer Shahzad</strong> started the company, they realized that scrubbing away years of grime from a family's driveway didn't just improve property value—it brought immediate, visible joy. Their mission became simple: deliver unparalleled exterior care that brings happiness and restores profound pride of ownership to every client.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-slate-100">
                 <div>
                    <p className="font-serif font-bold text-2xl text-secondary mb-1">Abdul Rahman Arif</p>
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Co-Founder & CEO</p>
                 </div>
                 <div>
                    <p className="font-serif font-bold text-2xl text-secondary mb-1">Umer Shahzad</p>
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Co-Founder & COO</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Team Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6"
             >
               Meet the <span className="text-primary italic font-light">Experts</span>
             </motion.h2>
             <p className="text-lg text-slate-500 max-w-2xl mx-auto">The highly trained, fully insured technicians executing our luxury standard every single day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Micheal Barnes", role: "Lead Soft Wash Tech", img: "https://images.unsplash.com/photo-1543885108-8120c8de6eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "David Chen", role: "Roof Specialist", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Sarah Jenkins", role: "Operations Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
              { name: "Marcus Webb", role: "Concrete Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
            ].map((member, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group relative rounded-[2rem] overflow-hidden bg-secondary shadow-xl shadow-slate-200/50"
               >
                 <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={member.img} alt={member.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent opacity-90 transition-opacity duration-300" />
                 </div>
                 
                 <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-1 bg-primary mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary font-medium tracking-wide text-sm uppercase">{member.role}</p>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
