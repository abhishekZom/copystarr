import React, { useEffect } from 'react';
import styled from 'styled-components';
import configData from '../config.json';

const Packages = () => {
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

    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Get packages data from JSON config
  const packagesConfig = configData[3].packages;
  const packages = packagesConfig.packages.map(packageItem => {
    const packageKey = Object.keys(packageItem)[0];
    const packageData = packageItem[packageKey];
    return {
      name: packageData.name,
      price: packageData.price,
      period: packageData.period,
      description: packageData.description,
      popular: packageData.popular,
      popularBadgeText: packageData.popularBadgeText,
      nameColor: packageData.nameColor,
      priceColor: packageData.priceColor,
      periodColor: packageData.periodColor,
      descriptionColor: packageData.descriptionColor,
      features: packageData.features,
      buttonText: packageData.buttonText,
      buttonLink: packageData.buttonLink
    };
  });

  return (
    <PackagesWrapper id="packages" className="section">
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
        <SectionTitle className="section-title" style={{ color: packagesConfig.header.color }}>
          {packagesConfig.header.text}
        </SectionTitle>
        <PackagesGrid>
          {packages.map((pkg, index) => (
            <PackageCard key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <PopularBadge>{pkg.popularBadgeText || 'Most Popular'}</PopularBadge>}
              <PackageHeader>
                <PackageName style={{ color: pkg.nameColor }}>{pkg.name}</PackageName>
                <PackagePrice style={{ color: pkg.priceColor }}>
                  {pkg.price}
                  <span style={{ color: pkg.periodColor }}>{pkg.period}</span>
                </PackagePrice>
                <PackageDescription style={{ color: pkg.descriptionColor }}>
                  {pkg.description}
                </PackageDescription>
              </PackageHeader>
              <PackageFeatures>
                {pkg.features.map((feature, idx) => (
                  <Feature key={idx}>
                    <i className="fas fa-check"></i>
                    <span style={{ color: feature.color }}>{feature.text}</span>
                  </Feature>
                ))}
              </PackageFeatures>
              <PackageButton href={pkg.buttonLink}>
                {pkg.buttonText}
                <i className="fas fa-arrow-right"></i>
              </PackageButton>
            </PackageCard>
          ))}
        </PackagesGrid>
      </div>
    </PackagesWrapper>
  );
};

export default Packages;

const PackagesWrapper = styled.section`
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

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PackageCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.6s ease;
  transform: translateY(50px);
  opacity: 0.5;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.3);
  }

  &.popular {
    border: 2px solid #d4af37;
    transform: translateY(30px) scale(1.05);
    
    &:hover {
      transform: translateY(-10px) scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    
    &.popular {
      transform: translateY(50px) scale(1);
      
      &:hover {
        transform: translateY(-10px) scale(1);
      }
    }
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #0d1b2a;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
`;

const PackageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PackageName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #d4af37;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`;

const PackagePrice = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  
  span {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PackageDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
`;

const PackageFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2.5rem;
  text-align: left;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  
  i {
    color: #d4af37;
    margin-right: 0.75rem;
    font-size: 0.9rem;
  }
`;

const PackageButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #0d1b2a;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
  }
`;
