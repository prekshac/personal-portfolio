import React from "react";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section" id="projects">
      <h2>My Projects</h2>

      <section>
        <h4>1. Admin Splasher 🚀</h4>
        <p>
          <strong>Technologies:</strong> MongoDB, Express.js, React.js, Node.js
          (MERN Stack)
        </p>
        <p>
          A powerful and customizable administrator dashboard for mobile
          applications. Designed to help admins manage app data efficiently with
          an interactive and user-friendly interface.
        </p>
      </section>

      <section>
        <h4>2. M-Leave 📱</h4>
        <p>
          <strong>Technologies:</strong> React Native, JavaScript
        </p>
        <p>
          A sleek mobile app for employees to apply for leaves 🗓️ and track
          their status in real time. Showcasing seamless UI/UX for workplace
          convenience.
        </p>
      </section>

      <section>
        <h4>3. Text Utils ✍️</h4>
        <p>
          <strong>Technologies:</strong> React.js, HTML, CSS, JavaScript
        </p>
        <p>
          A handy web tool for text manipulation, featuring utilities like case
          conversion, word counting, and removing extra spaces. Perfect for
          quick and easy text editing!
        </p>
      </section>
    </div>
  );
});

export default Projects;
