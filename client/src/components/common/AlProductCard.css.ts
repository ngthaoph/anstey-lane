import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const productCard = style({
  color: vars.colors.brand,
  width: "200px",

  margin: "20px",
  backgroundColor: vars.colors.primary,
  border: "none",
  alignItems: "center",
  flexGrow: 1,
  padding: "10px",

  display: "flex",
  flexDirection: "column",
  transition: "all ease-in-out 0.3s",
  ":hover": {
    transform: "scale(1.05)",
  },
});
