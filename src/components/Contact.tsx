
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-primary/10 to-background -z-10" />
      <div className="container mx-auto">
        <h2 className="section-title text-center">Get in Touch</h2>
        <p className="section-subtitle text-center">Let's connect and create something amazing together</p>
        <div className="max-w-3xl mx-auto mt-20">
          <div className="flex justify-center gap-8">
            <a
              href="mailto:arpandas0123@gmail.com"
              className="gradient-border p-[1px] rounded-2xl hover:scale-105 transition-all duration-300 group"
              aria-label="Email"
            >
              <div className="gradient-border-content p-8">
                <Mail className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/arpan-das-mca"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-[1px] rounded-2xl hover:scale-105 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <div className="gradient-border-content p-8">
                <Linkedin className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </a>
            <a
              href="https://github.com/crazy-arpan"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border p-[1px] rounded-2xl hover:scale-105 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <div className="gradient-border-content p-8">
                <Github className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
