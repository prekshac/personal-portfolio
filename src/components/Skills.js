import React from 'react';

const Skills = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section" id="skills">
      <h2>Skills</h2>
      <p>Here are my skills...</p>
    </div>
  );
});

export default Skills;