import { Box, Button, HStack, Image, Input, Text, flexbox } from '@chakra-ui/react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import React from 'react'
import Logo from '../assets/GameNestHub_Logo.png'
const Header = () => {
    return (
        <HStack padding={'.8rem 1rem'} justifyContent={'space-between'} bgColor={'#18181C'}>
            <HStack w={'60%'} justifyContent={'space-between'} >
                <Image src={Logo} cursor={'pointer'} width={'6rem'} borderRadius={'5px'} />
                <Box width={'25rem'} display={'flex'} borderRadius={'8px'} overflow={'hidden'}>
                    <Input border={'none'} fontSize={'.9rem'} bgColor={'white'} fontWeight={'bold'} placeholder={'Search for any game'} borderRight={'1px solid rgb(100, 100, 100)'} padding={'.7rem 1rem'} outline={'none'} width={'100%'} />
                    <Button border={'none'} fontWeight={'bold'} fontSize={'.9rem'} padding={'.2rem 1rem'} cursor={'pointer'} bgColor={'#b089ff'} color={'white'}>Search</Button>
                </Box>
            </HStack>
            <HStack w={'25%'} justifyContent={'space-between'}>
                <Text display={'flex'} alignItems={'center'} border={'1px solid whitesmoke'} gap={'1rem'} padding={'.4rem 1rem'} cursor={'pointer'}>Games Catalog <MdOutlineKeyboardArrowDown fontSize={'1.3rem'} /></Text>
                <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#8C52FF'} color={'whitesmoke'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'}>Download</Button>
            </HStack>
        </HStack>
    )
}

export default Header
