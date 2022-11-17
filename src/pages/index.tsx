import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

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
      if (window.innerWidth > 960) {
        return mod.LgIntro
      }
      return mod.LgIntroHide
    }) as any,
  { ssr: false }
)

// import SmIntro from '../components/SmIntro'
// import MdIntro from '../components/MdIntro'
// import LgIntro from '../components/LgIntro'

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
      </Box>
      <Box h="200vh" bg="#000000"></Box>
    </Box>
  )
}

export default Home
