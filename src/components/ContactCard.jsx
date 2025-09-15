import React, { useState } from "react";

const ContactCard = ({ icon, label, link, tooltip }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div
			className="relative group"
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors"
			>
				<div className="text-4xl">{icon}</div>
				<span className="text-sm">{label}</span>
			</a>

			{/* Tooltip */}
			{showTooltip && (
				<div className="absolute -top-16 left-1/2 -translate-x-1/2 w-max px-4 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
					{tooltip}
					<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
				</div>
			)}
		</div>
	);
};

export default ContactCard;
