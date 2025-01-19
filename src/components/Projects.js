import React from 'react';

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section" id="projects">
      <h2>Projects</h2>
      <p>Here are some of my projects...</p>
    </div>
  );
});

export default Projects;