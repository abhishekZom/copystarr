import React from 'react';
import styled from 'styled-components';

import Home from './pages/Home/Home';
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer';

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

`;
