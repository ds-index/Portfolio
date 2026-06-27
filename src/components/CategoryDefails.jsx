function CategoryDetails({ category, onClose }) {
	return (
		<section>
			<header className="mb-6">
				<h3 className="text-2xl md:text-3xl font-extrabold">
					{category.title}
				</h3>
				<p className="text-sm text-gray-400 mt-1">{category.items.length} skills</p>
			</header>

			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{category.items.map(({ name, level }) => (
					<li
						key={name}
						className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 text-sm font-semibold"
					>
						<div className="flex items-center justify-between">
							<span className="font-medium">{name}</span>
							<span className="ml-2 text-xs text-gray-200/90">{level}</span>
						</div>

						<div className="mt-3 h-3 w-full bg-white/10 rounded-full overflow-hidden">
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
					className="rounded-xl bg-indigo-500 hover:bg-indigo-600 px-4 py-2 font-semibold shadow hover:cursor-pointer"
				>
					Close panel
				</button>
			</div>
		</section>
	);
}

export default CategoryDetails;
