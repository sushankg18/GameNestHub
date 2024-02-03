import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaPlaystation } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import Stores from "../AboutGameDetails/Stores";
import DeveloperTeam from "../AboutGameDetails/DeveloperTeam";
import GameSeries from "../AboutGameDetails/GameSeries";
const GameDetails = () => {
  const [game, setGame] = useState([]);
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [gameSeries, setGameSeries] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [developTeam, setDevelopTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [title, setTitle] = useState('')
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";

  useEffect(() => {
    const fetchGameData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${URL}games/${id}?key=${API_KEY}`);
        const screenshots = await axios.get(
          `${URL}games/${id}/screenshots?key=${API_KEY}`
        );
        const development_team = await axios.get(
          `${URL}games/${id}/development-team?key=${API_KEY}`
        );
        // https://api.rawg.io/api/games/{id}/movies
        const game_series = await axios.get(
          `${URL}games/${id}/game-series?key=${API_KEY}`
        );
        const platforms = await axios.get(
          `${URL}games/${id}/stores?key=${API_KEY}`
        );

        setLoading(false);
        setGame([res.data]);
        setGameScreenshots(screenshots.data.results);
        setDevelopTeam(development_team.data.results);
        setGameSeries(game_series.data.results);
        setPlatform(platforms.data.results);
        setTitle(res.data.name)
        document.title = title

      } catch (error) {

        setError(true);
        setLoading(false);
      }
    };

    fetchGameData();
  }, [id, title]);

  const handleReadMoreClick = () => {
    setShowFullDescription(true);
  };
  const handleReadLess = () => {
    setShowFullDescription(false);
  };


  const openModal = (imageUrl) => {
    setSelectedScreenshot(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedScreenshot(null);
    setIsModalOpen(false);
  };

  if (error) {
    return <Error message={"Error while fetching Game data 😭"} />;
  }

  return (
    <Box
      color={"white"}
      w={"80%"}
      minH={"90vh"}
      position={"relative"}
      p={"2rem 3rem"}
    >
      {loading ? (
        <Loader />
      ) : (
        game.map((item, index) => (
          <Flex flexDir={"column"} gap={"2rem"}>
            <Box
              position={"fixed"}
              top={"0"}
              left={"0"}
              zIndex={"-1"}
              w="100%"
              h="100%"
              background={`radial-gradient(ellipse at center, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.9) 100%), url(${item.background_image})`}
              backgroundSize="cover"
              backgroundPosition="center"
            />

            {/* MAIN */}



            {/* SCREENSHOTS AREA  */}
            <Box w={"100%"} height={"fit-content"}>
              <Heading pb={"2rem"} color={"#8C52FF"} fontSize={"xxx-large"}>
                {item.name}
              </Heading>
              <HStack h={"100%"} height={"20rem"}>
                <VStack w={"15%"} overflowY={"auto"} sx={scrollbarStyles} gap={"1rem"} px={".3rem"} h={"100%"}>
                  {gameScreenshots.map((i, idx) => (
                    <Box key={idx} w={"100%"} onClick={() => openModal(i.image)}>
                      <Image
                        w={"100%"}
                        cursor={"pointer"}
                        objectFit={"contain"}
                        src={i.image}
                        alt={`Screenshot ${idx + 1}`}
                      />
                    </Box>
                  ))}
                </VStack>

                {isModalOpen && (
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
                    alignItems="center"
                  >
                    <Image
                      src={selectedScreenshot}
                      width="80%"
                      height="80%"
                      objectFit="contain"
                      onClick={closeModal}
                      cursor="pointer"
                    />
                  </Box>
                )}

                {/* SCREENSHOTS AREA ENDS*/}

                <Box w={"50%"} h={"100%"}>
                  <Image
                    src={item.background_image}
                    w={"100%"}
                    h={"100%"}
                    objectFit={"fill"}
                  />
                </Box>
                <Box display={"flex"} flexDir={"column"} w={"35%"} h={"100%"}>
                  <Text fontSize={"x-large"} fontWeight={"bold"}>
                    {item.name}
                  </Text>
                  <Text>Release Date : {item.released} </Text>
                  <Text>Average Playtime : {item.playtime} Hours</Text>
                  <Text key={index}>
                    Genre: {item.genres.map((genre) => genre.name).join(", ")}
                  </Text>
                  <Text>
                    <Link to={item.website} target="_blank">
                      Official Website
                    </Link>
                  </Text>
                </Box>
              </HStack>
            </Box>
            {/* MAIN-END*/}

            {/* DESCRIPTION-AREA */}
            <Box w={"100%"}>
              <Heading fontSize={"x-large"} color={"#8C52FF"} pb={"1rem"}>
                ABOUT
              </Heading>
              <Text>
                {showFullDescription
                  ? item.description_raw
                  : `${item.description_raw.slice(0, 450)}...`}
                {!showFullDescription ? (
                  <Button
                    onClick={handleReadMoreClick}
                    color={"white"}
                    backgroundColor="#9A67FF"
                    size="xs"
                  >
                    Show More
                  </Button>
                ) : (
                  <Button
                    onClick={handleReadLess}
                    backgroundColor="#9A67FF"
                    color={"white"}
                    size="xs"
                  >
                    Show Less
                  </Button>
                )}
              </Text>
            </Box>
            {/* DESCRIPTION-AREA ENDED*/}

            {/* STORES-AREA and OTHER INFORMATION */}
            <Flex minH={"fit-content"}>
              <Box w={"60%"}>
                <Box w={"90%"}>
                  <Flex
                    w={"100%"}
                    height={"50%"}
                    justifyContent={"space-between"}
                    mb={"1rem"}
                  >
                    <Stack w={"45%"}>
                      <Text
                        fontSize={"large"}
                        color={"#9A67FF"}
                        fontWeight={"bold"}
                      >
                        Platforms
                      </Text>
                      <Flex flexWrap={"wrap"} gap={".2rem"}>
                        {item.platforms.map((i) => (
                          <Text textDecor={"underline"} cursor={"pointer"}>
                            {i.platform.name},
                          </Text>
                        ))}
                      </Flex>
                    </Stack>
                    <Stack w={"45%"}>
                      <Text
                        fontSize={"large"}
                        color={"#9A67FF"}
                        fontWeight={"bold"}
                      >
                        Metascore
                      </Text>
                      <Text
                        w={"fit-content"}
                        color={"green"}
                        fontWeight={"bold"}
                      >
                        {item.metacritic}
                      </Text>
                    </Stack>
                  </Flex>
                  <Flex
                    w={"100%"}
                    height={"50%"}
                    justifyContent={"space-between"}
                  >
                    <Stack w={"45%"}>
                      <Text
                        fontSize={"large"}
                        color={"#9A67FF"}
                        fontWeight={"bold"}
                      >
                        Developer
                      </Text>
                      {item.developers.map((i) => (
                        <Text>{i.name}</Text>
                      ))}
                    </Stack>
                    <Stack w={"45%"}>
                      <Text
                        fontSize={"large"}
                        color={"#9A67FF"}
                        fontWeight={"bold"}
                      >
                        Publisher
                      </Text>
                      {item.publishers.map((i) => (
                        <Text>{i.name}</Text>
                      ))}
                    </Stack>
                  </Flex>
                </Box>
              </Box>
              <Box w={"40%"}>
                <Center py={"1rem"}>
                  <Heading fontSize={"x-large"} color={"#8C52FF"}>
                    Where to buy ?
                  </Heading>
                </Center>
                <Box
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"space-evenly"}
                  gap={"1rem"}
                >
                  {platform.map((i, idx) => (
                    <Stores store_id={i.store_id} url={i.url} />
                  ))}
                </Box>
              </Box>
            </Flex>
            {/* STORES-AREA and OTHER INFORMATION ENDED */}
            <Stack w={"50%"} h={"fit-content"}>
              <Text fontSize={"large"} color={"#9A67FF"} fontWeight={"bold"}>
                Tags
              </Text>
              <Flex flexWrap={"wrap"} gap={".4rem"}>
                {item.tags.map((i) => (
                  <Text textDecor={"underline"} cursor={"pointer"}>
                    {i.name}
                  </Text>
                ))}
              </Flex>
            </Stack>

            <Stack w={'50%'}>

              <Requirements requirements={item.platforms[0].requirements} />

            </Stack>
            <Box>
              {developTeam.length > 0 && (
                <>
                  <Heading color={'#9A67FF'} fontSize={'x-large'}>{item.name} Created by:</Heading>
                  <HStack p={'1rem 0rem'} scrollBehavior={'smooth'} overflowX={'auto'} sx={scrollbarStylesHorizontal} >

                    {developTeam.map((i, idx) => (
                      <DeveloperTeam name={i.name} photo={i.image} bgIMG={i.image_background} />
                    ))}
                  </HStack>
                </>
              )
              }
            </Box>

            <Box>
              {gameSeries.length > 0 && (
                <>
                  <Heading color={'#9A67FF'} fontSize={'x-large'}>Game of the Series :</Heading>
                  <HStack p={'1rem 0rem'} scrollBehavior={'smooth'} overflowX={'auto'} sx={scrollbarStylesHorizontal}>
                    {gameSeries.map((i, idx) => (
                      <GameSeries bgIMG={i.background_image} name={i.name} slug={i.slug} idx={idx} />
                    ))}
                  </HStack>
                </>
              )}
            </Box>

          </Flex>
        ))
      )}
    </Box>
  );
};



const Requirements = ({ requirements }) => {
  const { minimum, recommended } = requirements || {};
  const [showFullRequirements, setShowFullRequirements] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullRequirements(true);
  };

  const handleReadLessClick = () => {
    setShowFullRequirements(false);
  };

  return (
    <Box>
      {(minimum || recommended) && (

        <Box>
          <Text fontSize={"x-large"} color={"#9A67FF"} fontWeight={"bold"}>
            System requirements for pc
          </Text>
          <Text fontSize="large" mt={2} fontWeight={'bold'}>
            Minimum:
          </Text>
          <Text whiteSpace="pre-line">
            {showFullRequirements ? minimum : `${minimum?.slice(0, 250)}...`}
          </Text>

          {recommended && (
            <div>
              <Text fontSize="large" mt={2} fontWeight={'bold'}>
                Recommended:
              </Text>
              <Text whiteSpace="pre-line">
                {showFullRequirements ? recommended : `${recommended?.slice(0, 250)}...`}
              </Text>
            </div>
          )}

          {(minimum || recommended) && (
            <Button onClick={showFullRequirements ? handleReadLessClick : handleReadMoreClick} color={"white"} backgroundColor="#9A67FF" size="xs">
              {showFullRequirements ? "Read Less" : "Read More"}
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};



const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    width: "1px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "transparent",
    borderRadius: "10px",
    cursor: "pointer",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::webkit-scrollbar-thumb:hover": {
    backgroundColor: "black",
  },
};

const scrollbarStylesHorizontal = {
  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#9A67FF",
    borderRadius: "10px",
    cursor: "pointer",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::webkit-scrollbar-thumb:hover": {
    backgroundColor: "black",
  },
};

export default GameDetails;
