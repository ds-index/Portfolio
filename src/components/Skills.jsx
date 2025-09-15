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
        "C#.NET",
        "ASP.NET Core",
        "MVC",
        "WebAPI",
        "EF Core",
        "Linq",
        "Dapper",
        "Rest API",
      ],
    },
    {
      key: "Frontend",
      title: "Frontend",
      color: "from-emerald-500 to-teal-600",
      items: [
        "JS/HTML/CSS",
        "Typescript",
        "Angular",
        "RXJS",
        "Tailwind",
        "Bootstrap",
        "JQuery",
        "RWD",
        "PWA",
      ],
    },
    {
      key: "DB & Cloud & DevOps",
      title: "DB & Cloud & DevOps",
      color: "from-amber-500 to-orange-600",
      items: [
        "Sql Server",
        "MongoDb",
        "Graphql",
        "Azure",
        "Docker",
        "CI/CD",
        "Jenkins",
        "Kubernetes",
      ],
    },
    {
      key: "Tools & Patterns",
      title: "Tools & Patterns",
      color: "from-pink-500 to-fuchsia-600",
      items: [
        "Microservice",
        "Design Patterns",
        "Clean Code",
        "DDD",
        "TDD",
        "Git/Github",
        "Visul Studio",
        "SSMS",
        "Postman",
        "Swagger",
      ],
    },
  ];

  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);
  const [active, setActive] = useState(null);

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
      { threshold: 0.3 }
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
            } bg-gradient-to-br ${cat.color}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-extrabold drop-shadow-sm">
                {cat.title}
              </h2>
              <span className="text-sm bg-white/15 px-2.5 py-1 rounded-full border border-white/20">
                View
              </span>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {cat.items.slice(0, 6).map((name) => (
                <li key={name} className="bg-black/10 rounded-md px-2 py-1">
                  {name}
                </li>
              ))}
              {cat.items.length > 6 && (
                <li className="text-xs opacity-90">
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

      <footer className="p-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}
