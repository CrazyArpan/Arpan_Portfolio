
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      const text = nameRef.current.textContent || "";
      nameRef.current.textContent = "";
      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.setProperty("--index", i.toString());
        span.className = "wave-text inline-block";
        nameRef.current?.appendChild(span);
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      </div>
      <div className="text-center max-w-4xl mx-auto stagger-animation relative">
        <span className="text-primary text-lg md:text-xl mb-6 block font-medium">Welcome to my portfolio</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
          Hi, I'm <span ref={nameRef} className="text-primary">Arpan Das</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          MCA student and aspiring Web Developer, specializing in Frontend and Backend Development
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 min-w-[200px] hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 min-w-[200px] hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-12 animate-bounce cursor-pointer hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};
