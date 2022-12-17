import React from 'react';
import "./index.css";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
