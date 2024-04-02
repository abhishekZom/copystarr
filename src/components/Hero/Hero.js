import React from "react";
import styled from "styled-components";
import IntroCard from "../IntroCard";
import SampleWork from "../SampleWork";
import Testimonials from '../Testimonials';

const Hero = () => {
  return <HeroWrapper>
    <IntroCard></IntroCard>
    <Testimonials></Testimonials>
    <SampleWork></SampleWork>
  </HeroWrapper>
}

export default Hero;

const HeroWrapper = styled.div`
  margin-top: 12vh;
  padding: 1rem;
  /* background: #777777; */
  background-image: url(BackgroundImg);
  background-repeat: repeat;
  height: auto;
`;
