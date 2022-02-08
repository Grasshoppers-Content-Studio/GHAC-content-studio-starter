import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PageHead from "../components/head";

import { themeStyles } from "../styles";
import "../global.css";

export const theme = extendTheme(themeStyles);

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  console.log("theme: ", theme);
  return (
    <ChakraProvider theme={theme}>
      <PageHead />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
