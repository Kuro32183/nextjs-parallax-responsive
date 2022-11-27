import React, { FC } from 'react'
import { CloudBox } from '../../libs/chakraBox'

type CloudProps = {
  src: string
  srcSet: string
}

const Cloud: FC<CloudProps> = (props) => {
  return (
    <CloudBox
      // animate={{ scale: [1, 1.03, 1] }}
      // // @ts-ignore no problem in operation, although type error appears.
      // transition={{
      //   repeat: Infinity,
      //   repeatDelay: 0,
      //   duration: 4,
      //   type: 'tween',
      // }}
      position="absolute"
      w="full"
      srcSet={props.srcSet}
      src={props.src}
      alt="cloud"
    />
  )
}

export default Cloud
