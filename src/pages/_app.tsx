import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax'
import theme from '../libs/styles'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <ChakraProvider theme={theme} resetCSS>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </ParallaxProvider>
  )
}

export default MyApp
