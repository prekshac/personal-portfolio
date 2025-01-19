import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <select onChange={(e) => scrollToSection(e.target.value)}>
        <option value="">Select Section</option>
        <option value="home">Home</option>
        <option value="projects">Projects</option>
        <option value="skills">Skills</option>
        <option value="contact">Contact</option>
        <option value="other">Other</option>
      </select>
    </nav>
  );
};

export default Navbar;