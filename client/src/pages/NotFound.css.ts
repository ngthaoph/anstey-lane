import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const notFoundBox = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "60vh",
  justifyContent: "center",
  marginTop: vars.space["2px"],
});

export const twinBox = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});
globalStyle(`${twinBox} h1`, {
  margin: vars.space.none,
  padding: vars.space["4x"],
  borderRight: `2px solid ${vars.colors.grey300}`,
  color: vars.colors.brand,
  fontWeight: vars.fontWeights.normal,
  fontSize: vars.fontSizes["4x"],
});
globalStyle(
  `
${twinBox} a`,
  {
    fontSize: vars.fontSizes["0x"],
    fontWeight: vars.fontWeights.normal,
    color: vars.colors.complementary,
    textDecoration: "none",
    margin: vars.space.none,
    padding: vars.space["4x"],
  }
);
globalStyle(`${twinBox} a:hover`, {
  color: vars.colors.brandDark,
});
