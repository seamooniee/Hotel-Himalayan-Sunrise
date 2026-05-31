import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useScroll, scrollToSection } from '../hooks/useScroll';
import { useModal } from '../context/ModalContext';

const Navbar: React.FC = () => {
  const scrolled = useScroll(50);
  const { openModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container" onClick={() => handleNav('home')} style={{ cursor: 'pointer' }}>
        <img src="./LOGO.svg" alt="Hotel Himalayan Sunrise" />
      </div>

      <button
        type="button"
        className={`nav-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><button type="button" onClick={() => handleNav('about')}>About us</button></li>
          <li><button type="button" onClick={() => handleNav('rooms')}>Rooms</button></li>
          <li><button type="button" onClick={() => handleNav('services')}>Services</button></li>
          <li><button type="button" onClick={() => handleNav('restaurant')}>Restaurant</button></li>
        </ul>
      </div>

      <button type="button" className="btn-contact nav-contact-desktop" onClick={openModal}>
        Contact us
      </button>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
