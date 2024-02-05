import { Box, Center, HStack, Heading, Image, Input, Text, VStack, InputGroup, InputLeftElement, Button, Stack, } from '@chakra-ui/react'
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
    const [showPass, setShowPass] = useState(false)
    const showPassword = () => {
        setShowPass(!showPass);
    }
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
        <Center h={['93vh', '90vh']} w={'100vw'} position="relative">
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                zIndex={'-1'}
                bgImage={`url(${signupBG})`}
                bgSize="cover"
                filter="blur(8px)"
            />
            <VStack gap={'0'} px={'1rem'} fontFamily={'Titillium Web'} bgColor={'transparent'} color={'#9A67FF'} minW={'50%'} height={'80vh'} borderRadius={'1rem'}>
                <VStack py={'.3rem'} gap={'0rem'} >
                    <Heading>YOUR ADVENTURE BEGINS HERE</Heading>
                    {/* <Text fontWeight={'bold'} fontSize={'large'}>To Game Nest Hub</Text> */}
                </VStack>
                <HStack w={'100%'} alignItems={'center'} height={'100%'} >
                    <VStack w={'100%'} alignItems={'center'} color={'white'} justifyContent={'center'} gap={'1rem'} h={'100%'} >
                        <Box flexDir={'column'} display={'flex'} gap={'1rem'} w={'55%'} h={'100%'} px={'.7rem'}>
                            <Center>

                                <Heading py={'2rem'} >SIGN UP</Heading>
                            </Center>
                            <InputGroup borderBottom={'1px solid whitesmoke'} w={'100%'}>
                                <InputLeftElement pointerEvents='none'>
                                    <MdDriveFileRenameOutline  />
                                </InputLeftElement>
                                <Input type='email' placeholder='Enter Username ' onChange={(e) => { setUsername(e.target.value) }} value={username} border={'none'} py={'.5rem'} variant={'unstyled'} />
                            </InputGroup>
                            <InputGroup borderBottom={'1px solid whitesmoke'} w={'100%'}>
                                <InputLeftElement pointerEvents='none'>
                                    <FaUser  />
                                </InputLeftElement>
                                <Input type='email' placeholder='Enter Full name' onChange={(e) => { setFullName(e.target.value) }} value={fullname} border={'none'} py={'.5rem'} variant={'unstyled'} />
                            </InputGroup>
                            <InputGroup borderBottom={'1px solid whitesmoke'} w={'100%'}>
                                <InputLeftElement pointerEvents='none'>
                                    <MdEmail  />
                                </InputLeftElement>
                                <Input type='email' placeholder='Email ' onChange={(e) => { setEmail(e.target.value) }} value={email} border={'none'} py={'.5rem'} variant={'unstyled'} />
                            </InputGroup>

                            <InputGroup borderBottom={'1px solid whitesmoke'} w={'100%'}>
                                <InputLeftElement pointerEvents='none'>
                                    <RiLockPasswordFill  />
                                </InputLeftElement>
                                <Input type={showPass ? "text" : "password"} px={'.5rem'} placeholder='Password' onChange={(e) => { setPass(e.target.value) }} value={pass} border={'none'} py={'.5rem'} variant={'unstyled'} />
                                {
                                    pass.length > 0 &&
                                    <Button onClick={showPassword} variant={'unstyled'}>{showPass ? "hide" : "show"}</Button>
                                }
                            </InputGroup>

                            <Button w={'100%'} marginTop={'1rem'} onClick={submit} fontWeight={'bold'} border={'1px solid transparent'} bgColor={'white'} color={'#9a67ff'} _hover={{ bgColor: "#9a67ff", color: "white", border: "none" }}>Sign up</Button>
                            <Stack alignSelf={'flex-start'} gap={'.1rem'}>
                                <Link to={'/login'}>
                                    <HStack>
                                        <Text color={'white'} textDecor={'underline .5px white'}>Already have an account ? login</Text>
                                    </HStack>
                                </Link>
                            </Stack>
                        </Box>
                    </VStack>
                </HStack>
            </VStack>
        </Center >
    )
}

export default Signup;
