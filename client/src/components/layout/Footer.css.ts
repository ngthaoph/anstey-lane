import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  padding: "1rem",
  textAlign: "center",
  color: vars.colors.primary,
  backgroundColor: vars.colors.complementary,
  flex: "none",
});
