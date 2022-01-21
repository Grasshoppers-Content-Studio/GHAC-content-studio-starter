// START PRESETS \\
const bgColor = "white";
// END PRESETS \\


export const Popover = {
  baseStyle: {},
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    regular: {
      border: 0,
      boxShadow: "xl",
      bg: bgColor,
      p: 4,
      rounded: "xl",
      minW: "sm",
    },
  },
  defaultProps: {
    size: "md",
    variant: "regular",
  },
};
