import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Gallery />
      <Reviews />
      <Trust />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
