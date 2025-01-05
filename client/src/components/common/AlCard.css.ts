import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
import { createGlobalTheme } from "@vanilla-extract/css";

export const generalForm = style({
  minWidth: "50vw",
});

export const authForm = style({
  minWidth: "25vw",
});

export const container = style({
  marginTop: "1rem",
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
});

export const leadCard = style({
  color: vars.colors.brand,
  margin: "auto",
  padding: "2rem",

  textAlign: "center",
});

export const cardTitle = style({
  color: vars.colors.brand,
  paddingBottom: "1rem",
  fontSize: "2em",
  fontWeight: vars.fontWeights.bold,
  fontFamily: vars.fonts.brand,
});
