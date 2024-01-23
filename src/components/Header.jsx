import { Box, Button, HStack, Image, } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import Catalog from './Catalog'
import Logo from '../assets/GameNestHub_Logo.png'
import { Link } from 'react-router-dom';
import { NoteContext } from '../Context/NoteState';
import Login from './Login';

const Header = () => {
    const { LoginStatus , logout} = useContext(NoteContext);

    useEffect(() => {
        console.log("Header : ", LoginStatus);
    }, []);

    const [searchTerm, setSearchTerm] = useState('')
    const handleLogOut = () =>{
        if(LoginStatus){
            logout();
        }
    }
    return (
        <HStack height={'10vh'} padding={'.8rem 2rem'} w={'100vw'} justifyContent={'space-between'} bgColor={'#18181C'}>
            <HStack w={'60%'} justifyContent={'space-between'} >
                <Link to={'/'}>
                    <Image src={Logo} userSelect={'none'} cursor={'pointer'} width={['4rem', '6rem']} borderRadius={'5px'} />
                </Link>
                <Box width={'30rem'} display={'flex'} borderRadius={'.5rem'} overflow={'hidden'} height={'2.3rem'}>
                    <input onChange={(e) => { setSearchTerm(e.target.value); console.log(searchTerm) }} value={searchTerm} placeholder='Search for any game' style={{ width: "100%", padding: "0 2rem", fontWeight: "bold", outline: "none", border: "none" }} />
                    <button style={{ color: "white", backgroundColor: "#9a67ff", padding: "0 1.4rem", fontWeight: "bold", border: "none", }}>Search</button>
                </Box>
            </HStack>
            <HStack w={'25%'} display={['none', '', '', 'flex']} justifyContent={'space-between'}>
                <Catalog />
                <HStack  >
                    <Link to={LoginStatus ? "/userprofile":'/login'}>
                        <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#fff'} color={'#9a67ff'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "#9a67ff", color: "white" }}>{LoginStatus ? "sushank" : "Login"}</Button>
                    </Link>
                    <Link to={LoginStatus ? "/":'/signup'}>
                        <Button border={'none'} padding={'.4rem 1rem'} bgColor={'#8C52FF'} color={'whitesmoke'} cursor={'pointer'} borderRadius={'5px'} fontWeight={'bold'} fontFamily={'Titillium Web'} fontSize={'1rem'} transition={'.2s all ease'} _hover={{ bgColor: "white", color: "#9a67ff" }} onClick={handleLogOut}>{LoginStatus ? "Log Out" : "Sign in"}</Button>
                    </Link>
                </HStack>
            </HStack>
        </HStack>
    )
}

export default Header
