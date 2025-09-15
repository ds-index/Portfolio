function CategoryDetails({ category, onClose }) {
	return (
		<section>
			<header className="mb-6">
				<h3 className="text-2xl md:text-3xl font-extrabold">
					{category.title}
				</h3>
			</header>

			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{category.items.map((name) => (
					<li
						key={name}
						className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 text-sm font-semibold"
					>
						{name}
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
