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
        { name: "Razor page/view", level: "Intermediate" },
        { name: "Identity", level: "Intermediate" },
        { name: "Serilog", level: "Intermediate" },
        { name: "AutoMapper", level: "Intermediate" },
        { name: "MediatR", level: "Intermediate" },
        { name: "Bogus", level: "Basic" },
        { name: "EF Core", level: "Advanced" },
        { name: "LINQ", level: "Advanced" },
        { name: "Dapper", level: "Intermediate" },
        { name: "Go", level: "Basic" },
      ],
    },
    {
      key: "Frontend",
      title: "Frontend",
      color: "from-emerald-500 to-teal-600",
      items: [
        { name: "JS/HTML/CSS", level: "Advanced" },
        { name: "Typescript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Angular", level: "Intermediate" },
        { name: "Tailwind", level: "Intermediate" },
        { name: "Bootstrap", level: "Intermediate" },
        { name: "JQuery", level: "Basic" },
      ],
    },
    {
      key: "DevOps & DB",
      title: "DB & Cloud & DevOps",
      color: "from-amber-500 to-orange-600",
      items: [
        { name: "Cloud", level: "Basic" },
        { name: "Docker", level: "Basic" },
        { name: "Kubernetes", level: "Basic" },
        { name: "CI/CD", level: "Basic" },
        { name: "GitFlow", level: "Basic" },
        { name: "Jenkins", level: "Basic" },
        { name: "Sql Server", level: "Intermediate" },
        { name: "Postgresql", level: "Intermediate" },
        { name: "MongoDb", level: "Intermediate" },
      ],
    },
    {
      key: "Tools & Patterns",
      title: "Tools & Patterns",
      color: "from-pink-500 to-fuchsia-600",
      items: [
        { name: "Linux", level: "Basic" },
        { name: "Microservice", level: "Intermediate" },
        { name: "Design Patterns", level: "Intermediate" },
        { name: "Clean Code", level: "Intermediate" },
        { name: "DDD", level: "Intermediate" },
        { name: "TDD", level: "Intermediate" },
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
  ];

  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);
  const [active, setActive] = useState(null);

  const levelPercent = (level) =>
    level === "Advanced" ? 100 : level === "Intermediate" ? 65 : 28;

  const levelColor = (level) =>
    level === "Advanced"
      ? "bg-emerald-400"
      : level === "Intermediate"
      ? "bg-amber-400"
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
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-gray-100 p-6 gap-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-indigo-400">
        My Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {categories.map((cat, index) => (
          <button
            key={cat.key}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => setActive(cat.key)}
            className={`group relative overflow-hidden rounded-2xl p-6 text-left shadow-lg transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:ring-offset-gray-900 hover:scale-[1.02] ${
              visible[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            } bg-gradient-to-br ${cat.color}`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-extrabold drop-shadow-sm">
                {cat.title}
              </h2>
              <span className="text-sm bg-white/15 px-2.5 py-1 rounded-full border border-white/20">
                View
              </span>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {cat.items.slice(0, 6).map(({ name, level }) => (
                <li key={name} className="bg-black/10 rounded-md px-3 py-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium truncate">{name}</span>
                    <span className="ml-2 text-xs text-gray-100/90">{level}</span>
                  </div>

                  <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`${levelColor(level)} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${levelPercent(level)}%` }}
                    />
                  </div>
                </li>
              ))}
              {cat.items.length > 6 && (
                <li className="text-xs opacity-90">+{cat.items.length - 6} more…</li>
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

      <footer className="p-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}
