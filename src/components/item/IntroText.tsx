import React from 'react'
import { Box, Text, Image, Spacer } from '@chakra-ui/react'
import { useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TextBox } from '../../libs/chakraBox'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export function IntroText() {
  const [ref, inView] = useInView({
    threshold: 0.6,
  })
  const { scrollY } = useViewportScroll()
  const screenHeight = document.documentElement.clientHeight
  const opacityText = useTransform(scrollY, [0, screenHeight / 3, screenHeight / 2], [1, 1, 0])
  return (
    <>
      <TextBox
        style={{ opacity: opacityText }}
        position="absolute"
        top={{ base: '15vh', md: '15vh' }}
        left="0"
        right="0"
        bottom="0"
      >
        <Box
          as="div"
          letterSpacing="1.5px"
          textAlign="center"
          lineHeight={{ base: '2rem', md: '3rem' }}
          color="#FBF73A"
        >
          <Text
            fontSize={{ base: '0.8rem', md: '1.5rem' }}
            fontWeight="600"
            pb={{ base: 6, md: '3rem' }}
            className="intro_author"
          >
            Produced by Kuro32183
          </Text>
          <Text fontSize={{ base: '3.5rem', sm: '4.5rem', md: '8rem' }} fontWeight="800" className="intro_text">
            Into <Spacer pt={{ base: '1.5rem', sm: '2.5rem', md: 20 }} />
            the <Spacer pt={{ base: '1.5rem', sm: '2.5rem', md: 20 }} />
            Wild
          </Text>
        </Box>
      </TextBox>
    </>
  )
}

export function DesktopText() {
  return (
    <Box
      position="absolute"
      top={{ md: '25%' }}
      left={{ md: '35%' }}
      fontSize={{ base: '3rem', lg: '6.5rem' }}
      fontWeight="400"
    >
      <Box as="div" letterSpacing="2.5px" top="0%" className="text_container">
        <Box pr={2} className="wrapper">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
          <span className="fill-text" data-text="Into">
            Into
          </span>
        </Box>
        <Box className="wrapper">
          <a></a>
          <a></a>
          <a></a>
          <a></a>
          <span className="fill-text" data-text="the">
            the
          </span>
        </Box>
      </Box>
      <Box className="wrapper" position="absolute" top="55%">
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <span className="fill-text" data-text="Wild...">
          Wild...
        </span>
      </Box>
    </Box>
  )
}
