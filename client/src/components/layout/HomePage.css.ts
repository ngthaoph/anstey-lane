import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const homeContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const aboutBanner = style({
  flex: "0 0 25%", // Takes up 25% of the container
  overflow: "hidden", // Prevent overflow of content
});

export const collectionPage = style({
  flex: "0 0 50%", // Takes up 50% of the container
  overflow: "hidden", // Prevent overflow of content
});

export const textSlideShow = style({
  flex: "0 0 25%", // Takes up 25% of the container
  overflow: "hidden", // Prevent overflow of content
});
