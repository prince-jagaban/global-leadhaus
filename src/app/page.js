import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Framework from "@/components/Framework";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Services />
      <Framework />
      <Industries />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}