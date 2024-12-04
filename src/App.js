import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="ReCra2" mode={mode} toggleMode={toggleMode} Home="Home" AboutText="About" Search="Search karna!"/>
      <div className="container my-3">
        <TextForm mode={mode} heading="Text Area"/>
        {/* <About/> */}
      </div>
    </> 
  );
}

export default App;
