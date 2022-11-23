import React from 'react'
import { Image, Box } from '@chakra-ui/react'
import { useViewportScroll, useTransform } from 'framer-motion'
import Bird from './item/Bird'
import Smoke from './item/Smoke'
import { IntroText } from './item/IntroText'
import { useInView } from 'react-intersection-observer'
import { MdBox, TaxiBox, Tree, ScaleBox, BgBox, DescBox } from '../libs/chakraBox'
import Cloud from './item/Cloud'
import { DescTextTablet } from './item/DescText'
import ScrollDown from './item/ScrollDown'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export function MdIntroHide() {
  return <React.Fragment />
}

export function MdIntro() {
  const [ref, inView] = useInView({
    threshold: 0.6,
  })
  const { scrollY } = useViewportScroll()
  const screenHeight = document.documentElement.clientHeight
  const scaleBox = useTransform(scrollY, [0, screenHeight / 6], [1, 1.1])
  const scaleTree = useTransform(scrollY, [0, screenHeight], [1, 3])
  const xTaxi = useTransform(scrollY, [0, screenHeight], [0, -800])
  const opacityBox = useTransform(scrollY, [screenHeight / 4, screenHeight / 3], [0, 0.5])
  return (
    // overflow "clip"!!
    <MdBox position="relative" h="260vh" overflow="clip" bg="#000000">
      <ScaleBox style={{ scale: scaleBox }} position="sticky" maxWidth="100vw" maxHeight="100vh" top="0">
        <Image position="absolute" w="full" srcSet="/md/bg.webp" src="/md/bg.png" alt="background" />
        <Cloud src={'/md/cloud.png'} srcSet={'/md/cloud.webp'} />
        <Bird />
        <Image position="absolute" w="full" srcSet="/md/mountain.webp" src="/md/mountain.png" alt="mountain" />
        <IntroText />
        <TaxiBox style={{ x: xTaxi }} transition={{ ease: 'easeInOut' }} w={{ base: '100%' }}>
          <Smoke />
          <Image position="absolute" w="full" srcSet="/md/taxi.webp" src="/md/taxi.png" alt="taxi" />
        </TaxiBox>
        <Image position="absolute" w="full" srcSet="/md/base.webp" src="/md/base.png" alt="base" />

        <Tree
          style={{ scale: scaleTree }}
          className="overflow"
          position="absolute"
          w="full"
          srcSet="/md/tree.webp"
          src="/md/tree.png"
          alt="tree"
        />
        <BgBox
          transition={{ ease: 'easeInOut' }}
          style={{ opacity: opacityBox }}
          position="absolute"
          bg="#000000"
          h="100vh"
          w="100%"
        >
          {' '}
        </BgBox>
        <DescTextTablet />
        <ScrollDown />
      </ScaleBox>

      <DescBox />
    </MdBox>
  )
}
