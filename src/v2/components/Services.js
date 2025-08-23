import React, { useEffect } from 'react';
import styled from 'styled-components';
import configData from '../config.json';

const Services = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Get services data from JSON config
  const servicesConfig = configData[0].services;
  const services = servicesConfig.cards.map(card => {
    const serviceKey = Object.keys(card)[0];
    const serviceData = card[serviceKey];
    return {
      icon: serviceData.icon,
      title: serviceData.headerText.text,
      titleColor: serviceData.headerText.color,
      description: serviceData.headerDesc.text,
      descriptionColor: serviceData.headerDesc.color
    };
  });

  return (
    <ServicesWrapper id="services" className="section">
      <ParallaxBg className="parallax-bg" />
      <FloatingIcon className="floating-element floating-icon-1">
        <i className="fas fa-pen-nib"></i>
      </FloatingIcon>
      <FloatingIcon className="floating-element floating-icon-2">
        <i className="fas fa-lightbulb"></i>
      </FloatingIcon>
      <FloatingIcon className="floating-element floating-icon-3">
        <i className="fas fa-rocket"></i>
      </FloatingIcon>
      
      <ServicesContainer className="container">
        <SectionTitle className="section-title" style={{ color: servicesConfig.header.color }}>
          {servicesConfig.header.text}
        </SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} className="service-card">
              <ServiceIcon>
                <i className={service.icon}></i>
              </ServiceIcon>
              <h3 style={{ color: service.titleColor }}>{service.title}</h3>
              <p style={{ color: service.descriptionColor }}>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;

const ServicesWrapper = styled.section`
  background: linear-gradient(135deg, #0d1b2a 0%, #1b2735 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ServicesContainer = styled.div`
  padding-bottom: 150px;
`;

const ParallaxBg = styled.div`
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 140%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
  transition: transform 0.1s ease-out;
`;

const FloatingIcon = styled.div`
  position: absolute;
  font-size: 2rem;
  color: rgba(212, 175, 55, 0.1);
  animation: float 6s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;

  &.floating-icon-1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &.floating-icon-2 {
    top: 20%;
    right: 15%;
    animation-delay: 2s;
  }

  &.floating-icon-3 {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
`;

const SectionTitle = styled.h2`
  /* Uses global .section-title styles from GlobalStyles.js */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.6s ease;
  transform: translateY(50px);
  opacity: 0.5;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.3);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: #d4af37;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    letter-spacing: 0.3px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
  
  i {
    display: block;
    animation: pulse 2s ease-in-out infinite alternate;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;
