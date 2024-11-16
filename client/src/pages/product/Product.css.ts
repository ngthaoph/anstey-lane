import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  display: "flex",
  flexWrap: "wrap",
});

export const suitableForContainer = style({
  float: "left",
  width: "100%",
  paddingTop: "24px",
  borderTop: "1px solid #b1bec1",
  marginBottom: "40px",
});

export const productFormContainer = style({
  backgroundColor: "#fff",
  border: "1px solid #b1bec1",
  padding: "24px 16px",
  marginBottom: "72px",
});
export const productWrapper = style({
  maxWidth: "calc(50% + 40px)",
  width: "calc(50% - 20px)",
  padding: "50px 50px",
  flex: 1,
});
export const goBackTab = style({
  borderBottom: "1px solid",
  paddingBottom: "6px",
  marginBottom: "40px",
  fontSize: "15x",
  display: "flex",
});
