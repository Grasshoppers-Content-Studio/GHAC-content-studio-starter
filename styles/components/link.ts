

export const Link = {
  baseStyle: {
    fontWeight: 500
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    regular: {
      color: "primary.500",
      _hover: {
        color: "primary.400",
      },
    },
    gray: {
      color: "gray.600",
      _hover: {
        color: "gray.800",
        textDecoration: "none",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "regular",
  },
};
