
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-2xl animate-spin-slow" style={{ animationDelay: "-5s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl animate-spin-slow" style={{ animationDelay: "-7s" }} />
      </div>
      <div className="text-center max-w-4xl mx-auto stagger-animation glass p-12 rounded-3xl backdrop-blur-sm">
        <p className="text-primary mb-4 tracking-wide font-semibold text-lg">Welcome to my portfolio</p>
        <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Hi, I'm <span className="text-primary">Arpan Das</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          MCA student and aspiring Web Developer, specializing in Frontend and Backend Development
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#about"
            className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-2xl hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20 text-lg font-medium"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="gradient-border hover:scale-105 transition-all duration-300">
            <div className="gradient-border-content text-lg font-medium">
              Get in Touch
            </div>
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-12 animate-bounce cursor-pointer p-4 rounded-full hover:bg-accent/20 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-gray-400 w-8 h-8" />
      </a>
    </section>
  );
};
