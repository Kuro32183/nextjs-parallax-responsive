import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Tilt from 'react-parallax-tilt'
import { TaxiBox } from '../libs/chakraBox'
import Smoke from './item/Smoke'
import Cloud from './item/Cloud'
import Bird from './item/Bird'
import LFlower from './item/LFlower'
import RFlower from './item/RFlower'
import { DesktopText } from './item/IntroText'

export function LgIntroHide() {
  return <React.Fragment />
}

export function LgIntro() {
  return (
    <Box position="relative" h="100vh" w="100%" bg="#000000">
      <Image position="absolute" w="full" srcSet="/lg/bg.webp" src="/lg/bg.png" alt="background" />
      <Cloud srcSet={'/lg/cloud.webp'} src={'/lg/cloud.png'} />
      <Bird />

      <Image position="absolute" w="full" srcSet="/lg/mountain.webp" src="/lg/mountain.png" alt="left mountain" />
      <DesktopText />
      <Tilt className="track-on-window" tiltMaxAngleX={0} tiltMaxAngleY={6} tiltReverse={true}>
        <Image
          position="absolute"
          minWidth="110%"
          left="-3%"
          srcSet="/lg/blossum.webp"
          src="/lg/blossum.png"
          alt="blossum"
          transform="translateZ(80px)"
        />
        <Image
          position="absolute"
          minWidth="110%"
          right="-2%"
          srcSet="/lg/tree_r_top.webp"
          src="/lg/tree_r_top.png"
          alt="top tree"
          transform="translateZ(80px)"
        />
        <TaxiBox w={{ base: '100%' }} transform="translateZ(40px)">
          <Smoke />
          <Image position="absolute" w="full" srcSet="/lg/taxi.webp" src="/lg/taxi.png" alt="yellow taxi" />
        </TaxiBox>
        <Image
          position="absolute"
          minWidth="110%"
          left="-4%"
          srcSet="/lg/base.webp"
          src="/lg/base.png"
          alt="base"
          transform="translateZ(1px)"
        />
        <Box position="absolute" minWidth="110%" left="-4%" transform="translateZ(1px)">
          <LFlower srcSet={'/lg/tree_l_flower_yellow.webp'} src={'/lg/tree_l_flower_yellow.png'} />
          <RFlower srcSet={'/lg/tree_r_flower_blue.webp'} src={'/lg/tree_r_flower_blue.png'} />
        </Box>
        <Image
          position="absolute"
          left="0%"
          maxWidth="110%"
          srcSet="/lg/tree_bottom.webp"
          src="/lg/tree_bottom.png"
          alt="bottom tree"
          transform="translateZ(80px)"
        />
      </Tilt>
    </Box>
  )
}
