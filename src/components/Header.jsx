import { Box, Button, HStack, Image, Input, } from '@chakra-ui/react'
import React from 'react'
import Catalog from './Catalog'
import Logo from '../assets/GameNestHub_Logo.png'
const Header = () => {
    return (
        <HStack padding={'.8rem 1rem'} justifyContent={'space-between'} bgColor={'#18181C'}>
            <HStack w={'60%'} justifyContent={'space-between'} >
                <Image src={Logo} userSelect={'none'} cursor={'pointer'} width={['4rem', '6rem']} borderRadius={'5px'} />
                <Box width={'25rem'} display={['none', 'none', 'none', 'flex']} borderRadius={'8px'} overflow={'hidden'}>
                    <Input border={'none'} fontSize={'.9rem'} bgColor={'white'} fontWeight={'bold'} placeholder={'Search for any game'} borderRight={'1px solid rgb(100, 100, 100)'} padding={'.7rem 1rem'} outline={'none'} width={'100%'} />
                    <Button border={'none'} fontWeight={'bold'} fontSize={'.9rem'} padding={'.2rem 1rem'} cursor={'pointer'} bgColor={'#9a67ff'} color={'white'}>Search</Button>
                </Box>
            </HStack>
            <HStack w={'25%'} justifyContent={'space-between'}>
                <Catalog />
                <HStack>
                    <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#fff'} color={'#9a67ff'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "#9a67ff", color: "white" }}>Login</Button>
                    <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#8C52FF'} color={'whitesmoke'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "white", color: "#9a67ff" }}>Sign Up</Button>
                </HStack>
            </HStack>
        </HStack>
    )
}

export default Header


// https://api.rawg.io/api/games/pc?page_size=60&key=b529d03181f044c39b0a7a0722e82612