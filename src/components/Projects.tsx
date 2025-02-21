
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with React, Node.js, and MongoDB",
      tech: ["Next.js", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/CrazyArpan/SwiftCart",
      demo: "https://swift-cart-3mmq.vercel.app/",
      image: "swiftcart.png"
    },
    {
      title: "Tech Quiz App",
      description: "An application to take quizes based on programming languages",
      tech: ["Next.js", "TypeScript"],
      github: "https://github.com/CrazyArpan/Tech-Quiz",
      demo: "https://tech-quiz-rho.vercel.app/",
      image: "tquiz.png"
    },
    {
      title: "Weather Dashboard",
      description: "Weather forecast application with OpenWeather API integration",
      tech: ["Next.js", "TailwindCSS", "REST API"],
      github: "https://github.com/CrazyArpan/weather",
      demo: "https://weather-tau-virid.vercel.app/",
      image: "/weather.png"
    }
  ];

  return (
    <section id="projects" className="py-32 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Featured Projects</h2>
        <p className="text-muted-foreground text-lg md:text-xl text-center mb-16 max-w-2xl mx-auto text-white">
          A collection of projects that showcase my skills and experience
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 group"
            >
              <div className="relative aspect-video mb-6 overflow-hidden rounded-lg bg-secondary">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
