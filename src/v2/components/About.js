import React, { useEffect } from 'react';
import styled from 'styled-components';
import configData from '../config.json';

const About = () => {
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

    const messageCards = document.querySelectorAll('.message-card');
    messageCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Get about data from JSON config
  const aboutConfig = configData[1].about;
  const aboutCards = aboutConfig.cards.map(card => {
    const cardKey = Object.keys(card)[0];
    const cardData = card[cardKey];
    return {
      icon: cardData.icon,
      title: cardData.headerText.text,
      titleColor: cardData.headerText.color,
      description: cardData.headerDesc.text,
      descriptionColor: cardData.headerDesc.color
    };
  });

  return (
    <AboutWrapper id="about" className="section">
      <FloatingIcon className="floating-element floating-icon-1">
        <i className="fas fa-pen-nib"></i>
      </FloatingIcon>
      <FloatingIcon className="floating-element floating-icon-2">
        <i className="fas fa-lightbulb"></i>
      </FloatingIcon>
      <FloatingIcon className="floating-element floating-icon-3">
        <i className="fas fa-rocket"></i>
      </FloatingIcon>
      
      <div className="container">
        <SectionTitle className="section-title" style={{ color: aboutConfig.header.color }}>
          {aboutConfig.header.text}
        </SectionTitle>
        <MessagingGrid>
          {aboutCards.map((card, index) => (
            <MessageCard key={index} className="message-card">
              <CardIcon>
                <i className={card.icon}></i>
              </CardIcon>
              <h3 style={{ color: card.titleColor }}>{card.title}</h3>
              <p style={{ color: card.descriptionColor }}>
                {card.description}
              </p>
            </MessageCard>
          ))}
        </MessagingGrid>
      </div>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.section`
  background: linear-gradient(135deg, #0d1b2a 0%, #1b2735 100%);
  color: white;
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
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

const MessagingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MessageCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.6s ease;
  opacity: 0.5;
  transform: translateY(50px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.3);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    color: #d4af37;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.9;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    letter-spacing: 0.3px;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    
    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #d4af37;
  margin-bottom: 1.5rem;
  
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
