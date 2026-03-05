import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 group">
          <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">Terms of Service</h1>
          <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-slate max-w-none text-slate-600 prose-headings:font-serif prose-headings:text-secondary prose-a:text-primary">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website at pressurepro.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Pressure Pro's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Pressure Pro's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Pressure Pro's website are provided on an 'as is' basis. Pressure Pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Pressure Pro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pressure Pro's website, even if Pressure Pro or a Pressure Pro authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Service Estimates and Bookings</h2>
            <p>
              Estimates provided via our website or over the phone are subject to on-site verification. Final pricing may vary based on actual property conditions, size, and specific requirements discovered upon physical inspection. Booking dates and times are not guaranteed until confirmed by our office.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of your state/jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
