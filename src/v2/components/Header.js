import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateActiveTab = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection || 'home');
    };

    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.style.background = 'rgba(13, 27, 42, 0.15)';
      } else {
        header.style.background = 'rgba(13, 27, 42, 0.1)';
      }
      updateActiveTab();
    };

    window.addEventListener('scroll', handleScroll);
    updateActiveTab();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <Nav>
        <Logo href="#home">Copystarr</Logo>
        <NavLinks className={isMenuOpen ? 'active' : ''}>
          <li><NavLink href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</NavLink></li>
          <li><NavLink href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={closeMenu}>Services</NavLink></li>
          <li><NavLink href="#packages" className={activeSection === 'packages' ? 'active' : ''} onClick={closeMenu}>Packages</NavLink></li>
          <li><NavLink href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={closeMenu}>Testimonials</NavLink></li>
          <li><NavLink href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</NavLink></li>
        </NavLinks>
        <MenuToggle onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MenuToggle>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(13, 27, 42, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  color: #d4af37;
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background: rgba(13, 27, 42, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: left 0.3s ease;

    &.active {
      left: 0;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  font-size: 1.05rem;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #d4af37;
  }

  &.active {
    color: #d4af37;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #d4af37, #f4d03f);
      border-radius: 1px;
      animation: underlineGlow 2s ease-in-out infinite alternate;
    }
  }

  @keyframes underlineGlow {
    0% {
      box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
    }
    100% {
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem 0;

    &.active::after {
      bottom: -5px;
    }
  }
`;

const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;

  span {
    width: 25px;
    height: 3px;
    background: #d4af37;
    transition: 0.3s;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
