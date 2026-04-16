import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className={`app-layout ${isOpen ? 'nav-active' : ''}`}>
        {/* Tombol Mobile */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo">B<span>ARID</span></div>
          <nav className="sidebar-nav">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/project" onClick={() => setIsOpen(false)}>Project</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </nav>
        </aside>

        {/* Konten Utama */}
        <main className="main-viewport">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Overlay saat menu terbuka di HP */}
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      </div>
    </Router>
  );
}

export default App;