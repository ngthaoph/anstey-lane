import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  display: "flex",
  backgroundSize: "cover",

  position: "relative",
  backgroundPosition: "center",
  width: "100%",
  height: "300px",

  alignItems: "center",
  padding: vars.gap["3x"],
});
export const contentContainer = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "flex-end",
  padding: vars.gap["4x"],
});
export const contentContainerItems = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  color: "white",
  fontFamily: vars.fonts.bold,
});
