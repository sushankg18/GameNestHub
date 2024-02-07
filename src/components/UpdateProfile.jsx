import { Box, Heading, Stack, Button, Flex, Input, Image, Text, VStack, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import defaultProfile from "../assets/user.png"
import { FaRegEdit } from "react-icons/fa";


const UpdateProfile = ({ isOpen, onClose }) => {
    console.log(isOpen)
    const [IsOpen, setIsOpen] = useState(isOpen)
    const [profile, setProfile] = useState(defaultProfile);
    const [name, setName] = useState("Sushank guatam")
    const [email, setEmail] = useState("sushank@gmail.com")
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
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            zIndex="999"
            display="flex"
            justifyContent="center"
            alignItems='center'
        >
            <Flex w={'50%'} h={'95%'} gap={'.4rem'}>
                <Stack alignItems={'center'} p={'2rem'} bgColor={'#F3F8FC'} w={'100%'} color={'black'}>
                    <Heading fontSize={'xx-large'}>Let's update your profile...</Heading>
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
                    <HStack w={'100%'}  height={'fit-content'}>

                        <VStack px={'2rem'} gap={'1.5rem'} alignItems={'flex-start'} h={'100%'} w={'50%'}>
                            <Stack gap={'.4rem'}>
                                <Text fontWeight={'bold'}>Edit name</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none",width :"15rem" }} value={name} placeholder='Change name' onChange={(e) => { setName(e.target.value) }} />
                                    <FaRegEdit />
                                </Flex>
                            </Stack>
                            <Stack gap={'.4rem'}>
                                <Text fontWeight={'bold'}>Change email</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none",width :"15rem" }} type='email' placeholder='Change email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                    <FaRegEdit />
                                </Flex>

                            </Stack>
                        </VStack>

                        <VStack px={'2rem'} gap={'1.5rem'} alignItems={'flex-start'} h={'100%'} w={'50%'}>
                            <Stack gap={'.4rem'}>
                                <Text fontWeight={'bold'}>Edit name</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none" ,width :"15rem" }} placeholder='Enter old password' />
                                </Flex>
                            </Stack>
                            <Stack gap={'.4rem'}>
                                <Text fontWeight={'bold'}>Change email</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none" ,width :"15rem" }} placeholder='Enter New password' />
                                </Flex>

                            </Stack>
                            <Stack gap={'.4rem'}>
                                <Text fontWeight={'bold'}>Change email</Text>
                                <Flex alignItems={'center'}>
                                    <input style={{ backgroundColor: 'white', color: "black", padding: '.4rem 1rem', outline: "none",width :"15rem" }} placeholder='Confirm New password' />
                                </Flex>
                            </Stack>
                            <Button  p={'.3rem 2rem'} colorScheme={'teal'} borderRadius={'.5rem'}>Change password</Button>
                        </VStack>
                    </HStack>

                    <Flex gap={'1rem'} alignSelf={'flex-start'}>
                        <Button w={'6rem'} colorScheme={'red'}cursor={'pointer'}>Cancel</Button>
                        <Button minW={'6rem'} colorScheme='green'cursor={'pointer'}>Save changes</Button>
                    </Flex>
                </Stack>
                <Flex alignItems={'center'} onClick={handleClose} fontSize={'1.5rem'} alignSelf={'flex-start'} cursor={'pointer'} color={'#fff'}> <IoClose /></Flex>
            </Flex>
        </Box>
    );
};

export default UpdateProfile;
