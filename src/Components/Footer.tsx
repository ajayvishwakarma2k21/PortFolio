import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" text-black py-8 mt-12"style={{ background: "linear-gradient(to left, #000, #908F8F)" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex space-x-6">
           <a href="https://github.com/ajayvishwakarma2k21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
          <a href="https://linkedin.com/in/ajayvishwakarma2k21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
          <a href="https://leetcode.com/ajayvishwakarma2k21" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <img src="/skills/leetcode.svg" alt="LeetCode" width={24} height={24} className="inline-block" />
          </a>
          <a href="https://auth.geeksforgeeks.org/user/ajayvishwakarma2022" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <img src="/skills/gfg.svg" alt="GeeksforGeeks" width={24} height={24} className="inline-block" />
          </a>
        </div>
        <div className="mb-2 md:mb-0 text-center md:text-left">
        <span className="font-semibold"style={{
            color: "#00FF41",
            textShadow: "0 0 4px #00FF41, 0 0 8px #00FF41",
          }}>&copy; {new Date().getFullYear()} Ajay Vishwakarma. All rights reserved.</span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
