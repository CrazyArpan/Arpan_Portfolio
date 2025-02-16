
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's connect and create something amazing together</p>
        <div className="max-w-md mx-auto">
          <div className="flex justify-center gap-6">
            <a
              href="mailto:arpandas0123@gmail.com"
              className="p-4 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpan-das-mca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://github.com/crazy-arpan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
