
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
    <section id="about" className="py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about building scalable web applications and creating amazing digital experiences
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
              <p className="text-xl leading-relaxed">
                Motivated MCA student from Brainware University, specializing in React, Next.js, and Tailwind CSS. 
                Passionate about building scalable web applications, optimizing UI/UX, and API integrations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-4 gradient-card"
                  >
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in opacity-0" style={{ animationDelay: "800ms" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
