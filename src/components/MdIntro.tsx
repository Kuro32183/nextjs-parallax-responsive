import React from 'react'
import { Image } from '@chakra-ui/react'
import { useViewportScroll, useTransform } from 'framer-motion'
import Bird from './item/Bird'
import Smoke from './item/Smoke'
import { MobileText } from './item/IntroText'
import { useInView } from 'react-intersection-observer'
import { MdBox, Mountain, Lake, RTree, LTree, TaxiBox } from '../libs/chakraBox'
import RFlower from './item/RFlower'
import LFlower from './item/LFlower'
import Cloud from './item/Cloud'

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
  const scaleTree = useTransform(scrollY, [-50, screenHeight], [1, 3])
  const yTree = useTransform(scrollY, [0, screenHeight], [-50, -screenHeight + 100])
  const xTaxi = useTransform(scrollY, [0, screenHeight], [0, -950])
  const scaleTaxi = useTransform(scrollY, [0, screenHeight], [1, 1.5])
  const yMountain = useTransform(scrollY, [0, screenHeight], [0, 200])
  const yLake = useTransform(scrollY, [0, screenHeight], [0, 150])
  return (
    <MdBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{ duration: 0.8 }}
      position="relative"
      h="100vh"
      w="100%"
    >
      <Image position="absolute" w="full" srcSet="/md/bg.webp" src="/md/bg.png" alt="background" />
      <Cloud src={'/md/cloud.png'} srcSet={'/md/cloud.webp'} />
      <MobileText />
      <Bird />
      <TaxiBox style={{ x: xTaxi, scale: scaleTaxi }} w={{ base: '100%' }}>
        <Smoke />
        <Image position="absolute" w="full" srcSet="/md/taxi.webp" src="/md/taxi.png" alt="taxi" />
      </TaxiBox>
      <Image position="absolute" w="full" srcSet="/md/blossum.webp" src="/md/blossum.png" alt="blossum" />
      <Image position="absolute" w="full" srcSet="/md/tree_r_top.webp" src="/md/tree_r_top.png" alt="top tree" />
      <Mountain
        style={{ y: yMountain }}
        position="absolute"
        w="full"
        srcSet="/md/mountain.webp"
        src="/md/mountain.png"
        alt="mountain"
      />
      <Lake style={{ y: yLake }} position="absolute" w="full" srcSet="/md/lake.webp" src="/sm/lake.png" alt="lake" />
      <Image position="absolute" w="full" srcSet="/md/base.webp" src="/md/base.png" alt="base" />
      <LFlower srcSet={'/md/tree_l_flower_yellow.webp'} src={'/md/tree_l_flower_yellow.png'} />
      <RFlower srcSet={'/md/tree_r_flower_blue.webp'} src={'/md/tree_r_flower_blue.png'} />
      <LTree
        style={{ scale: scaleTree, y: yTree }}
        position="absolute"
        w="full"
        srcSet="/md/tree_l_bottom.webp"
        src="/md/tree_l_bottom.png"
        alt="left bottom tree"
      />
      <RTree
        style={{ scale: scaleTree, y: yTree }}
        position="absolute"
        w="full"
        srcSet="/md/tree_r_bottom.webp"
        src="/md/tree_r_bottom.png"
        alt="right bottom tree"
      />
    </MdBox>
  )
}
