import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (dropdownName, isOpen) => {
    setActiveDropdown(isOpen ? dropdownName : null);
  };

  const handleNavLinkClick = (path) => {
    navigate(path);
    closeDropdown();
    closeMenu();
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar expand="lg" className="navbar-full-width fixed-top p-0">
      <Container className="navbar-container">
        <Navbar.Brand className="navbar-image-logo p-0" onClick={() => handleNavLinkClick('/')}>
          <img src={logo} alt="" width={114} height={80} />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="navbar-toggler"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto" ref={dropdownRef}>
            <NavLink className={`nav-link mx-3 ${isActive('/')}`} to="/" onClick={() => handleNavLinkClick('/')}>
              Home
            </NavLink>

            <NavDropdown
              title="About Us"
              id="dropdown-about-us"
              show={activeDropdown === 'AboutUs'}
              onToggle={(isOpen) => handleDropdownToggle('AboutUs', isOpen)}
              className={`custom-dropdown mx-3 ${isActive('/about') ? 'active' : ''}`}
            >
              <NavDropdown.Item 
                className={isActive('/about')} 
                onClick={() => handleNavLinkClick('/about')}
              >
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item 
                className={isActive('/mission')} 
                onClick={() => handleNavLinkClick('/mission')}
              >
                Mission
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Products"
              id="dropdown-products"
              show={activeDropdown === 'Products'}
              onToggle={(isOpen) => handleDropdownToggle('Products', isOpen)}
              className={`custom-dropdown mx-3 ${isActive('/products') ? 'active' : ''}`}
            >
              <NavDropdown.Item 
                className={isActive('/software')} 
                onClick={() => handleNavLinkClick('/software')}
              >
                Software
              </NavDropdown.Item>
              <NavDropdown.Item 
                className={isActive('/hardware')} 
                onClick={() => handleNavLinkClick('/hardware')}
              >
                Hardware
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink className={`nav-link mx-3 ${isActive('/services')}`} to="/services" onClick={() => handleNavLinkClick('/services')}>
              Services
            </NavLink>

            <NavLink className={`nav-link mx-3 ${isActive('/testimonials')}`} to="/testimonials" onClick={() => handleNavLinkClick('/testimonials')}>
              Testimonials
            </NavLink>

            <NavLink className={`nav-link mx-3 ${isActive('/contact')}`} to="/contact" onClick={() => handleNavLinkClick('/contact')}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
