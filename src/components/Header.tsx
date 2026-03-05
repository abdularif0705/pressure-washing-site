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
            className="md:hidden p-2 rounded-md text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary font-medium py-2 border-b border-gray-50">Services</Link>
          <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary font-medium py-2 border-b border-gray-50">Our Work</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary font-medium py-2 border-b border-gray-50">About Us</Link>
          <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary font-medium py-2 border-b border-gray-50">FAQ</Link>
          <a href="tel:555-123-4567" className="mt-2 flex justify-center items-center gap-2 bg-primary text-secondary py-3 rounded-full font-bold">
            <Phone size={20} />
            Call Now: (555) 123-4567
          </a>
        </div>
      )}
    </header>
  );
}
