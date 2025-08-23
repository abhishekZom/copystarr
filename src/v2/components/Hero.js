import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }

    // Parallax effect for hero content
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeroWrapper id="home">
      <HeroBackground />
      <HeroVideo ref={videoRef} muted loop playsInline preload="auto">
        <source src="/C0410.webm" type="video/webm" />
        <source src="/C0410.MP4" type="video/mp4" />
      </HeroVideo>
      <HeroOverlay />
      <HeroContent className="hero-content">
        <HeroTitle>
          Transform Your Brand with
          <GradientText> Powerful Copy</GradientText>
        </HeroTitle>
        <HeroSubtitle>
          Professional copywriting that converts visitors into customers and builds lasting relationships with your audience.
        </HeroSubtitle>
        <CTAButton href="#contact">
          Get Started Today
          <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
        </CTAButton>
      </HeroContent>
      <ScrollIndicator>
        <i className="fas fa-chevron-down"></i>
      </ScrollIndicator>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0d1b2a;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0d1b2a 0%, #1b2735 50%, #0d1b2a 100%);
  z-index: 1;
`;

const HeroVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;
  opacity: 0.3;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(13, 27, 42, 0.1) 0%,
    rgba(27, 39, 53, 0.05) 50%,
    rgba(13, 27, 42, 0.2) 100%
  );
  z-index: 3;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 4;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #0d1b2a;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  margin-bottom: 4rem;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;
