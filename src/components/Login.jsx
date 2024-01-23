import { Box, Button, Center, HStack, Heading, Image, Input, VStack, InputGroup, InputLeftElement, Checkbox, Stack, Text } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import LoginImg from '../assets/loginPage.png';
import signupBG from '../assets/temp.jpg';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import firebase from '../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { NoteContext } from '../Context/NoteState';

const Login = () => {
    const { setLoginStatus ,setAuthenticatedUser } = useContext(NoteContext);

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const Navigate = useNavigate();
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
        <Center h={'90vh'} w={'100vw'} bgImage={`url(${signupBG})`} bgSize="cover">
            <Box fontFamily={'Titillium Web'} border={'1px solid white'} bgColor={'white'} color={'#9A67FF'} w={'50%'} height={'80vh'} borderRadius={'1rem'}>
                <HStack w={'100%'} alignItems={'center'} height={'100%'}>
                    <HStack w={'50%'} h={'100%'} justifyContent={'center'}>
                        <Image userSelect={'none'} w={'80%'} objectFit={'contain'} src={LoginImg} />
                    </HStack>
                    <Box h={'100%'} border={'1px solid '} />

                    <VStack w={'50%'} alignItems={'center'} justifyContent={'center'} gap={'1rem'} h={'100%'} >
                        <Heading py={'2rem'}>Login</Heading>
                        <InputGroup borderBottom={'1px solid blue'} w={'70%'}>
                            <InputLeftElement pointerEvents='none'>
                                <FaUser color='gray.300' />
                            </InputLeftElement>
                            <Input type='email' placeholder='Username or Email ' onChange={(e) => { setEmail(e.target.value) }} value={email} border={'none'} py={'.5rem'} variant={'unstyled'} />
                        </InputGroup>

                        <InputGroup borderBottom={'1px solid blue'} w={'70%'}>
                            <InputLeftElement pointerEvents='none'>
                                <RiLockPasswordFill color='gray.300' />
                            </InputLeftElement>
                            <Input type='password' placeholder='Password' onChange={(e) => { setPass(e.target.value) }} value={pass} border={'none'} py={'.5rem'} variant={'unstyled'} />
                        </InputGroup>

                        <Checkbox colorScheme='purple' >Remember me?</Checkbox>
                        <Button w={'70%'} onClick={submit} fontWeight={'bold'} border={'1px solid #9a67ff'} bgColor={'white'} color={'#9a67ff'} _hover={{ bgColor: "#9a67ff", color: "white", border: "none" }}>Login</Button>
                        <Stack>
                            <Link to={'/signup'}>
                                <HStack>
                                    <Text textDecor={'underline .5px #9a67ff'}>Don't have an Account? Signup</Text>
                                </HStack>
                            </Link>
                            <Link to={'/forgetpassword'}>
                                <Text>Forget password?</Text>
                            </Link>
                        </Stack>
                    </VStack>
                </HStack>
            </Box>
        </Center >
    );
}

export default Login;
