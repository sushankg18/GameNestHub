import { Box, Heading, Stack, Button, Flex, Input, Image, Text, VStack, HStack } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { IoClose } from "react-icons/io5";
import defaultProfile from "../assets/user.png"
import { FaRegEdit } from "react-icons/fa";
import { NoteContext } from '../Context/NoteState';


const UpdateProfile = ({ isOpen, onClose }) => {
    const { setLoginStatus, setAuthenticatedUser, setUserEmail, userEmail } = useContext(NoteContext);

    const [IsOpen, setIsOpen] = useState(isOpen)
    const [profile, setProfile] = useState(defaultProfile);
    const [name, setName] = useState("Sushank guatam")
    const [email, setEmail] = useState(userEmail)
    const changeProfilePic = () => {
        const profileBtn = document.getElementById('profile-btn');
        if (profileBtn && profileBtn.files.length > 0) {
            const file = profileBtn.files[0];
            setProfile(URL.createObjectURL(file));
        }
    };
    const removeProfile = () => {
        setProfile(defaultProfile)
    }

    const handleClose = () => {
        onClose(); // Call the onClose function passed from the parent component
    };
    return (
        <Box
            position={["absolute", 'fixed']}
            top="0"
            left="0"
            width="100vw"
            height={['fit-content', "100vh"]}
            backgroundColor="rgba(0, 0, 0, 0.8)"
            zIndex="999"
            display="flex"
            justifyContent="center"
            py={['1rem', ".6rem"]}
            alignItems='center'
            flexGrow={1} overflowY="auto"
        >
            <Flex position={'relative'} w={['99%', '50%']}p={['.4rem', '2rem']} bgColor={'#F3F8FC'} h={['100%', '98%']}>
                <Stack alignItems={'center'}  w={'100%'} color={'black'}>
                    <Heading fontSize={['large', 'xx-large']}>Let's update your profile...</Heading>
                    <VStack gap={'1rem'}>
                        <Text>Change profile picture</Text>
                        <Box w={'8rem'} h={'8rem'} borderRadius={'50%'} overflow={'hidden'}>
                            <Image src={profile} w={'100%'} h={'100%'} objectFit={'cover'} />
                        </Box>
                        <Input display={'none'} type="file" accept="image/jpeg,image/png,image/jpg" id="profile-btn" onChange={changeProfilePic} />
                        <Flex gap={'1rem'}>

                            <Button as={'label'} colorScheme={'purple'} cursor={'pointer'} htmlFor="profile-btn">Change Profile</Button>
                            {
                                profile === defaultProfile ? (
                                    null
                                ) : (<Button colorScheme={'purple'} onClick={removeProfile}>Remove profile</Button>)
                            }
                        </Flex>
                    </VStack>
                    <HStack flexDir={['column', 'row']} w={'100%'} height={'fit-content'}>

                        <VStack  px={['.3rem', '2rem']} gap={'1.5rem'} alignItems={'flex-start'} h={'100%'} w={['100%','50%']}>
                            <Stack gap={'.4rem'} w={'100%'}>
                                <Text fontWeight={'bold'}>Edit name</Text>
                                <Flex alignItems={'center'} gap={'.4rem'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none", width: "100%" }} value={name} placeholder='Change name' onChange={(e) => { setName(e.target.value) }} />
                                    <FaRegEdit fontSize={'1.2rem'} />
                                </Flex>
                            </Stack>
                            <Stack gap={'.4rem'} w={'100%'}>
                                <Text fontWeight={'bold'}>Change email</Text>
                                <Flex alignItems={'center'} gap={'.4rem'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none", width: "100%" }} type='email' placeholder='Change email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    <FaRegEdit fontSize={'1.2rem'} />
                                </Flex>

                            </Stack>
                        </VStack>

                        <VStack px={['.3rem', '2rem']} gap={'1.5rem'} alignItems={'flex-start'} h={'100%'} w={['100%', '50%']}>
                            <Stack gap={'.4rem'} w={'100%'}>
                                <Text fontWeight={'bold'}>Edit name</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none", width: "100%" }} placeholder='Enter old password' />
                                </Flex>
                            </Stack>
                            <Stack gap={'.4rem'} w={'100%'}>
                                <Text fontWeight={'bold'}>Change email</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none", width: "100%" }} placeholder='Enter New password' />
                                </Flex>

                            </Stack>
                            <Stack gap={'.4rem'} w={'100%'}>
                                <Text fontWeight={'bold'}>Change email</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none", width: "100%" }} placeholder='Confirm New password' />
                                </Flex>
                            </Stack>
                            <Button p={'.3rem 2rem'} colorScheme={'teal'} borderRadius={'.5rem'}>Change password</Button>
                        </VStack>
                    </HStack>

                    <Flex marginTop={['1rem','0']} gap={'1rem'} alignSelf={['flex-end','flex-start']}>
                        <Button w={'6rem'} colorScheme={'red'}onClick={handleClose} cursor={'pointer'}>Cancel</Button>
                        <Button minW={'6rem'} colorScheme='green' cursor={'pointer'}>Save changes</Button>
                    </Flex>
                </Stack>
                <Flex position={'absolute'} top={'1'} right={'1'} border={'1px solid red'} alignItems={'center'} onClick={handleClose} fontSize={'1.5rem'} alignSelf={'flex-start'} cursor={'pointer'} color={'red'}> <IoClose /></Flex>
            </Flex>
        </Box>
    );
};

export default UpdateProfile;
