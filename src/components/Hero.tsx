
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto stagger-animation">
        <span className="text-primary text-lg md:text-xl mb-6 block font-medium">Welcome to my portfolio</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          Hi, I'm <span className="text-primary">Arpan Das</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          MCA student and aspiring Web Developer, specializing in Frontend and Backend Development
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#about"
            className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 min-w-[200px]"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary text-primary rounded-full hover:bg-primary/5 transition-all duration-300 min-w-[200px]"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-12 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};
