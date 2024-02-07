import { Box, Button, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import profile from '../assets/profile.jpeg';
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import UpdateProfile from './UpdateProfile';

const UserProfile = () => {

    const [isUpOpen, setIsUpOpen] = useState(false)
    const handleUpdateProfile = () =>{
        setIsUpOpen(!isUpOpen);
    }
    return (
        <Box display={'flex'}  flexDir={'column'} justifyContent={'center'} alignItems={'center'} w={['100%', "80%"]} minH={['93vh', "90vh"]} color={'white'} bgColor={'#121212'}>
            <Box
                position={"fixed"}
                top={"0"}
                left={"0"}
                w="100%"
                h="100%"
                zIndex={"-1"}
                bgColor={'#121212'}
            />
            {
                isUpOpen && <UpdateProfile />
            }
            <VStack w={'100%'} height={'100%'} p={'1rem 2rem'} gap={'4rem'}>
                <HStack w={'100%'} justifyContent={'space-between'} >
                    <HStack gap={'1rem'}>
                        <Box w={'5rem'} borderRadius={'50%'} overflow={'hidden'} height={'5rem'}>
                            <Image src={profile} w={'100%'} />
                        </Box>
                        <Heading>SUSHANK GAUTAM</Heading>
                    </HStack>
                    <HStack>
                        <Button onClick={handleUpdateProfile}>Edit profile</Button>
                    </HStack>
                </HStack>

                <Flex flexDir={'column'} w={'100%'} gap={'1rem'} minH={'fit-content'} >
                    <Box>
                        <Heading>Favourite Games</Heading>
                    </Box>
                    <Flex gap={'2rem'} >
                        <Box bgColor={'rgb(45,45,45)'} cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={'15rem'} h={'11rem'} borderRadius={'.8rem'}>
                            <Flex alignItems={'center'} gap={'.5rem'} flexDir={'column'}>
                                <Text><FaPlus /></Text>
                                <Text>Add Game</Text>
                            </Flex>
                        </Box>

                        <Box bgColor={'rgb(45,45,45)'} cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={'15rem'} h={'11rem'} borderRadius={'.8rem'}>
                            <Flex alignItems={'center'}gap={'.5rem'} flexDir={'column'}>
                                <Text><FaPlus /></Text>
                                <Text>Add Game</Text>
                            </Flex>
                        </Box>

                        <Box bgColor={'rgb(45,45,45)'} cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={'15rem'} h={'11rem'} borderRadius={'.8rem'}>
                            <Flex alignItems={'center'}gap={'.5rem'} flexDir={'column'}>
                                <Text><FaPlus /></Text>
                                <Text>Add Game</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>

                <Flex w={'100%'} flexDir={'column'} gap={'1rem'}>
                    <Heading>
                        Wishlist
                    </Heading>

                    <Flex p={'1rem 2rem'} h={'10rem'}>
                        <Box >
                            <Flex alignItems={'flex-start'} gap={'1rem'} flexDir={'column'}>
                                <GiNightSleep fontSize={'3rem'} />
                                <Text fontSize={'1.2rem'}>Your wishlist is empty, Please add some games to your wishlist</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>


                <Flex w={'100%'} flexDir={'column'} gap={'1rem'}>
                    <Heading>
                        Collections
                    </Heading>

                    <Flex p={'1rem 2rem'} h={'10rem'}>
                        <Box >
                            <Flex alignItems={'flex-start'} gap={'1rem'} flexDir={'column'}>
                                <GiNightSleep fontSize={'3rem'} />
                                <Text fontSize={'1.2rem'}>No Collections yet</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>


                <Flex w={'100%'} flexDir={'column'} gap={'1rem'}>
                    <Heading>
                        Following
                    </Heading>

                    <Flex p={'1rem 2rem'} h={'10rem'}>
                        <Box >
                            <Flex alignItems={'flex-start'} gap={'1rem'} flexDir={'column'}>
                                <GiNightSleep fontSize={'3rem'} />
                                <Text fontSize={'1.2rem'}>No following yet</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>

                <Flex w={'100%'} flexDir={'column'} gap={'1rem'}>
                    <Heading>
                        Followers
                    </Heading>

                    <Flex p={'1rem 2rem'} h={'10rem'}>
                        <Box >
                            <Flex alignItems={'flex-start'} gap={'1rem'} flexDir={'column'}>
                                <GiNightSleep fontSize={'3rem'} />
                                <Text fontSize={'1.2rem'}>No followers yet</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
            </VStack>
        </Box>
    );
}

export default UserProfile;
