import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterWrapper>Footer</FooterWrapper>
}

export default Footer;

const FooterWrapper = styled.div`
  height: 5vh;
  background: black;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  opacity: 0.7;
`;