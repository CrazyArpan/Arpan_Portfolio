
import { Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Leading development team and architecting solutions.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed and maintained client projects.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card bg-white shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <Calendar className="w-5 h-5" />
                  <span>{exp.period}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
