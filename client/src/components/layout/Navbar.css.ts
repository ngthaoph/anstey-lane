import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const navbarContainer = style({
  display: "flex",
  alignItems: "center",

  position: "relative",

  width: "100%",

  backgroundColor: vars.colors.complementary,
  borderBottom: "1px solid transparent",

  flexDirection: "row",
  height: "70px",
});
export const navbar = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const headerRight = style({
  display: "flex",
  paddingRight: "30px",
  width: `${(100 / 3) * 2}%`,
  height: "50px",
});

export const headerRightContainer = style({
  display: "flex",
  flex: 1,
  justifyContent: "end",

  padding: vars.gap["4x"],

  fontSize: vars.fontSizes["5x"],
  alignItems: "center",
  fontWeight: vars.fontWeights.bold,
  alignContent: "center",
  gap: vars.gap["3x"],
  fontFamily: vars.fonts.button,
  color: vars.colors.fontLight,
});

export const logoContainer = style({
  width: "100%",
  height: "100%",

  paddingLeft: `${100 / 3}%`,
});

export const cartCount = style({
  position: "sticky",

  fontSize: "13px",
});
