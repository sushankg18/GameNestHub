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
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
const Action = () => {
  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [click, setClick] = useState([]);
  const changePage = (page) => {
    setPage(page);
  };
  const formatDate = (rawDate) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(rawDate).toLocaleDateString('en-US', options);
  };

  const btns = new Array(15).fill(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${URL}games?genres=${id}&page_size=40&key=${API_KEY}&page=${page}`
        );
        const games = response.data.results.map((i) => ({
          ...i,
          releasedFormatted: formatDate(i.released),
        }));

        setData(games);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, API_KEY]);

  if (error) {
    return (
      <Error message={"Data went on vacation without leaving a note 😭. "} />
    );
  }

  return (
    <Box
      bgColor={"#121212"}
      minH={"90vh"}
      color={"white"}
      fontFamily={"Titillium Web"}
      overflowX={"hidden"}
    >
      <Heading
        fontFamily={"Titillium Web"}
        fontSize={"2.5rem"}
        userSelect={"none"}
        p={"1.5rem 4rem"}
      >
        <span style={{ color: "#9A67FF" }}> {id.toUpperCase()}</span> GAMES
      </Heading>

      <Box
        display={"flex"}
        gap={"2rem"}
        flexWrap={"wrap"}
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
                    <Flex w={'100%'} justifyContent={'space-between'} borderBottom={'1px solid #000'}>
                      <Text
                        _selection={selection}
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        Release date : 
                      </Text>
                      <Text>{item.releasedFormatted}</Text>
                    </Flex>
                    {/* <Text _selection={selection}>
                      Genre : {item.genres[0].name}{" "}
                    </Text> */}
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

export default Action;

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
