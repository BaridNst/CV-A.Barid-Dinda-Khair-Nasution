import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { CvProvider } from './context/CvContext';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import './App.css';

// Layout untuk publik (CV)
function CvLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
          {/* Menu Admin disembunyikan dari publik */}
        </nav>
      </aside>

      {/* Konten Utama */}
      <main className="main-viewport">
        <Outlet />
      </main>

      {/* Overlay saat menu terbuka di HP */}
      <div className="overlay" onClick={() => setIsOpen(false)}></div>
    </div>
  );
}

function App() {
  return (
    <CvProvider>
      <Router>
        <Routes>
          {/* Rute Publik dengan Sidebar CV */}
          <Route element={<CvLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Rute Admin Tanpa Sidebar (Terpisah) */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </CvProvider>
  );
}

export default App;