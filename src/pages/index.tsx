/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Plx from 'react-plx'

const SmIntro = dynamic(
  () =>
    import('../components/SmIntro').then((mod) => {
      if (window.innerWidth < 520) {
        return mod.SmIntro
      }
      return mod.SmIntroHide
    }) as any,
  { ssr: false }
)

const MdIntro = dynamic(
  () =>
    import('../components/MdIntro').then((mod) => {
      if (window.innerWidth >= 520 && window.innerWidth <= 960) {
        return mod.MdIntro
      }
      return mod.MdIntroHide
    }) as any,
  { ssr: false }
)

const LgIntro = dynamic(
  () =>
    import('../components/LgIntro').then((mod) => {
      if (window.innerWidth >= 960) {
        return mod.LgIntro
      }
      return mod.LgIntroHide
    }) as any,
  { ssr: false }
)

const DescTextDesktop = dynamic(
  () =>
    import('../components/item/DescText').then((mod) => {
      if (window.innerWidth >= 960) {
        return mod.DescTextDesktop
      }
      return mod.DescTextDesktop
    }) as any,
  { ssr: false }
)

// import SmIntro from '../components/SmIntro'
// import MdIntro from '../components/MdIntro'
// import LgIntro from '../components/LgIntro'
// import { DescTextDesktop } from '../components/item/DescText'

const Home: NextPage = () => {
  return (
    <Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <SmIntro />
      </Box>
      <Box display={{ base: 'none', md: 'block', lg: 'none' }}>
        <MdIntro />
      </Box>
      <Box display={{ base: 'none', lg: 'block' }}>
        <LgIntro />
        <Box h="100vh" w="full" position="relative" bg="#000000">
          <DescTextDesktop />
        </Box>
      </Box>
      <Box position="relative" zIndex="40" h="400vh" bg="#000000" border="3px solid #000000"></Box>
    </Box>
  )
}

export default Home
