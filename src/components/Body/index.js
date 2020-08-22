import React from "react";
import styled from "styled-components";

const magnitude = 40;
const leftCenter = React.createRef();
const rightCenter = React.createRef();

const StyledBody = styled.div`
  width: 100%;
  overflow-y: scroll;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow-y:scroll;
`;

const EyesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 86%;
`;

const Eye = styled.div`
border-radius:50%;
height: 200px;
width: 200px;
background-color: #FFF;
margin: 0px 1rem;
position: relative;
display:flex;
justify-content:center;
align-items:center;
`;

const EyeColor = styled.div`
position: relative;
height: 5rem;
  width: 5rem;
  border-radius: 50%;
  background-color: blue;
  display:flex;
  justify-content:center;
  align-items:center;
  left: ${({ position }) => position?.x}px;
  top: ${ ({ position }) => position?.y}px;
`;

const Pupil = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 2.5rem;
width: 2.5rem;
border-radius: 50%;
background-color: #000;
`;

const CenterPoint = styled.div`
position:absolute;
top:50%;
left:50%;
height: 0;
width: 0;
`;

const Body = ({ mouse }) => {
  const leftPos = { x: leftCenter.current?.getBoundingClientRect().left + leftCenter.current?.getBoundingClientRect().width / 2, y: leftCenter.current?.getBoundingClientRect().top + leftCenter.current?.getBoundingClientRect().height / 2 };
  const rightPos = { x: rightCenter.current?.getBoundingClientRect().left + rightCenter.current?.getBoundingClientRect().width / 2, y: rightCenter.current?.getBoundingClientRect().top + rightCenter.current?.getBoundingClientRect().height / 2 / 2 };
  const leftDiff = { x: mouse.x - leftPos.x, y: mouse.y - leftPos.y };
  const rightDiff = { x: mouse.x - rightPos.x, y: mouse.y - rightPos.y };
  const leftAngle = Math.atan2(leftDiff.y, leftDiff.x);
  const rightAngle = Math.atan2(rightDiff.y, rightDiff.x);
  const leftPupilPos = { x: Math.cos(leftAngle) * magnitude, y: Math.sin(leftAngle) * magnitude }
  const rightPupilPos = { x: Math.cos(rightAngle) * magnitude, y: Math.sin(rightAngle) * magnitude }

  return (
    <StyledBody posFromTop={0} >
      <EyesContainer>
        <Eye>
          <CenterPoint ref={leftCenter} />
          <EyeColor position={leftPupilPos}>
            <Pupil>

            </Pupil>
          </EyeColor>
        </Eye>
        <Eye>
          <CenterPoint ref={rightCenter} />
          <EyeColor position={rightPupilPos}>
            <Pupil></Pupil>
          </EyeColor>
        </Eye>
      </EyesContainer>
    </StyledBody>
  );
};

export default Body;
