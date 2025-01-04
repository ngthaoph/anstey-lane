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
    backgroundColor: "seashell",
    color: vars.colors.brandDark,
    border: "1px solid",
  },
  border: "1px",
  outline: "none",
  padding: "10px 38px 10px",
  textTransform: "uppercase",
  margin: "5px",

  selectors: {
    // Also target React-Bootstrap's `active` class if necessary
    "&.active": {
      backgroundColor: "seashell",
      color: vars.colors.brandDark,
      border: "red ",
    },
  },
});
