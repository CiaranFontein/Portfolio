import React from "react";
import styled from "styled-components";

const Corner = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 50vh solid red;
  border-left: 50vw solid transparent;
`;

const Footer = () => {
  return <Corner>The Footer</Corner>;
};

export default Footer;
