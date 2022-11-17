import React from 'react'
import { Box } from '@chakra-ui/react'

const Smoke = () => {
  return (
    <Box
      right={{ sm: '-45%', md: '-33%', lg: '0' }}
      className="vapor"
      position="absolute"
      display="flex"
      pt={{ sm: '400px', md: '550px', lg: '300px' }}
      transform="rotate(90deg)"
    >
      <span className="white" style={{ '--i': 6, background: '#fff' }}></span>
      <span className="white" style={{ '--i': 3, background: '#C5C6D0' }}></span>
      <span className="white" style={{ '--i': 4, background: '#fff' }}></span>
      <span className="white" style={{ '--i': 2, background: '#C5C6D0' }}></span>
      <span className="white" style={{ '--i': 5, background: '#C5C6D0' }}></span>
      <span className="white" style={{ '--i': 1, background: '#C5C6D0' }}></span>
    </Box>
  )
}

export default Smoke