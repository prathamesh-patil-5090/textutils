// App.js
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'; // Ensure correct import

function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
  };

  const toggleMode = () => {
    if (mode === 'white') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled.");
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.");
    }
  };

  return (
    <>
      <Navbar
        title="ReCra2"
        mode={mode}
        toggleMode={toggleMode}
        Home="Home"
        AboutText="About"
        Search="Search karna!"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm mode={mode} heading="Text Area" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
