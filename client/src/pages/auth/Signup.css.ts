import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css"; //general theming

export const container = style({
  marginTop: "1rem",
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
});
export const mainContainer = style({
  display: "flex",

  flexDirection: "row",

  alignContent: "stretch",

  flex: 1,
  "@media": {
    // For mobile screens, stack cards vertically
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      overflowX: "hidden",
    },
  },
});

export const halfContainer = style({
  width: "50%",

  maxWidth: "50%",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    // For mobile screens, stack cards vertically
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});
export const image = style({
  "@media": {
    // For mobile screens, make images smaller (or adjust the max width)
    "screen and (max-width: 480px)": {
      height: "100%",
      width: "100%",
    },
    // For tablet screens, adjust image size
    "screen and (max-width: 768px)": {
      height: "100%",
      width: "100%",
    },
    // For desktop screens, keep it at full width
    "screen and (max-width: 769px)": {
      height: "100%",
      width: "100%",
    },
  },
});
export const leadCard = style({
  background: vars.colors.grey200,
  minWidth: "25w",
  color: vars.colors.complementary,
  margin: "auto",
  textAlign: "center",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
});

export const cardTitle = style({
  color: vars.colors.brand,
  fontSize: "2em",
  paddingBottom: "1rem",
  fontWeight: vars.fontWeights.bold,
});
export const userNav = style({
  marginTop: "1rem",
  paddingTop: "1rem",
  fontSize: "0.9em",
  fontStyle: "italic",
});

globalStyle(`${userNav} a`, {
  textDecoration: "none",
  color: vars.colors.brand,
});

globalStyle(`${userNav} a:hover`, {
  color: vars.colors.brandDark,
  textDecoration: "underline",
});
