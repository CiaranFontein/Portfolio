import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
position: fixed;
height:200px;
width: 86%;
bottom: 0;
font-size: 36px;
flex: none;
`;

const Footer = () => {
  return <StyledFooter></StyledFooter>;
};

export default Footer;
