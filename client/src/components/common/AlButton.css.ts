import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
import { createGlobalTheme } from "@vanilla-extract/css";

// React-Bootstrap buttons may add an `.active` class for active state
export const button = style({
  fontFamily: vars.fonts.button,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#ffffff",
  background: vars.colors.buttonDark,
  ":hover": {
    backgroundColor: vars.colors.buttonLight,
    color: vars.colors.brandDark,
  },
  border: "1px",
  outline: "none",
  padding: "10px 38px 10px",
  textTransform: "uppercase",
  margin: "5px",

  selectors: {
    // Also target React-Bootstrap's `active` class if necessary
    "&.active": {
      backgroundColor: vars.colors.brandLight,
      color: vars.colors.brandDark,
    },
  },
});
