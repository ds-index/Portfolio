import React, { useRef, useEffect, useState } from "react";
import Panel from "./Panel.jsx";
import CategoryDetails from "./CategoryDefails.jsx";

export default function Skills() {
    const categories = [
        {
            key: "Backend",
            title: "Backend",
            color: "from-indigo-500 to-violet-600",
            items: [
                { name: "C#.NET", level: "Advanced" },
                { name: "ASP.NET Core", level: "Advanced" },
                { name: "ASP.NET Core MVC", level: "Advanced" },
                { name: "ASP.NET Core WebAPI", level: "Advanced" },
                { name: "Minimal API", level: "Intermediate" },
                { name: "Razor page/view", level: "Intermediate" },
                { name: "Identity", level: "Intermediate" },
                { name: "JWT", level: "Intermediate" },
                { name: "Dapper", level: "Intermediate" },
                { name: "XUnit|Mock", level: "Basic" },
                { name: "RabbitMQ", level: "Basic" },
                { name: "Serilog", level: "Intermediate" },
                { name: "AutoMapper", level: "Intermediate" },
                { name: "MediatR", level: "Intermediate" },
                { name: "Bogus", level: "Basic" },
                { name: "EF Core", level: "Advanced" },
                { name: "LINQ", level: "Advanced" },
                { name: "Dapper", level: "Intermediate" },
            ],
        },
        {
            key: "Frontend",
            title: "Frontend",
            color: "from-emerald-500 to-teal-600",
            items: [
                { name: "Javascript", level: "Advanced" },
                { name: "HTML/CSS", level: "Advanced" },
                { name: "Typescript", level: "Intermediate" },
                { name: "React", level: "Intermediate" },
                { name: "Next.js", level: "Learning" },
                { name: "Tailwind", level: "Intermediate" },
                { name: "Bootstrap", level: "Intermediate" },
                { name: "SSR", level: "Learning" },
                { name: "SSG", level: "Learning" },
                { name: "RWD", level: "Intermediate" },
            ],
        },
        {
            key: "DB & Features",
            title: "DB & Features",
            color: "from-amber-500 to-orange-600",
            items: [
                { name: "Sql Server", level: "Intermediate" },
                { name: "Postgresql", level: "Intermediate" },
                { name: "MongoDb", level: "Intermediate" },
                { name: "Git/Github", level: "Intermediate" },
                { name: "Docker Desktop", level: "Intermediate" },
                { name: "SSMS", level: "Intermediate" },
                { name: "Rider", level: "Advanced" },
                { name: "Visual Studio", level: "Advanced" },
                { name: "VS Code", level: "Advanced" },
                { name: "Postman", level: "Intermediate" },
                { name: "Swagger", level: "Intermediate" },
            ],
        },
        {
            key: "Patterns",
            title: "Patterns",
            color: "from-pink-500 to-fuchsia-600",
            items: [
                { name: "Microservice", level: "Intermediate" },
                { name: "Software Architecture", level: "Intermediate" },
                { name: "Design Patterns", level: "Intermediate" },
                { name: "Clean Code", level: "Intermediate" },
                { name: "Repository Pattern", level: "Intermediate" },
                { name: "UnitOfWork Pattern", level: "Intermediate" },
                { name: "CQRS", level: "Intermediate" },
                { name: "Vertical Design", level: "Intermediate" },
                { name: "DI", level: "Intermediate" },
                { name: "DDD", level: "Intermediate" },
                { name: "EDD", level: "Intermediate" },
            ],
        },
        {
            key: "Cloud & DevOps",
            title: "Cloud & DevOps",
            color: "from-blue-800 to-indigo-900",
            items: [
                { name: "Azure", level: "Learning" },
                { name: "Docker", level: "Intermediate" },
                { name: "Kubernetes", level: "Basic" },
                { name: "GitHub Actions", level: "Basic" },
                { name: "Terraform", level: "Basic" },
                { name: "CI/CD Pipelines", level: "Learning" },
                { name: "Infrastructure as Code", level: "Learning" },
                { name: "Cloud Architecture", level: "Learning" },
                { name: "Containerization", level: "Intermediate" },
                { name: "Monitoring & Logging", level: "Learning" },
                { name: "Cloud-Native Applications", level: "Learning" },
                { name: "Distributed Systems", level: "Learning" },
                { name: "Scalability & High Availability", level: "Learning" },
                { name: "Linux", level: "Learning" },
                { name: "Networking Fundamentals", level: "Learning" },
            ],
        },
    ];

    const cardRefs = useRef([]);
    const [visible, setVisible] = useState([]);
    const [active, setActive] = useState(null);

    const levelPercent = (level) =>
        level === "Advanced"
            ? 100
            : level === "Intermediate"
              ? 65
              : level === "Learning"
                ? 15
                : 28;

    const levelColor = (level) =>
        level === "Advanced"
            ? "bg-emerald-400"
            : level === "Intermediate"
              ? "bg-amber-400"
              : level === "Learning"
                ? "bg-indigo-400 border border-dashed border-indigo-200"
                : "bg-red-500";

    useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, categories.length);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const idx = Number(entry.target.getAttribute("data-index"));
                    if (entry.isIntersecting) {
                        setVisible((prev) => {
                            const next = [...prev];
                            next[idx] = true;
                            return next;
                        });
                    }
                });
            },
            { threshold: 0.3 },
        );

        cardRefs.current.forEach((ref) => ref && observer.observe(ref));
        return () =>
            cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    }, [categories.length]);

    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_30%,_#111827_100%)] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <div className="mb-3 inline-flex rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-200">
                        Core competencies
                    </div>
                    <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
                        My Skills
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
                        A practical overview of the tools, frameworks, and
                        engineering practices I work with.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                    {categories.map((cat, index) => (
                        <button
                            key={cat.key}
                            data-index={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            onClick={() => setActive(cat.key)}
                            className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.28)] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                                visible[index]
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-6 opacity-0"
                            } bg-gradient-to-br ${cat.color}`}>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_40%)]" />
                            <div className="relative flex items-center justify-between">
                                <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                                    {cat.title}
                                </h2>
                                <span className="rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-sm font-semibold text-white/90">
                                    View
                                </span>
                            </div>
                            <ul className="relative mt-4 grid grid-cols-2 gap-3 text-sm">
                                {cat.items
                                    .slice(0, 6)
                                    .map(({ name, level }) => (
                                        <li
                                            key={name}
                                            className="rounded-xl border border-white/15 bg-black/10 px-3 py-2 backdrop-blur">
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="truncate font-medium text-white">
                                                    {name}
                                                </span>
                                                <span className="ml-2 text-[11px] uppercase tracking-wide text-white/90">
                                                    {level}
                                                </span>
                                            </div>

                                            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                                                <div
                                                    className={`${levelColor(level)} h-full rounded-full transition-all duration-500`}
                                                    style={{
                                                        width: `${levelPercent(level)}%`,
                                                    }}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                {cat.items.length > 6 && (
                                    <li className="col-span-2 rounded-xl border border-white/15 bg-black/10 px-3 py-2 text-sm text-white/90">
                                        +{cat.items.length - 6} more…
                                    </li>
                                )}
                            </ul>
                        </button>
                    ))}
                </div>

                {active && (
                    <Panel onClose={() => setActive(null)}>
                        <CategoryDetails
                            category={categories.find((c) => c.key === active)}
                            onClose={() => setActive(null)}
                        />
                    </Panel>
                )}

                <footer className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights
                    reserved.
                </footer>
            </div>
        </div>
    );
}
