import { Link } from "react-router-dom";
import Typeing from "./Typeing";
import armanDSImgage from "../assets/s2.png";
import softwareArchitecture from "../assets/code-svgrepo-com.svg";
import softwareEngineer from "../assets/software-svgrepo-com.svg";

export default function Home() {
    return (
        <div className="min-h-[calc(100vh-5rem)] bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_40%,_#111827_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-10 lg:p-14">
                <div className="max-w-2xl text-center md:text-left">
                    <div className="mb-4 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-200">
                        Available for impactful software projects
                    </div>
                    <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                        Hello, I’m{" "}
                        <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                            Arman
                        </span>
                    </h1>
                    <div className="mt-4 text-lg font-semibold text-slate-200 sm:text-xl">
                        <Typeing />
                    </div>
                    <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                        Backend Engineer focused on building scalable and
                        high-performance systems with .NET, Clean Architecture,
                        and modern software engineering practices. Passionate
                        about system design and distributed systems. Currently
                        learning Golang, DevOps, and Cloud Computing, with a
                        strong focus on building scalable, reliable, and
                        efficient systems.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                        <Link
                            to="/aboutme"
                            className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-400">
                            More about me
                        </Link>
                        <Link
                            to="/career"
                            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10">
                            View my career
                        </Link>
                    </div>
                </div>

                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-cyan-400/20 blur-3xl" />
                    <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-3 shadow-2xl shadow-black/30">
                        <img
                            src={armanDSImgage}
                            alt="ArManDS"
                            className="h-56 w-56 rounded-[1.5rem] object-cover grayscale sm:h-72 sm:w-72"
                        />
                    </div>

                    <div className="absolute -left-3 top-6 rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-2 text-sm font-semibold text-indigo-100 shadow-lg backdrop-blur">
                        Backend Engineer
                    </div>
                    <div className="absolute -bottom-2 right-3 rounded-full border border-violet-300/30 bg-violet-500/10 px-3 py-2 text-sm font-semibold text-violet-100 shadow-lg backdrop-blur">
                        DevOps & Cloud
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 md:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 p-4 shadow-lg shadow-indigo-950/20 backdrop-blur">
                    <img
                        className="h-11 w-11"
                        src={softwareEngineer}
                        alt="DevOps & Cloud"
                    />
                    <div>
                        <div className="text-lg font-bold text-indigo-100">
                            DevOps & Cloud Enthusiast
                        </div>
                        <p className="text-sm text-slate-300">
                            Scalable architecture, cloud-native technologies,
                            system reliability, and infrastructure automation.
                        </p>
                    </div>
                </div>

                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 p-4 shadow-lg shadow-violet-950/20 backdrop-blur">
                    <img
                        className="h-9 w-9"
                        src={softwareArchitecture}
                        alt="Backend Engineer"
                    />
                    <div>
                        <div className="text-lg font-bold text-violet-100">
                            Backend Engineer
                        </div>
                        <p className="text-sm text-slate-300">
                            Scalable APIs and robust system design.
                        </p>
                    </div>
                </div>
            </div>

            <footer className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
                &copy; {new Date().getFullYear()} MyPortfolio. All rights
                reserved.
            </footer>
        </div>
    );
}
