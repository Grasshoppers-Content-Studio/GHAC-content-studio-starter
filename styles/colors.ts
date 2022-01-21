import { mode, Modes } from "./presets";

const abstract = {
  [Modes.PLAYFUL]: {
    primary: {
      100: "#ecfef2",
      200: "#c5fdd9",
      300: "#8bfbb3",
      400: "#64f99a",
      500: "#3DF881",
      600: "#37df74",
      700: "#2bae5a",
      800: "#1f7c41",
      900: "#124a27",
    },
    secondary: {
      100: "#f2f3ff",
      200: "#d7dcff",
      300: "#aeb9ff",
      400: "#93a2ff",
      500: "#788BFF",
      600: "#5461b3",
      700: "#303866",
      800: "#181c33",
      900: "#0c0e19",
    },
  },

  [Modes.NEUTRAL]: {
    primary: {
      100: "#ecfef2",
      200: "#c5fdd9",
      300: "#8bfbb3",
      400: "#64f99a",
      500: "#3DF881",
      600: "#37df74",
      700: "#2bae5a",
      800: "#1f7c41",
      900: "#124a27",
    },
    secondary: {
      100: "#f2f3ff",
      200: "#d7dcff",
      300: "#aeb9ff",
      400: "#93a2ff",
      500: "#788BFF",
      600: "#5461b3",
      700: "#303866",
      800: "#181c33",
      900: "#0c0e19",
    },
  },

  [Modes.PROFESSIONAL]: {
    primary: {
      100: "#EBF8FF",
      200: "#BEE3F8",
      300: "#63B3ED",
      400: "#4299E1",
      500: "#3182CE",
      600: "#2B6CB0",
      700: "#2C5282",
      800: "#2A4365",
      900: "#1A365D",
    },
    secondary: {
      100: "#f2f3ff",
      200: "#d7dcff",
      300: "#aeb9ff",
      400: "#93a2ff",
      500: "#788BFF",
      600: "#5461b3",
      700: "#303866",
      800: "#181c33",
      900: "#0c0e19",
    },
  },
};

const specific = {
  content: "gray.500",
};

export const colors = {
  ...abstract[mode],
  ...specific,
};
