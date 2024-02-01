import { Box, Center, HStack, Heading, Text } from "@chakra-ui/react";
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
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [API_KEY]);
  return (
    <Box w={'100%'} >
      <Heading
        fontSize={"1.5rem"}
        px={"6%"}
        fontFamily={"Titillium Web"}
        _selection={selection}
      >
        Explore by Genre
      </Heading>
      <Center px={'3rem'}>
        <Box
          w={"88vw"}
          h={"fit-content"}
          p={"1rem 0"}
          overflowX={"scroll"}
          scrollBehavior={"smooth"}
          sx={{
            "&::-webkit-scrollbar": {
              height: "10px",
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
          }}
        >
          <HStack w={"fit-content"} gap={"1.5rem"}>
            {genre.map((i , index) => (
              <Link to={`/genre/${i.slug}`}>
                <Box
                  w={"17rem"}
                  position={"relative"}
                  h={"17rem"}
                  border={"1px solid #18181C"}
                  cursor={"pointer"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    top={"0"}
                    w="100%"
                    h="100%"
                    background={`radial-gradient(ellipse at center, rgba(0,0,0,.2) 0%, rgba(0,0,0,0.9) 100%), url(${i.image_background})`}
                    backgroundSize="cover"
                    transition={".2s all ease-in-out"}
                    backgroundPosition="center"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                  />
                  <Text
                    zIndex={2}
                    color="white"
                    position="absolute"
                    top="2rem"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    fontWeight={"bold"}
                    fontSize={"1.6rem"}
                    userSelect={"none"}
                  >
                    {i.name}
                  </Text>
                </Box>
              </Link>
            ))}
          </HStack>
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
