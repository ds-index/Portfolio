import Typeing from "./Typeing";
import armanDSImgage from "../assets/IMG_20250814_150620_901.jpg";
import softwareArchitecture from "../assets/code-svgrepo-com.svg";
import softwareEngineer from "../assets/software-svgrepo-com.svg";

export default function Home() {
  return (
    <div className="h-screen max-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-4 gap-6 overflow-hidden">
      {/* Avatar */}
      <div className="relative w-36 h-36 md:w-44 md:h-44">
        <img
          src={armanDSImgage}
          alt="ArManDS"
          className="w-full h-full rounded-full grayscale brightness-75 shadow-2xl border-4 border-indigo-500 animate__animated animate__zoomIn"
        />
        <span className="absolute inset-0 rounded-full border-4 border-indigo-500 opacity-40"></span>
      </div>

      {/* Typing Text */}
      <div className="text-center text-lg md:text-2xl font-semibold animate__animated animate__fadeIn">
        <Typeing />
      </div>

      {/* Skills */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
        <div className="flex flex-row items-center gap-3 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-400/30 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl hover:border-indigo-400/60 transition-all duration-300 animate__animated animate__slideInDown">
          <img
            className="w-8 h-8 drop-shadow-lg"
            src={softwareEngineer}
            alt="Software Architect"
          />
          <div className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            DevOps Enthusiast
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-400/30 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl hover:border-violet-400/60 transition-all duration-300 animate__animated animate__slideInUp">
          <img
            className="w-8 h-8 drop-shadow-lg"
            src={softwareArchitecture}
            alt="Backend Engineer"
          />
          <div className="text-lg font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Backend Engineer
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="p-6 text-center border-t border-gray-700 text-gray-500">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
}
