
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
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-background -z-10" />
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience & Education</h2>
        <p className="section-subtitle text-center">My professional journey and academic background</p>
        
        <div className="space-y-16 mt-20">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="gradient-border opacity-0 animate-fade-up transform hover:-translate-y-1"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="gradient-border-content">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-2 text-primary bg-accent/20 px-6 py-3 rounded-xl">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{exp.title}</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mt-1">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-500 mb-4">{exp.location}</p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
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
            </div>
          ))}

          <div className="mt-24">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="gradient-border mb-8 opacity-0 animate-fade-up transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="gradient-border-content">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-2 text-primary bg-accent/20 px-6 py-3 rounded-xl">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{edu.school}</h4>
                      <p className="text-xl text-gray-600 dark:text-gray-400 mt-1">{edu.degree}</p>
                      <p className="text-gray-500 dark:text-gray-500">{edu.location}</p>
                      <p className="text-primary mt-2 font-medium text-lg">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
