function CategoryDetails({ category, onClose }) {
  return (
    <section>
      <header className="mb-6 border-b border-white/10 pb-4">
        <h3 className="text-2xl font-extrabold text-white md:text-3xl">{category.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{category.items.length} skills</p>
      </header>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {category.items.map(({ name, level }) => (
          <li
            key={name}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold shadow-lg shadow-black/10 transition hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-medium text-slate-100">{name}</span>
              <span className="rounded-full bg-slate-800/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                {level}
              </span>
            </div>

            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${
                  level === "Advanced"
                    ? "bg-emerald-400"
                    : level === "Intermediate"
                      ? "bg-amber-400"
                      : "bg-red-500"
                }`}
                style={{ width: `${level === "Advanced" ? 100 : level === "Intermediate" ? 65 : 28}%` }}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onClose}
          className="rounded-full bg-indigo-500 px-4 py-2 font-semibold text-white shadow-lg shadow-indigo-950/20 transition hover:bg-indigo-400"
        >
          Close panel
        </button>
      </div>
    </section>
  );
}

export default CategoryDetails;
