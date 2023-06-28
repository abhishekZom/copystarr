import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper>CopyStarr</HeaderWrapper>
}

export default Header;

const HeaderWrapper = styled.div`
  z-index: 99999;
  height: 12vh;
  background: #141F29;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  /* opacity: 0.9; */
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  -moz-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
`;