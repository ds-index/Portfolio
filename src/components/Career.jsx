import { useState } from "react";
import js from "../assets/javascript-svgrepo-com.svg";
import angular from "../assets/angular.svg";
import web from "../assets/web-page-browser-analysis-screen-svgrepo-com.svg";
import uni from "../assets/university-svgrepo-com.svg";
import dotnet from "../assets/dotnet-svgrepo-com.svg";
import python from "../assets/python-svgrepo-com.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/node.js.svg";

export default function Career() {
  const [selectedExp, setSelectedExp] = useState(null);

  const certificates = [
    {
      name: "Bachelor Degree",
      icon: uni,
      date: "2025",
      description: "Computer Engineering - Isfahan University",
    },
    {
      name: "Node.js",
      icon: nodejs,
      date: "2019",
      description: "Issued by TVTO",
    },
    {
      name: "JS/HTML/CSS Certificate",
      icon: web,
      date: "2020",
      description: "Issued by TVTO",
    },
    {
      name: ".NET",
      icon: dotnet,
      date: "2021",
      description: "SoloLearn Certification",
    },
    {
      name: "Javascript",
      icon: js,
      date: "2022",
      description: "SoloLearn Certification",
    },
    {
      name: "React",
      icon: react,
      date: "2022",
      description: "Meta Certification",
    },
    {
      name: "Angular",
      icon: angular,
      date: "2023",
      description: "SoloLearn Certification",
    },
    {
      name: "Python",
      icon: python,
      date: "2022",
      description: "SoloLearn Certification",
    },
  ];

  const experiences = [
    {
      role: "Backend Developer",
      company: "Self Employed",
      duration: "Jan 2020 - Oct 2022",
      tech: [
        "Javascipt",
        "Typescript",
        "Node.js",
        "Express.js",
        "ORM",
        "JWT",
        "OAuth",
        "Postgresql",
        "MongoDb",
        "Design Patterns",
        "Clean Code",
      ],
      description:
        "Developed backend services and MVC pattern, managed database architecture, and optimized performance for various projects.",
    },
    {
      role: "Frontend Developer",
      company: "Demis",
      duration: "Feb 2023 - Nov 2023",
      tech: [
        "JS/HTML/CSS",
        "Angular",
        "Typescript",
        "RXJS",
        "Tailwind",
        "RWD",
        "PWA",
      ],
      description:
        "Built interactive UI components, implemented responsive design, and collaborated closely with designers to improve UX.",
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      duration: "Mar 2022 - Jul 2025",
      tech: [
        "JS/HTML/CSS",
        "Typescript",
        "React",
        "Next.js",
        "Redux",
        "RWD",
        "SEO",
        "Tailwind",
        "MUI",
        "Graphql",
        "Figma",
        "UI/UX",
      ],
      description:
        "Built high performance, modern UI, RWD, SSR and PWA. Implement Optimized UX and SEO friendly.",
    },
    {
      role: "Backend Developer",
      company: "Freelance",
      duration: "Jun 2023 - Nov 2024",
      tech: [
        "C#.NET",
        "ASP.NET Core",
        "ASP.NET Core MVC",
        "EF Core",
        "Linq",
        "Sql Server",
        "Identity",
        "JS/HTML/CSS",
        "JQuery",
        "Bootstrap",
      ],
      description: "Implement MVC enterprise webApplication. Secure and Fast.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Certificates Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 mb-12 animate__animated animate__fadeInDown">
        Certificates
      </h1>

      <div className="relative w-full max-w-3xl flex flex-col items-center mb-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-700 -translate-x-1/2 hidden md:block"></div>

        {certificates.map((cert, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={cert.name}
              className="w-full flex flex-row items-center mb-12 relative">
              <div className="hidden md:block absolute md:left-1/2 w-6 h-6 bg-indigo-500 rounded-full -translate-x-1/2 top-2 z-10 animate__animated animate__zoomIn"></div>
              <div
                className={`bg-gray-800 p-6 rounded-xl shadow-lg w-full flex flex-row items-center transition-transform duration-300 hover:scale-105
                  ${
                    isLeft
                      ? "md:mr-8 md:ml-auto md:text-right"
                      : "md:ml-8 md:mr-auto md:text-left"
                  }
                `}>
                <img
                  src={cert.icon}
                  alt={cert.name}
                  className="w-12 h-12 mr-4 flex-shrink-0"
                />
                <div className="text-left md:text-inherit">
                  <h2 className="text-xl font-bold text-indigo-400">
                    {cert.name}
                  </h2>
                  <p className="text-gray-300 mt-1 text-sm">{cert.date}</p>
                  <p className="mt-2 text-gray-200">{cert.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Work Experience Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-12 animate__animated animate__fadeInDown">
        Work Experience
      </h1>

      <div className="w-full max-w-3xl space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedExp(exp)}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer relative">
            {/* Small click hint */}
            <div className="absolute top-4 right-4 text-indigo-400 text-sm flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01"
                />
              </svg>
              Click
            </div>

            <h2 className="text-2xl font-bold text-green-400">{exp.role}</h2>
            <p className="text-gray-300 mt-1 text-sm">{exp.company}</p>
            <p className="mt-2 text-gray-200">{exp.duration}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 rounded-xl p-8 w-11/12 max-w-lg relative shadow-2xl animate__animated animate__fadeInDown">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold">
              &times;
            </button>
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              {selectedExp.role}
            </h2>
            <p className="text-gray-300 mb-2">Company: {selectedExp.company}</p>
            <p className="text-gray-300 mb-2">
              Duration: {selectedExp.duration}
            </p>
            <p className="text-gray-300 mb-4">
              Technologies: {selectedExp.tech.join(", ")}
            </p>
            <p className="text-gray-200">{selectedExp.description}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="p-6 text-center border-t border-gray-700 text-gray-500 mt-16">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}
