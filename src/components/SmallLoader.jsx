import { Box, Center, Spinner } from '@chakra-ui/react'
import React from 'react'

const smallLoader = () => {
  return (
    <Center width={'100%'} height={'20vh'}  bgColor={'transparent'}>
        <Spinner width={'3rem'} h={'3rem'} color='white' speed='.4s'  />
    </Center>
  )
}

export default smallLoader
