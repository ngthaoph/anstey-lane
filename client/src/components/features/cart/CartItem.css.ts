import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";

export const container = style({
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between" /* or space-around / space-evenly */,
  gap: "20px" /* Add gap between items */,
});

export const cartContainerH1 = style({
  lineHeight: "1.25",
  fontSize: "80px",
  letterSpacing: "-1.6px",
});

export const cartContainerLink = style({
  cursor: "pointer",
  textDecoration: "none",

  transition: "All .2s ease-in-out",
});
