import React from "react";
import styled from "styled-components";
import BackgroundImg from '../../images/copystarr_background.jpeg';
import IntroCard from "../IntroCard";
import SampleWork from "../SampleWork";
import Testimonials from '../Testimonials';

const Hero = () => {
  return <HeroWrapper>
    <IntroCard></IntroCard>
    <SampleWork></SampleWork>
    <Testimonials></Testimonials>
  </HeroWrapper>
}

export default Hero;

const HeroWrapper = styled.div`
  margin-top: 10vh;
  padding: 1rem;
  /* background: #777777; */
  background-image: url(BackgroundImg);
  background-repeat: repeat;
  height: auto;
`;