
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
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-background -z-10" />
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My professional journey and academic background</p>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card glass shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-up transform hover:-translate-y-1"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-2 text-primary bg-accent/30 px-4 py-2 rounded-full">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{exp.period}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">{exp.location}</p>
                  <ul className="list-none space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="card glass mb-6 opacity-0 animate-fade-up transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-2 text-primary bg-accent/30 px-4 py-2 rounded-full">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{edu.school}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.location}</p>
                    <p className="text-primary mt-2 font-medium">{edu.grade}</p>
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
