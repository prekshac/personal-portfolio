import React from 'react';
import Home from './Home';  // Make sure the path is correct
// import TestComponent from './TestComponent';
import './App.css';
import Header from './Header';
// import About from './About';

function App() {
  return (
    <div>
      <Home />
      <p>hello. my portfolio</p>
      {/* <TestComponent /> */}
      <Header />
      {/* <About/> */}
    </div>
  );
}

export default App;