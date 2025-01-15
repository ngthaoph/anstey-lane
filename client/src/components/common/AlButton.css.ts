import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
import { createGlobalTheme } from "@vanilla-extract/css";

// React-Bootstrap buttons may add an `.active` class for active state
export const button = style({
  fontFamily: vars.fonts.button,
  fontSize: "20px",
  lineHeight: "24px",
  color: vars.colors.buttonText,
  background: vars.colors.buttonDark,
  ":hover": {
    backgroundColor: vars.colors.buttonHover,
    color: vars.colors.buttonText,
  },
  border: "1px",
  outline: "none",
  padding: "10px 38px 10px",
  textTransform: "uppercase",
  margin: "5px",

  selectors: {
    // Also target React-Bootstrap's `active` class if necessary
    "&.active": {
      backgroundColor: vars.colors.buttonDark,
      color: vars.colors.buttonActiveText,
    },
  },
});
