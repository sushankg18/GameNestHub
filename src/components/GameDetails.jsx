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
import Screenshots from "../AboutGameDetails/Screenshots";
const GameDetails = () => {
  const [game, setGame] = useState([]);
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [gameSeries, setGameSeries] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [developTeam, setDevelopTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
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
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchGameData();
  }, [id]);

  const handleReadMoreClick = () => {
    setShowFullDescription(true);
  };
  const handleReadLess = () => {
    setShowFullDescription(false);
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
            <Box w={"100%"} height={"fit-content"}>
              <Heading pb={"2rem"} color={"#8C52FF"} fontSize={"xxx-large"}>
                {item.name}
              </Heading>
              <HStack h={"100%"} height={"20rem"}>
                <VStack
                  w={"15%"}
                  overflowY={"auto"}
                  sx={scrollbarStyles}
                  gap={"1rem"}
                  px={".3rem"}
                  h={"100%"}
                >
                  {gameScreenshots.map((i, idx) => (
                    <Box w={"100%"}>
                      <Image
                        w={"100%"}
                        cursor={"pointer"}
                        objectFit={"contain"}
                        src={i.image}
                      />
                    </Box>
                  ))}
                </VStack>
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
                  <Text>Release Date : {item.release} </Text>
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
            <Flex minH={"15rem"}>
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
              <Text fontSize={"large"} color={"#9A67FF"} fontWeight={"bold"}>
                System requirements for pc
              </Text>
              <Requirements requirements={item.platforms[0].requirements} />
            </Stack>
          </Flex>
        ))
      )}
    </Box>
  );
};



const Requirements = ({ requirements }) => {
  const { minimum, recommended } = requirements || {};

  return (
    <Box>
      <Heading fontSize="x-large" mt={4}>
        Requirements:
      </Heading>
      {minimum && (
        <Box>
          <Heading fontSize="large" mt={2}>
            Minimum:
          </Heading>
          <Text whiteSpace="pre-line">{minimum}</Text>
        </Box>
      )}
      {recommended && (
        <Box>
          <Heading fontSize="large" mt={2}>
            Recommended:
          </Heading>
          <Text whiteSpace="pre-line">{recommended}</Text>
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

export default GameDetails;
