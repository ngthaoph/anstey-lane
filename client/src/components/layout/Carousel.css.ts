import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const embla = style({
  overflow: "hidden",
});

export const emblaContainer = style({
  display: "flex",
});

export const emblaSlide = style({
  flex: "0 0 100%",
});

export const emblaImage = style({
  flex: "0 0 100%",
});

export const responsiveImage = style({
  "@media": {
    // On mobile devices, make images smaller (or adjust the max width)
    "screen and (max-width: 480px)": {
      height: "100%",
      width: "100%",
    },
    // For tablet screens, adjust image size
    "screen and (max-width: 768px)": {
      height: "100%",
      width: "100%",
    },
    // For desktop screens, keep it at full width
    "screen and (max-width: 769px)": {
      height: "100%",
      width: "100%",
    },
  },
});
