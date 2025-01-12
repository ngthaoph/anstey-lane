import { createGlobalTheme } from "@vanilla-extract/css";
import twColors from "tailwindcss/colors";

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Inter",
    body: "Arial",
    bold: "Karla",
    button: "Sriracha",
  },
  colors: {
    // Semantic tokens
    primary: "#f2f0f3", //background color
    complementary: "#39183a", //footer header
    brand: "#3e2a41", //bold font
    brandLight: "#d6c9d8",
    brandDark: "#7a5c7a",
    buttonLight: "#d6c9d8",
    buttonDark: "#7a5c7a",
    fontHover: "#fbf9fb",

    // Color tokens
    success: twColors.green[400],
    warning: twColors.amber[400],
    error: twColors.rose[600],
    grey200: twColors.gray[200],
    grey300: twColors.gray[300],
    grey400: twColors.gray[400],
    grey500: twColors.gray[500],
    grey600: twColors.gray[600],
  },
  height: {
    "1x": "250px",
  },
  space: {
    none: "0",
    "1x": "8px",
    "2x": "16px",
    "3x": "24px",
    "4x": "32px",
    "5x": "40px",
    "6x": "48px",
  },
  fontSizes: {
    "1x": "8px",
    "2x": "12px",
    "3x": "16px",
    "4x": "20px",
    "5x": "24px",
    "15x": "72px",
  },
  fontWeights: {
    light: "300",
    normal: "500",
    bold: "600",
    bolder: "700",
  },
  gap: {
    "1x": "8px",
    "2x": "12px",
    "3x": "16px",
    "4x": "20px",
  },
});
export const vars = { ...root };
