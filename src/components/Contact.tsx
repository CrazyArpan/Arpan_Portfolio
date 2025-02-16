
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-background -z-10" />
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's connect and create something amazing together</p>
        <div className="max-w-md mx-auto">
          <div className="flex justify-center gap-6">
            <a
              href="mailto:arpandas0123@gmail.com"
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/arpan-das-mca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/crazy-arpan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
