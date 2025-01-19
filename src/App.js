import React from 'react';
import Home from './Home';  
import './App.css';
import Header from './Header';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <p>hello. my portfolio</p>
      
      
      <About/>
    </div>
  );
}

export default App;