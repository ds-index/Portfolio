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
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/5">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm font-semibold text-slate-200 transition hover:bg-white/20"
          >
            Close
          </button>
          <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
