/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'
import Bird from './item/Bird'
import Smoke from './item/Smoke'
import { IntroText } from './item/IntroText'
import Cloud from './item/Cloud'
import { DescTextMobile } from './item/DescText'
import ScrollDown from './item/ScrollDown'
import Plx from 'react-plx'
import ImageBox from './item/ImageBox'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

export function MdIntroHide() {
  return <React.Fragment />
}

export function MdIntro() {
  const parallaxTree = [
    {
      start: 0,
      end: 700,
      properties: [
        {
          startValue: 1,
          endValue: 3,
          property: 'scale',
        },
      ],
    },
  ]
  const parallaxBox = [
    {
      start: 0,
      end: 800,
      properties: [
        {
          startValue: 1,
          endValue: 1.1,
          property: 'scale',
        },
      ],
    },
  ]
  const parallaxTaxi = [
    {
      start: 0,
      end: 1000,
      properties: [
        {
          startValue: 0,
          endValue: -800,
          property: 'translateX',
        },
      ],
    },
  ]
  const parallaxTitle = [
    {
      start: 0,
      end: 200,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        },
      ],
    },
  ]
  return (
    <Box>
      <Plx
        parallaxData={parallaxBox}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '100%',
        }}
      >
        <ImageBox src={'/md/bg.png'} srcSet={'/md/bg.webp'} alt={'background'} />
        <Cloud src={'/md/cloud.png'} srcSet={'/md/cloud.webp'} />
        {/* <Bird /> */}
        <ImageBox src={'/md/mountain.png'} srcSet={'/md/mountain.webp'} alt={'mountain'} />
        <Plx
          parallaxData={parallaxTitle}
          style={{
            position: 'fixed',
            left: 0,
            top: '20vw',
            width: '100%',
          }}
        >
          <IntroText />
        </Plx>
        <ImageBox src={'/md/base.png'} srcSet={'/md/base.webp'} alt={'base'} />
        <Plx parallaxData={parallaxTaxi}>
          <Flex>
            {/* <Smoke /> */}
            <Image
              style={{ width: '100%', position: 'absolute', top: '0%', left: '-10%' }}
              src="/md/taxi.png"
              alt="background"
            />
          </Flex>
        </Plx>
        <ScrollDown />
        <Plx
          parallaxData={parallaxTree}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100%',
          }}
        >
          <Image style={{ width: '100%' }} src="/md/tree.png" alt="tree" />
        </Plx>
      </Plx>

      <DescTextMobile />
      <div
        style={{
          position: 'relative',
          zIndex: 40,
          paddingTop: '300vh',
          height: '300vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            background: '#000',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </div>
    </Box>
  )
}
