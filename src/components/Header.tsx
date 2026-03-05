"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-secondary/95 backdrop-blur-lg shadow-2xl py-3 border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link 
              href="/" 
              className="flex items-center gap-3"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <img src="/logo.png" alt="Pressure Pro Logo" className="w-10 h-10 object-contain rounded border border-white/10 shadow-sm" />
              <span className="font-serif font-bold text-2xl tracking-wide text-white">
                <span className="text-primary">Pressure</span>Pro
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm font-medium transition-colors hover:text-primary text-white/90">
              Services
            </Link>
            <Link href="/#gallery" className="text-sm font-medium transition-colors hover:text-primary text-white/90">
              Our Work
            </Link>
            <Link href="/results" className="text-sm font-medium transition-colors hover:text-primary text-white/90">
              Results
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary text-white/90">
              About Us
            </Link>
            <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary text-white/90">
              FAQ
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:555-123-4567"
              className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-secondary px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:shadow-primary/20 border border-primary/20"
            >
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </a>
            
            <button
              className="md:hidden p-2 rounded-md text-white hover:text-primary transition-colors z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "" : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-secondary/80 backdrop-blur-sm z-[60]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[400px] bg-secondary border-l border-white/10 shadow-2xl z-[70] flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/10">
                <span className="font-serif font-bold text-xl tracking-wide text-white">
                  <span className="text-primary">Menu</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white transition-colors bg-white/5 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-2 p-6 overflow-y-auto flex-1 h-full">
                <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-primary hover:bg-white/5 hover:translate-x-2 px-4 py-3 rounded-lg text-lg font-medium transition-all">Services</Link>
                <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-primary hover:bg-white/5 hover:translate-x-2 px-4 py-3 rounded-lg text-lg font-medium transition-all">Our Work</Link>
                <Link href="/results" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-primary hover:bg-white/5 hover:translate-x-2 px-4 py-3 rounded-lg text-lg font-medium transition-all">Results</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-primary hover:bg-white/5 hover:translate-x-2 px-4 py-3 rounded-lg text-lg font-medium transition-all">About Us</Link>
                <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-primary hover:bg-white/5 hover:translate-x-2 px-4 py-3 rounded-lg text-lg font-medium transition-all">FAQ</Link>
              </div>

              <div className="p-6 pb-12 border-t border-white/10 bg-secondary/50 backdrop-blur-md mt-auto">
                <a href="tel:555-123-4567" className="flex justify-center items-center gap-2 w-full bg-primary hover:bg-primary-hover text-secondary py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
