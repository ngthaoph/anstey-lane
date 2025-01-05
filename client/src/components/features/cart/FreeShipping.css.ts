import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";

export const container = style({
  display: "flex",
});
export const shippingContainer = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",

  padding: "20px 20px",
  gap: "20px",
  alignItems: "center",
});

export const rangeBar = style({
  position: "relative",
  height: "35px",
});
export const shippingCalculator = style({
  fontWeight: vars.fontWeights.bold,
});
