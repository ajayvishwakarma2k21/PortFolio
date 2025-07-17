"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 shadow-md" style={{ background: "linear-gradient(to right, #000, #908F8F)" }}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
      {/* Logo */}
      <div className="text-xl font-bold ">
        <Link href="/">
        <img
          src="/skills/profile.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
        />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        {["Home", "Projects", "Skills", "Certificates", "Contact"].map((item) => (
        <div key={item} className="relative group">
          <Link
          href={`#${item.toLowerCase()}`}
          className="block px-4 py-2  transition-colors duration-300 overflow-hidden"
          style={{
            color: "#00FF41",
            textShadow: "0 0 2px #00FF41, 0 0 4px #00FF41",
          }}
          >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            {item}
          </span>
          <span className="absolute left-0 top-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
          </Link>
        </div>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
          ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
          )}
        </svg>
        </button>
      </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
      <div className="md:hidden  shadow-md"
      style={{
            color: "#00FF41",
            textShadow: "0 0 4px #00FF41, 0 0 8px #00FF41",
            background: "linear-gradient(to left, #000, #908F8F)"
          }}>
        <div className="flex flex-col items-center space-y-4 py-4">
          {["Home", "Education", "Projects", "Skills", "Certificates", "Contact"].map((item) => (
          <div key={item} className="relative group w-full flex justify-center">
            <Link
            href={`#${item.toLowerCase()}`}
            className="block w-full text-center px-4 py-2  transition-colors duration-300 overflow-hidden"
            onClick={() => setIsOpen(false)}
            >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {item}
            </span>
            <span className="absolute left-0 top-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"></span>
            </Link>
          </div>
          ))}
        </div>
      </div>
      )}
    </nav>
  );
};

export default Navbar;
