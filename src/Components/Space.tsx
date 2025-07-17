import React from "react";

const Space: React.FC = () => (
  <section className="relative py-10 bg-gradient-to-br from-black via-gray-900 to-white overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-black opacity-20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white opacity-20 rounded-full blur-xl" style={{transform: 'translate(-50%, -50%)'}} />
      <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-black opacity-10 rounded-full blur-2xl" />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-2">
        <div className="w-6 h-6 bg-white rounded-full shadow-lg" />
        <div className="w-6 h-6 bg-black rounded-full shadow-lg" />
        <div className="w-6 h-6 border-2 border-white rounded-full" />
        <div className="w-6 h-6 border-2 border-black rounded-full" />
      </div>
    </div>
  </section>
);

export default Space;
