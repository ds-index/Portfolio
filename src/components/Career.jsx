import { useState } from "react";
import ts from "../assets/typescript-icon-svgrepo-com.svg";
import angular from "../assets/angular.svg";
import web from "../assets/web-page-browser-analysis-screen-svgrepo-com.svg";
import uni from "../assets/university-svgrepo-com.svg";
import dotnet from "../assets/dotnet-svgrepo-com.svg";
import python from "../assets/python-svgrepo-com.svg";
import csharp from "../assets/csharp-svgrepo-com.svg";
import react from "../assets/react.svg";

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
            name: "Typescript",
            icon: ts,
            date: "2022",
            description: "SoloLearn Certification",
        },
        {
            name: "JS/HTML/CSS",
            icon: web,
            date: "2020",
            description: "Issued by TVTO",
        },
        {
            name: "React",
            icon: react,
            date: "2023",
            description: "Meta",
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
                "Built high performance, secure and robust enterprise Web Application.",
        },
    ];

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_35%,_#111827_100%)] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <section className="mb-16">
                    <div className="mb-8 text-center">
                        <div className="mb-3 inline-flex rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-200">
                            Learning path & certifications
                        </div>
                        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
                            Certificates
                        </h1>
                    </div>

                    <div className="relative mx-auto flex max-w-4xl flex-col gap-6">
                        <div className="absolute left-1/2 top-0 bottom-0 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500 via-violet-500 to-indigo-500 md:block" />

                        {certificates.map((cert, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={cert.name}
                                    className="relative flex items-center">
                                    <div className="absolute left-1/2 top-4 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-indigo-200 bg-indigo-500 md:block" />
                                    <div
                                        className={`w-full md:w-[calc(50%-1.25rem)] ${isLeft ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10 md:text-left"}`}>
                                        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40">
                                            <div
                                                className={`flex items-center gap-4 ${isLeft ? "flex-row-reverse md:flex-row-reverse" : "flex-row"}`}>
                                                <img
                                                    src={cert.icon}
                                                    alt={cert.name}
                                                    className="h-12 w-12 flex-shrink-0"
                                                />
                                                <div className="min-w-0">
                                                    <h2 className="text-xl font-bold text-white">
                                                        {cert.name}
                                                    </h2>
                                                    <p className="mt-1 text-sm text-indigo-200">
                                                        {cert.date}
                                                    </p>
                                                    <p className="mt-2 text-sm text-slate-300">
                                                        {cert.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <div className="mb-8 text-center">
                        <div className="mb-3 inline-flex rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-200">
                            Professional experience
                        </div>
                        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
                            Work Experience
                        </h1>
                    </div>

                    <div className="mx-auto flex max-w-4xl flex-col gap-5">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedExp(exp)}
                                className="cursor-pointer rounded-[1.5rem] border border-emerald-400/20 bg-slate-900/70 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-emerald-200">
                                            {exp.role}
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-300">
                                            {exp.company}
                                        </p>
                                        <p className="mt-2 text-sm text-slate-400">
                                            {exp.duration}
                                        </p>
                                    </div>
                                    <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-200">
                                        Details
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {selectedExp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg rounded-[1.75rem] border border-white/10 bg-slate-900 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                        <button
                            onClick={() => setSelectedExp(null)}
                            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-gray-300 transition hover:bg-white/20 hover:text-white">
                            ×
                        </button>
                        <h2 className="mb-3 text-3xl font-bold text-emerald-200">
                            {selectedExp.role}
                        </h2>
                        <p className="mb-2 text-sm text-slate-300">
                            Company: {selectedExp.company}
                        </p>
                        <p className="mb-2 text-sm text-slate-300">
                            Duration: {selectedExp.duration}
                        </p>
                        <p className="mb-4 text-sm text-slate-300">
                            Technologies: {selectedExp.tech.join(", ")}
                        </p>
                        <p className="text-slate-200">
                            {selectedExp.description}
                        </p>
                    </div>
                </div>
            )}

            <footer className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
                &copy; {new Date().getFullYear()} MyPortfolio. All rights
                reserved.
            </footer>
        </div>
    );
}
