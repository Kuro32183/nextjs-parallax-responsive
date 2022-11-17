import React, { FC } from 'react'
import { LTree } from '../../libs/chakraBox'

type LTreeProps = {
  src: string
  srcSet: string
  scale: number
}

const LBTree: FC<LTreeProps> = (props) => {
  return (
    <LTree
      style={{ scale: props.scale }}
      position="absolute"
      w="full"
      srcSet={props.srcSet}
      src={props.src}
      alt="bottom tree"
    />
  )
}

export default LBTree
