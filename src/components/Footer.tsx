import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 inline-flex">
              <img src="/logo.png" alt="Pressure Pro Logo" className="w-10 h-10 object-contain rounded border border-white/10 shadow-sm" />
              <span className="font-serif font-bold text-2xl tracking-wide text-white">
                <span className="text-primary">Pressure</span>Pro
              </span>
            </Link>
            <p className="max-w-md leading-relaxed mb-6">
              Premium exterior cleaning services. We specialize in soft washing, roof cleaning, and making your property look brand new again.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/#gallery" className="hover:text-primary transition-colors">Before & After</Link></li>
              <li><Link href="/#quote" className="hover:text-primary transition-colors">Request Estimate</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/soft-washing" className="hover:text-primary transition-colors">House Soft Washing</Link></li>
              <li><Link href="/services/roof-cleaning" className="hover:text-primary transition-colors">Roof Algae Removal</Link></li>
              <li><Link href="/services/gutter-cleaning" className="hover:text-primary transition-colors">Gutter Brightening</Link></li>
              <li><Link href="/services/driveway-cleaning" className="hover:text-primary transition-colors">Concrete & Driveways</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {currentYear} Pressure Pro Services. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <span className="text-slate-500">
              Created by <a href="https://abdularif.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors font-medium">Abdul Rehman Arif</a>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
