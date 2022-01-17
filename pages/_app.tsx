import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { themeStyles } from "../styles";

export const theme = extendTheme(themeStyles);

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />


    </ChakraProvider>
  );
}
export default MyApp;
