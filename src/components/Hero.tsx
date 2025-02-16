
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto stagger-animation">
        <p className="text-primary mb-4 tracking-wide">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          A passionate developer crafting beautiful digital experiences
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-gray-400" />
      </a>
    </section>
  );
};
