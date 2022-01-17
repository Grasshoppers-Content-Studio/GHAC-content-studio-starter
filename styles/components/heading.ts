export const Heading = {
  baseStyle: {
    color: "gray.700",
  },
  sizes: {},
  variants: {
    small: {
      fontSize: "4xl",
      lineHeight: 1.1,
      fontWeight: 600,
      marginBottom: "2",
    },
    medium: {
      fontSize: ["3xl", null, "5xl"],
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
