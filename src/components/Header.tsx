"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">PP</span>
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-secondary" : "text-white"}`}>
            Pressure Pro
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-secondary" : "text-white/90"}`}>
            Services
          </a>
          <a href="#gallery" className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-secondary" : "text-white/90"}`}>
            Our Work
          </a>
          <a href="#about" className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-secondary" : "text-white/90"}`}>
            Why Us
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:555-123-4567"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30"
          >
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </a>
          
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? "text-secondary" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary font-medium py-2 border-b border-gray-50">Services</a>
          <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary font-medium py-2 border-b border-gray-50">Our Work</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-secondary font-medium py-2 border-b border-gray-50">Why Us</a>
          <a href="tel:555-123-4567" className="mt-2 flex justify-center items-center gap-2 bg-primary text-white py-3 rounded-xl font-bold">
            <Phone size={20} />
            Call Now: (555) 123-4567
          </a>
        </div>
      )}
    </header>
  );
}
