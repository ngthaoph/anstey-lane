import { style } from "@vanilla-extract/css";

const myStyle = style({
  "@media": {
    "screen and (max-width: 100px)": {
      padding: 10,
    },
  },
});
