import React from 'react'
import { Image, Box } from '@chakra-ui/react'
import { useViewportScroll, useTransform } from 'framer-motion'
import Bird from './item/Bird'
import Smoke from './item/Smoke'
import { IntroText } from './item/IntroText'
import { useInView } from 'react-intersection-observer'
import { SmBox, Tree, TaxiBox, ScaleBox, BgBox } from '../libs/chakraBox'
import Cloud from './item/Cloud'
import { DescTextMobile } from './item/DescText'
import ScrollDown from './item/ScrollDown'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export function SmIntroHide() {
  return <React.Fragment />
}

export function SmIntro() {
  const [ref, inView] = useInView({
    threshold: 0.4,
  })
  const { scrollY } = useViewportScroll()
  const screenHeight = document.documentElement.clientHeight
  const scaleBox = useTransform(scrollY, [0, screenHeight / 6], [1, 1.1])
  const scaleTree = useTransform(scrollY, [0, screenHeight], [1, 4])
  const xTaxi = useTransform(scrollY, [0, screenHeight], [0, -950])
  const scaleTaxi = useTransform(scrollY, [0, screenHeight], [1, 2])
  const opacityBox = useTransform(scrollY, [screenHeight / 4, screenHeight / 3], [0, 0.5])
  return (
    <SmBox position="relative" h="200vh" overflow="clip" bg="#000000">
      <ScaleBox style={{ scale: scaleBox }} position="sticky" w="100%" maxHeight="100vh" top="0" ref={ref}>
        <Image position="absolute" w="full" srcSet="/sm/bg.webp" src="/sm/bg.png" alt="background" />
        <Cloud srcSet={'/sm/cloud.webp'} src={'/sm/cloud.png'} />
        <Bird />

        <Image position="absolute" w="full" srcSet="/sm/mountain.webp" src="/sm/mountain.png" alt="tree" />
        <IntroText />
        <TaxiBox style={{ x: xTaxi, scale: scaleTaxi }} w={{ base: '100%' }}>
          <Smoke />
          <Image position="absolute" w="full" srcSet="/sm/taxi.webp" src="/sm/taxi.png" alt="taxi" />
        </TaxiBox>
        <Image position="absolute" w="full" srcSet="/sm/base.webp" src="/sm/base.png" alt="base" />
        <Tree
          style={{ scale: scaleTree }}
          position="absolute"
          w="full"
          srcSet="/sm/tree.webp"
          src="/sm/tree.png"
          alt="tree"
        />
        <BgBox style={{ opacity: opacityBox }} position="absolute" top="0" bg="#000000" h="100vh" w="full">
          {' '}
        </BgBox>
        <DescTextMobile />
        <ScrollDown />
      </ScaleBox>
    </SmBox>
  )
}
