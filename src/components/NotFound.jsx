import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const [visible, setVisible] = useState(true);
	const navigate = useNavigate();

	if (!visible) return null;

	const handleClose = () => {
		setVisible(false);
		navigate("/");
	};

	return (
		<div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900 backdrop-blur-sm flex flex-col items-center justify-center text-white z-50 p-4">
			<div className="absolute inset-0 bg-black/30" onClick={handleClose} />
			<div className="relative z-10 text-center">
				<button
					onClick={handleClose}
					className="hover:cursor-pointer absolute top-4 right-4 md:-top-8 md:-right-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
				>
					✕
				</button>

				<h1 className="text-5xl md:text-7xl font-extrabold text-center drop-shadow-lg mb-4">
					404
				</h1>
				<p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">Page Not Found</p>
				<p className="text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
			</div>
		</div>
	);
}
