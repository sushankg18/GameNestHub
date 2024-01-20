import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const CatalogGameDetails = ({ id, title, poster, bgIMG, trailer, releaseDate, screenshots, genre, developer, platform, multiplayer, version, size, desc, MiniReq, RecReq }) => {
    const overlayColor = `rgba(0, 0, 0, 0.8)`;

    return (
        <Box minH={'90vh'} position="relative" style={{ backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${bgIMG})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>

            <HStack justifyContent={'space-between'} padding={'1rem 2rem'}>
                <HStack alignItems={'flex-start'} >
                    <Image src={poster} w={'12rem'} />
                    <VStack alignItems={'flex-start'}>
                        <Heading fontSize={'4rem'} color={'#8C52FF'}>{title}</Heading>
                        <Text fontSize={'1.1rem'} fontWeight={'bold'}>Released Date : {releaseDate}</Text>
                        <Text fontSize={'1.1rem'} fontWeight={'bold'}>Genre : {genre}</Text>
                        <Text>Size : {size}</Text>
                    </VStack>
                </HStack>
                <Box w={'27rem'} >
                    <video width={'100%'} style={{ borderRadius: "10px" }} autoPlay muted loop src={trailer} />
                </Box>
            </HStack>



            <Box w={'100%'} p={'2rem'}>

                <VStack alignItems={'flex-start'} w={'30rem'} height={'12rem'} gap={'2rem'} >
                    <HStack gap={'2rem'} w={'100%'} height={'50%'}>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading>Platorm</Heading>
                            <Text>{platform}</Text>
                        </VStack>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading>Developer</Heading>
                            <Text>{developer}</Text>
                        </VStack>
                    </HStack>

                    <HStack gap={'2rem'} w={'100%'} height={'50%'}>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading>Version</Heading>
                            <Text>{version}</Text>
                        </VStack>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading>Multiplayer</Heading>
                            <Text>{multiplayer}</Text>
                        </VStack>
                    </HStack>
                </VStack>

            </Box>

            <Box padding={'1rem 2rem'} >

                <Heading fontSize={'1.5rem'} color={'#8C52FF'}>DESCRIPTION -</Heading>
                {
                    desc.map((i, index) => (
                        <Box>
                            <Text fontSize={'1.1rem'}>{i}</Text>
                            <br></br>
                        </Box>
                    ))
                }
            </Box>

            <Box padding={'0 2rem'}>

                <HStack w={'100%'} >
                    <VStack alignItems={'flex-start'} w={'50%'}>
                        <Heading color={'#8C52FF'}>MINIMUM REQUIREMENTS</Heading>
                        {
                            MiniReq.map((i, index) => (
                                <Text fontWeight={'bold'}>{i}</Text>
                            ))}
                    </VStack>

                    <VStack alignItems={'flex-start'} w={'50%'}>
                        <Heading color={'#8C52FF'}>RECOMENDED REQUIREMENTS</Heading>
                        {
                            RecReq.map((i, index) => (
                                <Text fontWeight={'bold'}>{i}</Text>
                            ))}
                    </VStack>
                </HStack>

            </Box>

            {/* 

            <Box>
                {
                 screenshots.map((i,index)=>(
                    <Box>
                        <Image w={'20rem'} src={i} />
                    </Box> 
                    ))}
            </Box> */}
        </Box>
    );
};

export default CatalogGameDetails;
