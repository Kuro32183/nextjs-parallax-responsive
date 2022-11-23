/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Box, Text, Image, Spacer } from '@chakra-ui/react'
import { useViewportScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { DescBox, DescTextBox } from '../../libs/chakraBox'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export function DescTextMobile() {
  const [ref, inView] = useInView({
    threshold: 0.6,
  })
  const { scrollY } = useViewportScroll()
  const screenHeight = document.documentElement.clientHeight
  const opacityText = useTransform(
    scrollY,
    [screenHeight / 3, screenHeight / 2, screenHeight, screenHeight + 100],
    [0, 1, 1, 0]
  )
  const yText = useTransform(scrollY, [screenHeight / 3, screenHeight / 2], [50, 0])

  return (
    <DescBox
      style={{ opacity: opacityText }}
      color="white"
      position="absolute"
      w="full"
      top="0"
      m="0 auto"
      px={{ base: '2rem' }}
      pt={{ base: '8rem' }}
      ref={ref}
    >
      <Text
        fontSize={{ base: '1.3rem' }}
        fontFamily="monospace"
        fontWeight="800"
        textAlign="center"
        letterSpacing="1px"
        pb={4}
        className=""
      >
        Hi, I'm Kuro32183 !
      </Text>
      <DescTextBox style={{ y: yText }} textAlign="left" letterSpacing="1px">
        I love designing websites and branding for client. This website is developed as a portfolio. Please scroll down
        for more about me, technical explanations about this website, other products and blogs below! Thank you.
      </DescTextBox>
    </DescBox>
  )
}

export function DescTextTablet() {
  const [ref, inView] = useInView({
    threshold: 0.6,
  })
  const { scrollY } = useViewportScroll()
  const screenHeight = document.documentElement.clientHeight
  const opacityText = useTransform(
    scrollY,
    [screenHeight - 500, screenHeight - 450, screenHeight + 300, screenHeight + 600],
    [0, 1, 1, 0]
  )
  const yText = useTransform(scrollY, [screenHeight - 500, screenHeight - 450], [50, 0])

  return (
    <DescBox
      style={{ opacity: opacityText }}
      color="white"
      position="absolute"
      w="full"
      top="0"
      m="0 auto"
      px={{ base: '1rem', md: '8rem' }}
      pt={{ base: '3rem', md: '40%' }}
    >
      <Text
        fontSize={{ md: '1.5rem' }}
        fontFamily="monospace"
        fontWeight="600"
        textAlign="center"
        letterSpacing="1.5px"
        pb={4}
        className=""
      >
        Hi, I'm Kuro32183 !
      </Text>
      <DescTextBox style={{ y: yText }} textAlign="left" letterSpacing="1px" className="">
        I love designing websites and branding for client. This website is developed as a portfolio. Please scroll down
        for more about me, technical explanations about this website, other products and blogs below! Thank you.
      </DescTextBox>
    </DescBox>
  )
}

export function DescTextDesktop() {
  const [ref, inView] = useInView({
    threshold: 0.6,
  })
  const { scrollY } = useViewportScroll()
  const screenHeight = document.documentElement.clientHeight
  const opacityText = useTransform(
    scrollY,
    [screenHeight - 100, screenHeight - 0, screenHeight * 1.3, screenHeight * 1.5],
    [0, 1, 1, 0]
  )
  const yText = useTransform(scrollY, [screenHeight - 100, screenHeight - 0], [50, 0])

  return (
    <DescBox
      color="white"
      style={{ opacity: opacityText }}
      position="relative"
      top="0"
      m="0 auto"
      px={{ base: '20%' }}
      pt={{ base: '30%' }}
      bg="#000000"
      h="120vh"
      w="full"
      flex="column"
      align-items="center"
      ref={ref}
    >
      <Text
        fontSize={{ md: '1.5rem' }}
        fontFamily="monospace"
        fontWeight="600"
        textAlign="center"
        letterSpacing="1.5px"
        pb={4}
        className=""
      >
        Hi, I'm Kuro32183 !
      </Text>
      <DescTextBox style={{ y: yText }} textAlign="left" letterSpacing="1px" className="">
        I love designing websites and branding for client. This website is developed as a portfolio. Please scroll down
        for more about me, technical explanations about this website, other products and blogs below! Thank you.
      </DescTextBox>
    </DescBox>
  )
}
