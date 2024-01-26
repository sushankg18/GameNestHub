import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import genreData from "./GenreSectionData";
const GenreSection = () => {
  return (
    <Box
      w={"100vw"}
      h={"fit-content"}
      p={"1rem"}
      overflowX={"scroll"}
      sx={{
        "&::-webkit-scrollbar": {
          height: "8px",
          cursor: "pointer",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#9A67FF",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::webkit-scrollbar-thumb:hover" : {
            backgroundColor : "black"
        }
      }}
    >
      <HStack w={"fit-content"}>
        {genreData.map((i) => (
          <Box
            w={"20rem"}
            position={"relative"}
            h={"20rem"}
            border={"1px solid white"}
            bgImage={i.bgimg}
            bgSize={"cover"}
            bgPosition={"center"}
          >
            <Text>{i.name}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default GenreSection;
