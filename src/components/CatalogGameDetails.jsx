import { Box, Button, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { IoMdCloudDownload } from "react-icons/io";
import { FaGoogleDrive } from "react-icons/fa";
import { SiUtorrent } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";

const CatalogGameDetails = ({ id, title, poster, bgIMG, trailer, releaseDate, screenshots, genre, developer, platform, multiplayer, version, size, desc, MiniReq, RecReq, gdrive, mega, directly, torrent }) => {
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
                <Box w={'28rem'} >
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
                {desc && desc.length > 0 && (
                    desc.map((i, index) => (
                        <Box key={index}>
                            <Text fontSize={'1.1rem'}>{i}</Text>
                            <br></br>
                        </Box>
                    ))
                )}
            </Box>

            <HStack padding={'1rem 2rem'} gap={'2rem'}>
                {MiniReq && MiniReq.length > 0 && (
                    <HStack w={'100%'} >
                        <VStack alignItems={'flex-start'} >
                            <Heading color={'#8C52FF'}>MINIMUM REQUIREMENTS</Heading>
                            {MiniReq.map((i, index) => (
                                <li key={index} fontWeight={'bold'}>{i}</li>
                            ))}
                        </VStack>
                    </HStack>
                )}

                {RecReq && RecReq.length > 0 && (
                    <HStack w={'100%'} >
                        <VStack alignItems={'flex-start'} >
                            <Heading color={'#8C52FF'}>RECOMMENDED REQUIREMENTS</Heading>
                            {RecReq.map((i, index) => (
                                <li key={index} fontWeight={'bold'}>{i}</li>
                            ))}
                        </VStack>
                    </HStack>
                )}
            </HStack>

            <HStack alignItems={'center'} gap={'2rem'} p={'2rem'}>
                <VStack w={'50%'}>
                    <Heading fontSize={'2rem'}>SCREENSHOTS</Heading>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={2000}
                        showStatus={false}
                        showThumbs={false}
                        showArrows={false}
                        width={'100%'}
                    >
                        {screenshots.map((i) => (
                            <Image objectFit={'cover'} src={i} />
                        ))}
                    </Carousel>
                </VStack>

                <VStack w={'50%'}>
                    <Heading>DOWNLOAD LINKS</Heading>
                    <HStack>
                        <a href={gdrive} target='_blank'>
                            <Button style={downloadLinks} bgColor={'#E8E8E8'} _hover={{ bgColor: "rgb(210,210,210)" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <FaGoogleDrive fontSize={'1.2rem'} />
                                    Gdrive
                                </Flex>
                            </Button>
                        </a>

                        <a href={torrent} target='_blank'>
                            <Button style={downloadLinks} bgColor={'#59BA41'} color={'white'} _hover={{ bgColor: "#1AA91C" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <SiUtorrent fontSize={'1.2rem'} />
                                    Torrent
                                </Flex>
                            </Button>
                        </a>

                        <a href={mega} target='_blank'>
                            <Button style={downloadLinks} bgColor={'rgb(255,68,0)'} color={'white'} _hover={{ bgColor: "#D93A00" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <IoMdCloudDownload fontSize={'1.3rem'} />
                                    Mega
                                </Flex>
                            </Button>
                        </a>

                        <a href={directly} target='_blank'>
                            <Button style={downloadLinks} bgColor={"rgb(100,100,100)"} color={'white'} _hover={{ bgColor: "rgb(81,81,81)" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <FaDownload fontSize={'1rem'} />
                                    Directly
                                </Flex>
                            </Button>
                        </a>
                    </HStack>
                </VStack>
            </HStack>


        </Box>
    );
};

export default CatalogGameDetails;

const downloadLinks = {
    padding: '1rem 2rem',
    border: "none",
    borderRadius: '.8rem',
    width: "10rem",
    fontSize: "1rem",
    transition: '.1s all ease-in-out',
    cursor: "pointer",
    fontWeight: "bold",
}