// START PRESETS \\
const color = "gray.700";
// END PRESETS \\

export const Heading = {
  baseStyle: {
    color: color,
  },
  sizes: {},
  variants: {
    small: {
      fontSize: ["2xl", null, "3xl"],
      lineHeight: 1.1,
      fontWeight: 600,
      marginBottom: "2",
    },
    medium: {
      fontSize: ["3xl", null, "4xl"],
      lineHeight: 1.1,
      fontWeight: 600,
      marginBottom: "2",
    },
    big: {
      fontSize: ["4xl", null, "5xl"],
      lineHeight: 1.1,
      fontWeight: 600,
      marginBottom: "5",
    },
  },
  defaultProps: {
    variant: "medium",
  },
};
