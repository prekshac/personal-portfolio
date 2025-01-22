import React from 'react';
import './Skills.css';
const Skills = React.forwardRef((props, ref) => {

  const ulStyle = { 
    listStyleType: 'disc', 
    
  };

  return (
    <div ref={ref} className="section" id="skills">
      <h2>Skills</h2>
      
      <section>
        <h3>Programming Languages 💻</h3>
        <ul style={ulStyle}>
        <li>HTML, CSS, JavaScript (Intermediate)</li>
          <li>React.js (Intermediate)</li>
          <li>Java (Intermediate)</li>
          <li>React Native (Beginner)</li>
          <li>Python (Intermediate)</li>
          <li>C (Beginner)</li>
        </ul>
      </section>

      <section>
        <h3>Databases and Tools 🗃️</h3>
        <ul style={ulStyle}>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Postman</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section>
        <h3>Software & Development Environments 🧑‍💻</h3>
        <ul style={ulStyle}>
          <li>Visual Studio Code</li>
          <li>Anaconda</li>
          <li>Jupyter</li>
          <li>Android Studio</li>
          <li>MS Office</li>
        </ul>
      </section>
      
    </div>
  );
});

export default Skills;