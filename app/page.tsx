import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";
import Investors from "@/components/Investors";
import Startups from "@/components/Startups";
import KaroStartup from "@/components/KaroStartup";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-background-primary w-full max-w-[100vw]">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Categories />
      <Investors />
      <Startups />
      <KaroStartup />
      <CTA />
      <Footer />
    </main>
  );
}
