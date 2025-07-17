import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'Web-Based Face Authentication',
    description: 'A web-based face authentication system using OpenCV and Flask.',
    image: '/projects/webauth.jpg',
    github: 'https://github.com/ajayvishwakarma2k21/WEB-BASED-FACE-AUTHENTICATION',
  },
  {
    title: 'Roommate Finder (Hostel Life)',
    description: 'A web application to find roommates for hostel life, built with React, Expressjs, MongoDB and Nodejs.',
    image: '/projects/RoomMate.jpg',
    github: 'https://github.com/ajayvishwakarma2k21/RoomMate_Finder_Hostel_Life',
  },{
    title: 'Cloudy Bytes',
    description: 'A weather forecasting app using React and OpenWeatherMap API.',
    image: '/projects/cloudy.jpg',
    github: 'https://github.com/ajayvishwakarma2k21/CloudyBytes',
  },
  {
    title: 'Apni Malwi Sanskriti',
    description: 'A web application to showcase the culture and traditions of Malwa, built with MERN technology',
    image: '/projects/malwi.jpg',
    github: 'https://github.com/ajayvishwakarma2k21/Apni-Malwi-Sanskriti',
  },{
    title: 'My Own NotePad',
    description: 'A simple note-taking application with features like saving, editing, and deleting notes using python.',
    image: '/projects/notepad.jpg',
    github: 'https://github.com/ajayvishwakarma2k21/Own_Notepad',
  },
 
  // Add more projects as needed
];

const ProjectSection: React.FC = () => {
  return (
    <section id='projects' className="py-12"style={{ background: "linear-gradient(to left, #000, #908F8F)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center"
        style={{
            color: "#00FF41",
            textShadow: "0 0 2px #00FF41, 0 0 4px #00FF41",
             }}
             >Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className=" rounded-lg shadow-lg overflow-hidden flex flex-col"style={{ background: "linear-gradient(to right, #000, #908F8F)" }}>
              <img src={project.image} alt={project.title} className="w-full h-55 object-contain" />
              <div className="p-6 flex-1 flex flex-col"style={{
            color: "#00FF41",
            textShadow: "0 0 2px #00FF41, 0 0 4px #00FF41",
             }}>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className=" mb-4 flex-1">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-black hover:bg-gray-800 px-4 py-2 rounded transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
