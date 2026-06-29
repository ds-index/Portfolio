import React, { useState } from "react";

const ContactCard = ({ icon, label, link, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 rounded-2xl border border-transparent p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/5 hover:text-indigo-200"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-2xl shadow-lg shadow-indigo-950/30 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <span className="text-sm font-semibold">{label}</span>
      </a>

      {showTooltip && (
        <div className="absolute left-1/2 top-[-3.5rem] w-max max-w-[220px] -translate-x-1/2 rounded-xl bg-slate-900 px-3 py-2 text-center text-sm text-slate-100 shadow-2xl shadow-black/40">
          {tooltip}
          <div className="absolute bottom-[-6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-slate-900" />
        </div>
      )}
    </div>
  );
};

export default ContactCard;
