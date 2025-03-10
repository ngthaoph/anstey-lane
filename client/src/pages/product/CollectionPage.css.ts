import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  display: "flex",

  flexDirection: "column",
  margin: "0 70px",
});

export const catergoryContainer = style({});

export const resultNumber = style({
  display: "flex",
  justifyContent: "center",
  fontSize: "17px",
  color: vars.colors.fontLight,
});

export const collectionContainer = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,

  padding: "20px 20px",

  boxSizing: "border-box",

  maxWidth: "100%",
});

export const seeMoreButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "20px",
  marginBottom: "20px",
});
