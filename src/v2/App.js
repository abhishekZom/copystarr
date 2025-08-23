import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Hero parallax
      const heroElement = document.querySelector('#home');
      if (heroElement) {
        const heroTop = heroElement.offsetTop;
        const heroHeight = heroElement.offsetHeight;
        
        if (scrolled < heroTop + heroHeight) {
          const parallaxRate = scrolled * 0.5;
          heroElement.style.transform = `translateY(${parallaxRate}px)`;
        }
      }

      // Services section parallax
      const servicesElement = document.querySelector('#services');
      if (servicesElement) {
        const servicesTop = servicesElement.offsetTop;
        const servicesHeight = servicesElement.offsetHeight;
        
        if (scrolled + windowHeight > servicesTop && scrolled < servicesTop + servicesHeight) {
          const parallaxRate = (scrolled - servicesTop + windowHeight) * 0.1;
          servicesElement.style.transform = `translateY(${parallaxRate}px)`;
        }
      }

      // About section parallax
      const aboutElement = document.querySelector('#about');
      if (aboutElement) {
        const aboutTop = aboutElement.offsetTop;
        const aboutHeight = aboutElement.offsetHeight;
        
        if (scrolled + windowHeight > aboutTop && scrolled < aboutTop + aboutHeight) {
          const parallaxRate = (scrolled - aboutTop + windowHeight) * -0.05;
          aboutElement.style.transform = `translateY(${parallaxRate}px)`;
        }
      }

      // Testimonials section parallax
      const testimonialsElement = document.querySelector('#testimonials');
      if (testimonialsElement) {
        const testimonialsTop = testimonialsElement.offsetTop;
        const testimonialsHeight = testimonialsElement.offsetHeight;
        
        if (scrolled + windowHeight > testimonialsTop && scrolled < testimonialsTop + testimonialsHeight) {
          const parallaxRate = (scrolled - testimonialsTop + windowHeight) * 0.08;
          testimonialsElement.style.transform = `translateY(${parallaxRate}px)`;
        }
      }

      // Floating elements parallax
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const speed = 0.02 + (index * 0.01);
        const yPos = scrolled * speed;
        const rotation = scrolled * (speed * 0.5);
        element.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
      });
    };

    document.addEventListener('click', handleNavClick);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleNavClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Packages />
      <Contact />
      <Footer />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  background: #0d1b2a;
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 60% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }
`;
