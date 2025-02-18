
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
