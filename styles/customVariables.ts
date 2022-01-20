// used for custom variables outside of general theme
// for example, if we want to use an already existing theme color for a specific use case

import { theme } from "../pages/_app";

export const customVariables = {
  colors: {
    content: theme.colors.gray["500"],
  },
};
