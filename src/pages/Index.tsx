
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <div className="absolute top-0 left-0 w-full h-full -z-10 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
