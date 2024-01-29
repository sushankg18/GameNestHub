import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
const DeveloperTeam = ({ bgIMG, name, photo }) => {
  return (
    <>
      <Box
        w={"17rem"}
        position={"relative"}
        h={"17rem"}
        border={"1px solid #18181C"}
        cursor={"pointer"}
        overflow={"hidden"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
      >
        <Box
          position={"absolute"}
          top={"0"}
          w="100%"
          h="100%"
          zIndex={"-1"}
          background={`radial-gradient(ellipse at center, rgba(0,0,0,.2) 0%, rgba(0,0,0,0.9) 100%), url(${bgIMG})`}
          backgroundSize="cover"
          transition={".2s all ease-in-out"}
          backgroundPosition="center"
          _hover={{
            transform: "scale(1.1)",
          }}
        />
        <Box w={"7rem"} h={"7rem"} overflow={"hidden"}>
          {photo ? (
            <Image
              w={"100%"}
              h={"100%"}
              border={"none"}
              borderRadius={"100%"}
              objectFit={"cover"}
              src={photo}
            />
          )  : null}
        </Box>
        <Text
          zIndex={2}
          color="white"
          fontWeight={"bold"}
          fontSize={"1.6rem"}
          userSelect={"none"}
        >
          {name}
        </Text>
      </Box>
    </>
  );
};

export default DeveloperTeam;
