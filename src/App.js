import React from 'react';
import styled from 'styled-components';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home/Home';

function App() {
  return (
    <AppWrapper>
      <Header></Header>
      <Home>
        <>
          <Hero></Hero>
          {/* <Footer></Footer> */}
        </>
      </Home>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  background: #333333;
`;
