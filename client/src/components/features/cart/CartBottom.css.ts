import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";
export const orderNote = style({
  width: "300px",
  height: "100px",
});
export const cartBold = style({
  fontFamily: vars.fonts.bold,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.brandDark,
});
