import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper>CopyStarr</HeaderWrapper>
}

export default Header;

const HeaderWrapper = styled.div`
  z-index: 99999;
  height: 10vh;
  background: #3b5b78;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.9;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  -webkit-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  -moz-box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
  box-shadow: -10px 7px 16px -6px rgba(0,0,0,0.39);
`;