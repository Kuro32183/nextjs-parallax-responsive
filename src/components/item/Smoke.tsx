import React from 'react'
import { Box } from '@chakra-ui/react'

const Smoke = () => {
  return (
    <Box
      right={{ sm: '-35%', md: '-20%', lg: '0' }}
      className="vapor"
      position="absolute"
      display="flex"
      pt={{ sm: '250px', md: '50vh', lg: '300px' }}
      transform="rotate(90deg)"
    >
      <span className="white" style={{ '--i': 3, background: '#C5C6D0' }}></span>
      <span className="white" style={{ '--i': 2, background: '#C5C6D0' }}></span>
      <span className="white" style={{ '--i': 4, background: '#C5C6D0' }}></span>
      <span className="white" style={{ '--i': 1, background: '#C5C6D0' }}></span>
    </Box>
  )
}

export default Smoke
