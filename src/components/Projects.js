import React from "react";
import "./Projects.css";
const Projects = React.forwardRef((props, ref) => {

  const projects = [
    {
      title: 'Admin Splasher 🚀',
      technologies: 'MongoDB, Express.js, React.js, Node.js (MERN Stack)',
      description: 'A customizable administrator dashboard for mobile applications, designed for efficient app management.',
    },
    {
      title: 'M-Leave 📱',
      technologies: 'React Native, JavaScript',
      description: 'A sleek mobile app for employees to apply for leaves 🗓️ and track their status in real-time.',
    },
    {
      title: 'Text Utils ✍️',
      technologies: 'React.js, HTML, CSS, JavaScript',
      description: 'A handy web tool for text manipulation, featuring utilities like case conversion, word counting, and more.',
    },
  ];

  return (
    <div ref={ref} className="projects-container">
      <h1 className="projects-title">My Projects 🛠️</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
);



  
export default Projects;
