import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  //we're in javasript mode
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  overflowX: "auto",
});

export const appContent = style({
  flex: "1 1 100%", // Default: grow and shrink to fill space, take up 100% width
  width: "100%",
  "@media": {
    // On screens smaller than 768px, change the layout as necessary
    "screen and (max-width: 768px)": {
      flex: "1 1 100%", // Full width for mobile
    },
    // For medium screens (e.g., tablets)
    "screen and (max-width: 1024px)": {
      flex: "1 1 80%", // Allow for smaller width on medium-sized screens
    },
    // For large screens (e.g., desktops)
    "screen and (min-width: 1024px)": {
      flex: "1 1 60%", // Allow for larger width on big screens
    },
  },
});
export const mainContent = style({
  display: "flex",
  flexDirection: "column", // Stack header, content, and footer vertically
  flex: "1 1 100%", // Allow the content to grow and shrink as needed
  width: "100%",
  overflowX: "auto",
});

// import { style } from "@vanilla-extract/css";
// import { vars } from "../../styles/themes.css";

// export const app = style({
//   //we're in javasript mode
//   fontFamily: vars.fonts.body,
//   backgroundColor: vars.colors.primary,
//   display: "flex",
//   flexDirection: "column",
//   minHeight: "100vh",

//   width: "100%",
//   overflowX: "hidden",
// });

// export const appContent = style({
//   flex: "1 1 100%", // Default: grow and shrink to fill space, take up 100% width
//   width: "100%",
//   "@media": {
//     // On screens smaller than 768px, change the layout as necessary
//     "screen and (max-width: 768px)": {
//       flex: "1 1 100%", // Full width for mobile
//     },
//     // For medium screens (e.g., tablets)
//     "screen and (max-width: 1024px)": {
//       flex: "1 1 80%", // Allow for smaller width on medium-sized screens
//     },
//     // For large screens (e.g., desktops)
//     "screen and (min-width: 1024px)": {
//       flex: "1 1 60%", // Allow for larger width on big screens
//     },
//   },
// });
// export const mainContent = style({
//   display: "flex",
//   flexDirection: "column", // Stack header, content, and footer vertically
//   flex: "1 1 100%", // Allow the content to grow and shrink as needed
//   width: "100%",
//   overflowX: "hidden",
// });
