import React from 'react'
import { Box } from '@chakra-ui/react'

const Bird = () => {
  return (
    <Box>
      <Box className="bird-container bird-container--one">
        <Box className="bird bird--one"></Box>
      </Box>
      <Box className="bird-container bird-container--two">
        <Box className="bird bird--two"></Box>
      </Box>
      <Box className="bird-container bird-container--three">
        <Box className="bird bird--three"></Box>
      </Box>
      <Box className="bird-container bird-container--four">
        <Box className="bird bird--four"></Box>
      </Box>
    </Box>
  )
}

export default Bird
