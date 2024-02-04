import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  HStack,
  Button,
  Box,
  Heading,
  VStack,
  Image,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";
import shuffle from "lodash/shuffle";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Sidebar from "./Sidebar";
import SmallLoader from '../components/SmallLoader'
import { FaPlaystation } from "react-icons/fa";
import { FaXbox, FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";

const Home = () => {
  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [smLoader, setSMLoader] = useState(false)
  const [error, setError] = useState(false);
  const [clickedItems, setClickedItems] = useState([]);
  const [randomImage, setRandomImage] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${URL}games?page_size=9&page=${page}&key=${API_KEY}`
        );
        document.title = "Game Nest Hub"
        const games = response.data.results;
        if (page === 1) {
          setData(games);

        } else {
          setData((prev) => [...prev, ...games]);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, API_KEY]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(`${URL}games?page_size=40&page=${page}&key=${API_KEY}`)
        const RandomGame = data.data.results
        const RandomData = RandomGame[Math.floor(Math.random() * RandomGame.length)];
        setRandomImage(RandomData.background_image)
      } catch (error) {
        console.log(error)
      }

    }
    fetchData();
  }, [])
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setSMLoader(true)
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (error) {
    return (
      <Error message={"Data went on vacation without leaving a note 😭. "} />
    );
  }

  return (
    <Box
      w={['100%', "80%"]}
      minH={['93vh', "90vh"]}
      color={"white"}
      fontFamily={"Titillium Web"}
      overflowX={"hidden"}
      position={'relative'}
    >
      <Box
        position={"fixed"}
        top={"0"}
        left={'0'}
        w="100%"
        h="100%"
        zIndex={"-1"}
        background={`radial-gradient(ellipse at center, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.9) 100%), url(${randomImage})`}
        backgroundSize="cover"
        transition={".2s all ease-in-out"}
        backgroundPosition="center"
        _hover={{
          transform: "scale(1.1)",
        }}
      />
      <Center>
        <Heading
          fontFamily={"Titillium Web"}
          fontSize={['1.7rem', "2.5rem"]}
          userSelect={"none"}
          p={['0rem', "1rem 4rem"]}
        >
          <span style={{ color: "#9A67FF" }}> POPULAR </span>
        </Heading>
      </Center>

      <Box
        display={"flex"}
        p={"1rem 0"}
        flexWrap={"wrap"}
        gap={"1.5rem"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        {loading ? (
          <Loader />
        ) : (
          data.map((item, index) => (
            <Box
              w={"20rem"}
              h={"22rem"}
              borderRadius={".5rem"}
              gap={".7rem"}
              minw={"fit-content"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"space-between"}
              color={"white"}
              bgColor={"rgb(30, 30, 30)"}
              overflow={"hidden"}
            >
              <Box h={"55%"} w={"100%"} overflow={"hidden"}>
                <Link key={index} to={`/games/${item.slug}`}>
                  <Image
                    w={"100%"}
                    height={"100%"}
                    objectFit={"fill"}
                    userSelect={"none"}
                    src={item.background_image}
                    transition={".1s all ease-in-out"}
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Link>
              </Box>
              <VStack
                alignItems={"flex-start"}
                w={"100%"}
                p={"0rem 1rem 1rem 1rem"}
                justifyContent={"space-between"}
              >
                <Link key={index} to={`/games/${item.slug}`}>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"1.3rem"}
                    color={"#9A67FF"}
                    noOfLines={"1"}
                  >
                    {item.name}
                  </Text>
                </Link>
                <VStack alignItems={"flex-start"} w={"100%"} gap={".1rem"}>
                  <Text _selection={selection}>
                    Released : {item.released}
                  </Text>
                  <Text _selection={selection}>
                    Genre : {item.genres[0].name}{" "}
                  </Text>
                </VStack>
                <HStack fontSize={'1rem'} color={'white'}>
                  {item.parent_platforms.map((i, index) => (
                    <React.Fragment key={index}>
                      {i.platform.id === 1 ? <FaWindows /> :
                        i.platform.id === 2 ? <FaPlaystation /> :
                          i.platform.id === 3 ? <FaXbox /> :
                            i.platform.id === 4 ? <MdOutlinePhoneIphone /> :
                              i.platform.id === 5 ? <FaApple /> :
                                i.platform.id === 8 && <GrAndroid />}
                    </React.Fragment>
                  ))}
                </HStack>
                <Text style={buttons} userSelect={"none"} fontSize={"1rem"}>
                  Add to Wishlist <MdOutlineFavoriteBorder />
                </Text>
              </VStack>
            </Box>
          ))
        )}
      </Box>
      {
        smLoader ? <SmallLoader /> : null
      }
    </Box>
  );
};

export default Home;

const selection = {
  bgColor: "#9A67FF",
  color: "#fff",
};
const buttons = {
  padding: ".2rem 1rem",
  fontWeight: "bold",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  gap: ".7rem",
  borderRadius: ".5rem",
  color: "#9A67FF",
  backgroundColor: "white",
};
