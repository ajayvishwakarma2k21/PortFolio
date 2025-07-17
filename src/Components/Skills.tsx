// src/components/Skills.tsx

"use client";

import React from "react";
import Image from "next/image";

const skills = [
  { name: "Java", icon: "/skills/java.svg" },
  { name: "Python", icon: "/skills/python.svg" },
  { name: "React", icon: "/skills/reactjs.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/skills/tailwindcss.svg" },
  { name: "MongoDB", icon: "/skills/mongodb.svg" },
  { name: "MySQL", icon: "/skills/mysql.svg" },
  { name: "JavaScript", icon: "/skills/js.svg" },
  { name: "Linux", icon: "/skills/linux.svg" },
  { name: "Cyber-Security", icon:"/skills/cyber_security.svg"},
  { name: "HTML", icon:"/skills/html5.svg"},
  { name: "Express JS", icon: "/skills/express.svg"},
  { name: "Version Control", icon : "/skills/github.svg"},
  { name: "PostMan", icon: "/skills/postman.svg"}
  // Add more as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50" style={{ background: "linear-gradient(to left, #000, #908F8F)" }}>
      <h2 className="text-4xl font-bold text-center mb-10"
      style={{
            color: "#00FF41",
            textShadow: "0 0 2px #00FF41, 0 0 4px #00FF41",
             }}>
        Technical Skills
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform"
          >
            <div className="relative w-16 h-16" >
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-gray-700"  
            style={{
            color: "#00FF41",
            textShadow: "0 0 2px #00FF41, 0 0 4px #00FF41",
             }}
          >{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
