import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />

      <div className="pt-24"> {/* spacing for fixed nav */}
        {/* Next: Hero */}
      </div>
    </>
  );
}