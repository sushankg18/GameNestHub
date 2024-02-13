import { Box, Button, Flex, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React,{useContext, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { IoMdCloudDownload } from "react-icons/io";
import { FaGoogleDrive } from "react-icons/fa";
import { SiUtorrent } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import {NoteContext} from '../Context/NoteState'
import { Link } from 'react-router-dom';

const CatalogGameDetails = ({ title, poster, bgIMG, trailer, releaseDate, screenshots, genre, developer, platform, multiplayer, version, size, desc, MiniReq, RecReq, gdrive, mega, directly, torrent }) => {

    const { LoginStatus } = useContext(NoteContext);

    const overlayColor = `rgba(0, 0, 0, 0.8)`;
    return (
        <Box minH={'90vh'} color={'white'} overflow={'hidden'} position="relative">
            <Box
                position={"fixed"}
                top={"0"}
                left={"0"}
                zIndex={"-1"}
                w="100%"
                h="100%"
                background={`radial-gradient(ellipse at center, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.9) 100%), url(${bgIMG})`}
                backgroundSize="cover"
                backgroundPosition="center"
            />

            <HStack flexDir={['column', '', '', 'row']} gap={'2rem'} justifyContent={'space-between'} padding={['.5rem', '', '', '1rem 2rem']}>
                <HStack flexDir={['column', '', '', 'row']} alignItems={'flex-start'} w={'100%'} >
                    <Image border={'1px solid white'} alignSelf={'center'} src={poster} w={['9rem', '', '', '12rem']} />
                    <VStack alignItems={'flex-start'} w={'100%'}>
                        <Heading fontSize={['1.8rem', '', '', '4rem']} color={'#8C52FF'}>{title}</Heading>
                        <Text fontSize={['1rem', '', '', '1.1rem']} fontWeight={'bold'}>Released Date : {releaseDate}</Text>
                        <Text fontSize={['1rem', '', '', '1.1rem']} fontWeight={'bold'}>Genre : {genre}</Text>
                        <Text fontSize={['1rem', '', '', '1.1rem']} fontWeight={'bold'}>Size : {size}</Text>
                    </VStack>
                </HStack>
                <VStack>{
                    trailer && (
                        <>
                            <Heading alignSelf={'flex-start'} fontSize={'1rem'}>Trailer : </Heading>
                            <Box w={['', '', '', '28rem']} display={['block', '', '', 'block']} >
                                <video width={'100%'} style={{ borderRadius: "10px" }} autoPlay muted loop src={trailer} />
                            </Box>
                        </>
                    )
                    }
                </VStack>
            </HStack>



            <Box w={'100%'} p={['.7rem', '', '', '2rem']} overflow={'hidden'}>

                <VStack alignItems={'flex-start'} w={['fit-content', '', '', '30rem']} minH={'fit-content'} height={['8rem', '', '', '12rem']} gap={['0', '', '', '2rem']} >
                    <HStack gap={'2rem'} w={'100%'} height={'50%'}>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading fontSize={['1.1rem', '', '', '1.7rem']}>Platorm</Heading>
                            <Text>{platform}</Text>
                        </VStack>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading fontSize={['1.1rem', '', '', '1.7rem']}>Developer</Heading>
                            <Text>{developer}</Text>
                        </VStack>
                    </HStack>

                    <HStack gap={'2rem'} w={'100%'} height={'50%'}>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading fontSize={['1.1rem', '', '', '1.7rem']}>Version</Heading>
                            <Text>{version}</Text>
                        </VStack>
                        <VStack alignItems={'flex-start'} w={'50%'} height={'100%'}>
                            <Heading fontSize={['1.1rem', '', '', '1.7rem']}>Multiplayer</Heading>
                            <Text>{multiplayer}</Text>
                        </VStack>
                    </HStack>
                </VStack>


                <HStack flexDir={['column', '', '', 'row']} padding={['2rem .5rem', '', '', '1rem 2rem']} gap={'2rem'}>
                    {MiniReq && MiniReq.length > 0 && (
                        <HStack w={'100%'} >
                            <VStack alignItems={'flex-start'} >
                                <Heading color={'#8C52FF'} fontSize={['1.1rem', '', '', '1.7rem']}>MINIMUM REQUIREMENTS</Heading>
                                {MiniReq.map((i, index) => (
                                    <li key={index} fontWeight={'bold'}>{i}</li>
                                ))}
                            </VStack>
                        </HStack>
                    )}

                    {RecReq && RecReq.length > 0 && (
                        <HStack w={'100%'} >
                            <VStack alignItems={'flex-start'} >
                                <Heading color={'#8C52FF'} fontSize={['1.1rem', '', '', '1.7rem']}>RECOMMENDED REQUIREMENTS</Heading>
                                {RecReq.map((i, index) => (
                                    <li key={index} fontWeight={'bold'}>{i}</li>
                                ))}
                            </VStack>
                        </HStack>
                    )}
                </HStack>

            </Box>

            <Box padding={['2rem .5rem', '', '', '1rem 2rem']} w={['100%', '50%']} >

                <Heading fontSize={['1.3rem', '', '', '1.5rem']} color={'#8C52FF'}>DESCRIPTION :</Heading>
                {desc && desc.length > 0 && (
                    desc.map((i, index) => (
                        <Box key={index}>
                            <Text fontSize={['1rem', '', '', '1.1rem']}>{i}</Text>
                            <br></br>
                        </Box>
                    ))
                )}
            </Box>


            <HStack flexDir={['column', '', '', 'row']} alignItems={'center'} gap={'2rem'} p={'2rem'}>
                <VStack w={['', '', '', '50%']}>
                    <Heading fontSize={['1.3rem', '', '', '2rem']} color={'#8C52FF'}>SCREENSHOTS</Heading>
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

                <VStack w={'100%'} gap={['1rem', '5rem']} >
                    <Heading color={'#8C52FF'} fontSize={['1.3rem', '', '', '2rem']}>DOWNLOAD LINKS</Heading>
                    <VStack gap={'2rem'}>
                        <Link to={
                            LoginStatus ? gdrive : alert('login first')
                        }>
                            <Button style={downloadLinks} bgColor={'#E8E8E8'} _hover={{ bgColor: "rgb(210,210,210)" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <FaGoogleDrive fontSize={'1.2rem'} />
                                    Gdrive
                                </Flex>
                            </Button>
                        </Link>

                        <Link to={LoginStatus ? torrent: console.log('login first')}>
                            <Button style={downloadLinks} bgColor={'#59BA41'} color={'white'} _hover={{ bgColor: "#1AA91C" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <SiUtorrent fontSize={'1.2rem'} />
                                    Torrent
                                </Flex>
                            </Button>
                        </Link>

                        <Link to={LoginStatus ? mega: console.log('login first')}>
                            <Button style={downloadLinks} bgColor={'rgb(255,68,0)'} color={'white'} _hover={{ bgColor: "#D93A00" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <IoMdCloudDownload fontSize={'1.3rem'} />
                                    Mega
                                </Flex>
                            </Button>
                        </Link>

                        <Link to={LoginStatus ? torrent: console.log('login first')}>
                            <Button style={downloadLinks} bgColor={"rgb(100,100,100)"} color={'white'} _hover={{ bgColor: "rgb(81,81,81)" }}>
                                <Flex align={'center'} gap={'.7rem'}>
                                    <FaDownload fontSize={'1rem'} />
                                    Directly
                                </Flex>
                            </Button>
                        </Link>
                    </VStack>
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