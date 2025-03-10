import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const productCardContainer = style({
  width: "200px",
  backgroundColor: vars.colors.primary,

  margin: "30px",

  border: "none",
  alignItems: "center",
  flexGrow: 1,
  padding: "10px",

  display: "flex",
  flexDirection: "column",
  gap: "20px 10px",
});
export const container = style({
  display: "flex",
  backgroundColor: vars.colors.primary,
  border: "none",
});
export const productImage = style({
  transition: "all ease-in-out 0.3s",
  ":hover": {
    transform: "scale(1.05)",
  },
});

export const textContainer = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  fontFamily: vars.fonts.brand,
});
