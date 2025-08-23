import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactWrapper id="contact" className="section">
      <div className="container">
        <SectionTitle className="section-title">Get In Touch</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <InfoCard>
              <InfoIcon>
                <i className="fas fa-envelope"></i>
              </InfoIcon>
              <InfoDetails>
                <h3>Email Us</h3>
                <p>aon@copystarr.com</p>
                <span>We respond within 24 hours</span>
              </InfoDetails>
            </InfoCard>
            
            <InfoCard>
              <InfoIcon>
                <i className="fas fa-phone"></i>
              </InfoIcon>
              <InfoDetails>
                <h3>Support</h3>
                <p>support@copystarr.com</p>
                <span>Mon-Fri, 9AM-6PM EST</span>
              </InfoDetails>
            </InfoCard>
            
            <InfoCard>
              <InfoIcon>
                <i className="fas fa-clock"></i>
              </InfoIcon>
              <InfoDetails>
                <h3>Response Time</h3>
                <p>24 Hours</p>
                <span>Average response time</span>
              </InfoDetails>
            </InfoCard>
            
            <SocialLinks>
              <h3>Follow Us</h3>
              <SocialIcons>
                <SocialLink href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </SocialLink>
              </SocialIcons>
            </SocialLinks>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit} className="contact-form">
            <FormTitle>Send us a message</FormTitle>
            <FormGroup>
              <FormInput
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormInput
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormTextarea
                name="message"
                placeholder="Tell us about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit">
              Send Message
              <i className="fas fa-paper-plane"></i>
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </div>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.section`
  background: linear-gradient(135deg, #0d1b2a 0%, #1b2735 100%);
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.1);
    border-color: rgba(212, 175, 55, 0.3);
  }
`;

const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0d1b2a;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const InfoDetails = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #d4af37;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: white;
    margin-bottom: 0.3rem;
    font-weight: 500;
  }

  span {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SocialLinks = styled.div`
  margin-top: 1rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #d4af37;
    margin-bottom: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4af37;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(212, 175, 55, 0.3);

  &:hover {
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    color: #0d1b2a;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
  }
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #d4af37;
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #0d1b2a;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  letter-spacing: 0.3px;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
