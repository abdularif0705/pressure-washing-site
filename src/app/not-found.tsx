import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-32 pb-24 px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Subtle decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-xl shadow-slate-200/50 text-primary mb-8 border border-slate-100">
          <Search size={32} />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-secondary tracking-tight mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-6">
          Page Not <span className="text-primary italic font-light">Found</span>
        </h2>
        
        <p className="text-lg text-slate-500 mb-12 max-w-md mx-auto leading-relaxed">
          We couldn't locate the page you're looking for. It might have been moved, renamed, or temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-secondary font-bold text-lg transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            <Home size={20} />
            Return Home
          </Link>
          <Link 
            href="/#quote" 
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-secondary font-bold text-lg transition-all duration-300 shadow-sm border border-slate-200 hover:-translate-y-1"
          >
            Request Estimate
          </Link>
        </div>
      </div>
    </main>
  );
}
