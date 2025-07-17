"use client";
import React, { useEffect, useRef, useState } from 'react';

interface Certificate {
  title: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: 'Google Bits and Bytes of Computer Network',
    image: '/certificates/Bit_Byte.png',
  },
  {
    title: 'Cisco Introduction to Cybersecurity',
    image: '/certificates/Cisco.png',
  },
  {
    title: 'NPTEL Blockchain and its Applications',
    image: '/certificates/NPTEL.png',
  },
  {
    title: 'NASSCOM Information Technology',
    image:'certificates/NASSCOM_IT.png',
  },
  {
    title:'Scaller',
    image: '/certificates/scaller.png',
  },
  {
    title:'Java Full Stack Development',
    image: '/certificates/JavaFullStack.png',
  },
  {
    title:'SQL',
    image: '/certificates/SQL.png',
  },
  {
    title:'FrontEnd Development with React',
    image: '/certificates/Reactjs.png',
  },
  {
    title:'Machine Learning Fundamentals',
    image: '/certificates/ML.png',
  }
  // Add more certificates as needed
];

const SLIDE_INTERVAL = 2500; // ms

const Certifications: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section id='certificates' className="py-12 "style={{ background: "linear-gradient(to right, #000, #908F8F)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center"style={{
            color: "#00FF41",
            textShadow: "0 0 2px #00FF41, 0 0 4px #00FF41",
             }}>Certifications</h2>
        <div className="flex justify-center items-center">
          <div className="relative w-[1000px] h-[600px] flex items-center justify-center bg-gray-100 rounded-xl shadow-2xl overflow-hidden border-4 border-gray-300">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img src={cert.image} alt={cert.title} className="h-[400px] w-auto object-contain mb-6 drop-shadow-lg" />
                <span className="text-xl font-bold bg-gray-600 bg-opacity-90 px-6 py-3 rounded shadow"style={{
            color: "#00FF41",
            textShadow: "0 0 2px #00FF41, 0 0 4px #00FF41",
             }}>
                  {cert.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
