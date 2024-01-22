import { Box, Button, Center, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profile from '../assets/profile.jpeg'
const UserProfile = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} w={'100vw'} height={'90vh'} color={'white'} bgColor={'#121212'}>
            <VStack border={'1px solid white'} w={'70%'} height={'100%'}>
                <HStack w={'100%'} justifyContent={'space-between'} p={'1rem 1.4rem'}>

                    <HStack gap={'1rem'}>
                        <Box w={'5rem'} borderRadius={'50%'} overflow={'hidden'} height={'5rem'}>
                            <Image src={profile} w={'100%'} />
                        </Box>
                        <Heading>SUSHANK GUATAM</Heading>
                    </HStack>

                    <HStack>
                        <Button>Edit profile</Button>
                    </HStack>

                </HStack>
            </VStack>
        </Box>
    )
}

export default UserProfile
