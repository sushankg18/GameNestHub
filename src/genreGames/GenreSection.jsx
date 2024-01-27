import { Box, Center, HStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import genreData from "./GenreSectionData";
const GenreSection = () => {
  return (
    <>
      <Heading
        fontSize={"1.5rem"}
        px={"6%"}
        fontFamily={"Titillium Web"}
        _selection={selection}
      >
        Explore by Genre
      </Heading>
      <Center>
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
            {genreData.map((i) => (
              <Box
                w={"17rem"}
                position={"relative"}
                h={"17rem"}
                border={"1px solid #18181C"}
                cursor={"pointer"}
                overflow={'hidden'}
              >
                <Box
                  position={"absolute"}
                  top={"0"}
                  w="100%"
                  h="100%"
                  background={`radial-gradient(ellipse at center, rgba(0,0,0,.2) 0%, rgba(0,0,0,0.9) 100%), url(${i.bgimg})`}
                  backgroundSize="cover"
                  transition={'.2s all ease-in-out'}
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
            ))}
          </HStack>
        </Box>
      </Center>
    </>
  );
};

export default GenreSection;

const selection = {
  bgColor: "#9A67FF",
  color: "#fff",
};
