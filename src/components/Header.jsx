import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import armanLogo from "../assets/ArManDSLogo.svg";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("/");
	const location = useLocation();

	const links = [
		{ name: "Home", path: "/" },
		{ name: "About Me", path: "/aboutme" },
		{ name: "Skills", path: "/skills" },
		{ name: "Career", path: "/career" },
	];

	useEffect(() => {
		setActiveLink(location.pathname);
	}, [location]);

	return (
		<header className="text-indigo-400 bg-gray-900 px-4 py-4 border-b border-white/5 shadow-lg">
			<div className="flex items-center justify-between md:w-2/3 mx-auto text-lg animate__animated animate__slideInDown">
				<Link to="/" className="hover:scale-105 transition-transform duration-300">
					<img
						src={armanLogo}
						alt="ArManDS Logo"
						className="w-20 h-20 cursor-pointer hover:drop-shadow-lg transition-all"
					/>
				</Link>

				<nav className="hidden md:flex gap-12">
					{links.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`cursor-pointer font-semibold transition-all duration-300 pb-2 ${
								activeLink === link.path
									? "text-indigo-300 border-b-2 border-indigo-400"
									: "text-indigo-400/80 border-b-2 border-transparent hover:text-indigo-300 hover:border-indigo-400"
							}`}
						>
							{link.name}
						</Link>
					))}
				</nav>

				<button
					className="md:hidden bg-[rgba(0,0,0,0.1)] text-indigo-400"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle Menu"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{isOpen && (
				<div className="absolute top-20 left-0 w-full md:hidden flex flex-col gap-4 bg-gray-900 border border-white/10 rounded-b-lg p-6 z-50 shadow-2xl">
					{links.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							onClick={() => setIsOpen(false)}
							className={`cursor-pointer font-semibold transition-all pb-2 border-b ${
								activeLink === link.path
									? "text-indigo-300 border-indigo-400"
									: "text-indigo-400/80 border-transparent hover:text-indigo-300 hover:border-indigo-400"
							}`}
						>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</header>
	);
}
