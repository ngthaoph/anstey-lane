import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";

export const container = style({
  maxWidth: "1440px",
  margin: "10px auto",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between" /* or space-around / space-evenly */,
  gap: "20px" /* Add gap between items */,
});

export const cartContainerH1 = style({
  lineHeight: "1.25",
  fontSize: "50px",
  letterSpacing: "-1.6px",
  fontFamily: vars.fonts.brand,
});

export const cartContainerLink = style({
  cursor: "pointer",
  textDecoration: "none",
  textDecorationColor: vars.colors.brandDark,

  fontFamily: vars.fonts.bold,
});

export const tableHeader = style({
  fontSize: "19px",
  lineHeight: "1.4737",
  textTransform: "inherit",
  borderBottom: "1px solid #2b2c30",
  padding: "18px 18px",
  textAlign: "left",
});
