import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const textSlideShowContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden", // Hide content when the carousel slides
  height: "100vh", // Full viewport height
});

export const embla = style({
  overflow: "hidden", // Hide the content overflowing the wrapper
});

export const emblaContainer = style({
  display: "flex",
});

export const emblaSlide = style({
  position: "relative",
  flex: "0 0 100%", // Each slide tak:es up 100% of the container
  height: "100%", // Full height for each slide
  color: vars.colors.fontDark,
  fontWeight: vars.fontWeights.bold,
  fontFamily: vars.fonts.bold,
  display: "flex",
  flexDirection: "column",
});

export const textOverlay = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // Center the text perfectly in the middle

  color: "white",
  textAlign: "center",
  padding: "20px",
  maxWidth: "80%", // Prevents the text from stretching too much
});

export const testimonialText = style({
  fontSize: vars.fontSizes["5x"],
  fontWeight: "bold",
});

export const testimonialName = style({
  fontSize: vars.fontSizes["3x"],
  fontStyle: "italic",
  alignItems: "center",
});
