import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const container = style({
  borderBottom: "1px solid #b1bec1 ",
  display: "flex" /* Use flexbox layout */,
  justifyContent:
    "space-between" /* Space the items out between the left and right */,
  alignItems: "center" /* Optional: Vertically center the items */,
  width: "100%",
  paddingBottom: "8px",
  marginBottom: "16px",
});
