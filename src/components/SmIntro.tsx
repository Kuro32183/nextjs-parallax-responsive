import React from 'react'
import { Image } from '@chakra-ui/react'
import { useViewportScroll, useTransform } from 'framer-motion'
import Bird from './item/Bird'
import Smoke from './item/Smoke'
import { MobileText } from './item/IntroText'
import { useInView } from 'react-intersection-observer'
import { SmBox, Mountain, Lake, RTree, LTree, TaxiBox } from '../libs/chakraBox'
import RFlower from './item/RFlower'
import LFlower from './item/LFlower'
import Cloud from './item/Cloud'

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
  const scaleTree = useTransform(scrollY, [0, screenHeight], [1, 3])
  const yTree = useTransform(scrollY, [0, screenHeight], [0, -screenHeight + 0])
  const xTaxi = useTransform(scrollY, [0, screenHeight], [0, -950])
  const scaleTaxi = useTransform(scrollY, [0, screenHeight], [1, 2])
  const yMountain = useTransform(scrollY, [0, screenHeight], [0, 200])
  const yLake = useTransform(scrollY, [0, screenHeight], [0, 150])
  return (
    <SmBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: 0.8 }}
      position="relative"
      h="100vh"
      w="100%"
    >
      <Image position="absolute" w="full" srcSet="/sm/bg.webp" src="/sm/bg.png" alt="background" />
      <Cloud src={'/sm/cloud.png'} srcSet={'/sm/cloud.webp'} />
      <MobileText />
      <Bird />
      <TaxiBox style={{ x: xTaxi, scale: scaleTaxi }} w={{ base: '100%' }}>
        <Smoke />
        <Image position="absolute" w="full" srcSet="/sm/taxi.webp" src="/sm/taxi.png" alt="taxi" />
      </TaxiBox>
      <Image position="absolute" w="full" srcSet="/sm/blossum.webp" src="/sm/blossum.png" alt="blossum" />
      <Image position="absolute" w="full" srcSet="/sm/tree_r_top.webp" src="/sm/tree_r_top.png" alt="top tree" />
      <Mountain
        style={{ y: yMountain }}
        position="absolute"
        w="full"
        srcSet="/sm/mountain.webp"
        src="/sm/mountain.png"
        alt="mountain"
      />
      <Lake style={{ y: yLake }} position="absolute" w="full" srcSet="/sm/lake.webp" src="/sm/lake.png" alt="lake" />
      <Image position="absolute" w="full" srcSet="/sm/base.webp" src="/sm/base.png" alt="base" />
      <LFlower srcSet={'/sm/tree_l_flower_yellow.webp'} src={'/sm/tree_l_flower_yellow.png'} />
      <RFlower srcSet={'/sm/tree_r_flower_blue.webp'} src={'/sm/tree_r_flower_blue.png'} />
      <LTree
        style={{ scale: scaleTree, y: yTree }}
        position="absolute"
        w="full"
        srcSet="/sm/tree_l_bottom.webp"
        src="/sm/tree_l_bottom.png"
        alt="left bottom tree"
      />
      <RTree
        style={{ scale: scaleTree, y: yTree }}
        position="absolute"
        w="full"
        srcSet="/sm/tree_r_bottom.webp"
        src="/sm/tree_r_bottom.png"
        alt="right bottom tree"
      />
    </SmBox>
  )
}
