import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  display: "flex",

  flexDirection: "column",
  margin: "0 70px",
  maxWidth: "1440px",
});

export const catergoryContainer = style({
  display: "flex",
});

export const collectionContainer = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  margin: "auto",
  padding: "15px",
  boxSizing: "border-box",
});
