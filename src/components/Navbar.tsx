import React from 'react';
import './Navbar.css';
import { useScroll, scrollToSection } from '../hooks/useScroll';
import { useModal } from '../context/ModalContext';

const Navbar: React.FC = () => {
  const scrolled = useScroll(50);
  const { openModal } = useModal();

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
        <img src="./LOGO.svg" alt="Logo" />
      </div>
      
      <ul className="nav-links">
        <li><button onClick={() => scrollToSection('about')}>About us</button></li>
        <li><button onClick={() => scrollToSection('rooms')}>Rooms</button></li>
        <li><button onClick={() => scrollToSection('services')}>Services</button></li>
        <li><button onClick={() => scrollToSection('restaurant')}>Restaurant</button></li>
      </ul>
      
      <button className="btn-contact" onClick={openModal}>Contact us</button>
    </nav>
  );
};

export default Navbar;
