const abstract = {
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
    800: "#022B3A",
    900: "#002C3A",
  },
}

const specific = {
  content: 'gray.500'
}

export const colors = {
  ...abstract,
  ...specific
};
