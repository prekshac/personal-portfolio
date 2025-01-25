import React from 'react';
import './Skills.css';
import skillset from './skills.json';


const Skills = React.forwardRef((props, ref) => {

  return (
    <div ref={ref} className="section" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">{
        skillset.map((skills, id) => {
          return (
            <div className="skills-card" key={id}>
             <div>
               <img src={skillset.image} alt={skillset.title} />
             </div>
             <p>{skillset.title}</p>
            </div>
          );
        },
        )
      }

      </div>
    </div>
  );
});

export default Skills;



{/* <section>
        <h3 >Programming Languages 💻</h3>
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
      </section> */}