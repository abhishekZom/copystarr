import React from "react";
import styled from "styled-components";
import BackgroundImg from '../../images/copystarr_background.jpeg';
import IntroCard from "../IntroCard";
import Testimonials from '../Testimonials';


const Hero = () => {
  return <HeroWrapper>
    <IntroCard></IntroCard>
    <Testimonials></Testimonials>
  </HeroWrapper>
}

export default Hero;

const HeroWrapper = styled.div`
  margin-top: 6vh;
  padding: 2rem;
  background-image: url(BackgroundImg);
  background-repeat: repeat;
  height: auto;
`;