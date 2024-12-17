// styles.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const buttonFrame = style({
  fontWeight: 500,
  fontSize: "16px",
  letterSpacing: ".12em",
  lineHeight: "40px",
  height: "40px",
  textAlign: "center",

  borderRadius: "34px",
  color: "white",
  backgroundColor: vars.colors.brandDark,
  border: "1px solid #6a7982",
  cursor: "pointer",
  textTransform: "uppercase",
  textDecoration: "none",
  transition: "all .3s ease",
  minHeight: "40px",
  width: "170px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const buttonFrameElements = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});
