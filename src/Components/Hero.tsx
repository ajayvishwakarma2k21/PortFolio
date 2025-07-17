// src/components/Hero.tsx

"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center h-screen px-4 "style={{ background: "linear-gradient(to right, #000, #908F8F)" }}
    >
      {/* Left: User Image */}
      <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/skills/profile.jpg"
          alt="Ajay Vishwakarma"
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-black shadow-lg"
        />
      </div>

      {/* Right: User Details */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2"style={{
            color: "#00FF41",
            textShadow: "0 0 4px #00FF41, 0 0 8px #00FF41",
          }}>
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          style={{
            color: "#00FF41",
            textShadow: "0 0 4px #00FF41, 0 0 8px #00FF41",
          }}
        >
          Hi, I’m Ajay Vishwakarma 👋
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl">
          Cyber Security Enthusiast & Full Stack Developer — building secure,
          robust web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-700 transition"
          >
            View Projects
          </Link>
          <a
            href="/Ajay_Vishwakarma_.pdf"
            download
            className="px-6 py-3 border  bg-black text-white rounded-full hover:bg-gray-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
