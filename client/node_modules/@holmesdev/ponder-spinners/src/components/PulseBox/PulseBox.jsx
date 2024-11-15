import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation for morphing between square (with rounded corners) and circle
const morph = keyframes`
  0%, 50%, 100% {
    border-radius: 12px; /* Square with rounded corners */
    transform: scale(1); /* Default size */
  }
  25% {
    border-radius: 50%; /* Circle shape */
    transform: scale(0.7); /* Smaller circle */
  }
`;

// Styled components for the container and boxes
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const ScaledContainer = styled.div`
  transform: scale(0.5); /* Adjust this scale value to change size */
  transform-origin: center; /* Scale from the center */
`;

export const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "#333"};
  border-radius: 12px;
  animation: ${morph} 4s infinite ease-in-out;
  animation-delay: ${(props) => props.delay || "0s"};
`;

export const PulseBox = ({
  colors = ["#22333B", "#FF6F61", "#ffa9a1", "#22333B"],
}) => {
  return (
    <ScaledContainer>
      <Container>
        <Box color={colors[0]} delay="0s" />
        <Box color={colors[1]} delay="1s" />
        <Box color={colors[2]} delay="3s" />
        <Box color={colors[3]} delay="2s" />
      </Container>
    </ScaledContainer>
  );
};

export default PulseBox;
