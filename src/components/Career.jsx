import { useState } from "react";
import js from "../assets/javascript-svgrepo-com.svg";
import angular from "../assets/angular.svg";
import web from "../assets/web-page-browser-analysis-screen-svgrepo-com.svg";
import uni from "../assets/university-svgrepo-com.svg";
import dotnet from "../assets/dotnet-svgrepo-com.svg";
import python from "../assets/python-svgrepo-com.svg";
import csharp from "../assets/csharp-svgrepo-com.svg";
import golang from "../assets/go-svgrepo-com.svg";

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
      name: "C#",
      icon: csharp,
      date: "2019",
      description: "Issued by TVTO",
    },
    {
      name: ".NET",
      icon: dotnet,
      date: "2021",
      description: "SoloLearn Certification",
    },
    {
      name: "JS/HTML/CSS",
      icon: web,
      date: "2020",
      description: "Issued by TVTO",
    },
    {
      name: "Javascript",
      icon: js,
      date: "2022",
      description: "SoloLearn Certification",
    },
    {
      name: "Angular",
      icon: angular,
      date: "2023",
      description: "SoloLearn Certification",
    },
    {
      name: "Go",
      icon: golang,
      date: "2025",
      description: "Self Learning",
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
        "C#.NET",
        "ASP.NET Core",
        "ASP.NET Core MVC",
        "EF Core",
        "LINQ",
        "Identity",
        "Sql Server",
        "JS/HTML/CSS",
        "Bootstrap",
        "JQuery",
      ],
      description:
        "Developed backend services and MVC pattern, managed database architecture, and optimized performance.",
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
      role: "Backend Developer",
      company: "Freelance",
      duration: "Mar 2023 - Jul 2025",
      tech: [
        "C#.NET",
        "ASP.NET Core",
        "ASP.NET Core WebAPI",
        "EF Core",
        "LINQ",
        "Dapper",
        "Sql Server",
        "Identity Server",
        "Serilog",
        "AutoMapper",
        "JWT/OAuth",
        "Clean Code",
        "Design Patterns",
        "Swagger",
        "Postman",
        "XUnit",
      ],
      description:
        "Built high performance, secure and robust enterprise grade API Services.",
    },
        {
      role: "Backend Developer",
      company: "Kasra Sarmad",
      duration: "Mar 2025 - Jul 2025",
      tech: [
        "C#.NET",
        "ASP.NET Core",
        "ASP.NET Core MVC",
        "EF Core",
        "LINQ",
        "Sql Server",
        "Identity Server",
        "Identity UI",
        "Serilog",
        "AutoMapper",
        "Clean Code",
        "JS/HTML/CSS",
        "JQuery",
        "Bootstrap",
        "RVD",
        "Design Patterns",
        "XUnit",
      ],
      description:
        "Built high performance, secure and robust enterprise Web Applicaion.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white p-6 flex flex-col items-center">
      {/* Certificates Section */}
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-12 animate__animated animate__fadeInDown">
        Certificates
      </h1>

      <div className="relative w-full max-w-3xl flex flex-col items-center mb-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-violet-500 to-indigo-500 -translate-x-1/2 hidden md:block"></div>

        {certificates.map((cert, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={cert.name}
              className="w-full flex flex-row items-center mb-12 relative"
            >
              <div className="hidden md:block absolute md:left-1/2 w-6 h-6 bg-indigo-500 rounded-full -translate-x-1/2 top-2 z-10 animate__animated animate__zoomIn"></div>
              <div
                className={`bg-gradient-to-br from-gray-800/50 to-gray-800/20 border border-indigo-400/20 hover:border-indigo-400/50 p-6 rounded-xl shadow-lg w-full flex flex-row items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  ${
                    isLeft
                      ? "md:mr-8 md:ml-auto md:text-right"
                      : "md:ml-8 md:mr-auto md:text-left"
                  }
                `}
              >
                <img
                  src={cert.icon}
                  alt={cert.name}
                  className="w-12 h-12 mr-4 flex-shrink-0 drop-shadow-lg"
                />
                <div className="text-left md:text-inherit">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
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
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-12 animate__animated animate__fadeInDown">
        Work Experience
      </h1>

      <div className="w-full max-w-3xl space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedExp(exp)}
            className="bg-gradient-to-br from-gray-800/50 to-gray-800/20 border border-emerald-400/20 hover:border-emerald-400/50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer relative"
          >
            {/* Small click hint */}
            <div className="absolute top-4 right-4 text-indigo-400 text-sm flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01"
                />
              </svg>
              Click
            </div>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{exp.role}</h2>
            <p className="text-gray-300 mt-1 text-sm">{exp.company}</p>
            <p className="mt-2 text-gray-200">{exp.duration}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl p-8 w-11/12 max-w-lg relative shadow-2xl animate__animated animate__fadeInDown">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
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
