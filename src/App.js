import React, {useRef} from 'react';
import Home from './Home';  
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Other from './components/Other';


function App() {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const otherRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'other':
        otherRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };


  return (
    <div>
      <Header />
      <Home />
      <p>hello. my portfolio.</p>
      <Navbar scrollToSection={scrollToSection}/>
      <Projects  ref={projectsRef}/>
      <Skills ref={skillsRef}/>
      <Contact ref={contactRef}/>
      <Other ref={otherRef}/>


    </div>
  );
}

export default App;