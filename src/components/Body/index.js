import CiaranNoEyesImage from "../../assets/CiaranNoEyes.png";
import EyeWhites from "../../assets/EyeWhites.png";
import LeftEyeImage from "../../assets/LeftEye.png";
import React from "react";
import RightEyeImage from "../../assets/RightEye.png";
import styled from "styled-components";

const magL = 2;
const magR = 2.8;
const magX = 1.6;
const magY = 1;
const leftCenter = React.createRef();
const rightCenter = React.createRef();

const StyledBody = styled.div`
  width: 100%;
  height:100%;
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow-y: hidden;
`;

const CiaranImageContainer = styled.div`
position: 'relative';
display:flex;
height:100%;
bottom:0px;
`;

const CiaranCutoutChildren = styled.div`
position:relative;
display:flex;
height: 100%;
`;

const LeftEye = styled.img`
left: ${({ position }) => position?.x + 320}px;
  top: ${({ position }) => position?.y + 226}px;
  height: 24px;
  width: 24px;
  position:absolute;
  z-index: 0;
  object-fit:contain;
  
`;
const RightEye = styled.img`
left: ${({ position }) => position?.x + 243}px;
  top: ${({ position }) => position?.y + 231}px;
z-index:0;
height:26px;
width:26px;
position:absolute;
object-fit:contain;
`;

const LeftCenterPoint = styled.div`
position:absolute;
top:235px;
left:330px;
height: 1px;
width: 1px;
`;

const RightCenterPoint = styled.div`
position:absolute;
top:242px;
left:254px;
height: 1px;
width: 1px;
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
        <img alt={'ciaran with following eyes'} src={CiaranNoEyesImage} style={{ zIndex: 1, height: 1000, objectFit: "contain", position: 'absolute' }} />
        <CiaranCutoutChildren>
          <img alt={'my sclera'} src={EyeWhites} style={{ zIndex: -1, top: 135, left: 228, height: 210, width: 130, objectFit: "contain", position: 'absolute' }} />
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
