import { Box, Button, Center, HStack, Heading, Image, Input, VStack, InputGroup, InputLeftElement, Checkbox, Stack, Text } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import LoginImg from '../assets/loginPage.png';
import signupBG from '../assets/temp.jpg';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import firebase from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { NoteContext } from '../Context/NoteState';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const { setLoginStatus, setAuthenticatedUser } = useContext(NoteContext);
    const Navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(false)
    const showPassword = () => {
        setShowPass(!showPass);
    }
    const submit = async (e) => {
        e.preventDefault();

        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
            if (user) {
                alert('SIGNED IN SUCCESSFULLY✅');
                Navigate('/userprofile');
                setLoginStatus(true);
                setAuthenticatedUser({ name: user.displayName });
            }
        } catch (error) {
            alert(error);
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
            <VStack px={'1rem'} fontFamily={'Titillium Web'} gap={'0'} bgColor={'transparent'} color={'#9A67FF'} w={'50%'} height={'80vh'} borderRadius={'1rem'}>
                <Heading py={'.7rem'}>BACK TO YOUR JOURNEY</Heading>
                <HStack w={'100%'} alignItems={'center'} height={'100%'}>
                    <VStack w={'100%'} alignItems={'center'} color={'white'} justifyContent={'center'} gap={'1rem'} h={'100%'} >
                        <Box flexDir={'column'} display={'flex'} gap={'1rem'} w={'55%'} h={'100%'} px={'.7rem'}>
                            <Center>

                                <Heading py={'2rem'}>Login</Heading>
                            </Center>
                            <InputGroup borderBottom={'1px solid blue'} w={'100%'}>
                                <InputLeftElement pointerEvents='none'>
                                    <FaUser color='gray.300' />
                                </InputLeftElement>
                                <Input type='email' placeholder='Username or Email ' onChange={(e) => { setEmail(e.target.value) }} value={email} border={'none'} py={'.5rem'} variant={'unstyled'} />
                            </InputGroup>

                            <InputGroup borderBottom={'1px solid blue'} w={'100%'}>
                                <InputLeftElement pointerEvents='none'>
                                    <RiLockPasswordFill color='gray.300' />
                                </InputLeftElement>
                                <Input type={showPass ? "text" : "password"} px={'.5rem'} placeholder='Password' onChange={(e) => { setPass(e.target.value) }} value={pass} border={'none'} py={'.5rem'} variant={'unstyled'} />
                                {
                                    pass.length > 0 &&
                                    <Button onClick={showPassword} variant={'unstyled'}>{showPass ? "hide" : "show"}</Button>
                                }
                            </InputGroup>

                            <Checkbox colorScheme='purple' alignSelf={'flex-start'}>Remember me?</Checkbox>
                            <Button w={'100%'} onClick={submit} fontWeight={'bold'} border={'1px solid #9a67ff'} bgColor={'white'} color={'#9a67ff'} _hover={{ bgColor: "#9a67ff", color: "white", border: "none" }}>Login</Button>
                            <Stack alignSelf={'flex-start'} gap={'1rem'}>
                                <Link to={'/signup'}>
                                    <HStack>
                                        <Text textDecor={'underline .5px #9a67ff'}>Don't have an Account? Signup</Text>
                                    </HStack>
                                </Link>
                                <Link to={'/forgetpassword'}>
                                    <Text>Forget password?</Text>
                                </Link>
                            </Stack>
                        </Box>
                    </VStack>
                </HStack>
            </VStack>
        </Center >
    );
}

export default Login;
