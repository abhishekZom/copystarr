import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
          <FooterLink href="#terms">Terms & Conditions</FooterLink>
          <FooterLink href="#cookie">Cookie Policy</FooterLink>
        </FooterLinks>
        <Copyright>
          &copy; 2024 Copystarr™. All rights reserved. Professional copywriting services that convert.
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: #0a1520;
  color: white;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;

  &:hover {
    color: #d4af37;
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.6;
  letter-spacing: 0.3px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
