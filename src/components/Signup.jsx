import { Box, Center, HStack, Heading, Image, Input, Text, VStack, InputGroup, InputLeftElement, Button, } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import LoginImg from '../assets/loginPage.png'
import signupBG from '../assets/temp.jpg'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDriveFileRenameOutline, MdEmail } from "react-icons/md";
import firebase from '../firebaseConfig';
import { Link } from 'react-router-dom';

const Signup = () => {


    const [username, setUsername] = useState('')
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const submit = async (e) => {
        e.preventDefault();

        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, pass)
            if (user) {
                alert('Account created Successfully ✅`');

                await user.updateProfile({
                    displayName: username,
                  });
            }
        } catch (error) {
            alert(error)
        }
    }
    return (
        <Center h={'90vh'} w={'100vw'} bgImage={`url(${signupBG})`} bgSize="cover">
            <Box border={'1px solid white'} bgColor={'white'} color={'#9A67FF'} w={'50%'} height={'80vh'} borderRadius={'1rem'}>
                <HStack w={'100%'} alignItems={'center'} height={'100%'}>
                    <HStack w={'50%'} h={'100%'} justifyContent={'center'}>
                        <Image w={'80%'} objectFit={'contain'} src={LoginImg} />
                    </HStack>

                    <Box h={'100%'} border={'1px solid '} />

                    <VStack w={'50%'} alignItems={'center'} justifyContent={'center'} gap={'1rem'} h={'100%'} >

                        <Heading py={'2rem'}>Sign up</Heading>
                        <InputGroup borderBottom={'1px solid blue'} w={'70%'}>
                            <InputLeftElement pointerEvents='none'>
                                <FaUser color='gray.300' />
                            </InputLeftElement>
                            <Input type='text' placeholder='Username' border={'none'} value={username} py={'.5rem'} variant={'unstyled'} onChange={(e) => { setUsername(e.target.value) }} />
                        </InputGroup>

                        <InputGroup borderBottom={'1px solid blue'} w={'70%'}>
                            <InputLeftElement pointerEvents='none'>
                                <MdDriveFileRenameOutline color='gray.300' />
                            </InputLeftElement>
                            <Input type='text' placeholder='Full name' border={'none'} value={fullname} py={'.5rem'} variant={'unstyled'} onChange={(e) => { setFullName(e.target.value) }} />
                        </InputGroup>

                        <InputGroup borderBottom={'1px solid blue'} w={'70%'}>
                            <InputLeftElement pointerEvents='none'>
                                <MdEmail color='gray.300' />
                            </InputLeftElement>
                            <Input type='email' placeholder='Email Address' border={'none'} value={email} py={'.5rem'} variant={'unstyled'} onChange={(e) => { setEmail(e.target.value) }} />
                        </InputGroup>

                        <InputGroup borderBottom={'1px solid blue'} w={'70%'}>
                            <InputLeftElement pointerEvents='none'>
                                <RiLockPasswordFill color='gray.300' />
                            </InputLeftElement>
                            <Input type='password' placeholder='Password' border={'none'} value={pass} py={'.5rem'} variant={'unstyled'} onChange={(e) => { setPass(e.target.value) }} />
                        </InputGroup>

                        <Button w={'70%'} onClick={submit} fontWeight={'bold'} border={'1px solid #9a67ff'} bgColor={'white'} color={'#9a67ff'} _hover={{ bgColor: "#9a67ff", color: "white", border: "none" }}>Sign up</Button>
                        <Link to={'/login'}>
                            <Text textDecor={'underline .5px #9a67ff'}>Already have an Account? login</Text>
                        </Link>
                    </VStack>
                </HStack>
            </Box>
        </Center>
    )
}

export default Signup;
