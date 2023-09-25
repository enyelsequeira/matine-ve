import { style } from "@vanilla-extract/css";
import { vars } from "../../../vars";

export const title = style({
  color: vars.colors.black,
  fontSize: 100,
  fontWeight: 900,
  letterSpacing: -2,

  selectors: {
    [vars.darkSelector]: {
      color: vars.colors.white,
    },
  },

  "@media": {
    [vars.smallerThan("md")]: {
      fontSize: 50,
    },
  },
});
