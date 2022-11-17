import React, { FC } from 'react'
import { RFlowerBox } from '../../libs/chakraBox'

type RFlowerProps = {
  src: string
  srcSet: string
}

const RFlower: FC<RFlowerProps> = (props) => {
  return (
    <RFlowerBox
      animate={{ opacity: [0, 1, 0] }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        repeat: Infinity,
        repeatDelay: 0,
        duration: 5,
        type: 'tween',
      }}
      position="absolute"
      w="full"
      srcSet={props.srcSet}
      src={props.src}
      alt="yellow flower"
    />
  )
}

export default RFlower
