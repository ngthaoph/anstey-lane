import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Circles = ({
  size = 90,
  color1 = "#FF6F61",
  color2 = "#22333B",
  color3 = "#ffa9a1",
  duration = 3,
}) => {
  const [circle1Style, setCircle1Style] = useState({});
  const [circle2Style, setCircle2Style] = useState({});
  const [circle3Style, setCircle3Style] = useState({});

  useEffect(() => {
    setCircle1Style({
      animation: `morph1 ${duration}s infinite ease-in-out`,
    });
    setCircle2Style({
      animation: `morph2 ${duration}s infinite ease-in-out`,
    });
    setCircle3Style({
      animation: `morph3 ${duration}s infinite ease-in-out`,
    });
  }, [duration]);

  const containerSize = size * 4; // Scale the container size based on the provided size

  return (
    <>
      <style>
        {`
          @keyframes morph1 {
            0%, 100% {
              transform: translate(0px, 0px);
              width: ${size}px;
              height: ${size}px;
            } 
            33% {
              transform: translate(${size * 1.66}px, -${size * 1.11}px);
              width: ${size * 0.66}px;
              height: ${size * 0.66}px;
            } 
            66% {
              transform: translate(${size * 1.11}px, ${size * 1.11}px);
              width: ${size * 1.55}px;
              height: ${size * 1.55}px;
            }
          } 

          @keyframes morph2 {
            0%, 100% {
              transform: translate(${size * 1.66}px, -${size * 1.11}px);
              width: ${size * 0.66}px;
              height: ${size * 0.66}px;
            }
            33% {
              transform: translate(${size * 1.11}px, ${size * 1.11}px);
              width: ${size * 1.55}px;
              height: ${size * 1.55}px;
            }
            66% {
              transform: translate(0px, 0px);
              width: ${size}px;
              height: ${size}px;
            }
          }

          @keyframes morph3 {
            0%, 100% {
              transform: translate(${size * 1.11}px, ${size * 1.11}px);
              width: ${size * 1.55}px;
              height: ${size * 1.55}px;
            }
            33% {
              transform: translate(0px, 0px);
              width: ${size}px;
              height: ${size}px;
            }
            66% {
              transform: translate(${size * 1.66}px, -${size * 1.11}px);
              width: ${size * 0.66}px;
              height: ${size * 0.66}px;
            }
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          width: `${containerSize}px`,
          height: `${containerSize * 0.75}px`, // Adjust height based on width for aspect ratio
          margin: "50px auto",
        }}
      >
        {/* Circle 1 */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: color1,
            ...circle1Style,
          }}
        />
        {/* Circle 2 */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: color2,
            ...circle2Style,
          }}
        />
        {/* Circle 3 */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: color3,
            ...circle3Style,
          }}
        />
      </div>
    </>
  );
};

Circles.propTypes = {
  size: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  duration: PropTypes.number,
};
