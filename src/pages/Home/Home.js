import React from "react";
import styled from "styled-components";

const Home = (props) => {
  return <HomeWrapper>
    {props.children}
  </HomeWrapper>
}

export default Home;

const HomeWrapper = styled.div`
  
`;