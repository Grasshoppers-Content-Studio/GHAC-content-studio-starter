import { mode } from "./presets";

const modes = {
  playful: {
    "2xl": "1rem",
    "3xl": "1.5rem",
    base: "0.25rem",
    full: "9999px",
    lg: "0.5rem",
    md: "0.375rem",
    none: "0",
    sm: "0.125rem",
    xl: "0.75rem",
  },
  neutral: {
    "2xl": ".75rem",
    "3xl": "1rem",
    base: "0.175rem",
    full: "9999px",
    lg: "0.375rem",
    md: "0.25rem",
    none: "0",
    sm: "0.125rem",
    xl: "0.5rem",
  },
  professional: {
    "2xl": "0",
    "3xl": "0",
    base: "0",
    full: "0",
    lg: "0",
    md: "0",
    none: "0",
    sm: "0",
    xl: "0",
  },
};

export const radii = modes[mode];
