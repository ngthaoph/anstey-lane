import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  padding: "1rem",
  textAlign: "center",
  color: vars.colors.primary,
  fontFamily: vars.fonts.bold,
  backgroundColor: vars.colors.complementary,
  fontSize: vars.fontSizes["11x"],
  flex: "none",
  position: "sticky",
});
