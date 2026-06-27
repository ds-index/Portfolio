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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100 flex flex-col overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-12">
        {/* Image / Avatar */}
        <div>
          <img
            src={armanDSImage}
            alt="ArManDs"
            className={`w-48 h-48 md:w-64 md:h-64 bg-gray-800 rounded-full flex items-center justify-center text-6xl font-bold text-indigo-500 mb-8 md:mb-0 md:mr-16 transform transition-all duration-1000 ${
              loaded
                ? "scale-100 rotate-0 opacity-100"
                : "scale-50 rotate-45 opacity-0"
            }`}
          />
        </div>

        {/* About Text */}
        
<div
  className={`max-w-xl text-md text-center md:text-left transition-all duration-1000 delay-200 ${
    loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
  }`}
>
  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
    🚀 Backend Engineer | DevOps Enthusiast
  </h2>

  <p className="mb-4 text-gray-300 leading-relaxed">
    I specialize in building scalable backend applications and RESTful APIs
    using ASP.NET Core and modern software architecture principles. My focus is
    on creating maintainable, high-performance systems that deliver reliable
    solutions for real-world business needs.
  </p>

  <p className="mb-4 text-gray-300 leading-relaxed">
    Experienced with C#, .NET, Asp.Net Core, Entity Framework Core, Linq, Identity, SQL Server, PostgreSQL, and
    Microservices Architecture. I enjoy designing clean, efficient backends
    while following best practices such as Clean Architecture, SOLID
    principles, and Domain-Driven Design.
  </p>

  <p className="mb-4 text-gray-300 leading-relaxed">
    Currently expanding my expertise in Go, Docker, Kubernetes, Cloud
    Technologies, and modern DevOps practices to build cloud-native and
    production-ready applications.
  </p>

  <p className="text-indigo-400 font-semibold text-lg">
    "Building reliable software today while learning the technologies of
    tomorrow."
  </p>
</div>

      </main>

      {/* Contact Section */}
      <section
        className={`flex flex-col md:flex-row justify-center items-center gap-12 p-8 md:p-16 border-t border-white/10 transition-all duration-1000 delay-400 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <ContactCard
          icon={<FaGithub />}
          label="GitHub"
          link="https://github.com/ds-index"
          tooltip="Visit my GitHub repositories : ds-index"
        />
        <ContactCard
          icon={<FaLinkedin />}
          label="LinkedIn"
          link="https://www.linkedin.com/in/arman-ds-b3b967291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          tooltip="Connect with me on LinkedIn : ArMan DS"
        />
        <ContactCard
          icon={<FaEnvelope />}
          label="Email"
          link="mailto:ds.limited.ar@gmail.com"
          tooltip="Send me an email : ds.limited.ar@gmail.com"
        />
        <ContactCard
          icon={<FaPhone />}
          label="Phone"
          link="tel:+989123456789"
          tooltip="Call me directly"
        />
      </section>

      {/* Resume Section */}
      <section
        className={`flex justify-center items-center p-8 md:p-16 transition-all duration-1000 delay-500 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <a
          href={resumeFile}
          download
          className="flex items-center gap-3 bg-gray-800 p-5 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-800"
        >
          <FaFileDownload className="text-2xl text-indigo-400" />
          <span className="text-white font-semibold text-lg">
            Download Resume
          </span>
        </a>
      </section>

      {/* Footer */}
      <footer
        className={`p-6 text-center border-t border-gray-700 text-gray-500 transition-all duration-1000 delay-600 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutMe;
