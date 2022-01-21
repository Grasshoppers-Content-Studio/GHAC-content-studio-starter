// START PRESETS \\
const primary = "primary.500";
const primaryHover = "primary.400";
const neutral = "gray.600";
const neutralHover = "gray.800";
// END PRESETS \\

export const Link = {
  baseStyle: {
    fontWeight: 500,
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    regular: {
      color: primary,
      _hover: {
        color: primaryHover,
      },
    },
    gray: {
      color: neutral,
      _hover: {
        color: neutralHover,
        textDecoration: "none",
      },
    },
    headless: {
      textDecoration: "none",
      _hover: {
        textDecoration: "none",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "regular",
  },
};
