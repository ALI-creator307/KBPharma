import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesStrip from "@/components/FeaturesStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <FeaturesStrip />
        <About />
        <Services />
        <ProcessSection />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
