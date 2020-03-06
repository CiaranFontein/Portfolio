import React from "react";
import styled from "styled-components";
import { Header, Body, Footer } from "./components";
import { flexCenter } from "./styles";

const StyledApp = styled.div`
  ${flexCenter}
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Body />
      <Footer />
    </StyledApp>
  );
}

export default App;
