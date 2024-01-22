import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiSolidError } from "react-icons/bi";

const Error = ({message}) => {
  return (
    <Box bg="rgb(18,18,18)" color={'white'} w={'full'} h={'90vh'} display={'flex'} gap={'.8rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
      <BiSolidError fontSize={'3rem'} />
      <VStack>
        <Heading fontSize={'1.8rem'} fontFamily={'Titillium Web'} >{message}</Heading>
        <Heading fontSize={'1.8rem'} fontFamily={'Titillium Web'} >Retry?😎</Heading>
      </VStack>
    </Box>
  )
}

export default Error
