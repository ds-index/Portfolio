import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFileDownload,
} from "react-icons/fa";
import armanDSImage from "../assets/IMG_20250814_150620_901.jpg";
import ContactCard from "./ContactCard.jsx";
import resumeFile from "../assets/Arman Darsanj.pdf";

const AboutMe = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-slate-100">
      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div className={`transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <img
              src={armanDSImage}
              alt="ArManDs"
              className="h-56 w-56 rounded-[1.5rem] object-cover sm:h-72 sm:w-72"
            />
          </div>
        </div>

        <div className={`max-w-2xl text-center lg:text-left ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="mb-4 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-200">
            Backend Engineer • DevOps Enthusiast
          </div>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
            Building reliable software with modern architecture and a growth mindset.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-slate-300 sm:text-lg">
            <p>
              I specialize in building scalable backend applications and RESTful APIs using ASP.NET Core and modern software architecture principles. My focus is on creating maintainable, high-performance systems that deliver reliable solutions for real-world business needs.
            </p>
            <p>
              Experienced with C#, .NET, ASP.NET Core, Entity Framework Core, Dapper, LINQ, Identity, JWT, SQL Server, PostgreSQL, MongoDb and Microservices Architecture. I enjoy designing clean, efficient backends while following best practices such as Clean Architecture, SOLID principles, and Domain-Driven Design.
            </p>
            <p>
              Currently expanding my expertise in Go, Docker, Kubernetes, Cloud Technologies, and modern DevOps practices to build cloud-native and production-ready applications.
            </p>
          </div>

          <p className="mt-6 text-lg font-semibold text-indigo-300">
            “Building reliable software today while learning the technologies of tomorrow.”
          </p>
        </div>
      </main>

      <section className={`mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl md:grid-cols-2 xl:grid-cols-4">
          <ContactCard icon={<FaGithub />} label="GitHub" link="https://github.com/ds-index" tooltip="Visit my GitHub repositories : ds-index" />
          <ContactCard icon={<FaLinkedin />} label="LinkedIn" link="https://www.linkedin.com/in/arman-ds-b3b967291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" tooltip="Connect with me on LinkedIn : ArMan DS" />
          <ContactCard icon={<FaEnvelope />} label="Email" link="mailto:ds.limited.ar@gmail.com" tooltip="Send me an email : ds.limited.ar@gmail.com" />
          <ContactCard icon={<FaPhone />} label="Phone" link="tel:+989123456789" tooltip="Call me directly" />
        </div>
      </section>

      <section className={`mx-auto flex max-w-7xl justify-center px-4 pb-10 sm:px-6 lg:px-8 ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <a
          href={resumeFile}
          download
          className="flex items-center gap-3 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-5 py-3 text-white shadow-lg shadow-indigo-950/20 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500/20"
        >
          <FaFileDownload className="text-xl text-indigo-300" />
          <span className="text-sm font-semibold sm:text-base">Download Resume</span>
        </a>
      </section>

      <footer className={`border-t border-white/10 px-4 py-6 text-center text-sm text-slate-400 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutMe;
