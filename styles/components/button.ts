const primaryBase = {
  bg: "primary.500",
  color: "white",
  _hover: {
    bg: "primary.400",
  },
  ml: "8px !important"
};

export const Button = {
  baseStyle: {
    borderRadius: "90px",
  },
  sizes: {
    sm: {},
    md: {},
    lg: {},
  },
  variants: {
    primary: { ...primaryBase },
    link: {
      p: "12px",
      color: "primary.500",
      _hover: { textDecoration: null, background: "primary.100" },
    },
  },
  defaultProps: {
    size: "md",
    variant: "",
  },
};
