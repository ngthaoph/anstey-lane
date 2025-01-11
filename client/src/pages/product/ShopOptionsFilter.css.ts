import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
import { createGlobalTheme } from "@vanilla-extract/css";

export const shopFilter = style({
  flexWrap: "wrap",

  marginBottom: "20px",
  boxSizing: "border-box",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "46px",
    },
  },
});

export const ulFilter = style({
  display: "flex",

  flexWrap: "wrap",

  borderTop: "solid",

  margin: "0px 20px",
  padding: " 0",
  justifyContent: "space-between",
  alignItems: "center",

  "@media": {
    // For mobile screens, adjust filter layout
    "screen and (max-width: 768px)": {
      display: "flex",
      flex: 1,
      flexWrap: "wrap",
      borderTop: "none",
      margin: "20px 20px",
      alignItems: "center",
      fontFamily: vars.fonts.brand,
      fontWeight: vars.fontWeights.bold,
    },
  },
});

export const liFilter = style({
  textTransform: "uppercase",

  flex: 1,
  fontSize: "15px",
  letterSpacing: "3px",
  lineHeight: "1.2",
  justifyContent: "center",
  cursor: "pointer",
  listStyle: "none",
  textAlign: "center",
  fontFamily: vars.fonts.bold,
  fontWeight: vars.fontWeights.bold,

  selectors: {
    "&.active": {
      borderTop: "2px solid #661a34",
      backgroundColor: vars.colors.brandDark,
    },
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "12px",
      letterSpacing: ".9px",
      flex: "inherit",
      marginRight: "9px",
      marginBottom: "11px",
      borderRight: "none",

      ":hover": {
        borderTop: "2px solid #661a34",
        color: "beige",
        backgroundColor: "#661a34",
      },
      selectors: {
        "&.active": {
          borderTop: "2px solid #661a34",
          color: "pink",
          backgroundColor: vars.colors.brandDark,
        },
      },
    },
  },
});

export const aLink = style({
  display: "block",
  padding: "28px 10px",

  color: "#2b2c30",
  textDecoration: "none",
  ":hover": {
    backgroundColor: vars.colors.brand,
    color: "seashell",
  },
  selectors: {
    "&.active": {
      color: vars.colors.primary,
      backgroundColor: vars.colors.brandDark,
    },
  },

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "8px",
      border: "1px solid #2b2c30",
      selectors: {
        "&.active": {
          color: "white",
        },
      },
    },
  },
});
