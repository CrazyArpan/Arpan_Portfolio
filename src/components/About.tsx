
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
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 to-background" />
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Passionate about building scalable web applications and creating amazing digital experiences
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
          <div className="space-y-8 animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
            <p className="text-xl leading-relaxed">
              Motivated MCA student from Brainware University, specializing in React, Next.js, and Tailwind CSS. 
              Passionate about building scalable web applications, optimizing UI/UX, and API integrations. 
              Currently pursuing Master of Computer Applications with expertise in both Frontend and Backend Development.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/50 to-primary/50 rounded-2xl backdrop-blur-sm"
                >
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent to-primary/20 animate-fade-in opacity-0 p-8" style={{ animationDelay: "800ms" }}>
              <div className="w-full h-full rounded-2xl bg-background/50 backdrop-blur-sm border border-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
