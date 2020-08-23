import CiaranNoEyesImage from "../../assets/CiaranNoEyes.png";
import EyeWhites from "../../assets/EyeWhites.png";
import LeftEyeImage from "../../assets/LeftEye.png";
import React from "react";
import RightEyeImage from "../../assets/RightEye.png";
import styled from "styled-components";

const magL = 1.8;
const magR = 2.5;
const magX = 1.85;
const magY = 1;
const leftCenter = React.createRef();
const rightCenter = React.createRef();

const StyledBody = styled.div`
  width: 100%;
  height:100%;
  position:absolute;
  top:0px;
`;

const CiaranImageContainer = styled.div`
position: relative;
height:100%;
`;

const CiaranCutoutChildren = styled.div`
position:relative;
height:100%;
`;

const LeftEye = styled.img`
left: ${({ position }) => position?.x + 825}px;
  bottom: ${({ position }) => -position?.y + 524}px;
  height: 19px;
  width: 19px;
  position:absolute;
  z-index: 0;
  object-fit:contain;
  transition: top,left 0.4s;
  transition-delay: 0.1s;
`;
const RightEye = styled.img`
left: ${({ position }) => position?.x + 770}px;
  bottom: ${({ position }) => -position?.y + 519}px;
z-index:0;
height:20px;
width:20px;
position:absolute;
object-fit:contain;
transition: top,left 0.4s;
transition-delay: 0.1s;
`;

const LeftCenterPoint = styled.div`
position:absolute;
bottom:531px;
left:833px;
height: 0px;
width: 0px;
`;

const RightCenterPoint = styled.div`
position:absolute;
bottom:528px;
left:778px;
height: 0px;
width: 0px;
`;

const Body = ({ mouse }) => {
  const leftPos = { x: leftCenter.current?.getBoundingClientRect().left + leftCenter.current?.getBoundingClientRect().width / 2, y: leftCenter.current?.getBoundingClientRect().top + leftCenter.current?.getBoundingClientRect().height / 2 };
  const rightPos = { x: rightCenter.current?.getBoundingClientRect().left + rightCenter.current?.getBoundingClientRect().width / 2, y: rightCenter.current?.getBoundingClientRect().top + rightCenter.current?.getBoundingClientRect().height / 2 / 2 };
  const leftDiff = { x: mouse.x - leftPos.x, y: mouse.y - leftPos.y };
  const rightDiff = { x: mouse.x - rightPos.x, y: mouse.y - rightPos.y };
  const leftAngle = Math.atan2(leftDiff.y, leftDiff.x);
  const rightAngle = Math.atan2(rightDiff.y, rightDiff.x);
  const leftPupilPos = { x: Math.cos(leftAngle) * magL * magX, y: Math.sin(leftAngle) * magL * magY }
  const rightPupilPos = { x: Math.cos(rightAngle) * magR * magX, y: Math.sin(rightAngle) * magR * magY }

  return (
    <StyledBody posFromTop={0} >
      <CiaranImageContainer>
        <img alt={'ciaran with following eyes'} src={CiaranNoEyesImage} style={{ zIndex: 1, height: 700, left: 600, bottom: 0, objectFit: "contain", position: 'absolute' }} />
        <CiaranCutoutChildren>
          <img alt={'my sclera'} src={EyeWhites} style={{
            zIndex: -1, bottom: 523, left: 763, width: 84, objectFit: "contain", position: 'absolute'
          }} />
          <LeftEye alt={'my left cornea'} src={LeftEyeImage} position={leftPupilPos} />
          <RightEye alt={'my right cornea'} src={RightEyeImage} position={rightPupilPos} />
          <LeftCenterPoint ref={leftCenter} />
          <RightCenterPoint ref={rightCenter} />
        </CiaranCutoutChildren>
      </CiaranImageContainer>
    </StyledBody>
  );
};

export default Body;
