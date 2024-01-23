import { Box, Button, HStack, Heading, Image, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import profile from '../assets/profile.jpeg';
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react'

const UserProfile = () => {


    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100vw'} height={'90vh'} color={'white'} bgColor={'#121212'}>
            <VStack w={'70%'} height={'100%'}>
                <HStack w={'100%'} justifyContent={'space-between'} p={'1rem 1.4rem'}>
                    <HStack gap={'1rem'}>
                        <Box w={'5rem'} borderRadius={'50%'} overflow={'hidden'} height={'5rem'}>
                            <Image src={profile} w={'100%'} />
                        </Box>
                        <Heading>SUSHANK GAUTAM</Heading>
                    </HStack>
                    <HStack>
                        <Button>Edit profile</Button>
                    </HStack>
                </HStack>

                <Tabs variant={'unstyled'} w={['100%', '90%']} margin={'0 auto'} position={'relative'}>
                    <TabList justifyContent={'space-between'}>
                        <Tab fontSize={'1.1rem'} fontWeight={'bold'} >Overview</Tab>
                        <Tab fontSize={'1.1rem'} fontWeight={'bold'} >Favourite Games</Tab>
                        <Tab fontSize={'1.1rem'} fontWeight={'bold'} >Collections</Tab>
                        <Tab fontSize={'1.1rem'} fontWeight={'bold'} >Friends</Tab>
                        <Tab fontSize={'1.1rem'} fontWeight={'bold'} >Followings</Tab>
                        <Tab fontSize={'1.1rem'} fontWeight={'bold'} >Reviews</Tab>
                        <Tab fontSize={'1.1rem'} fontWeight={'bold'} >Wishlist</Tab>
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                    />
                </Tabs>
                <Box border={'1px solid white'}>
                </Box>
            </VStack>
        </Box>
    );
}

export default UserProfile;
