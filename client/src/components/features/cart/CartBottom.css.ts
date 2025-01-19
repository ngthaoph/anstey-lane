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
export const container = style({
  display: "flex",
  flex: 1,

  flexDirection: "row",
  alignItems: "flex-start",
});

export const cartContainerLink = style({
  cursor: "pointer",
  textDecoration: "none",
  textDecorationColor: vars.colors.brandDark,
  alignContent: "center",

  fontFamily: vars.fonts.bold,
  color: vars.colors.brand,
});
