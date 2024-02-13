import {
    Box, Button, Flex, HStack, Image, Text, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack
} from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import Catalog from './Catalog'
import Logo from '../assets/GameNestHub_Logo.png'
import { Link } from 'react-router-dom';
import { NoteContext } from '../Context/NoteState';
import Login from './Login';
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { BsFillGiftFill } from "react-icons/bs";
import { LuLibrary } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import profile from '../assets/profile.jpeg';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import data from '../data'

const Header = () => {
    const { LoginStatus, logout , userEmail } = useContext(NoteContext);
    const [searchTerm, setSearchTerm] = useState('')
    const [searchData, setSearchData] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dropdown, setDropdown] = useState(false)
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
        <HStack H={['7vh', '10vh']} position={'sticky'} zIndex={'99'} top={'0'} padding={['.7rem 1rem', '.6rem 2rem']} w={'100vw'} bgColor={'#2B2B2B'} justifyContent={'space-between'}>
            <HStack w={['100%', '', '', '60%']} justifyContent={'space-between'} >
                <Link to={'/'}>
                    <Image src={Logo} userSelect={'none'} cursor={'pointer'} width={['3rem', '6rem']} borderRadius={'5px'} />
                </Link>
                <Box position={'relative'}>
                    <Box width={['11rem', '', '', '30rem']} fontSize={['.8rem', '1.1rem']} backgroundColor={'white'} p={'.2rem 1rem'} alignItems={'center'} display={'flex'} borderRadius={'.5rem'} overflow={'hidden'} height={['1.5rem', '2.3rem']}>
                        <FaSearch />
                        <input
                            onChange={(e) => { setSearchTerm(e.target.value); }}
                            value={searchTerm}
                            placeholder='Search for any game'
                            style={{ width: "100%", padding: "0 1rem", fontWeight: "bold", outline: "none", border: "none" }}
                        />
                    </Box>
                    {
                        searchTerm.length > 0 ? (<Box position={'absolute'} py={'1rem'} overflowY={'scroll'} display={'flex'} flexDir={'column'} gap={'1rem'} width={['14rem', '30rem']} height={'fit-content'} borderRadius={'1rem'} top={'2.7rem'} bgColor={'black'} color={'white'}>
                            {
                                searchData.map((data, index) => {
                                    return (
                                        <Link key={index} to={`/games/${data.slug}`} onClick={() => { setSearchTerm('') }}>
                                            <Flex gap={['1rem', '2rem']} alignItems={'center'} p={['.2rem .5rem', '.2rem 2rem']} borderBottom={'1px solid #18181C'}>
                                                <Box w={['20%', '5rem']} h={['1.5rem', '3rem']}>{
                                                    data.background_image ?
                                                        <Image w={'100% '} objectFit={'cover'} h={'100%'} src={data.background_image} />
                                                        : null
                                                }
                                                </Box>
                                                <Text w={'80%'} fontWeight={'bold'} fontSize={['.8rem', '1.1rem']} noOfLines={'1'}>{data.name}</Text>
                                            </Flex>
                                        </Link>
                                    )
                                })
                            }
                        </Box>) : null
                    }
                </Box>
                <Box display={['block', 'none']}>
                    <Box onClick={onOpen}>
                        <GiHamburgerMenu color='white' />
                    </Box>
                    <Drawer placement={'top'}  onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent maxH={'90%'}>
                            <DrawerCloseButton color={'white'} />
                            <DrawerBody sx={scrollbarStyles} bgColor={'#000'} py={'2rem'}>
                                <Flex
                                    justifyContent={'space-between'}
                                    alignItems={'flex-start'}
                                    gap={'3'}
                                    fontWeight={'semibold'}
                                    color={'#fff'}
                                >
                                    <Flex flexDir={'column'} gap={'.6rem'}>
                                        <Link to={'/'} >
                                            <Flex gap={'.3rem'} onClick={onClose}>
                                                <IoHomeSharp fontSize={'1.3rem'} />
                                                Home
                                            </Flex>
                                        </Link>
                                        <Flex gap={'.3rem'} onClick={onClose}>
                                            <BsFillGiftFill fontSize={'1.3rem'} />
                                            Wishlist
                                        </Flex>
                                        <Flex gap={'.3rem'} onClick={onClose}>
                                            <LuLibrary fontSize={'1.3rem'} />
                                            My Library
                                        </Flex>
                                        <Flex gap={'.3rem'} onClick={onClose}>
                                            <BsFillPeopleFill fontSize={'1.3rem'} />
                                            People
                                        </Flex>
                                        <Text onClick={onClose}>Browse</Text>
                                    </Flex>
                                    <Flex flexDir={'column'} gap={'.6rem'} >
                                        <Link to={'/userprofile'}>
                                            <Flex gap={'.3rem'} onClick={onClose}>
                                                <Image src={profile} width={'1.7rem'} borderRadius={'50%'} />
                                                Sushank
                                            </Flex>
                                        </Link>
                                        <Flex gap={'.3rem'} onClick={onClose}>
                                            <IoLogOutSharp fontSize={'1.6rem'} />
                                            Logout
                                        </Flex>

                                        <Flex gap={'.3rem'} onClick={onClose}>
                                            <IoNotifications fontSize={'1.6rem'} />
                                            Notifications
                                        </Flex>

                                        <Flex gap={'.3rem'} onClick={onClose}>
                                            <IoIosSettings fontSize={'1.6rem'} />
                                            Settings
                                        </Flex>

                                        <Flex gap={'.3rem'} onClick={onClose}>
                                            <RiFeedbackFill fontSize={'1.6rem'} />
                                            Feedback
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex flexDir={'column'} color={'white'} >
                                    <HStack fontSize={'1.3rem'} justifyContent={'center'}>
                                        <Flex alignItems={'center'}m={'1rem'} onClick={() => setDropdown(!dropdown)}>
                                            Catalog
                                            <MdOutlineKeyboardDoubleArrowDown fontSize={'1.3rem'} />
                                        </Flex>
                                    </HStack>
                                    {
                                        dropdown && (

                                            <Flex alignItems={'flex-start'} flexDir={'column'} gap={'.8rem'}>
                                                {
                                                    data.map((item) => (
                                                        <Link to={`/catalog/${item.title}`}>
                                                            <Flex alignItems={'center'} gap={'.5rem'}onClick={onClose}>
                                                                <Image src={item.images.poster} width={'1.7rem'} />
                                                                <Text color={'#fff'}>
                                                                    {item.title}
                                                                </Text>
                                                            </Flex>
                                                        </Link>
                                                    ))
                                                }
                                            </Flex>
                                        )
                                    }
                                </Flex>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </HStack>
            <HStack w={'25%'} display={['none', '', '', 'flex']} justifyContent={'space-between'}>
                <Catalog />
                <HStack  >
                    <Link to={LoginStatus ? "/userprofile" : '/login'}>
                        <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#fff'} color={'#9a67ff'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "#9a67ff", color: "white" }}>{LoginStatus ? userEmail : "Login"}</Button>
                    </Link>
                    <Link to={LoginStatus ? "/" : '/signup'}>
                        <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#8C52FF'} color={'whitesmoke'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "white", color: "#9a67ff" }} onClick={handleLogOut}>{LoginStatus ? "Log Out" : "Sign up"}</Button>
                    </Link>
                </HStack>
            </HStack>
        </HStack>
    )

}
const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "0px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      borderRadius: "10px",
      cursor: "pointer",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::webkit-scrollbar-thumb:hover": {
      backgroundColor: "black",
    },
  };
  
export default Header
