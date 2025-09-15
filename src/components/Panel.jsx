import { useEffect } from "react";

function Panel({ children, onClose }) {
	useEffect(() => {
		const fn = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", fn);
		return () => window.removeEventListener("keydown", fn);
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-50">
			<div
				className="absolute inset-0 bg-black/60 backdrop-blur-sm"
				onClick={onClose}
				aria-hidden
			/>
			<div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
				<div className="relative w-full max-w-5xl rounded-3xl bg-gray-900 border border-white/10 shadow-2xl overflow-hidden">
					<button
						onClick={onClose}
						className="hover:cursor-pointer absolute top-4 right-4 z-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 text-sm font-semibold"
					>
						Close
					</button>
					<div className="max-h-[80vh] overflow-y-auto p-6 md:p-8">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Panel;
