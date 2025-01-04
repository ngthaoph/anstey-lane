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
  fontSize: "30px",
});

export const collectionContainer = style({
  display: "flex",

  padding: "20px 20px",

  boxSizing: "border-box",
  flexWrap: "wrap",
  maxWidth: "100%",
});
