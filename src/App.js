// App.js
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'; // Ensure correct import

function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 1500); // Hide alert after 3 seconds
  };

  const toggleMode = () => {
    if (mode === 'white') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled.","success");
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.","success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          Home="Home"
          AboutText="About"
          Search="Search karna!"
        />
        <Alert alert={alert} onClose={() => setAlert(null)} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm mode={mode} heading="Text Area" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
