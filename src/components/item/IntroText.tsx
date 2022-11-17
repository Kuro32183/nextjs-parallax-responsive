import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
import { useParallax } from 'react-scroll-parallax'

export function MobileText() {
  const text = useParallax<HTMLDivElement>({
    speed: -25,
  })
  return (
    <>
      <Box position="absolute" top={{ base: '10%' }} left={{ base: '10%' }} ref={text.ref}>
        <Box as="div" letterSpacing="1px" textAlign="left" opacity="0.9" lineHeight={{ base: '3.5rem' }}>
          <Text fontSize={{ base: '1rem' }} fontWeight="600" className="fill-text-mobile">
            Produced by Kuro32183
          </Text>
          <Text fontSize={{ base: '2.2rem' }} fontWeight="800" className="fill-text-mobile">
            Into the Wild...
          </Text>
        </Box>
      </Box>
    </>
  )
}

export function TabletText() {
  const text = useParallax<HTMLDivElement>({
    speed: -35,
  })
  return (
    <>
      <Box position="absolute" top={{ base: '5%' }} left={{ base: '15%' }} ref={text.ref}>
        <Box as="div" letterSpacing="1px" textAlign="left" opacity="0.9" lineHeight={{ base: '3.5rem' }}>
          <Text fontSize={{ base: '1.8rem' }} fontWeight="600" className="fill-text-mobile">
            Produced by Kuro32183
          </Text>
          <Text fontSize={{ base: '4.5rem' }} fontWeight="800" className="fill-text-mobile">
            Into the Wild...
          </Text>
        </Box>
      </Box>
    </>
  )
}

export function DesktopText() {
  return (
    <Box
      position="absolute"
      top={{ md: '20%' }}
      left={{ md: '30%' }}
      fontSize={{ base: '3rem', lg: '6rem' }}
      fontWeight="900"
    >
      <Box as="div" letterSpacing="2.5px" className="text_container">
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
      <Box className="wrapper">
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
