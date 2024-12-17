import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

// React-Bootstrap buttons may add an `.active` class for active state
export const button = style({
  fontFamily: "JetBrains Mono",
  fontSize: "20px",
  lineHeight: "24px",
  color: "#ffffff",
  background: vars.colors.brandDark,
  ":hover": {
    backgroundColor: vars.colors.primary,
    color: vars.colors.brandDark,
  },
  border: "1px solid #ffffff",
  outline: "none",
  padding: "12px 42px 18px",
  textTransform: "uppercase",
  borderRadius: "34px",

  // Apply active styles directly
  selectors: {
    "&:active": {
      backgroundColor: "seashell",
      color: "pink",
    },
    // Also target React-Bootstrap's `active` class if necessary
    "&.active": {
      backgroundColor: "seashell",
      color: vars.colors.brandDark,
      border: "seashell",
    },
  },
});
