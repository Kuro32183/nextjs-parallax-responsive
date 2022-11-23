import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const SmBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const MdBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const LgBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const ScaleBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

export const CloudBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const LFlowerBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const RFlowerBox = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const Tree = chakra(motion.img, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const TaxiBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const TextBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const BgBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const DescBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
export const DescTextBox = chakra(motion.p, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})
