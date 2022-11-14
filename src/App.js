import React, { Component } from 'react';
import { Navigator, Main, Footer } from './components';

import styled from 'styled-components';

const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const NavBar = styled.div`
  padding-top: 5rem;
`

const MainPage = styled.div`
  padding: 3rem 0rem;
  min-height: 60vh;
  position: relative;
`

const Foot = styled.div`
  margin-top: auto;
`

class App extends Component {
  render() {
    return (
      <Content>
        <NavBar><Navigator /></NavBar>
        <MainPage><Main /></MainPage>
        <Foot><Footer /></Foot>
      </Content>
    );
  }
}

export default App;