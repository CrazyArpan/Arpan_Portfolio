
import { Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "ReactJs Trainee",
      company: "WEBGURU Infosystem Training Program",
      period: "November 2024 - February 2025",
      location: "Kolkata, India",
      description: [
        "Developed interactive and responsive web applications using React.js and Tailwind CSS",
        "Built reusable components and managed application state with Redux and Context API",
        "Integrated REST APIs for real-time data fetching and dynamic UI updates",
        "Collaborated with a team following Agile methodologies",
      ],
    },
  ];

  const education = [
    {
      school: "Brainware University",
      degree: "Master of Computer Applications (MCA)",
      period: "August 2022 - July 2023",
      location: "Barasat, India",
      grade: "Marks: 79.45%",
    },
    {
      school: "Burdwan Institute of Management and Computer Science",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "August 2020 - August 2023",
      location: "Burdwan, India",
      grade: "Marks: 76.97%",
    },
  ];

  return (
    <section id="experience" className="py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and academic background</p>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="gradient-card opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-xl text-muted-foreground mb-1">{exp.company}</p>
                    <p className="text-muted-foreground mb-6">{exp.location}</p>
                    <ul className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="text-lg">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-32">
              <h3 className="text-4xl font-bold mb-16">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="gradient-card opacity-0 animate-fade-up"
                    style={{ animationDelay: `${(index + 4) * 200}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{edu.school}</h4>
                        <p className="text-xl text-muted-foreground mb-1">{edu.degree}</p>
                        <p className="text-muted-foreground mb-2">{edu.location}</p>
                        <p className="text-primary font-medium">{edu.grade}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
