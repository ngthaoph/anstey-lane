import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const shopFilter = style({
  flexWrap: "wrap",

  marginBottom: "20px",
  boxSizing: "border-box",
});

export const ulFilter = style({
  position: "relative",

  display: "flex",

  flexWrap: "wrap",

  borderTop: "solid",
});

export const liFilter = style({
  textTransform: "uppercase",
  borderRight: "1px solid #2b2c30",
  flex: 1,
  fontSize: "13px",
  letterSpacing: "3px",
  lineHeight: "1.2",
  justifyContent: "center",
  cursor: "pointer",
  listStyle: "none",
  textAlign: "center",
  flexBasis: "  | auto",
});

export const aLink = style({
  display: "block",
  padding: "28px 10px",
  width: "100%",
  color: "#2b2c30",
  textDecoration: "none",
  ":active": {
    borderTop:
      "2px solid red" /* Add a red border-top when the filter is active */,
    color: "#007bff" /* Optional: change text color for active state */,
  },
});
