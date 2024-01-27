import { Image } from '@chakra-ui/react'
import React from 'react'

const Screenshots = ({screenshot , index}) => {
  return (
    <>
      <Image w={"200px"} key={index} src={screenshot} /> 
    </>
  )
}

export default Screenshots
