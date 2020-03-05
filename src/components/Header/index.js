import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import "./style.css";

const Corner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 50vh solid red;
  border-right: 50vw solid transparent;
`;

const Container = styled.div`
  position: absolute;
  top: -50vh;
  font-size: 92px;
`;

const Header = () => {
  return (
    <Corner>
      <Parallax y={[-2000, 2000]}>
        <Container>
          <h1>Ciaran Fontein</h1>
        </Container>
      </Parallax>
    </Corner>
  );
};

export default Header;
