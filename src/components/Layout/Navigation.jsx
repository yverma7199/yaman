import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      {/* Mobile menu button */}
      <button className="mobile-menu-button" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
        <li><NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink></li>
        <li><NavLink to="/education" onClick={() => setIsOpen(false)}>Education</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        <li><NavLink to="/social" onClick={() => setIsOpen(false)}>Social</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;