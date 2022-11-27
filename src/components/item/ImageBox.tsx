import React, { FC } from 'react'
import { Image } from '@chakra-ui/react'

type ImageProps = {
  src: string
  srcSet: string
  alt: string
}

const ImageBox: FC<ImageProps> = (props) => {
  return <Image position="absolute" w="full" top="0" left="0" srcSet={props.srcSet} src={props.src} alt={props.alt} />
}

export default ImageBox
