import React from "react";
import {Box, Image, Text} from '@chakra-ui/react'
const GameSeries = ({bgIMG, name}) => {
  return (
    <>
      <Box>
        <Image src={bgIMG} w={"20rem"} />
        <Text>{name}</Text>
      </Box>
    </>
  );
};

export default GameSeries;
