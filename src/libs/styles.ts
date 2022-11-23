import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: '#333',
    blue: {
      alpha: 'rgba(131, 172, 248, 0.1)',
      light: '#83acf8',
      deep: '#223678',
    },
  },
  fonts: {
    body: '"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-seri',
  },
  lineHeights: {
    taller: 1.8,
  },
  shadows: {
    outline: '0 0 0 3px var(--chakra-colors-blue-200)',
  },
  styles: {
    global: {
      body: {
        lineHeight: 'var(--chakra-lineHeights-taller)',
        overflowY: 'scroll',
      },
    },
  },
  breakpoints: {
    sm: '375px',
    md: '520px',
    lg: '960px',
    xl: '1280px',
  },
})
const customTheme = extendTheme({ theme })

export default theme
