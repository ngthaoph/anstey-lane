import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const disclaimer = style({
  fontSize: vars.fontSizes["2x"],
  lineHeight: "3em",
  fontWeight: vars.fontWeights.normal,

  textAlign: "center",
  backgroundColor: vars.colors.secondary,
  color: vars.colors.fontLight,
  justifyContent: "center",
  display: "flex",
  flex: 1,
});
