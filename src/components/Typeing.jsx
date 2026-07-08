import { ReactTyped } from "react-typed";
import React from "react";

export default function Typeing() {
	return (
		<div className="flex items-center justify-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
			<ReactTyped
				strings={["Full-Stack Engineer"]}
				typeSpeed={60}
				backSpeed={40}
				loop
				showCursor={true}
				cursorChar="|"
			/>
		</div>
	);
}
