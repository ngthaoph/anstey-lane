import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/themes.css';

export const cartCanvas = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.complementary,
  transition: "all 0.3s ease-in-out",
  '@media': {
    'screen and (max-width: 600px)': {
      width: "100% !important",
    }
  }
})

export const cartHeader = style({
  padding: `${vars.space['2x']} ${vars.space['4x']}`,
  marginTop: vars.space['2x'],
  fontFamily: vars.fonts.brand,
})

export const cartTitle = style({
  fontSize: vars.fontSizes['4x'],
  fontWeight: vars.fontWeights.bolder,
  textTransform: "uppercase",
})

export const cartBody = style({
  fontFamily: vars.fonts.body,
})