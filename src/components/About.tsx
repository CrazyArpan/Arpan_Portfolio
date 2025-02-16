
import { BadgeCheck } from "lucide-react";

export const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "REST APIs",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about building scalable web applications and creating amazing digital experiences
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
            <p className="text-lg">
              Motivated MCA student from Brainware University, specializing in React, Next.js, and Tailwind CSS. 
              Passionate about building scalable web applications, optimizing UI/UX, and API integrations. 
              Currently pursuing Master of Computer Applications with expertise in both Frontend and Backend Development.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-4 py-2 bg-accent rounded-full"
                >
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent animate-fade-in opacity-0" style={{ animationDelay: "800ms" }}>
              {/* Profile image placeholder */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
