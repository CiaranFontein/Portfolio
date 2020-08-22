import * as React from "react";

import { Body, Footer, Header } from "./components";

import styled from "styled-components";
import useMouse from '@react-hook/mouse-position'

const StyledAppContainer = styled.div`
height: 100%;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
`;

const StyledApp = styled.div`
max-width: 86%;
height: 100%;
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
flex: 1;
`;

function App() {

  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  return (
    <StyledAppContainer ref={ref}>
      <StyledApp>
        <Header />
        <Body mouse={mouse} />
        <Footer />
      </StyledApp>
    </StyledAppContainer>
  );
}

export default App;
