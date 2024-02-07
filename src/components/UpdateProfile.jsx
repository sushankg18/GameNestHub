import { Box, Heading, Stack, Button, Flex, Input, Image, Text, VStack,InputGroup,InputLeftAddon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import defaultProfile from "../assets/user.png"

const UpdateProfile = () => {
    const [profile, setProfile] = useState(defaultProfile);
    const [name, setName] = useState("Sushank guatam")
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
            <Flex w={'50%'} h={'80%'} gap={'1rem'}>
                <Stack alignItems={'center'} bgColor={'rgb(45,45,45)'} w={'100%'}>
                    <Heading>UPDATE PROFILE</Heading>
                    <VStack gap={'1rem'}>
                        <Text>Change profile picture</Text>
                        <Box w={'8rem'} h={'8rem'} borderRadius={'50%'} overflow={'hidden'}>
                            <Image src={profile} w={'100%'} h={'100%'} objectFit={'cover'} />
                        </Box>
                        <Input display={'none'} type="file" accept="image/jpeg,image/png,image/jpg" id="profile-btn" onChange={changeProfilePic} />
                        <Flex gap={'1rem'}>

                            <Button as={'label'} htmlFor="profile-btn">Change Profile</Button>
                            {
                                profile === defaultProfile ? (
                                    null
                                ) : (<Button onClick={removeProfile}>Remove profile</Button>)
                            }
                        </Flex>
                    </VStack>
                    <VStack>
                        <InputGroup>
                            <InputLeftAddon bgColor={'transparent'}>Name</InputLeftAddon>
                            <Input value={name} onChange={(e) => { setName(e.target.value) }} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon bgColor={'transparent'}>Email</InputLeftAddon>
                            <Input value={name} onChange={(e) => { setName(e.target.value) }} />
                        </InputGroup>
                        
                    </VStack>
                </Stack>
                <Flex alignItems={'center'} fontSize={'1.1rem'} alignSelf={'flex-start'} cursor={'pointer'}>Close <IoClose /></Flex>
            </Flex>
        </Box>
    );
};

export default UpdateProfile;
