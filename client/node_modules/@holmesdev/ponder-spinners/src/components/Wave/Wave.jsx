import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

// Keyframes for wave propagation (up and down motion)
const wavePropagation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled component for the SVG
const StyledSVG = styled.svg`
  width: ${(props) => props.size || "100px"};
  height: ${(props) => props.size || "100px"};
  fill: none;
  display: flex;
`;

// Styled component for the wave animation for each path
const WavePart = styled.path`
  animation: ${wavePropagation} ${(props) => props.speed || "2s"} ease-in-out
    infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  fill: ${(props) => props.fill || "black"};
  opacity: ${(props) => props.opacity || "1"};
`;

// Wave Component with customizable props
export function Wave({ size, color, opacity, speed }) {
  const defaultColor = ["#ffa9a1", "#FF6F61"];
  const fillColor = color || defaultColor;
  const defaultSpeed = "2s"; // Define the defaultSpeed here

  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width={size || "30"}
      height={size || "26"}
      viewBox="0 0 30 26"
      fill="none"
      size={size}
    >
      <g clipPath="url(#clip0_395_73)">
        {/* First part of the wave */}
        <WavePart
          d="M-20.1557 23.1651L-22.4453 24.8897C-24.419 26.3763 -25.5797 28.7038 -25.5797 31.1747V49.1513C-25.5797 53.4969 -22.0568 57.0198 -17.7112 57.0198H177.69C182.035 57.0198 185.558 53.4969 185.558 49.1513V35.4992C185.558 33.2551 184.6 31.1178 182.925 29.6248L170.864 18.8764C168.17 16.4757 164.188 16.2151 161.204 18.2441L147.546 27.5318C144.981 29.2756 141.632 29.3505 138.992 27.7229L129.697 21.9924C127.336 20.5365 124.382 20.4316 121.924 21.7163L116.746 24.4218C113.56 26.0864 109.652 25.3807 107.249 22.7074L100.606 15.315C97.1909 11.5146 91.1157 11.9265 88.2447 16.1532L84.2741 21.9989C81.7837 25.6652 76.758 26.5523 73.163 23.9599L65.3646 18.3367C62.4675 16.2476 58.5267 16.3719 55.767 18.6395L48.0492 24.9813C45.3673 27.185 41.5583 27.371 38.6745 25.4392L34.8228 22.8589C31.9672 20.9459 28.2003 21.1079 25.5194 23.2588L24.128 24.3752C21.0483 26.8461 16.6143 26.652 13.7623 23.9214L11.6883 21.9356C8.71581 19.0897 4.0525 19.0148 0.990242 21.7639L-0.363153 22.9788C-3.13543 25.4676 -7.27311 25.671 -10.2762 23.4663L-10.765 23.1074C-13.5648 21.0518 -17.3813 21.0752 -20.1557 23.1651Z"
          fill={fillColor[0]} // Apply the first color in the gradient
          speed={speed || defaultSpeed}
          delay="0s" // No delay for the first part
          opacity={opacity || 1}
        />
        {/* Second part of the wave */}
        <WavePart
          d="M-167.683 26.3393L-169.973 28.0639C-171.946 29.5506 -173.107 31.878 -173.107 34.3489V52.3255C-173.107 56.6711 -169.584 60.194 -165.238 60.194H30.1625C34.5082 60.194 38.031 56.6711 38.031 52.3255V38.6734C38.031 36.4294 37.0729 34.2921 35.3975 32.7991L23.3363 22.0507C20.6424 19.6499 16.6607 19.3893 13.6768 21.4184L0.0185394 30.706C-2.54597 32.4499 -5.89561 32.5247 -8.53546 30.8971L-17.8301 25.1666C-20.1915 23.7107 -23.1449 23.6058 -25.6036 24.8905L-30.7814 27.5961C-33.9669 29.2606 -37.8755 28.5549 -40.2779 25.8816L-46.921 18.4892C-50.3363 14.6888 -56.4115 15.1007 -59.2825 19.3274L-63.2531 25.1731C-65.7435 28.8395 -70.7692 29.7265 -74.3642 27.1342L-82.1626 21.5109C-85.0597 19.4218 -89.0005 19.5461 -91.7602 21.8138L-99.478 28.1555C-102.16 30.3592 -105.969 30.5453 -108.853 28.6134L-112.704 26.0331C-115.56 24.1202 -119.327 24.2821 -122.008 26.4331L-123.399 27.5494C-126.479 30.0203 -130.913 29.8262 -133.765 27.0956L-135.839 25.1098C-138.811 22.2639 -143.475 22.189 -146.537 24.9381L-147.89 26.1531C-150.663 28.6418 -154.8 28.8453 -157.803 26.6405L-158.292 26.2816C-161.092 24.226 -164.909 24.2495 -167.683 26.3393Z"
          fill={fillColor[1]} // Apply the second color in the gradient
          speed={speed || defaultSpeed}
          delay="0.2s" // Adding delay for wave propagation
          opacity={opacity || 1}
        />
      </g>
      <defs>
        <clipPath id="clip0_395_73">
          <rect width="30" height="26" rx="13" fill="white" />
        </clipPath>
      </defs>
    </StyledSVG>
  );
}

Wave.propTypes = {
  size: PropTypes.string,
  color: PropTypes.arrayOf(PropTypes.string),
  opacity: PropTypes.number,
  speed: PropTypes.string,
};

export default Wave;