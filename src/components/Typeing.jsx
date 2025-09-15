import { ReactTyped } from "react-typed";
import React from "react";

export default function Typeing() {
	return (
		<div className="flex items-center justify-center text-indigo-400 text-3xl md:text-5xl font-bold">
			<ReactTyped
				strings={["Hi!", "I'm ArMan Darsanj."]}
				typeSpeed={60}
				backSpeed={40}
				loop
				showCursor={true}
				cursorChar="|"
			/>
		</div>
	);
}
