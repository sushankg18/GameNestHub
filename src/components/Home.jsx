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
  Tooltip,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";
import shuffle from "lodash/shuffle";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import GenreSection from "../genreGames/GenreSection";

const Home = () => {
  const URL = "https://api.rawg.io/apis/";
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
        console.error("Error fetching data:", error);
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
  // if (error) {
  //   return <Error message={'Data went on vacation without leaving a note 😭. '} />;
  // }

  return (
    <Box
      bgColor={"#121212"}
      minH={"90vh"}
      color={"white"}
      fontFamily={"Titillium Web"}
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
        gap={"1rem"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {loading ? (
          <Loader />
        ) : (
          data.map((item, index) => (
            <Link key={index} to={`/games/${item.id}`}>
              <Box
                w={"28rem"}
                borderRadius={".5rem"}
                gap={".7rem"}
                h={"11rem"}
                minw={"fit-content"}
                display={"flex"}
                color={"white"}
                bgColor={"rgb(30, 30, 30)"}
                p={".4rem"}
              >
                <Box h={"100%"} w={"40%"}>
                  <Image
                    w={"100%"}
                    height={"100%"}
                    borderRadius={".5rem"}
                    objectFit={"cover"}
                    src={item.background_image}
                  />
                </Box>
                <VStack w={"60%"} justifyContent={"space-between"}>
                  <VStack alignItems={"flex-start"} w={"100%"} gap={".1rem"}>
                    <Text
                      fontWeight={"bold"}
                      fontSize={"1.2rem"}
                      color={"#9A67FF"}
                      noOfLines={"1"}
                    >
                      {item.name}
                    </Text>
                    <Text>Released : {item.released}</Text>
                    <Text>Genre : {item.genres[0].name} </Text>
                  </VStack>
                  <HStack gap={".3rem"} alignItems={"flex-start"} w={"100%"}>
                    <Text style={buttons}>
                      Buy <BiPurchaseTagAlt />{" "}
                    </Text>
                    <Text style={buttons}>
                      Favourite <FaRegHeart />
                    </Text>
                  </HStack>
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
        p={"2rem"}
      >
        {btns.map((_, index) => (
          <Button
            key={index}
            onClick={() => changePage(index + 1)}
            bgColor={"white"}
            color={"black"}
            border={"none"}
            cursor={"pointer"}
            borderRadius={".3rem"}
            fontWeight={"bold"}
            _hover={{
              bgColor: "#9A67FF",
              color: "#fff",
            }}
          >
            {index + 1}
          </Button>
        ))}
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
  padding: ".3rem 1rem",
  fontWeight: "bold",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  gap: ".6rem",
  borderRadius: ".5rem",
  color: "#9A67FF",
  backgroundColor: "white",
};

// for getting developerteam
// https://api.rawg.io/api/games/3498/development-team?key=b529d03181f044c39b0a7a0722e82612

// https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg

{
  /* <Text _selection={selection}>Released: {item.released}</Text>
<Text _selection={selection}>Genre : {item.genres[0].name} </Text> */
}
