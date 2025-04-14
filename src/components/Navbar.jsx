import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImage from '../assets/tellyoudoc.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (sectionId) => {
    // If we're on the homepage, just scroll to the section
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    } else {
      // If we're not on the homepage, we need to first navigate to the homepage
      // and then scroll to the section
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = '/';
      closeMenu();
    }
  };

  // Handle scrolling to section after navigation to homepage
  useEffect(() => {
    if (isHomePage) {
      const sectionToScroll = sessionStorage.getItem('scrollToSection');
      if (sectionToScroll) {
        // Small delay to ensure the DOM is ready
        setTimeout(() => {
          const section = document.getElementById(sectionToScroll);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
          sessionStorage.removeItem('scrollToSection');
        }, 500);
      }
    }
  }, [isHomePage]);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logoImage} alt="tellYouDoc Logo" />
        </Link>
      </div>
      
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="/#home-container" onClick={(e) => { e.preventDefault(); scrollToSection('home-container'); }}>Home</a>
        <a href="/#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a>
        <a href="/#product" onClick={(e) => { e.preventDefault(); scrollToSection('product'); }}>Product</a>
        <a href="/#founders" onClick={(e) => { e.preventDefault(); scrollToSection('founders'); }}>Team</a>
        <a href="/#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </div>
      
      {/* Overlay for mobile menu */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar; 