import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Screenshots = ({screenshot , index}) => {
  return (
    <Box>
      <Image w={"200px"} key={index} src={screenshot} /> 
    </Box>
  )
}

export default Screenshots
