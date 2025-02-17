
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let's connect and create something amazing together</p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <a
              href="mailto:arpandas0123@gmail.com"
              className="gradient-card hover:scale-[1.02] transition-all duration-300 group"
              aria-label="Email"
            >
              <div className="flex flex-col items-center gap-4">
                <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg font-medium">Email</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/arpan-das-mca"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-card hover:scale-[1.02] transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <div className="flex flex-col items-center gap-4">
                <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg font-medium">LinkedIn</span>
              </div>
            </a>
            <a
              href="https://github.com/crazy-arpan"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-card hover:scale-[1.02] transition-all duration-300 group"
              aria-label="GitHub"
            >
              <div className="flex flex-col items-center gap-4">
                <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg font-medium">GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
