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
		<header className="text-indigo-400 bg-gray-900 px-4 py-3 ">
			<div className="flex items-center justify-between md:w-2/3 mx-auto text-lg animate__animated animate__slideInDown">
				<Link to="/">
					<img
						src={armanLogo}
						alt="ArManDS Logo"
						className="w-20 h-20 cursor-pointer"
					/>
				</Link>

				<nav className="hidden md:flex gap-12">
					{links.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							className={`cursor-pointer hover:text-indigo-300 border-b-2 ${
								activeLink === link.path
									? "border-b-indigo-400"
									: "border-b-transparent hover:border-b-indigo-400"
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
				<div className="absolute top-20 left-0 w-full md:hidden flex flex-col gap-6 bg-gray-900 p-4 rounded-lg z-50">
					{links.map((link) => (
						<Link
							key={link.path}
							to={link.path}
							onClick={() => setIsOpen(false)}
							className={`cursor-pointer hover:text-gray-300 border-b-2 ${
								activeLink === link.path
									? "border-b-indigo-400"
									: "border-b-transparent hover:border-b-indigo-400"
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
