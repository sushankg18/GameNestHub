import { Box, Button, Flex, HStack, Image, Text, } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import Catalog from './Catalog'
import Logo from '../assets/GameNestHub_Logo.png'
import { Link } from 'react-router-dom';
import { NoteContext } from '../Context/NoteState';
import Login from './Login';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    const { LoginStatus, logout } = useContext(NoteContext);
    const [searchTerm, setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState([])
    const handleLogOut = () => {
        if (LoginStatus) {
            logout();
        }
    }
    const URL = "https://api.rawg.io/api/";
    const API_KEY = "b529d03181f044c39b0a7a0722e82612";
    useEffect(() => {
        if (searchTerm !== "") {
            try {
                fetch(`${URL}games?page_size=9&key=${API_KEY}&search=${searchTerm}`).then(
                    res => res.json()).then(data => setSearchData(data.results))
            } catch (error) {
                console.log(error)
            }

        }

    }, [searchTerm])
    return (
        <HStack minH={['7vh','10vh']} position={'sticky'} zIndex={'99'} top={'0'} padding={['.5rem 1rem','.8rem 2rem']} w={'100vw'} justifyContent={'space-between'} bgColor={'#18181C'}>
            <HStack w={['100%','','','60%']} justifyContent={'space-between'} >
                <Link to={'/'}>
                    <Image src={Logo} userSelect={'none'} cursor={'pointer'} width={['3rem', '6rem']} borderRadius={'5px'} />
                </Link>
                <Box position={'relative'}>
                    <Box width={['14rem','','','30rem']} fontSize={['.8rem','1.1rem']} backgroundColor={'white'} p={'.2rem 1rem'} alignItems={'center'} display={'flex'} borderRadius={'.5rem'} overflow={'hidden'} height={['1.5rem','2.3rem']}>
                        <FaSearch />
                        <input
                            onChange={(e) => { setSearchTerm(e.target.value); }}
                            value={searchTerm}
                            placeholder='Search for any game'
                            style={{ width: "100%", padding: "0 1rem", fontWeight: "bold", outline: "none", border: "none" }}
                        />
                    </Box>
                    {
                        searchTerm.length > 0 ? (<Box position={'absolute'} py={'1rem'} overflowY={'scroll'} display={'flex'} flexDir={'column'} gap={'1rem'} width={['14rem','30rem']} height={'fit-content'} borderRadius={'1rem'} top={'2.7rem'} bgColor={'black'} color={'white'}>
                            {
                                searchData.map((data, index) => {
                                    return (
                                        <Link key={index} to={`/games/${data.slug}`} onClick={()=>{setSearchTerm('')}}>
                                            <Flex gap={['1rem','2rem']} alignItems={'center'} p={['.2rem .5rem','.2rem 2rem']} borderBottom={'1px solid #18181C'}>
                                                <Box w={['20%','5rem']} h={['1.5rem','3rem']}>
                                                    <Image w={'100% '}objectFit={'cover'} h={'100%'} src={data.background_image} />
                                                </Box>
                                                <Text w={'80%'} fontWeight={'bold'} fontSize={['.8rem','1.1rem']} noOfLines={'1'}>{data.name}</Text>
                                            </Flex>
                                        </Link>
                                    )
                                })
                            }
                        </Box>) : null
                    }
                </Box>
                <Box display={['block','none']}>
                <GiHamburgerMenu color='white'/>
                </Box>
            </HStack>
            <HStack w={'25%'} display={['none', '', '', 'flex']} justifyContent={'space-between'}>
                <Catalog />
                <HStack  >
                    <Link to={LoginStatus ? "/userprofile" : '/login'}>
                        <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#fff'} color={'#9a67ff'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "#9a67ff", color: "white" }}>{LoginStatus ? "sushank" : "Login"}</Button>
                    </Link>
                    <Link to={LoginStatus ? "/" : '/signup'}>
                        <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#8C52FF'} color={'whitesmoke'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "white", color: "#9a67ff" }} onClick={handleLogOut}>{LoginStatus ? "Log Out" : "Sign in"}</Button>
                    </Link>
                </HStack>
            </HStack>
        </HStack>
    )

}

export default Header
