import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects"; // <--- Import
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      <Hero />
      <About />
      <Skills />
      <Projects /> {/* <--- Add */}
      <Footer/>
    </main>
  );
}