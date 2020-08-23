import React from "react";
import styled from "styled-components";
import textBackground from "../../assets/textBackground.gif";
import textBackground2 from "../../assets/traffic.gif";
const Container = styled.div`
display:flex;
flex-direction:column;
height:200px;
width:100%;
`;

const FancyText = styled.div`
z-index:-5;
position: absolute;
height:100%;
background-image: url(${textBackground});
	background-size: cover;
	color: transparent;
	-moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip:text;
	text-transform: uppercase;
	font-size: 180px;
  font-weight:bold;
  object-fit:contain;
  opacity: 0.5;
  &:after{
    position:absolute;
    top:20px;
    left:20px;
    object-fit:contain;
    -moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip:text;
    background-image: url(${textBackground2});
    content: 'CIARAN FONTEIN'
  }
`;

const FancyTextContainer = styled.div`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
letter-spacing: 50px;
`;

const Header = () => {
  return (
    <Container>
      <FancyTextContainer>
        <FancyText>Ciaran Fontein</FancyText>
      </FancyTextContainer>
    </Container>
  );
};

export default Header;
