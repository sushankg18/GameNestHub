import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { BiSolidError } from "react-icons/bi";

const Error = () => {
  return (
    <Box w={'full'} h={'80vh'} display={'flex'} gap={'.8rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'}>
      <BiSolidError fontSize={'3rem'} />
      <Heading fontSize={'1.8rem'}>Data went on vacation without leaving a note 😭. Retry?😎</Heading>
    </Box>
  )
}

export default Error
