import { Box, Center, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import genreData from "./GenreSectionData";
import { Link } from "react-router-dom";
const GenreSection = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [genre, setGenre] = useState([]);
  const URL = "https://api.rawg.io/api/";
  const API_KEY = "b529d03181f044c39b0a7a0722e82612";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await axios.get(`${URL}genres?key=${API_KEY}`)
        setGenre(data.data.results)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [API_KEY]);
  return (
    <Box w={'80%'} >
      <Center>
        <Heading
          fontFamily={"Titillium Web"}
          fontSize={["1.7rem", "2.5rem"]}
          userSelect={"none"}
          p={["0rem", "1rem 4rem"]}
          _selection={selection}
        >
          <span style={{ color: "#9A67FF" }}> Explore by Genre </span>
        </Heading>
      </Center>
      <Center >
        <Box
          w={"88vw"}
          h={"fit-content"}
          p={"1rem 0"}
        >
          <Flex flexWrap={'wrap'} w={"fit-content"} gap={"1.5rem"}>
            {genre.map((i, index) => (
              <Link to={`/genre/${i.slug}`}>
                <Box
                  w={"17rem"}
                  position={"relative"}
                  h={"17rem"}
                  border={"1px solid #18181C"}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  cursor={"pointer"}
                >
                  <Box
                    position={"absolute"}
                    top={"0"}
                    w="100%"
                    zIndex={'-1'}
                    h="100%"
                    background={`radial-gradient(ellipse at center, rgba(0,0,0,.2) 0%, rgba(0,0,0,0.9) 100%), url(${i.image_background})`}
                    backgroundSize="cover"
                    transition={".2s all ease-in-out"}
                    backgroundPosition="center"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  />
                  <Flex
                    justifyContent={'center'}
                    width={'100%'}
                    color="#FFF"
                    bgColor={'rgb(198, 205, 235, 0.3)'}
                    fontWeight={"bold"}
                    fontSize={"1.7rem"}
                  >
                    {i.name}
                  </Flex>
                </Box>
              </Link>
            ))}
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default GenreSection;

const selection = {
  bgColor: "#9A67FF",
  color: "#fff",
};
