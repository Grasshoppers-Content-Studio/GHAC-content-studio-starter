import { ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
import { buttonStyles as Button } from '../styles/buttonStyles'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    100: '#e9effa',
    200: '#a7bdeb',
    300: '#7a9de1',
    400: '#4e7cd7',
    500: '#225BCD',
    600: '#1b49a4',
    700: '#14377b',
    800: '#0e2452',
    900: '#030914',
  },
}

const components = {
  Button,
  Container: {
    sizes: {
      md: {
        maxWidth: '1080px',
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
}

const theme = extendTheme({ colors, components })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
