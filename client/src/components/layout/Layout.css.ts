//creating a style object

//converting css to javascript
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  //we're in javasript mode
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const appContent = style({
  // margin: `${vars.space["2x"]}`,
  flex: 1, //0 and 1
});
