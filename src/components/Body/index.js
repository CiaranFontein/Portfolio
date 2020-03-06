import React, { useState } from "react";
import styled from "styled-components";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const StyledBody = styled.div`
  height: 400vh;
  width: 400vw;
  top: ${props => props.posFromTop.y}px;
  transform: translateX(${props => -props.posFromTop.y}px)
    skewX(${props => -props.posFromTop.y / 40}deg);
  transition: transform 2s;
`;

const Body = () => {
  const [scrollPos, setScrollPos] = useState(0);
  console.log(scrollPos);
  useScrollPosition(
    ({ currPos }) => {
      setScrollPos(currPos);
    },
    [scrollPos],
    null,
    false,
    300
  );
  return (
    <StyledBody posFromTop={scrollPos}>
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
      The Body The Body The Body The Body The Body The Body The Body The Body
    </StyledBody>
  );
};

export default Body;
