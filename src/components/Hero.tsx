
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/30 rounded-full blur-2xl animate-spin-slow" style={{ animationDelay: "-5s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-primary/30 rounded-full blur-xl animate-spin-slow" style={{ animationDelay: "-7s" }} />
      </div>
      <div className="text-center max-w-3xl mx-auto stagger-animation glass p-8 rounded-2xl backdrop-blur-sm">
        <p className="text-primary mb-4 tracking-wide font-semibold">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hi, I'm <span className="text-primary">Arpan Das</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          MCA student and aspiring Web Developer, specializing in Frontend and Backend Development
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 animate-bounce cursor-pointer p-4 rounded-full hover:bg-accent/20 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-gray-400 w-6 h-6" />
      </a>
    </section>
  );
};
