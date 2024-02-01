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
import GenreSection from "../genreGames/GenreSection";

const Home = () => {
  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [clickedItems, setClickedItems] = useState([]);
  const changePage = (page) => {
    setPage(page);
  };

  const btns = new Array(15).fill(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${URL}games?page_size=39&page=${page}&key=${API_KEY}`
        );
        const games = response.data.results;
        const shuffledGames = shuffle(games);

        setData(shuffledGames);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, API_KEY]);
  const handleHeartClick = (index) => {
    const newClickedItems = [...clickedItems];
    newClickedItems[index] = !newClickedItems[index];
    setClickedItems(newClickedItems);
  };
  if (error) {
    return (
      <Error message={"Data went on vacation without leaving a note 😭. "} />
    );
  }

  return (
    <Box
      w={"80%"}
      bgColor={"#121212"}
      minH={"90vh"}
      color={"white"}
      fontFamily={"Titillium Web"}
      overflowX={"hidden"}
    >
      <Center py={"1.5rem"}>
        <Heading
          fontFamily={"Titillium Web"}
          fontSize={"2rem"}
          _selection={selection}
        >
          POPULAR AND TRENDING
        </Heading>
      </Center>

      <Box
        display={"flex"}
        p={"1.5rem 0"}
        flexWrap={"wrap"}
        gap={"1.5rem"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        {loading ? (
          <Loader />
        ) : (
          data.map((item, index) => (
            <Link key={index} to={`/games/${item.slug}`}>
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
                  <Image
                    w={"100%"}
                    height={"100%"}
                    objectFit={"fill"}
                    userSelect={"none"}
                    src={item.background_image}
                    transition={".1s all ease-in-out"}
                    _hover={{ transform: "scale(1.1)" }}
                  />
                </Box>
                <VStack
                  alignItems={"flex-start"}
                  w={"100%"}
                  p={"0rem 1rem 1rem 1rem"}
                  justifyContent={"space-between"}
                >
                  <Text
                    fontWeight={"bold"}
                    fontSize={"1.3rem"}
                    color={"#9A67FF"}
                    noOfLines={"1"}
                  >
                    {item.name}
                  </Text>
                  <VStack alignItems={"flex-start"} w={"100%"} gap={".1rem"}>
                    <Text _selection={selection}>
                      Released : {item.released}
                    </Text>
                    <Text _selection={selection}>
                      Genre : {item.genres[0].name}{" "}
                    </Text>
                  </VStack>

                  <Text style={buttons} userSelect={"none"} fontSize={"1rem"}>
                    Add to Wishlist <MdOutlineFavoriteBorder />
                  </Text>
                </VStack>
              </Box>
            </Link>
          ))
        )}
      </Box>
      <GenreSection />

      <HStack
        overflowX={"auto"}
        justifyContent={"center"}
        w={"full"}
        p={"1rem"}
      >
        <Button leftIcon={<FaArrowLeftLong />}>Prev</Button>
        <Button rightIcon={<FaArrowRightLong />}>Next</Button>
      </HStack>
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
