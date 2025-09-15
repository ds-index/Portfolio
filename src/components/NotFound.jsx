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
		<div className="fixed inset-0 bg-[rgba(250,0,0,1)] bg-opacity-70 flex flex-col items-center justify-center text-white z-50 p-4">
			<button
				onClick={handleClose}
				className="hover:cursor-pointer absolute top-4 right-4 bg-white text-red-600 font-bold px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
			>
				✕
			</button>

			<h1 className="text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
				Page not found 404!!!
			</h1>
		</div>
	);
}
