// START PRESETS \\
const primaryBg = "primary.500";
const primaryFront = "secondary.900";
const primaryBgHover = "primary.600";

const secondaryBg = "secondary.500";
const secondaryFront = "white";
const secondaryBgHover = "secondary.600";

const linkFront = "primary.500";
// END PRESETS \\

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
    primary: {
      bg: primaryBg,
      color: primaryFront,
      textDecoration: "none",
      _hover: {
        bg: primaryBgHover,
        textDecoration: "none",
      },
    },
    secondary: {
      bg: secondaryBg,
      color: secondaryFront,
      textDecoration: "none",
      _hover: {
        bg: secondaryBgHover,
        textDecoration: "none",
      },
    },
    label: {
      cursor: "initial",
      color: "gray.300",
      _focus: {
        boxShadow: "none",
      },
    },
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
