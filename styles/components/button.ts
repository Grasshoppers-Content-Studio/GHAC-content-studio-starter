// START PRESETS \\
const primaryBg = "primary.500";
const primaryFront = "secondary.900";
const primaryBgHover = "primary.600";

const linkFront = "primary.500";
// END PRESETS \\

const primaryBase = {
  bg: primaryBg,
  color: primaryFront,
  textDecoration: "none",
  _hover: {
    bg: primaryBgHover,
    textDecoration: "none",
  },
};

export const Button = {
  baseStyle: {
    borderRadius: "3xl",
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
      color: linkFront,
      _hover: { textDecoration: null, background: "primary.100" },
    },
  },
  defaultProps: {
    size: "md",
    variant: "",
  },
};
