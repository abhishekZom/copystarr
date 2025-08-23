import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import configData from '../config.json';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get testimonials data from JSON config
  const testimonialsConfig = configData[2].testimonials;
  const testimonials = testimonialsConfig.testimonials.map(testimonial => {
    const testimonialKey = Object.keys(testimonial)[0];
    const testimonialData = testimonial[testimonialKey];
    return {
      name: testimonialData.name,
      role: testimonialData.role,
      company: testimonialData.company,
      text: testimonialData.testimonialText.text,
      textColor: testimonialData.testimonialText.color,
      nameColor: testimonialData.nameColor,
      roleColor: testimonialData.roleColor,
      companyColor: testimonialData.companyColor
    };
  });

  const cardsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= maxIndex ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  return (
    <TestimonialsWrapper id="testimonials" className="section">
      <div className="container">
        <SectionTitle className="section-title" style={{ color: testimonialsConfig.header.color }}>
          {testimonialsConfig.header.text}
        </SectionTitle>
        <CarouselContainer>
          <CarouselWrapper>
            <TestimonialsContainer style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index}>
                  <QuoteIcon>
                    <i className="fas fa-quote-left"></i>
                  </QuoteIcon>
                  <TestimonialText style={{ color: testimonial.textColor }}>
                    "{testimonial.text}"
                  </TestimonialText>
                  <TestimonialAuthor>
                    <AuthorInfo>
                      <AuthorName style={{ color: testimonial.nameColor }}>
                        {testimonial.name}
                      </AuthorName>
                      <AuthorRole style={{ color: testimonial.roleColor }}>
                        {testimonial.role}
                      </AuthorRole>
                      <AuthorCompany style={{ color: testimonial.companyColor }}>
                        {testimonial.company}
                      </AuthorCompany>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              ))}
            </TestimonialsContainer>
          </CarouselWrapper>
          
          <CarouselControls>
            <ControlButton onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </ControlButton>
            <ControlButton onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </ControlButton>
          </CarouselControls>
          
          <CarouselDots>
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <Dot 
                key={index} 
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </CarouselDots>
        </CarouselContainer>
      </div>
    </TestimonialsWrapper>
  );
};

export default Testimonials;

const TestimonialsWrapper = styled.section`
  background: linear-gradient(135deg, #1b2735 0%, #0d1b2a 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  /* Uses global .section-title styles from GlobalStyles.js */
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const TestimonialCard = styled.div`
  width: calc(33.333% - 2rem);
  min-width: calc(33.333% - 2rem);
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin: 0 1rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(212, 175, 55, 0.1);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 2rem);
    min-width: calc(50% - 2rem);
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    min-width: calc(100% - 2rem);
    padding: 1.5rem;
  }
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.5rem;
  font-style: italic;
  font-weight: 300;
  letter-spacing: 0.3px;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const AuthorInfo = styled.div`
  text-align: center;
`;

const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #d4af37;
  margin-bottom: 0.2rem;
  letter-spacing: 0.3px;
`;

const AuthorRole = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.1rem;
  font-weight: 400;
`;

const AuthorCompany = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  padding: 0 1rem;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ControlButton = styled.button`
  background: rgba(212, 175, 55, 0.2);
  border: 1px solid rgba(212, 175, 55, 0.5);
  color: #d4af37;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: all;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(212, 175, 55, 0.3);
    transform: scale(1.1);
  }

  i {
    font-size: 1.2rem;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? '#d4af37' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#d4af37' : 'rgba(255, 255, 255, 0.5)'};
    transform: scale(1.2);
  }
`;
