import { Box } from '@chakra-ui/react'
import React from 'react'

const ScrollDown = () => {
  return (
    <Box
      zIndex="50"
      fontSize="4rem"
      color="yellow"
      position="absolute"
      w="full"
      h="full"
      left={{ base: '45%', md: '48%', lg: '50%' }}
      top="80vh"
      overflow="visible"
      pb="1rem"
    >
      <Box className="mousey">
        <Box className="scroller"></Box>
      </Box>
    </Box>
  )
}

export default ScrollDown
