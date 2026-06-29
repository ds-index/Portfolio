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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="transition-transform duration-300 hover:scale-105">
          <img
            src={armanLogo}
            alt="ArManDS Logo"
            className="h-16 w-16 cursor-pointer drop-shadow-[0_0_18px_rgba(129,140,248,0.35)] md:h-20 md:w-20"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeLink === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-500/15 text-indigo-200 shadow-[0_0_0_1px_rgba(129,140,248,0.25)]"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          className="rounded-full border border-white/10 bg-white/5 p-2 text-indigo-200 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = activeLink === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-indigo-500/15 text-indigo-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
