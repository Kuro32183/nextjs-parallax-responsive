/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import { useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DescBox, DescTextBox } from '../../libs/chakraBox'
import Plx from 'react-plx'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export function DescTextMobile() {
  const parallaxDesc = [
    {
      start: 0,
      duration: 800,
      properties: [
        {
          startValue: 50,
          endValue: 0,
          property: 'translateY',
        },
      ],
    },
  ]
  const parallaxBgBox = [
    {
      start: 0,
      duration: 800,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ]

  return (
    <Plx
      parallaxData={parallaxBgBox}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: '28',
      }}
    >
      <Box h="100vh" w="100vw" bg="#000000" opacity="0.7" m=" 0 auto" position="fixed" top="0" left="0" zIndex="28">
        <Box
          pt={{ base: '25vh', md: '30vh' }}
          px={{ base: '4rem', md: '8rem' }}
          color="white"
          textAlign="center"
          style={{ overflowWrap: 'break-word' }}
        >
          <Text
            fontSize={{ base: '1.3rem', md: '1.7rem' }}
            fontFamily="monospace"
            fontWeight="600"
            textAlign="center"
            letterSpacing="1.5px"
            pb="2rem"
          >
            Hi, I'm Kuro32183 !
          </Text>
          <Plx parallaxData={parallaxDesc}>
            <Text fontFamily="monospace" fontSize={{ base: '1rem', md: '1.3rem' }}>
              I love designing websites and branding for client. This website is developed as a portfolio. Please scroll
              down for more about me, technical explanations about this website, other products and blogs below! Thank
              you.
            </Text>
          </Plx>
        </Box>
      </Box>
    </Plx>
  )
}

export function DescTextDesktop() {
  // const parallaxDesc = [
  //   {
  //     start: 0,
  //     duration: 600,
  //     properties: [
  //       {
  //         startValue: 100,
  //         endValue: 0,
  //         property: 'translateY',
  //       },
  //     ],
  //   },
  // ]
  const parallaxBgBox = [
    {
      start: 0,
      duration: 600,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'opacity',
        },
      ],
    },
  ]
  const [ref, inView] = useInView({
    threshold: 0.6,
  })

  const { scrollY } = useScroll()
  const screenHeight = document.documentElement.clientHeight

  const opacityText = useTransform(
    scrollY,
    [screenHeight - 100, screenHeight - 0, screenHeight * 1.3, screenHeight * 1.5],
    [0, 1, 1, 0]
  )
  const yText = useTransform(scrollY, [screenHeight - 100, screenHeight - 0], [50, 0])

  return (
    <Plx
      parallaxData={parallaxBgBox}
      style={{
        width: '100%',
      }}
    >
      <DescBox
        color="white"
        position="relative"
        top="0"
        m="0 auto"
        px={{ base: '20%' }}
        pt={{ base: '30%' }}
        bg="#000000"
        h="100vh"
        w="full"
        flex="column"
        align-items="center"
        fontFamily="monospace"
      >
        <Text fontSize={{ md: '1.5rem' }} fontWeight="600" textAlign="center" letterSpacing="1.5px" pb={4} className="">
          Hi, I'm Kuro32183 !
        </Text>
        {/* <Plx parallaxData={parallaxDesc}> */}
        <Text textAlign="left" letterSpacing="1px" className="">
          I love designing websites and branding for client. This website is developed as a portfolio. Please scroll
          down for more about me, technical explanations about this website, other products and blogs below! Thank you.
        </Text>
        {/* </Plx> */}
      </DescBox>
    </Plx>
  )
}
