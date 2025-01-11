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
  position: "relative",

  display: "flex",

  flexWrap: "wrap",

  borderTop: "solid",

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
  borderRight: "1.5px solid #2b2c30",
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
  ":hover": {
    borderTop: "2px solid #661a34", // Red border when active
    color: "#661a34", // Optional: change text color on hover
  },
  selectors: {
    "&.active": {
      borderTop: "2px solid #661a34",
    },
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontFamily: "GT Walsheim",
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
          backgroundColor: "#661a34",
        },
      },
    },
  },
});

export const aLink = style({
  display: "block",
  padding: "28px 10px",
  width: "100%",
  color: "#2b2c30",
  textDecoration: "none",
  selectors: {
    "&.active": {
      borderTop: "2px solid #661a34",
      color: "pink",
      backgroundColor: "#661a34",
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
