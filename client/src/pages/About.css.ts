import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const aboutContainer = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch",
  padding: 0,
});

export const textContainer = style({
  backgroundColor: vars.colors.grey200,
  flex: "1 1 50%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
});

export const text = style({
  padding: "10px 10px",
});
